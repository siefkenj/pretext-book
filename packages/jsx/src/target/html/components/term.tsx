import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent, ReplacerComponentWithId } from "../replacers/replacer-factory";

export const Term: ReplacerComponent = function ({ node}) {
    const state = React.useContext(PretextStateContext);

    return (
        <dfn  className="terminology">
            {state.processContent(node.children)}
        </dfn>
    );
};
