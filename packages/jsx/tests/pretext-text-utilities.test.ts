import util from "util";
import { it, expect } from "vitest";
import { sanitizeText } from "../src/utils/pretext-text-utilities";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

it("Can sanitize text", () => {
    expect(sanitizeText("hi -x")).toEqual(
        "hi -x\n"
    );
    expect(sanitizeText("  foo  \n  bar  \n  baz  \n")).toEqual(
        "foo\nbar\nbaz\n"
    );
    expect(sanitizeText("  foo  \n     bar  \n  baz  \n")).toEqual(
        "foo\n   bar\nbaz\n"
    );
    expect(sanitizeText("\n  \n  foo  \n     bar  \n  baz  \n   \n")).toEqual(
        "foo\n   bar\nbaz\n"
    );
});
