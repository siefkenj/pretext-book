import React from "react";
import { toString } from "xast-util-to-string";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";

export const CPure: PureFunctionComponent<{ value: string }> = function ({
    value,
}) {
    return <code className="code-inline tex2jax_ignore">{value}</code>;
};

export const C: ReplacerComponent = function ({ node }) {
    const value = toString(node);
    return <CPure value={value} />;
};
