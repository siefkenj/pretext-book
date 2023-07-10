import util from "util";
import { describe, it, expect } from "vitest";
import {
    jestToMatchFragment,
    normalizeFragmentHtml,
} from "../src";

/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

expect.extend(jestToMatchFragment);

describe("normalize HTML", () => {
    it("Can normalize HTML ids", async () => {
        let source: string;

        // Normalize ids
        source = `<li id="foo">bar</li>`;
        expect(normalizeFragmentHtml(source)).toEqual(`<li id="id-0">bar</li>`);

        source = `<li id="foo"><i id="baz">bar</i></li>`;
        expect(normalizeFragmentHtml(source)).toEqual(
            `<li id="id-0"><i id="id-1">bar</i></li>`
        );
    });
    it("Can alphabetize HTML attributes", async () => {
        let source: string;
        source = `<li id="foo" class="bees" wos="waz">bar</li>`;
        expect(normalizeFragmentHtml(source)).toEqual(
            `<li class="bees" id="id-0" wos="waz">bar</li>`
        );
    });
    it("Can alphabetize class names", async () => {
        let source: string;
        source = `<li class="bees alice zed">bar</li>`;
        expect(normalizeFragmentHtml(source)).toEqual(
            `<li class="alice bees zed">bar</li>`
        );
    });
    it("Fragment matcher works", () => {
        expect(`<li id="foo">bar</li>`).toMatchFragment(
            `<li id="id-0" >bar</li>`
        );
    });
});
