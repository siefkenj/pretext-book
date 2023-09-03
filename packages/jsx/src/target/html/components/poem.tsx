import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
import { elmMatcher } from "../../../utils/tools";
import { isTitleNode } from "../../../stages/helpers/special-tags";
import classNames from "classnames";
import { AnonymousTitle } from "./title";

const isAuthorNode = elmMatcher("author");
const isStanzaNode = elmMatcher("stanza");
const isLineNode = elmMatcher("line");

export const Poem: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);

    const halign = node.attributes.halign || "left";
    const titleNode = node.children.find(isTitleNode);
    const authorNode = node.children.find(isAuthorNode);
    const stanzaNodes = node.children.filter(isStanzaNode);

    const author = authorNode && (
        <div className={classNames("author", halign)}>
            {state.processContent(authorNode.children)}
        </div>
    );

    return (
        <article className="poem" id={id}>
            {titleNode && <AnonymousTitle node={titleNode} />}
            {stanzaNodes.map((n, i) => (
                <div key={i} className="stanza">
                    {n.children.filter(isLineNode).map((line, i) => (
                        <div key={i} className={classNames("line", halign)}>
                            {state.processContent(line.children)}
                        </div>
                    ))}
                </div>
            ))}
            {author}
        </article>
    );
};
