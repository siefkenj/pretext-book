import React from "react";
import { PureFunctionComponent } from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const ForeignPure: PureFunctionComponent = function ({ children }) {
    return <i className="foreign">{children}</i>;
};

export const Foreign = passThroughChildren(ForeignPure);
