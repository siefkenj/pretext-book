import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";

export const Blockquote: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);

    return (
        <blockquote id={id} className="blockquote">
            {state.processContent(node.children)}
        </blockquote>
    );
};
