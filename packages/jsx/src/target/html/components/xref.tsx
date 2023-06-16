import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const XRef: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return (
        <span>
            REFERENCE:
            {state.processContent(node.children)}
        </span>
    );
};
