import React from "react";
import { PureFunctionComponent } from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const InputPure: PureFunctionComponent = function ({ children }) {
    return <pre>{children}</pre>;
};

export const Input = passThroughChildren(InputPure);
