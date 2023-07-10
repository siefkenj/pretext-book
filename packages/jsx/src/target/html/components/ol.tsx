import React from "react";
import { PretextStateContext } from "../state";
import {
    ReplacerComponent,
    ReplacerComponentWithId,
} from "../replacers/replacer-factory";

export const Ol: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    let formatCode = node.attributes?.marker;
    let style: string | undefined = {
        "0": "decimal",
        "1": "decimal",
        a: "lower-alpha",
        A: "upper-alpha",
        i: "lower-roman",
        I: "upper-roman",
    }[formatCode || ""];

    return <ul className={style}>{state.processContent(node.children)}</ul>;
};
