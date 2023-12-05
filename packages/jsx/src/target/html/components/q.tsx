import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const QPure: PureFunctionComponent = function ({ children }) {
    return <React.Fragment>“{children}”</React.Fragment>;
};

export const Q: ReplacerComponent = passThroughChildren(QPure);
