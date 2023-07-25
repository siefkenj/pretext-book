import { Plugin } from "unified";
import { Element } from "xast";
import { PretextRoot } from "../../assets/types";
import { elmMatcher, isElement, multiElmMatcher } from "../../utils/tools";
import { visit } from "../../utils/xast";
import { ASIDE_LIKE, FIGURE_LIKE } from "../helpers/entities";
import { isTitleNode } from "../helpers/special-tags";

type PluginOptions = void;

const isLi = elmMatcher("li");
const isBlockElement = multiElmMatcher([
    "p",
    "blockquote",
    "pre",
    "image",
    "video",
    "program",
    "console",
    "tabular",
    ...FIGURE_LIKE,
    ...ASIDE_LIKE,
    "sidebyside",
    "sbsgroup",
    "sage",
]);

/**
 * Ensure that every li element has p children.
 */
export const ensureLiHasPChildrenPlugin: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function () {
    return (root, file) => {
        visit(
            root,
            (node) => {
                // Titles should not be wrapped in a <p> tag. So we extract them before the wrapping.
                const titleIndex = node.children.findIndex((n) =>
                    isTitleNode(n)
                );
                let titleElement: Element | null = null;
                if (titleIndex >= 0) {
                    titleElement = node.children.splice(
                        titleIndex,
                        1
                    )[0] as Element;
                }

                // The children of an li element should be p elements. If they aren't, wrap them in one.
                // However, take care to avoid any blank text elements.
                const significantChildren = node.children.filter(
                    (n) => !(n.type === "text" && n.value.trim() === "")
                );
                const firstChild = significantChildren[0];
                if (significantChildren.length !== 1 || !isBlockElement(firstChild)) {
                    node.children = [
                        { type: "element", name: "p", children: node.children, attributes: {} },
                    ];
                }
                if (titleElement) {
                    node.children.unshift(titleElement);
                }
            },
            { test: isLi }
        );
    };
};
