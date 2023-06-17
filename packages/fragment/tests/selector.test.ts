import util from "util";
import { describe, it, expect } from "vitest";
import { toXml } from "xast-util-to-xml";
import { fromXml } from "xast-util-from-xml";
import { visit } from "../src/utils/xast/visit";
import { replaceNode } from "../src/utils/xast/replace-node";
import { XastNode } from "../src/utils/xast/types";
import { CssSelectorParser } from "../src";
import { Selector } from "../src/grammars/peggy-types";
import {
    selectorToXast,
    selectorToXastNode,
} from "../src/lib/selector-to-xast";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

describe("Selector functions", () => {
    it("can parse CSS selector", async () => {
        let source: string;

        source = `foo`;
        expect(() => {
            CssSelectorParser.parse(source);
        }).not.toThrow();

        source = `foo bar`;
        expect(() => {
            CssSelectorParser.parse(source);
        }).not.toThrow();

        source = `foo bar#baz[biz="bang"]`;
        expect(() => {
            CssSelectorParser.parse(source);
        }).not.toThrow();
    });
    it("can convert selector to xml", async () => {
        let selector: Selector | null;

        selector = CssSelectorParser.parse(`foo`);
        expect(toXml(selectorToXast(selector))).toEqual("<foo></foo>");

        selector = CssSelectorParser.parse(`foo bar`);
        expect(toXml(selectorToXast(selector))).toEqual(
            "<foo><bar></bar></foo>"
        );

        selector = CssSelectorParser.parse(`foo bar#baz[biz="bang"]`);
        expect(toXml(selectorToXast(selector))).toEqual(
            `<foo><bar xml:id="baz" biz="bang"></bar></foo>`
        );

        selector = CssSelectorParser.parse(`foo bar#baz[biz=bang]`);
        expect(toXml(selectorToXast(selector))).toEqual(
            `<foo><bar xml:id="baz" biz="bang"></bar></foo>`
        );

        selector = CssSelectorParser.parse(`foo bar.baz[biz=bang]`);
        expect(toXml(selectorToXast(selector))).toEqual(
            `<foo><bar class="baz" biz="bang"></bar></foo>`
        );

        selector = CssSelectorParser.parse(`foo bar.baz.biz`);
        expect(toXml(selectorToXast(selector))).toEqual(
            `<foo><bar class="baz biz"></bar></foo>`
        );

        // pseudo-selectors should do nothing.
        selector = CssSelectorParser.parse(`foo bar:baz`);
        expect(toXml(selectorToXast(selector))).toEqual(
            `<foo><bar></bar></foo>`
        );

        // can parse empty selector.
        selector = CssSelectorParser.parse("");
        expect(toXml(selectorToXast(selector))).toEqual(``);
    });
});
