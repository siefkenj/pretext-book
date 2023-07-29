import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

/**
 * <stack> is a dummy element used for grouping in a <sidebyside>. Only its children are rendered.
 */
export const Stack: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return (
        <React.Fragment>{state.processContent(node.children)}</React.Fragment>
    );
};
