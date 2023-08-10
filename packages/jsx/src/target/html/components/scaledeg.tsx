import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { toString } from "xast-util-to-string";

export const ScaleDeg: ReplacerComponent = function ({ node }) {
    const value = toString(node);
    return <span className="process-math">\(\hat{"{" + value + "}"} \)</span>;
};
