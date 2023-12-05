import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { toString } from "xast-util-to-string";

export const ScaleDegPure: PureFunctionComponent<{ value: string }> =
    function ({ value }) {
        return (
            <span className="process-math">\(\hat{"{" + value + "}"} \)</span>
        );
    };

export const ScaleDeg: ReplacerComponent = function ({ node }) {
    const value = toString(node);
    return <ScaleDegPure value={value} />;
};
