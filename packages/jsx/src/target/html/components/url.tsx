import React from "react";
import { toString } from "xast-util-to-string";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { PretextStateContext } from "../state";

export const UrlPure: PureFunctionComponent<{
    href: string;
    visual: string;
    hasContent: boolean;
}> = function ({ href, visual, hasContent, children }) {
    if (hasContent) {
        <a className="external" href={href} target="_blank">
            {children}
        </a>;
    }
    return (
        <a className="external" href={href} target="_blank">
            <code className="code-inline tex2jax_ignore">{visual}</code>
        </a>
    );
};

export const Url: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    const href = node.attributes?.href || "#";
    const hasContent = Boolean(toString(node).trim());
    const visual = node.attributes?.visual || href;
    const children = hasContent ? state.processContent(node.children) : null;

    return (
        <UrlPure href={href} visual={visual} hasContent={hasContent}>
            {children}
        </UrlPure>
    );
};
