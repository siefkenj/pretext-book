import util from "util";
import { it, expect } from "vitest";
import { normalizeMarker } from "../src/state/helpers/lists";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

it("Can compute the marker type of a list", () => {
    expect(normalizeMarker("disc", "ul")).toEqual("disc");
    expect(normalizeMarker("circle", "ul")).toEqual("circle");
    expect(normalizeMarker("square", "ul")).toEqual("square");
    expect(normalizeMarker("", "ul")).toEqual("");

    expect(normalizeMarker("1", "ol")).toEqual("1");
    expect(normalizeMarker("a", "ol")).toEqual("a");
    expect(normalizeMarker("i", "ol")).toEqual("i");
    expect(normalizeMarker("A", "ol")).toEqual("A");
    expect(normalizeMarker("I", "ol")).toEqual("I");
    expect(normalizeMarker("0", "ol")).toEqual("0");

    // Formatting gets stripped away
    expect(normalizeMarker("A)", "ol")).toEqual("A");
    expect(normalizeMarker("(i)", "ol")).toEqual("i");

    // Unrecognized marker in an old gets the default
    expect(normalizeMarker("foo", "ol")).toEqual("1");
});
