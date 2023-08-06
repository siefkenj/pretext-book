import { Plugin } from "unified";
import { Element } from "xast";
import { PretextRoot } from "../../assets/types";
import {
    elmMatcher,
    findLast,
    isElement,
    multiElmMatcher,
} from "../../utils/tools";
import { visit, XastElement, XastText } from "../../utils/xast";
import { ASIDE_LIKE, FIGURE_LIKE } from "../helpers/entities";
import { isTitleNode } from "../helpers/special-tags";

type PluginOptions = void;

const isMath = multiElmMatcher(["m", "me", "men", "md", "mdn"]);
const isInlineMath = multiElmMatcher(["m", "me", "men"]);
const startsWithPunctuation = /^[.,;:!?]/;

function isText(node: any): node is XastText {
    return node != null && node.type === "text";
}

// XXX It looks like PreTeXt only replaces single quotes with curly ones. Verify this.
const hasQuote = /[']/;

/**
 * Ensure that straight quotes are replaced with curly quotes, outside of math mode.
 */
export const ensureCurlyQuotes: Plugin<
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
                if (node.value.match(hasQuote) && !info.parents.some(isMath)) {
                    node.value = node.value.replace(/'/g, "’");
                }
            },
            { test: isText },
        );
    };
};
