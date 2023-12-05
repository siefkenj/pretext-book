import React from "react";
import { PureFunctionComponent } from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const StalePure: PureFunctionComponent = function ({ children }) {
    return <s className="stale">{children}</s>;
};

export const Stale = passThroughChildren(StalePure);
