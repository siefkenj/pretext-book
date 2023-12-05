import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponentPureWithNode,
} from "../replacers/replacer-factory";
import { toString } from "xast-util-to-string";

export const AttrPure: PureFunctionComponent<{ value: string }> = function ({
    value,
}) {
    return <code className="code-inline tex2jax_ignore">@{value}</code>;
};

export const Attr: ReplacerComponentPureWithNode = function ({ node }) {
    const value = toString(node);
    return <AttrPure value={value} />;
};
