import React from "react";
import { toString } from "xast-util-to-string";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";

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

export const KbdPure: PureFunctionComponent<{
    symbol: string;
    innerText: string;
}> = function ({ symbol, innerText }) {
    if (innerText) {
        return <kbd className="kbdkey">{innerText}</kbd>;
    }
    const symbolNode = SYMBOL_MAP[symbol];
    if (!symbolNode) {
        return <kbd className="kbdkey">?{symbol}?</kbd>;
    }
    return <kbd className="kbdkey">{symbolNode}</kbd>;
};

export const Kbd: ReplacerComponent = function ({ node }) {
    const symbolName = node.attributes?.name || "";
    const innerText = toString(node).trim();

    return <KbdPure symbol={symbolName} innerText={innerText} />;
};
