import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const Em: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return <em className="emphasis">{state.processContent(node.children)}</em>;
};
