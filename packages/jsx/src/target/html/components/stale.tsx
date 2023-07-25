import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const Stale: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return <s className="stale">{state.processContent(node.children)}</s>;
};
