import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { toString } from "xast-util-to-string";

export const TagePure: PureFunctionComponent<{ value: string }> = function ({
    value,
}) {
    return (
        <code className="code-inline tex2jax_ignore">
            {"<"}
            {value}
            {"/>"}
        </code>
    );
};

export const Tage: ReplacerComponent = function ({ node }) {
    const value = toString(node);
    return <TagePure value={value} />;
};
