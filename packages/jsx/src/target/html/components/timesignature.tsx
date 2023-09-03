import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const TimeSignature: ReplacerComponent = function ({ node }) {
    const top = node.attributes.top || "";
    const bottom = node.attributes.bottom || "";

    return (
        <span className="process-math">
            \(\begin{"{"}smallmatrix{"}"}
            {top}\\{bottom}\end{"{"}smallmatrix{"}"}\)
        </span>
    );
};
