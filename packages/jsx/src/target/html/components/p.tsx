import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";

export const P: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);

    return (
        <div id={id} className="para">
            {state.processContent(node.children)}
        </div>
    );
};
