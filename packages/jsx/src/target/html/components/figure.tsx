import React from "react";
import { PretextStateContext } from "../state";
import {
    PureFunctionComponentWithId,
    ReplacerComponentWithId,
} from "../replacers/replacer-factory";
import { elmMatcher, multiElmMatcher } from "../../../utils/tools";
import { isTitleNode } from "../../../stages/helpers/special-tags";
import { AnonymousTitle } from "./title";
import { Caption } from "./caption";

const isCaptionNode = elmMatcher("caption");
const isContent = multiElmMatcher([
    "image",
    "video",
    "sidebyside",
    "sbsgroup",
    "score",
]);

export const FigurePure: PureFunctionComponentWithId<{
    title: React.ReactNode;
    caption: React.ReactNode;
}> = function ({ id, title, caption, children }) {
    return (
        <figure className="figure figure-like" id={id}>
            {title}
            {children}
            {caption}
        </figure>
    );
};

export const Figure: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);

    const titleNode = node.children.find(isTitleNode);
    const captionNode = node.children.find(isCaptionNode);
    const children = state.processContent(node.children.filter(isContent));
    const title = titleNode ? <AnonymousTitle node={titleNode} /> : null;
    const caption = captionNode ? <Caption node={captionNode} /> : null;

    return (
        <FigurePure id={id} title={title} caption={caption}>
            {children}
        </FigurePure>
    );
};
