import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
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

export const Figure: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);

    const titleNode = node.children.find(isTitleNode);
    const captionNode = node.children.find(isCaptionNode);

    return (
        <figure className="figure figure-like" id={id}>
            {titleNode && <AnonymousTitle node={titleNode} />}
            {state.processContent(node.children.filter(isContent))}
            {captionNode && <Caption node={captionNode} />}
        </figure>
    );
};

