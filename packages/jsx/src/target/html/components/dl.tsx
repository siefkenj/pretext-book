import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import classNames from "classnames";
import { elmMatcher } from "../../../utils/tools";
import { XastElement } from "../../../utils/xast";
import { isTitleNode } from "../../../stages/helpers/special-tags";

const isLi = elmMatcher("li");

export const Dl: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    const liChildren = node.children.filter(isLi);

    return (
        <dl
            className={classNames("description-list", {
                narrow: node.attributes?.width === "narrow",
            })}
        >
            {liChildren.map((node, i) => (
                <DlItem key={i} node={node} />
            ))}
        </dl>
    );
};

function DlItem({ node }: { node: XastElement }) {
    const state = React.useContext(PretextStateContext);
    const title = node.children.find(isTitleNode);
    const titleId = title?.attributes?.["xml:id"] || undefined;
    const rest = node.children.filter((n) => !isTitleNode(n));

    return (
        <React.Fragment>
            <dt id={titleId}>
                {title && state.processContent(title.children)}
            </dt>
            <dd>{state.processContent(rest)}</dd>
        </React.Fragment>
    );
}

