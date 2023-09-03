import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const Angles: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return <React.Fragment>〈{state.processContent(node.children)}〉</React.Fragment>;
};
