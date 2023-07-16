import { ReplacerFunc, XastNode, XastElement } from "../../../utils/xast";
import React from "react";
import { ReplacerComponent, ReplacerComponentWithId } from "./replacer-factory";

export type ComponentMapEntry = {
    component: ReplacerComponent;
    passId?: false;
};
export type ComponentMapEntryWithId = {
    component: ReplacerComponentWithId;
    passId: true;
};
export type NamesComponentMap = Record<
    string,
    ComponentMapEntry | ComponentMapEntryWithId
>;

function isComponentMapEntryWithId(
    entry: ComponentMapEntry | ComponentMapEntryWithId
): entry is ComponentMapEntryWithId {
    return typeof entry === "object" && entry && Boolean(entry.passId);
}

/**
 * Replace components based on supplied node names. This function efficiently
 * uses a hash to look up each component.
 */
export function multiReplacer(
    namesComponentMap: NamesComponentMap
): ReplacerFunc {
    return (node) => {
        const entry = namesComponentMap[node.name];
        if (!entry) {
            return;
        }
        if (isComponentMapEntryWithId(entry)) {
            const Component = entry.component;
            const id = node.attributes?.["xml:id"] || "";
            if (id === "") {
                console.warn(
                    `Expected element <${node.name}> to have a non-blank \`xml:id\`.`
                );
            }
            return <Component node={node} id={id} />;
        } else {
            const Component = entry.component;
            return <Component node={node} />;
        }
    };
}
