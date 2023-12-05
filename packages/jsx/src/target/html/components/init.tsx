import React from "react";
import { PureFunctionComponent } from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const InitPure: PureFunctionComponent = function ({ children }) {
    return <abbr className="initialism">{children}</abbr>;
};

export const Init = passThroughChildren(InitPure);
