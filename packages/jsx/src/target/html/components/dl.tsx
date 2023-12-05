import React from "react";
import { PretextStateContext } from "../state";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import classNames from "classnames";
import { elmMatcher } from "../../../utils/tools";
import { XastElement } from "../../../utils/xast";
import { isTitleNode } from "../../../stages/helpers/special-tags";

const isLi = elmMatcher("li");

export const DlPure: PureFunctionComponent<{ width?: string }> = function ({
    children,
    width,
}) {
    return (
        <dl
            className={classNames("description-list", {
                narrow: width === "narrow",
            })}
        >
            {children}
        </dl>
    );
};

export const Dl: ReplacerComponent = function ({ node }) {
    const liChildren = node.children.filter(isLi);
    const children = liChildren.map((node, i) => (
        <DlItem key={i} node={node} />
    ));

    return (
        <DlPure width={node.attributes?.width || undefined}>{children}</DlPure>
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
