import util from "util";
import { describe, it, expect } from "vitest";
import type { Fragment, XastRoot } from "../src/types";
import { parseFragment } from "../src/lib/parse-fragment";
import { fragmentToXast } from "../src/lib/fragment-to-pretext";
import { getTemplateName } from "../src/lib/get-template-name";
import { toXml } from "xast-util-to-xml";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

describe("Fragments", () => {
    it("can parse a fragment", async () => {
        let source: string;
        let parsed: Fragment;

        source = `<fragment>a</fragment>`;
        parsed = parseFragment(source);
        expect(parsed).toContain({ selector: "", template: "article" });

        source = `<fragment></fragment>`;
        parsed = parseFragment(source);
        expect(parsed).toContain({ selector: "", template: "article" });

        source = `<fragment parents="foo bar">a</fragment>`;
        parsed = parseFragment(source);
        expect(parsed).toContain({ selector: "foo bar", template: "article" });

        source = `<fragment parents="foo bar" template="book">a</fragment>`;
        parsed = parseFragment(source);
        expect(parsed).toContain({ selector: "foo bar", template: "book" });
    });
    it("can insert a fragment into a template", async () => {
        let source: string;
        let parsed: XastRoot;
        let templates = { article: "<article><fragment /></article>" };

        source = `<fragment parents="foo bar"><baz><biz>sss</biz></baz></fragment>`;
        parsed = fragmentToXast(source, templates);
        expect(toXml(parsed)).toEqual(
            `<article xml:id="FRAGMENT_PARENT_ID__2"><foo xml:id="FRAGMENT_PARENT_ID__1"><bar xml:id="FRAGMENT_PARENT_ID__0"><baz><biz>sss</biz></baz></bar></foo></article>`
        );

        source = `<fragment parents="foo bar"><xxx /></fragment>`;
        parsed = fragmentToXast(source, templates);
        expect(toXml(parsed)).toEqual(
            `<article xml:id="FRAGMENT_PARENT_ID__2"><foo xml:id="FRAGMENT_PARENT_ID__1"><bar xml:id="FRAGMENT_PARENT_ID__0"><xxx></xxx></bar></foo></article>`
        );

        // Doesn't overwrite existing xml:ids
        source = `<fragment parents="foo#myid bar"><xxx /></fragment>`;
        parsed = fragmentToXast(source, templates);
        expect(toXml(parsed)).toEqual(
            `<article xml:id="FRAGMENT_PARENT_ID__2"><foo xml:id="myid"><bar xml:id="FRAGMENT_PARENT_ID__0"><xxx></xxx></bar></foo></article>`
        );
    });
    it("can extract template name from fragment", async () => {
        let source: string;
        source = `<fragment parents="foo bar"><baz><biz>sss</biz></baz></fragment>`;
        expect(getTemplateName(source)).toEqual("article");

        source = `<fragment parents="foo bar" template="raw"><baz><biz>sss</biz></baz></fragment>`;
        expect(getTemplateName(source)).toEqual("raw");
    });
});
