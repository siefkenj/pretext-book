import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
import {
    elmMatcher,
    isElement,
    makeCodenumber,
    multiElmMatcher,
} from "../../../utils/tools";
import { isTitleNode } from "../../../stages/helpers/special-tags";
import { AnonymousTitle, LeveledHeading, Title } from "./title";
import { Caption } from "./caption";
import { toString } from "xast-util-to-string";

const isCreatorNode = elmMatcher("creator");
const isIdxNode = elmMatcher("idx");

export const Theorem: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);
    const blockInfo = state.getBlockInfo(node);

    let titleElement = node.children.find(isTitleNode);
    if (!titleElement) {
        titleElement = {
            type: "element",
            name: "title",
            children: [],
            attributes: {},
        };
    }
    const creatorNode = node.children.find(isCreatorNode);

    // If we have an empty title, we omit it. Otherwise, we show the title, but without a number.
    let title: React.ReactNode = null;
    if (toString(titleElement).trim().length > 0) {
        title = (
            <React.Fragment>
                {state.processContent(titleElement.children)}
            </React.Fragment>
        );
    }
    const codenumberBase = makeCodenumber(
        blockInfo?.divisionInfo?.numbering || [],
    );
    const codenumber =
        codenumberBase.length > 0
            ? `${codenumberBase}.${(blockInfo?.number || 0) + 1}`
            : (blockInfo?.number || 0) + 1 || "";

    return (
        <article className="theorem theorem-like" id={id}>
            <LeveledHeading level={(blockInfo?.divisionInfo?.level || 1) + 1}>
                <span className="type">{blockInfo?.displayName}</span>
                <span className="space"> </span>
                <span className="codenumber">{codenumber}</span>
                <span className="period">.</span>
                <span className="space"> </span>
                <span className="title">{title}</span>
            </LeveledHeading>
            {state.processContent(
                node.children.filter(
                    (n) =>
                        isElement(n) &&
                        !isTitleNode(n) &&
                        !isCreatorNode(n) &&
                        !isIdxNode(n),
                ),
            )}
            {creatorNode && <Caption node={creatorNode} />}
        </article>
    );
};
