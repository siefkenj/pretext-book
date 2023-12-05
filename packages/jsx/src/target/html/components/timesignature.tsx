import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";

export const TimeSignaturePure: PureFunctionComponent<{
    top: string;
    bottom: string;
}> = function ({ top, bottom }) {
    return (
        <span className="process-math">
            \(\begin{"{"}smallmatrix{"}"}
            {top}\\{bottom}\end{"{"}smallmatrix{"}"}\)
        </span>
    );
};

export const TimeSignature: ReplacerComponent = function ({ node }) {
    const top = node.attributes.top || "";
    const bottom = node.attributes.bottom || "";

    return <TimeSignaturePure top={top} bottom={bottom} />;
};
