import util from "util";
import fs from "node:fs/promises";
import { glob } from "glob";
import path from "node:path";
import { describe, it, expect } from "vitest";
import { toXml } from "xast-util-to-xml";
import { XastNode, XastRoot } from "../src/utils/xast/types";
import { Plugin, unified } from "unified";
import { pretextToHtml } from "../src/target/html";
import {
    extractFragmentFromHtml,
    fragmentToPretext,
    getTemplateName,
    jestToMatchFragment,
} from "@pretext-book/fragment";
import Prettier from "prettier/standalone";
import * as prettierPluginHtml from "prettier/parser-html";
/* eslint-env jest */

function printPrettier(source: string) {
    return Prettier.format(source, {
        parser: "html",
        plugins: [prettierPluginHtml],
    });
}

expect.extend(jestToMatchFragment);

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

const toXmlPlugin = function () {
    Object.assign(this, { Compiler: toXml });
} as Plugin<never[], XastRoot, string>;

const ARTICLE_TEMPLATE = `<?xml version="1.0" encoding="UTF-8" ?>
<pretext>
    <article>
        <FRAGMENT />
    </article>
</pretext>`;

describe("Basic fragment rendering", async () => {
    // Get all the fragment files
    const fragmentFiles = glob.sync(
        new URL("../../fragment/tests/fragments/*.xml", import.meta.url)
            .pathname
    );
    const pretextRenderedFragmentFiles = new Set(
        glob.sync(
            new URL(
                "../../fragment/tests/fragments/pretext-xsl-reference/*.html",
                import.meta.url
            ).pathname
        )
    );
    for (const [file, fragmentPromise] of fragmentFiles.map((file) => [
        file,
        fs.readFile(file, { encoding: "utf-8" }),
    ])) {
        const fileName = path.basename(await file);
        const fragment = await fragmentPromise;
        it(`Can render ${fileName}`, () => {
            const templateName = getTemplateName(fragment);
            const expandedFragment = fragmentToPretext(fragment, {
                [templateName]: ARTICLE_TEMPLATE,
            });
            const processed = pretextToHtml(expandedFragment);
            const extracted = extractFragmentFromHtml(processed);
            //console.log(extracted);
        });

        // Compare the fragment we render to the fragment that Pretext rendered
        const renderedFilePath = (await file).replace(
            fileName,
            "pretext-xsl-reference/" + fileName.replace(".xml", ".html")
        );
        if (pretextRenderedFragmentFiles.has(renderedFilePath)) {
            const pretextRenderedFragment = await fs.readFile(
                renderedFilePath,
                { encoding: "utf-8" }
            );
            it(`Render of fragment "${fileName}" matches PreTeXt reference`, async () => {
                const templateName = getTemplateName(fragment);
                const expandedFragment = fragmentToPretext(fragment, {
                    [templateName]: ARTICLE_TEMPLATE,
                });
                const processed = pretextToHtml(expandedFragment);
                const extracted = printPrettier(
                    extractFragmentFromHtml(processed)
                );
                expect(extracted).toMatchFragment(pretextRenderedFragment);
            });
        }
    }
});
