import React from "react";
import { passThroughChildren } from "./utils/pass-through-children";
import { PureFunctionComponent } from "../replacers/replacer-factory";

export const AbbrPure: PureFunctionComponent = function ({ children }) {
    return <abbr className="abbreviation">{children}</abbr>;
};

export const Abbr = passThroughChildren(AbbrPure);
