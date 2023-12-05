import React from "react";
import { PretextStateContext } from "../state";
import {
    PureFunctionComponentWithId,
    ReplacerComponentWithId,
} from "../replacers/replacer-factory";

const ClassedSectionPure: PureFunctionComponentWithId<{ className: string }> =
    function ({ children, id, className }) {
        return (
            <section id={id} className={className}>
                {children}
            </section>
        );
    };

/**
 * Generates an html `<section>` tag with class equal to `node`'s tag name.
 */
export const ClassedSection: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);
    const className = node.name;
    const children = state.processContent(node.children);

    return (
        <ClassedSectionPure id={id} className={className}>
            {children}
        </ClassedSectionPure>
    );
};
