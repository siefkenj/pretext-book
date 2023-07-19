import React from "react";
import { toString } from "xast-util-to-string";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { PretextStateContext } from "../state";

const SYMBOL_MAP: Record<string, React.ReactNode> = {
    ampersand: "&",
    less: "<",
    greater: ">",
    dollar: "$",
    percent: "%",
    openbrace: "{",
    closebrace: "}",
    hash: "#",
    backslash: "\\",
    tilde: "~",
    circumflex: "^",
    underscore: "_",
    left: "←",
    right: "→",
    up: "↑",
    down: "↓",
    shift: "⇧",
    solidus: "/",
    plus: "+",
    minus: "-",
    times: "×",
    "left-paren": "(",
    obelus: "÷",
    squared: "x^2",
    inverse: "x^-1",
    "right-paren": ")",
    enter: "⮠",
};

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
