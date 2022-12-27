import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
import { toXml } from "xast-util-to-xml";

export const Title: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);
    const tocItemInfo = state.getTocItemInfo(node);

    return (
        <LeveledHeading id={id} level={tocItemInfo?.level ?? 1}>
            <span className="codenumber">
                {makeCodenumber(tocItemInfo?.numbering || [])}
            </span>{" "}
            <span className="title">{state.processContent(node.children)}</span>
        </LeveledHeading>
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

function LeveledHeading({
    id,
    level,
    children,
}: React.PropsWithChildren<{ id: string; level: number }>) {
    switch (level) {
        case 0:
            return (
                <h1 id={id} className="heading">
                    {children}
                </h1>
            );
        case 1:
            return (
                <h2 id={id} className="heading">
                    {children}
                </h2>
            );
        case 2:
            return (
                <h3 id={id} className="heading">
                    {children}
                </h3>
            );
        case 3:
            return (
                <h4 id={id} className="heading">
                    {children}
                </h4>
            );
        case 4:
            return (
                <h5 id={id} className="heading">
                    {children}
                </h5>
            );
        case 5:
        default:
            return (
                <h6 id={id} className="heading">
                    {children}
                </h6>
            );
    }
}
