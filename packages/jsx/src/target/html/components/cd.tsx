import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { toString } from "xast-util-to-string";

export const Cd: ReplacerComponent = function ({ node }) {
    const text =
        node.children
            .filter((n) => n.type === "element" && n.name === "cline")
            .map((n) => toString(n))
            .join("\n") + "\n";

    return <pre className="code-display tex2jax_ignore">{text}</pre>;
};
