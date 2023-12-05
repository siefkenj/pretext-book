import React from "react";
import { PretextStateContext } from "../state";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";

const MARKER_TO_STYLE: Record<string, string> = {
    "0": "decimal",
    "1": "decimal",
    a: "lower-alpha",
    A: "upper-alpha",
    i: "lower-roman",
    I: "upper-roman",
};

export const OlPure: PureFunctionComponent<{
    marker: string;
    numParents: number;
}> = function ({ children, marker, numParents }) {
    let style: string | undefined = MARKER_TO_STYLE[marker];
    if (numParents >= 4) {
        // Pretext gives up on giving classes to deeply nested lists
        style = "";
    }

    return <ol className={style}>{children}</ol>;
};

export const Ol: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const itemInfo = state.getListItemInfo(node);
    const children = state.processContent(node.children);
    return (
        <OlPure marker={itemInfo.marker} numParents={itemInfo.numParents}>
            {children}
        </OlPure>
    );
};
