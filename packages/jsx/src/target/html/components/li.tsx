import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
import { extractTitle } from "../../../utils/tools";

export const Li: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);

    const split = extractTitle(node.children);
    let title: React.ReactElement | null = null;
    if (split.title) {
        title = (
            <span className="heading">
                <span className="title">
                    {state.processContent(split.title.children)}
                </span>
            </span>
        );
    }

    return (
        <li id={id}>
            {title}
            {state.processContent(split.rest)}
        </li>
    );
};
