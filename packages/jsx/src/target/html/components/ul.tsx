import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent, ReplacerComponentWithId } from "../replacers/replacer-factory";

export const Ul: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    
    const marker = String(node.attributes?.marker || "disc");

    return (
        <ul className={marker}>
            {state.processContent(node.children)}
        </ul>
    );
};
