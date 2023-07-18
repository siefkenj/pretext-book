import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const M: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return <span className="process-math">\({state.processContent(node.children)}\)</span>;
};
