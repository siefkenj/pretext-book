import React from "react";
import { passThroughChildren } from "./utils/pass-through-children";
import { PureFunctionComponent } from "../replacers/replacer-factory";

export const AcroPure: PureFunctionComponent = function ({ children }) {
    return <abbr className="acronym">{children}</abbr>;
};

export const Acro = passThroughChildren(AcroPure);
