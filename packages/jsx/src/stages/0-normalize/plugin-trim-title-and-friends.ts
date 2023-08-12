import { Plugin } from "unified";
import { multiElmMatcher } from "../../utils/tools";
import { visit, XastRoot } from "../../utils/xast";

const needsTrimming = multiElmMatcher([
    "title",
    "subtitle",
    "author",
    "caption",
]);

/**
 * Unifiedjs plugin that removes leading and trailing whitespace from title/caption/etc. elements.
 */
export const trimTitleAndFriendsPlugin: Plugin<void[], XastRoot, XastRoot> =
    function () {
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
                { test: needsTrimming },
            );
        };
    };
