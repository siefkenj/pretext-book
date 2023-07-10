import util from "util";
import fs from "node:fs/promises";
import { glob } from "glob";
import path from "node:path";
import { describe, it } from "vitest";
import { toXml } from "xast-util-to-xml";
import { XastNode, XastRoot } from "../src/utils/xast/types";
import { Plugin, unified } from "unified";
import { pretextToHtml } from "../src/target/html";
import { extractFragmentFromHtml, fragmentToPretext, getTemplateName } from "@pretext-book/fragment";
/* eslint-env jest */

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
    for (const [file, fragmentPromise] of fragmentFiles.map((file) => [
        file,
        fs.readFile(file, { encoding: "utf-8" }),
    ])) {
        const fileName = path.basename(await file);
        if (!fileName.startsWith("ol")) {
            continue
        }
        const fragment = await fragmentPromise;
        it(`Can render ${fileName}`, () => {
            const templateName = getTemplateName(fragment);
            const expandedFragment = fragmentToPretext(fragment, {
                [templateName]: ARTICLE_TEMPLATE,
            });
            const processed = pretextToHtml(expandedFragment);
            const extracted = extractFragmentFromHtml(processed);
            console.log(extracted);
        });
    }
});
