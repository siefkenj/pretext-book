import util from "util";
import { describe, it, expect } from "vitest";
import type { Fragment, XastRoot } from "../src/types";
import { parseFragment } from "../src/lib/parse-fragment";
import { fragmentToXast } from "../src/lib/fragment-to-pretext";
import { getTemplateName } from "../src/lib/get-template-name";
import { toXml } from "xast-util-to-xml";
import fs from "node:fs/promises";
import { extractFragmentFromHtml } from "../src/lib/extract-fragment-from-html";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

describe("Fragments", () => {
    it("can extract html output", async () => {
        let source: string;
        let parsed: Fragment;

        source = await fs.readFile(
            new URL("./rendered-fragments/p1.html", import.meta.url).pathname,
            { encoding: "utf-8" }
        );
        expect(extractFragmentFromHtml(source)).toEqual(
            '<h2 class="heading hide-type">\n' +
                '<span class="type">Chapter</span> <span class="codenumber"></span> <span class="title"></span>\n' +
                "</h2>\n" +
                '<div class="para" id="p-1">Some text.</div>'
        );
    });
});
