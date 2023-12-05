import React from "react";
import { PureFunctionComponent } from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const InsertPure: PureFunctionComponent = function ({ children }) {
    return <ins className="insert">{children}</ins>;
};

export const Insert = passThroughChildren(InsertPure);
