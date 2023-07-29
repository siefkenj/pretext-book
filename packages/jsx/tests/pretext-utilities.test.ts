import util from "util";
import { it, expect } from "vitest";
import { sanitizeText } from "../src/utils/pretext-text-utilities";
import { computeMargins } from "../src/utils/compute-margins";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

it("Can sanitize text", () => {
    expect(sanitizeText("hi -x")).toEqual("hi -x\n");
    expect(sanitizeText("  foo  \n  bar  \n  baz  \n")).toEqual(
        "foo\nbar\nbaz\n",
    );
    expect(sanitizeText("  foo  \n     bar  \n  baz  \n")).toEqual(
        "foo\n   bar\nbaz\n",
    );
    expect(sanitizeText("\n  \n  foo  \n     bar  \n  baz  \n   \n")).toEqual(
        "foo\n   bar\nbaz\n",
    );
});

it("Can compute margins", () => {
    expect(
        computeMargins({
            type: "element",
            name: "image",
            children: [],
            attributes: {},
        }),
    ).toEqual({
        marginLeft: 0,
        marginRight: 0,
        width: 100,
        wasAuto: true,
    });

    expect(
        computeMargins({
            type: "element",
            name: "image",
            children: [],
            attributes: { width: "80%" },
        }),
    ).toEqual({
        marginLeft: 10,
        marginRight: 10,
        width: 80,
        wasAuto: false,
    });

    expect(
        computeMargins({
            type: "element",
            name: "image",
            children: [],
            attributes: { margins: "10%" },
        }),
    ).toEqual({
        marginLeft: 10,
        marginRight: 10,
        width: 80,
        wasAuto: false,
    });

    expect(
        computeMargins({
            type: "element",
            name: "image",
            children: [],
            attributes: { margins: "10% 5%" },
        }),
    ).toEqual({
        marginLeft: 10,
        marginRight: 5,
        width: 85,
        wasAuto: false,
    });

    expect(
        computeMargins({
            type: "element",
            name: "image",
            children: [],
            attributes: { margins: "auto 5%", width: "10%" },
        }),
    ).toEqual({
        marginLeft: 85,
        marginRight: 5,
        width: 10,
        wasAuto: false,
    });

    expect(
        computeMargins({
            type: "element",
            name: "image",
            children: [],
            attributes: { margins: "10% auto", width: "10%" },
        }),
    ).toEqual({
        marginLeft: 10,
        marginRight: 80,
        width: 10,
        wasAuto: false,
    });

    expect(
        computeMargins({
            type: "element",
            name: "image",
            children: [],
            attributes: { width: "auto" },
        }),
    ).toEqual({
        marginLeft: 0,
        marginRight: 0,
        width: 100,
        wasAuto: true,
    });
});
