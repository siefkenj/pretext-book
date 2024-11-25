import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { glob } from "glob";
import * as path from "node:path";
import * as fs from "node:fs";
import crypto from "node:crypto";
import { PtxCompiler } from "../../wasm/dist/ptx-compiler";
import { loadPyodide } from "pyodide";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import {
    extractFragmentFromHtml,
    fragmentToPretext,
    getTemplateName,
} from "@pretext-book/fragment";

import { Root as MdastRoot, Code as MdastCode } from "mdast";
// Importing this automatically imports all the types from `mdast-util-mdx-jsx`.
import "mdast-util-mdx-jsx";
import { trimLeadingWhitespace } from "./wrap-ptx-example";

const ARTICLE_TEMPLATE = `
<?xml version="1.0" encoding="UTF-8" ?>
<pretext>
    <article>
        <title></title>
        <FRAGMENT />
    </article>
</pretext>
`.trim();

/* @vite-ignore */
const examplesPath = new URL("../examples/fragments", import.meta.url).pathname;
const require = createRequire(import.meta.url);
// XXX This type isn't right
type MdxJsxFlowElement = MdastCode & {
    type: "mdxJsxFlowElement";
};

export class PyodideWorkerPool {
    compiler: PtxCompiler;
    taskQueue: Promise<void>[] = [];
    logs: string[] = [];
    _poolId = Math.random().toString(36).substring(7);
    constructor() {
        const pyodideDir = require.resolve("pyodide") + "/../";
        this.compiler = new PtxCompiler(
            loadPyodide({
                indexURL: pyodideDir,
                stdout: (msg) => console.log("FROM PYTHON STDOUT", msg),
                stderr: (msg) => this.logs.push(msg),
            }),
        );
    }
    async compileSource({
        source,
        publication,
    }: { source?: string; publication?: string } = {}) {
        // Make ourselves a promise that we can resolve when we're done.
        let resolve: (value: void) => void = () => {};
        const selfPromise: Promise<void> = new Promise((r) => {
            resolve = r;
        });
        const existingQueue = [...this.taskQueue];
        this.taskQueue.push(selfPromise);

        // Wait for all previous tasks to finish
        await Promise.all(existingQueue);

        // A this point, we should be the only task running.
        // Clear the log queue to make sure we only get log messages from the current task.
        this.logs = [];

        await this.compiler.init();
        this.compiler.setMainPtx(source);
        this.compiler.setPublicationPtx(publication);
        await this.compiler.compile();

        const logs = [...this.logs];
        const ret = this.compiler.getHtml();

        // Remove ourselves from the queue
        this.taskQueue.splice(this.taskQueue.indexOf(selfPromise), 1);
        // We're no longer busy
        resolve();

        return { html: ret, logs };
    }
}

/**
 * Creates a `compileFragment` plugin that uses a shared pool of workers to compile PreTeXt fragments.
 */
export function compileFragmentPluginFactory() {
    const workerPool = new PyodideWorkerPool();
    return function (): Plugin<
        [{ workerPool?: PyodideWorkerPool }],
        MdastRoot,
        MdastRoot
    > {
        // @ts-ignore
        return compileFragmentPlugin({ workerPool });
    };
}

/**
 * Compile a PreTeXt fragment using pyodide.
 */
export const compileFragmentPlugin: Plugin<
    [{ workerPool?: PyodideWorkerPool }],
    MdastRoot,
    MdastRoot
