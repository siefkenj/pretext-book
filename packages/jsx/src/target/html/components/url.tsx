import React from "react";
import { toString } from "xast-util-to-string";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { PretextStateContext } from "../state";

export const Url: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    const href = node.attributes?.href || "#";
    const hasContent = Boolean(toString(node).trim());
    const visual = node.attributes?.visual || href;

    if (hasContent) {
        return (
            <a className="external" href={href} target="_blank">
                {state.processContent(node.children)}
            </a>
        );
    }
    return (
        <a className="external" href={href} target="_blank">
            <code className="code-inline tex2jax_ignore">{visual}</code>
        </a>
    );
};
