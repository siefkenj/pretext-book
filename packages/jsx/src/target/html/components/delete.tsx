import React from "react";
import { PureFunctionComponent } from "../replacers/replacer-factory";
import { passThroughChildren } from "./utils/pass-through-children";

export const DeletePure: PureFunctionComponent = function ({ children }) {
    return <del className="delete">{children}</del>;
};

export const Delete = passThroughChildren(DeletePure);
