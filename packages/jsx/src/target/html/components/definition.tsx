import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
import { isTitleNode } from "../../../stages/helpers/special-tags";
import { toString } from "xast-util-to-string";
import { LeveledHeading } from "./title";
import { elmMatcher } from "../../../utils/tools";

export const Definition: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);
    const blockInfo = state.getBlockInfo(node);

    // Extract the title element.
    let titleElement = node.children.find(isTitleNode);
    let statementElement = node.children.find(elmMatcher("statement"));
    if (!titleElement) {
        titleElement = { type: "element", name: "title", children: [] };
    }

    // If we have an empty title, we omit it. Otherwise, we show the title, but without a number.
    let title: React.ReactNode = null;
    if (toString(titleElement).trim().length > 0) {
        title = (
            <React.Fragment>
                {" "}
                {state.processContent(titleElement.children)}.
            </React.Fragment>
        );
    }
    const codenumberBase = makeCodenumber(
        blockInfo?.divisionInfo?.numbering || []
    );
    const codenumber =
        codenumberBase.length > 0
            ? `${codenumberBase}.${(blockInfo?.number || 0) + 1}`
            : (blockInfo?.number || 0) + 1 || "";

    return (
        <article id={id} className="definition definition-like">
            <LeveledHeading
                id={id}
                level={(blockInfo?.divisionInfo?.level || 1) + 1}
            >
                <span className="type">{blockInfo?.displayName}</span>{" "}
                <span className="codenumber">{codenumber}</span>
                <span className="period">.</span>
                {title}
            </LeveledHeading>
            {state.processContent(statementElement?.children || [])}
        </article>
    );
};

/**
 * Make a codenumber (e.g., `1.1.3`) out of a `numbering` array.
 */
function makeCodenumber(numbering: number[]) {
    // The first division is `book` or `article`. These don't get displayed in the codenumbers
    return numbering
        .slice(1)
        .map((n) => `${n + 1}`)
        .join(".");
}
