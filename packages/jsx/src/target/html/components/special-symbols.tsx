import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

const SYMBOL_MAP: Record<string, string> = {
    copyright: "©",
    phonomark: "℗",
    copyleft: "🄯",
    registered: "®",
    trademark: "™",
    servicemark: "℠",
    ellipsis: "…",
    midpoint: "·",
    swungdash: "⁓",
    permille: "‰",
    pilcrow: "¶",
    "section-mark": "§",
    minus: "−",
    solidus: "⁄",
    obelus: "÷",
    plusminus: "±",
};

export const SpecialSymbol: ReplacerComponent = function ({ node }) {
    const symbolName = node.name;
    const symbol = SYMBOL_MAP[symbolName] || symbolName;
    if (symbolName === "times") {
        return <span className="times-sign">×</span>;
    }
    return symbol;
};
