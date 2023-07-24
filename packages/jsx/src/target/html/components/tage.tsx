import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { toString } from "xast-util-to-string";

export const Tage: ReplacerComponent = function ({ node }) {
    return (
        <code className="code-inline tex2jax_ignore">
            {"<"}
            {toString(node)}
            {"/>"}
        </code>
    );
};
