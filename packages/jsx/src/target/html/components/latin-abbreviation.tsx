import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";

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

export const LatinAbbreviationPure: PureFunctionComponent<{ symbol: string }> =
    function ({ symbol }) {
        const symbolNode = SYMBOL_MAP[symbol] || symbol;
        return <React.Fragment>{symbolNode}</React.Fragment>;
    };

export const LatinAbbreviation: ReplacerComponent = function ({ node }) {
    const symbol = node.name;

    return <LatinAbbreviationPure symbol={symbol} />;
};
