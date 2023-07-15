import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const Date: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return state.processContent(node.children);
};
