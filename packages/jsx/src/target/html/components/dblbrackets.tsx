import React from "react";
import { PureFunctionComponent } from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const DblBracketsPure: PureFunctionComponent = function ({ children }) {
    return <React.Fragment>⟦{children}⟧</React.Fragment>;
};

export const DblBrackets = passThroughChildren(DblBracketsPure);
