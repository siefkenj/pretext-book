import { Plugin } from "unified";
import { visit, XastRoot } from "../../utils/xast";
import { isTitleNode } from "../helpers/special-tags";

/**
 * Unifiedjs plugin that removes leading and trailing whitespace from title elements.
 */
export const trimTitlePlugin: Plugin<void[], XastRoot, XastRoot> = function () {
    return (root: XastRoot) => {
        visit(
            root,
            (node) => {
                const startNode = node.children[0];
                const endNode = node.children[node.children.length - 1];
                if (startNode?.type === "text") {
                    startNode.value = startNode.value.trimStart();
                }
                if (endNode?.type === "text") {
                    endNode.value = endNode.value.trimEnd();
                }
            },
            { test: isTitleNode },
        );
    };
};
