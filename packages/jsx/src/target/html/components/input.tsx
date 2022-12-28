import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const Input: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return (
        <pre>
            {state.processContent(node.children)}
        </pre>
    );
};
