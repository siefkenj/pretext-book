import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const TermPure: PureFunctionComponent = function ({ children }) {
    return <dfn className="terminology">{children}</dfn>;
};

export const Term: ReplacerComponent = passThroughChildren(TermPure);