> = function ({ workerPool } = {}) {
    if (!workerPool) {
        workerPool = new PyodideWorkerPool();
    }
    return async (tree, file) => {
        file.data.extraSearchData = {};

        const toProcess: MdastCode[] = [];

        visit(tree, (node) => {
            // XXX: I don't know how to export this type to the outside world, but is the type we want to use.
            type MdxJsxFlowElement = typeof node & {
                type: "mdxJsxFlowElement";
            };
            if (node?.type !== "code") {
                return;
            }
            if (node.lang !== "ptx-example") {
                return;
            }
            toProcess.push(node);
        });

        for (const node of toProcess) {
            // Make sure to change `lang` away from `ptx-example` to avoid infinite recursion.
            const origNode = { ...node, lang: "ptx" };
            const rawCode = origNode.value;
            let renderedCode = "";
            let rawHtml = "";
            let rawPretext = "";
            let logs: NormalizedLogEntry[] = [];
            try {
                if (!workerPool) {
                    throw new Error("No worker pool available");
                }
                const {
                    html,
                    logs: _logs,
                    rawHtml: _rawHtml,
                    rawPretext: _rawPretext,
                } = await compileFragment({
                    workerPool,
                    fragmentSource: rawCode,
                });
                logs = _logs;
                renderedCode = html;
                rawHtml = _rawHtml;
                rawPretext = _rawPretext;
            } catch (e: any) {
                console.error(
                    "Failed to compile fragment in file",
                    file.path,
                    rawCode,
                    e,
                );
                logs.push({
                    level: "error",
                    message: e,
                });
            }
            // Display anything higher than info/debug.
            const printableLogs = logs.filter(
                (log) => log.level !== "info" && log.level !== "debug",
            );
            if (printableLogs.length > 0) {
                console.log("Messages from file", file.path);
                for (const log of printableLogs) {
                    console.error("PTX:", log.level, log.message);
                }
            }

            origNode.value = prepareFragment(rawCode);

            const extraDevData =
                process.env.NODE_ENV !== "development"
                    ? []
                    : [
                          {
                              type: "mdxJsxAttribute",
                              name: "devData",
                              value: JSON.stringify({
                                  fragment: rawCode,
                                  logs,
                                  rawHtml,
                                  rawPretext,
                              }),
                          },
                      ];

            const newNode: MdxJsxFlowElement = {
                type: "mdxJsxFlowElement",
                name: "PtxExample",
                attributes: [
                    {
                        type: "mdxJsxAttribute",
                        name: "code",
                        value: origNode.value,
                    },
                    {
                        type: "mdxJsxAttribute",
                        name: "rendered",
                        value: renderedCode,
                    },
                    ...extraDevData,
                ],
                children: [origNode],
            } as any;

            // Override the original node with the new one.
            Object.assign(node, newNode);
        }
    };
};

/**
 * Find a leading `<FRAGMENT ... >` and ending `</FRAGMENT>` tags and trim them from the source.
 * De-indent the resulting source.
 */
function prepareFragment(fragment: string) {
    fragment = fragment
        .replace(/^\s*<FRAGMENT[^>]*>/, "")
        .replace(/<\/FRAGMENT>\s*$/, "");
    return trimLeadingWhitespace(fragment).trim();
}

/**
 * Compile a PreTeXt fragment using pyodide.
 */
async function compileFragment({
    workerPool,
    fragmentSource,
}: {
    workerPool: PyodideWorkerPool;
    fragmentSource: string;
}) {
    // First we prepare the fragment into a full document.
    const source = fragmentToPretext(fragmentSource, {
        // No matter what, we are going to assume we have the correct template.
        // XXX: this is not the correct behavior. Fix it when we get other templates.
        [getTemplateName(fragmentSource)]: ARTICLE_TEMPLATE,
    });
    const { html, logs: _logs } = await workerPool.compileSource({ source });
    const logs = normalizePretextLogs(_logs);
    // We now want to extract exactly the relevant parts of the HTML.
    const extractedHtml = await extractFragmentFromHtml(html, {
        prettyPrint: true,
    });
    return { html: extractedHtml, logs, rawHtml: html, rawPretext: source };
}

//// Just for testing. Uncomment this and run with `npx vite-node`
//compileFragment({
//    workerPool: new PyodideWorkerPool(),
//    fragmentSource: `
//<FRAGMENT parents="p">
//    <abbr>Corp.</abbr> is an abbreviation, while <init>NSA</init> is an
//    initialism and <acro>LASIK</acro> is an acronym (which are both types
//    of abbreviations).
//</FRAGMENT>
//    `,
//});

type NormalizedLogEntry = {
    level: "unknown" | "debug" | "info" | "warn" | "error";
    message: string;
};
/**
 * PreTeXt logs are lists of strings prefixed by `PTX:INFO`, `PTX:DEBUG`, `PTX:ERROR`, etc. or a
 * line not indexed by `PTX:*`. In the latter case, the message belongs to the previous log.
 *
 * This function normalizes the logs into an easily filterable array.
 */
function normalizePretextLogs(logs: string[]): NormalizedLogEntry[] {
    const ret: NormalizedLogEntry[] = [];
    for (const msg of logs) {
        if (!msg.startsWith("PTX:") && ret[ret.length - 1]) {
            ret[ret.length - 1].message += msg;
            continue;
        }
        // Find everything of the form `PTX:* `
        const match = msg.match(/^PTX:(\w+) (.*)/);
        if (!match) {
            ret.push({ level: "unknown", message: msg });
            continue;
        }
        const [, level, message] = match;
        ret.push({
            level: level.toLowerCase() as any,
            message: message.trim(),
        });
    }
    return ret;
}
