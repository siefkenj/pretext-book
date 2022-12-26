import { Plugin } from "unified";
import { replaceNode, XastRoot } from "../../utils/xast";

/**
 * Unifiedjs plugin that turns all `cdata` elements into text elements. Note: the resulting
 * tree may be incorrect because there might be adjacent text nodes after the comments have been removed.
 */
export const expandCdataPlugin: Plugin<void[], XastRoot, XastRoot> =
    function () {
        return (root: XastRoot) => {
            replaceNode(root, (node) => {
                if (Array.isArray(node)) {
                    return;
                }
                if (node.type === "cdata") {
                    return { type: "text", value: node.value };
                }
            });
            return root;
        };
    };
