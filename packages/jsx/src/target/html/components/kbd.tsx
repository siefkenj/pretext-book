import React from "react";
import { toString } from "xast-util-to-string";
import { ReplacerComponent } from "../replacers/replacer-factory";

const SYMBOL_MAP: Record<string, React.ReactNode> = {
    ampersand: "&",
    less: "<",
    greater: ">",
    dollar: "$",
    percent: "%",
    openbrace: "{",
    closebrace: "}",
    hash: "#",
    backslash: "\\",
    tilde: "~",
    circumflex: "^",
    underscore: "_",
    left: "←",
    right: "→",
    up: "↑",
    down: "↓",
    shift: "⇧",
    solidus: "/",
    plus: "+",
    minus: "-",
    times: "×",
    "left-paren": "(",
    obelus: "÷",
    squared: "x^2",
    inverse: "x^-1",
    "right-paren": ")",
    enter: "⮠",
};

export const Kbd: ReplacerComponent = function ({ node }) {
    const symbolName = node.attributes?.name || "";
    const innerText = toString(node).trim();
    if (innerText) {
        return <kbd className="kbdkey">{innerText}</kbd>;
    }
    const symbol = SYMBOL_MAP[symbolName];
    if (!symbol) {
        return <kbd className="kbdkey">?{symbolName}?</kbd>;
    }
    return <kbd className="kbdkey">{symbol}</kbd>;
};
