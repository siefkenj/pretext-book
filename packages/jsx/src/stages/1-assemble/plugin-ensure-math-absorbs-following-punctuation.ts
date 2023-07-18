import { Plugin } from "unified";
import { Element } from "xast";
import { PretextRoot } from "../../assets/types";
import { elmMatcher, findLast, isElement, multiElmMatcher } from "../../utils/tools";
import { visit, XastElement } from "../../utils/xast";
import { ASIDE_LIKE, FIGURE_LIKE } from "../helpers/entities";
import { isTitleNode } from "../helpers/special-tags";

type PluginOptions = void;

const isMath = multiElmMatcher(["m", "me", "men", "md", "mdn"]);
const isInlineMath = multiElmMatcher(["m", "me", "men"]);
const startsWithPunctuation = /^[.,;:!?]/;

/**
 * Insert the text `text` at the end of the math node `node`.
 */
function insertAtEndOfMath(node: XastElement, text: string) {
    const lastChild = node.children[node.children.length - 1];
    if (lastChild.type === "text") {
        lastChild.value += text;
    } else {
        node.children.push({ type: "text", value: text });
    }
}

/**
 * Ensure that every li element has p children.
 */
export const ensureMathAbsorbsFollowingPunctuation: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function () {
    return (root, file) => {
        visit(
            root,
            (node, info) => {
                if (!info.containingArray || info.index == null) {
                    return;
                }
                // Test if the math node is *immediately* followed by punctuation.
                // I.e., there can be no whitespace between the math node and the punctuation.
                const nextNode = info.containingArray[info.index + 1];
                if (!nextNode || nextNode.type !== "text") {
                    return;
                }
                if (!startsWithPunctuation.test(nextNode.value)) {
                    return;
                }
                // We now eat the punctuation and add it to the math node.
                const punctuation = nextNode.value[0];
                nextNode.value = nextNode.value.slice(1);
                const formattedPunctuation = `\\text{${punctuation}}`;
                if (isInlineMath(node) as any) {
                    insertAtEndOfMath(node, formattedPunctuation);
                } else {
                    // We display math, so we get inserted into the last element child,
                    // instead of directly into the text.
                    const lastChild = findLast(node.children, isElement);
                    if (!lastChild) {
                        // XXX Do we need to handle this case?
                        return;
                    }
                    insertAtEndOfMath(lastChild, formattedPunctuation);
                }
            },
            { test: isMath }
        );
    };
};
