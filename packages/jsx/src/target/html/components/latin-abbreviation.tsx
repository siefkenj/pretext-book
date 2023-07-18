import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";

const SYMBOL_MAP: Record<string, React.ReactNode> = {
    ad: "AD",
    am: "AM",
    bc: "BC",
    ca: "ca.",
    eg: "e.g.",
    etal: "et al.",
    etc: "etc.",
    ie: "i.e.",
    nb: "NB",
    pm: "PM",
    ps: "PS",
    vs: "vs.",
    viz: "viz.",
};

export const LatinAbbreviation: ReplacerComponent = function ({ node }) {
    const symbolName = node.name;
    const symbol = SYMBOL_MAP[symbolName] || symbolName;
    return <React.Fragment>{symbol}</React.Fragment>;
};
