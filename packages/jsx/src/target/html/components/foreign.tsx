import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const Foreign: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return <i className="foreign">{state.processContent(node.children)}</i>;
};
