import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
import { ElementTitle } from "../../../assets/generated-types";
import { toXml } from "xast-util-to-xml";
import { toString } from "xast-util-to-string";
import { LeveledHeading } from "./title";
import { elmMatcher, multiElmMatcher } from "../../../utils/tools";
import { isTitleNode } from "../../../stages/helpers/special-tags";

const isContent = multiElmMatcher(["program", "console"]);
const isCaption = elmMatcher("caption");

export const Listing: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);
    const tocItemInfo = state.getTocItemInfo(node);

    const titleElm = node.children.find(isTitleNode);
    const captionElm = node.children.find(isCaption);
    const content = node.children.find(isContent);

    return (
        <figure id={id} className="figure-like listing">
            {state.processContent(content || [])}
            {state.processContent(captionElm || [])}
        </figure>
    );
};
