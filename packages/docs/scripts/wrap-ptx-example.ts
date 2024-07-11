import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { glob } from "glob";
import * as path from "node:path";
import * as fs from "node:fs";
import crypto from "node:crypto";

import { Root as MdastRoot } from "mdast";
// Importing this automatically imports all the types from `mdast-util-mdx-jsx`.
import "mdast-util-mdx-jsx";

/* @vite-ignore */
const examplesPath = new URL("../examples/fragments", import.meta.url).pathname;

/**
 * Wraps codeblocks of type `ptx-example` with a JSX element that renders the code and the output.
 */
export const wrapPtxExample: Plugin<void[], MdastRoot, MdastRoot> =
    function () {
        const existingExampleFiles = new Set(
            glob.sync(examplesPath + "/*").map((f) => path.basename(f)),
        );

        return (tree, file) => {
            file.data.extraSearchData = {};

            visit(tree, (node) => {
                type MdxJsxFlowElement = typeof node & {
                    type: "mdxJsxFlowElement";
                };
                if (node?.type !== "code") {
                    return;
                }
                if (node.lang !== "ptx-example") {
                    return;
                }

                // Make sure to change `lang` away from `ptx-example` to avoid infinite recursion.
                const origNode = { ...node, lang: "ptx" };
                const rawCode = origNode.value;

                // Generate a unique ID for this example.
                const exampleId = crypto
                    .createHash("md5")
                    .update(rawCode)
                    .digest("hex");
                const exampleFileName = exampleId + ".frag.ptx";
                const outFile = path.join(examplesPath, exampleFileName);
                if (!existingExampleFiles.has(exampleFileName)) {
                    fs.writeFileSync(outFile, rawCode, { encoding: "utf-8" });
                    console.warn(
                        "New example detected: ",
                        exampleFileName,
                        "examples will need to be recompiled",
                    );
                }
                const renderedExampleFileName = exampleId + ".frag.html";
                const renderedFile = path.join(
                    examplesPath,
                    "..",
                    "rendered",
                    renderedExampleFileName,
                );

                let renderedCode = "";
                if (!fs.existsSync(renderedFile)) {
                    console.warn(
                        "Could not find rendered file",
                        renderedExampleFileName,
                        "Compilation of examples may be required.",
                    );
                } else {
                    renderedCode = fs.readFileSync(renderedFile, {
                        encoding: "utf-8",
                    });
                }

                origNode.value = prepareFragment(rawCode);

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
                    ],
                    children: [origNode],
                };

                // Override the original node with the new one.
                Object.assign(node, newNode);
            });
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
 * Trim a uniform amount of leading whitespace from each line. Tabs count as `tabWidth` spaces.
 * This can be used do de-indent code blocks.
 */
export function trimLeadingWhitespace(
    text: string,
    options?: { tabWidth?: number; omitFirstLine?: boolean },
) {
    const { tabWidth = 4, omitFirstLine = false } = options ?? {};

    const lines = text.split("\n");
    // Find the number of whitespace characters at the start of each line, with `\t` counting as `tabWidth` spaces.
    const leadingWhitespace = lines.flatMap((line) =>
        // Blank lines count as having infinite amounts of whitespace, so they are skipped over.
        line.length === 0 ? [] : line.match(/^(\s*)/)?.[0] ?? "",
    );
    const whitespaceCount = leadingWhitespace.map((sp) =>
        sp.split("").reduce((acc, c) => acc + (c === "\t" ? tabWidth : 1), 0),
    );
    const minWhitespace = omitFirstLine
        ? Math.min(...whitespaceCount.slice(1))
        : Math.min(...whitespaceCount);

    return lines
        .map((line) => trimLine(line, minWhitespace, tabWidth))
        .join("\n");
}

/**
 * Trim up to `trimLen` characters from the start of `text`.
 */
function trimLine(text: string, trimLen: number, tabWidth: number) {
    let [_, ws, rest] = text.match(/^(\s*)(.*)/) ?? ["", "", ""];
    ws = ws.replace(/\t/g, " ".repeat(tabWidth));
    return ws.slice(trimLen) + rest;
}
