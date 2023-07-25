import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const Delete: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return <del className="delete">{state.processContent(node.children)}</del>;
};
