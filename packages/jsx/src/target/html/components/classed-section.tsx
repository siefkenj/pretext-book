import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";

/**
 * Generates an html `<section>` tag with class equal to `node`'s tag name.
 */
export const ClassedSection: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);

    return (
        <section id={id} className={node.name}>
            {state.processContent(node.children)}
        </section>
    );
};
