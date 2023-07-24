import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const TexLogo: ReplacerComponent = function ({ node }) {
    const name = node.name;

    switch (name) {
        case "tex":
            return (
                <span className="latex-logo">
                    T<span className="E">e</span>X
                </span>
            );
    }

    return (
        <span className="latex-logo">
            L<span className="A">a</span>T<span className="E">e</span>X
        </span>
    );
};
