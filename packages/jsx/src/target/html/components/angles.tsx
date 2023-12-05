import React from "react";
import { passThroughChildren } from "./utils/pass-through-children";
import { PureFunctionComponent } from "../replacers/replacer-factory";

export const AnglesPure: PureFunctionComponent = function ({ children }) {
    return <React.Fragment>〈{children}〉</React.Fragment>;
};

export const Angles = passThroughChildren(AnglesPure);
