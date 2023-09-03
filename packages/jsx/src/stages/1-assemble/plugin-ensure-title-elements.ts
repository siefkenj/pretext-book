import { Plugin } from "unified";
import { PretextRoot } from "../../assets/types";
import { visit } from "../../utils/xast";
import { isDivision, isTitleNode } from "../helpers/special-tags";

type PluginOptions = void;

/**
 * Ensure that every division has a title element that occurs as its first child. If there is no title element,
 * a blank one is inserted.
 */
export const ensureTitleElementsPlugin: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function () {
    return (root, file) => {
        visit(
            root,
            (node) => {
                const titleIndex = node.children.findIndex((n) =>
                    isTitleNode(n),
                );
                if (titleIndex === -1) {
                    // No title element. Insert a dummy one.
                    node.children.unshift({
                        type: "element",
                        name: "title",
                        children: [],
                        attributes: {},
                    });
                }
                if (titleIndex > 0) {
                    // The title element isn't the first child. Move it around so it is.
                    const titleElement = node.children.splice(titleIndex, 1)[0];
                    node.children.unshift(titleElement);
                }
            },
            { test: isDivision },
        );
    };
};
