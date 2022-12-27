import { Plugin } from "unified";
import { replaceNode, XastNode, XastRoot } from "../../utils/xast";

/**
 * Unifiedjs plugin that merges any adjacent text nodes.
 */
export const mergeAdjacentTextPlugin: Plugin<void[], XastRoot, XastRoot> =
    function () {
        return (root: XastRoot) => {
            replaceNode(root, (node) => {
                if (!("children" in node)) {
                    return;
                }
                const children = node.children;
                let prevNode: XastNode | null = null;
                let needsMerging = false;
                for (const n of children) {
                    if (
                        prevNode &&
                        prevNode.type === "text" &&
                        n.type === "text"
                    ) {
                        needsMerging = true;
                        break;
                    }
                    prevNode = n;
                }
                if (!needsMerging) {
                    return;
                }

                // Collapse any adjacent nodes
                prevNode = null;
                const newChildren: XastRoot["children"] = [];
                for (const n of children) {
                    if (!prevNode) {
                        newChildren.push(n);
                        prevNode = n;
                        continue;
                    }
                    if (prevNode.type === "text" && n.type === "text") {
                        prevNode.value += n.value;
                        continue;
                    }
                    prevNode = n;
                }
                node.children = newChildren;
                return node;
            });
            return root;
        };
    };
