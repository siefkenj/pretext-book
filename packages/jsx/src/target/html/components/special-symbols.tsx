import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";

const SYMBOL_MAP: Record<string, React.ReactNode> = {
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
    ndash: "–",
    mdash: "—",
    nbsp: " ",
    degree: "°",
    prime: "′",
    dblprime: "″",
    times: <span className="times-sign">×</span>,
    rangle: "〉",
    langle: "〈",
    sharp: "♯",
    flat: "♭",
    doublesharp: "𝄪",
    doubleflat: "𝄫",
    natural: "♮",
    lq: "“",
    rq: "”",
    lsq: "‘",
    rsq: "’",
};

export const SpecialSymbol: ReplacerComponent = function ({ node }) {
    const symbolName = node.name;
    const symbol = SYMBOL_MAP[symbolName] || symbolName;
    return <React.Fragment>{symbol}</React.Fragment>;
};
