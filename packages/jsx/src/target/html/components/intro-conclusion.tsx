import React from "react";
import { PretextStateContext } from "../state";
import {
    PureFunctionComponentWithId,
    ReplacerComponentWithId,
} from "../replacers/replacer-factory";
import { ElementTitle } from "../../../assets/generated-types";
import { toXml } from "xast-util-to-xml";
import { toString } from "xast-util-to-string";
import { LeveledHeading } from "./title";

export const IntroOrConclusionPure: PureFunctionComponentWithId<{
    name: string;
    title: React.ReactNode;
}> = function ({ children, id, name, title }) {
    return (
        <section id={id} className={name}>
            {title}
            {children}
        </section>
    );
};

/**
 * Generates an html `<section>` tag for an `<introduction>` or `<conclusion>` element.
 */
export const IntroOrConclusion: ReplacerComponentWithId = function ({
    node,
    id,
}) {
    const state = React.useContext(PretextStateContext);
    const tocItemInfo = state.getTocItemInfo(node);
    let titleElement = node.children[0] as ElementTitle;
    const rest = node.children.slice(1);

    if (titleElement.name !== "title") {
        console.warn(
            `Expected first child of <${
                node.name
            }> to be a title element, but instead it was "${toXml({
                ...titleElement,
                children: [],
            })}"`,
        );
        titleElement = {
            type: "element",
            name: "title",
            children: [],
            attributes: {},
        };
    }

    // If we have an empty title, we omit it. Otherwise, we show the title, but without a number.
    let title: React.ReactNode = null;
    if (!["", "."].includes(toString(titleElement).trim())) {
        title = (
            <LeveledHeading id={id} level={tocItemInfo?.level || 1}>
                {state.processContent(titleElement.children)}
            </LeveledHeading>
        );
    }

    const children = state.processContent(rest);

    return (
        <IntroOrConclusionPure id={id} name={node.name} title={title}>
            {children}
        </IntroOrConclusionPure>
    );
};
