import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent, ReplacerComponentWithId } from "../replacers/replacer-factory";

export const Init: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return (
        <abbr className="initialism">
            {state.processContent(node.children)}
        </abbr>
    );
};
