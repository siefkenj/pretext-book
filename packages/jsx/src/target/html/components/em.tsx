import React from "react";
import { PureFunctionComponent } from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const EmPure: PureFunctionComponent = function ({ children }) {
    return <em className="emphasis">{children}</em>;
};

export const Em = passThroughChildren(EmPure);
