import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

const MARKER_TO_STYLE: Record<string, string> = {
    "0": "decimal",
    "1": "decimal",
    a: "lower-alpha",
    A: "upper-alpha",
    i: "lower-roman",
    I: "upper-roman",
};

export const Ol: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const itemInfo = state.getListItemInfo(node);
    let style: string | undefined = MARKER_TO_STYLE[itemInfo.marker];
    if (itemInfo.numParents >= 4) {
        // Pretext gives up on giving classes to deeply nested lists
        style = "";
    }

    return <ol className={style}>{state.processContent(node.children)}</ol>;
};
