import React from "react";
import {
    PureFunctionComponentWithId,
    ReplacerComponentWithId,
} from "../replacers/replacer-factory";
import { passThroughChildrenWithId } from "./utils/pass-through-children";

export const BlockquotePure: PureFunctionComponentWithId = function ({
    children,
    id,
}) {
    return (
        <blockquote id={id} className="blockquote">
            {children}
        </blockquote>
    );
};

export const Blockquote: ReplacerComponentWithId =
    passThroughChildrenWithId(BlockquotePure);
