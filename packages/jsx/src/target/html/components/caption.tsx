import React from "react";
import { PretextStateContext } from "../state";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { extractTitle, makeCodenumber } from "../../../utils/tools";

export const CaptionPure: PureFunctionComponent<{
    title: React.ReactNode;
    caption: string;
    codenumber: string;
}> = function ({ children, title, caption, codenumber }) {
    // If the title is not null, it should be wrapped in some spans
    if (title) {
        title = (
            <span className="heading">
                <span className="title">{title}</span>
            </span>
        );
    }

    return (
        <figcaption>
            <span className="type">{caption}</span>
            <span className="space"> </span>
            <span className="codenumber">
                {codenumber}
                <span className="period">.</span>
            </span>
            <span className="space"> </span>
            {title}
            {children}
        </figcaption>
    );
};

export const Caption: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const captionInfo = state.getCaptionInfo(node);

    if (!captionInfo) {
        console.warn("No caption info found for node", node);
        return <figcaption>{state.processContent(node.children)}</figcaption>;
    }

    const split = extractTitle(node.children);

    const title = split.title
        ? state.processContent(split.title.children)
        : null;
    const caption = captionInfo.displayName;
    const codenumber = makeCodenumber([
        ...captionInfo.divisionInfo.numbering,
        captionInfo.number || 0,
    ]);
    const children = state.processContent(split.rest);

    return (
        <CaptionPure title={title} caption={caption} codenumber={codenumber}>
            {children}
        </CaptionPure>
    );
};
