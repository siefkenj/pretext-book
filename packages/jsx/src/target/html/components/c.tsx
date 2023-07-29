import React from "react";
import { toString } from "xast-util-to-string";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const C: ReplacerComponent = function ({ node }) {
    return <code className="code-inline tex2jax_ignore">{toString(node)}</code>;
};
