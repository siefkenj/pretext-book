import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { extractTitle, makeCodenumber } from "../../../utils/tools";

export const Caption: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const captionInfo = state.getCaptionInfo(node);

    if (!captionInfo) {
        console.warn("No caption info found for node", node);
        return <figcaption>{state.processContent(node.children)}</figcaption>;
    }

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
        <figcaption>
            <span className="type">{captionInfo.displayName}</span>
            <span className="space"> </span>
            <span className="codenumber">
                {makeCodenumber([
                    ...captionInfo.divisionInfo.numbering,
                    captionInfo.number || 0,
                ])}
                <span className="period">.</span>
            </span>
            <span className="space"> </span>
            {title}
            {state.processContent(split.rest)}
        </figcaption>
    );
};
