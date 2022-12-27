import { Plugin } from "unified";
import { JsonGrammar } from "../../utils/relax-ng/types";
import { replaceNode, XastNode, XastRoot } from "../../utils/xast";

type PluginOptions = {
    schema: JsonGrammar;
    nodeToSchemaMap: Map<XastNode, string> | WeakMap<XastNode, string>;
};

/**
 * Remove any pure-whitespace text nodes that are are children of elements that don't allow text.
 * This plugin requires you to pass in `nodeToSchemaMap` which maps elements of the tree to schema items.
 */
export const removeUnneededTextPlugin: Plugin<
    PluginOptions[],
    XastRoot,
    XastRoot
> = function (options) {
    const { schema, nodeToSchemaMap } = options;
    return (root: XastRoot) => {
        replaceNode(root, (node, info) => {
            if (node.type !== "text") {
                return;
            }
            const parent = info.parents[0];
            if (!parent) {
                return;
            }
            const parentTypeName = nodeToSchemaMap.get(parent);
            const parentType = schema.refs[parentTypeName || ""];
            if (!parentType || parentType.type === "text") {
                return;
            }
            // Now we have a text node and we detected the parent's type in the schema.
            // We're in business!
            if (
                !parentType.textChildrenAllowed &&
                node.value.trim().length === 0
            ) {
                // Pure whitespace nodes get removed
                return null;
            }
        });
        return root;
    };
};
