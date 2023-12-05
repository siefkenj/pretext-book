import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { toString } from "xast-util-to-string";

export const CdPure: PureFunctionComponent<{ value: string }> = function ({
    value,
}) {
    return <pre className="code-display tex2jax_ignore">{value}</pre>;
};

export const Cd: ReplacerComponent = function ({ node }) {
    const value =
        node.children
            .filter((n) => n.type === "element" && n.name === "cline")
            .map((n) => toString(n))
            .join("\n") + "\n";

    return <CdPure value={value} />;
};
