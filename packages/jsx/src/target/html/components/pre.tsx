import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { isElement } from "../../../utils/tools";
import { sanitizeText } from "../../../utils/pretext-text-utilities";
import { toString } from "xast-util-to-string";

export const Pre: ReplacerComponent = function ({ node }) {
    // A <pre> can either have text inside or <cline> elements.

    const clines = node.children.filter(
        (n) => isElement(n) && n.name === "cline",
    );
    const hasClines = clines.length > 0;
    let text = clines.map((c) => toString(c)).join("\n");
    if (!hasClines) {
        text = sanitizeText(toString(node));
    }
    if (!text.endsWith("\n")) {
        text += "\n";
    }

    return <pre className="code-block tex2jax_ignore">{text}</pre>;
};
