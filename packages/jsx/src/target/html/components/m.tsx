import React from "react";
import { PureFunctionComponent } from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const MPure: PureFunctionComponent = function ({ children }) {
    return <span className="process-math">\({children}\)</span>;
};

export const M = passThroughChildren(MPure);
