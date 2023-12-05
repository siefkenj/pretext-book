import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";

export const TexLogoPure: PureFunctionComponent<{ name: string }> = function ({
    name,
}) {
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

export const TexLogo: ReplacerComponent = function ({ node }) {
    const name = node.name;
    return <TexLogoPure name={name} />;
};
