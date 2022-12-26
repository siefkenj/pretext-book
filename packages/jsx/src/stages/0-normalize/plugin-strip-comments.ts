import { Plugin } from "unified";
import { replaceNode, XastRoot } from "../../utils/xast";

/**
 * Unifiedjs plugin that removes all comment/doctype/instruction nodes from the source tree. Note: the resulting
 * tree may be incorrect because there might be adjacent text nodes after the comments have been removed.
 */
export const stripCommentsAndFriendsPlugin: Plugin<void[], XastRoot, XastRoot> =
    function () {
        return (root: XastRoot) => {
            replaceNode(root, (node) => {
                if (Array.isArray(node)) {
                    return;
                }
                if (
                    node.type === "comment" ||
                    node.type === "doctype" ||
                    node.type === "instruction"
                ) {
                    return null;
                }
            });
            return root;
        };
    };
