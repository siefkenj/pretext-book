import { Plugin } from "unified";
import { toString } from "xast-util-to-string";
import { PretextRoot } from "../../assets/types";
import { PretextState } from "../../state";
import { isElement } from "../../utils/tools";
import { visit } from "../../utils/xast";
import { isDivision, isRefable, isTitleNode } from "../helpers/special-tags";

type PluginOptions = {
    state: PretextState;
};

/**
 * Ensure that every ref-able element has a unique id, including divisions like <section>, <subsection>, etc.
 */
export const ensureIdsPlugin: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function (options) {
    const { state } = options;
    return (root, file) => {
        // First find all existing ids
        visit(
            root,
            (node) => {
                if (node.attributes && node.attributes["xml:id"]) {
                    const isNotUnique = state.declareId(
                        node.attributes["xml:id"]
                    );
                    if (isNotUnique) {
                        file.message(
                            `xml:id="${node.attributes["xml:id"]}" has already been declared`,
                            node
                        );
                    }
                }
            },
            { test: isElement }
        );

        // Next we assign ids to all divisions. This comes before other refables because
        // these elements should get priority in their id assignments.
        visit(
            root,
            (node) => {
                const attrs = node.attributes || {};
                if (!node.attributes) {
                    node.attributes = {};
                }
                if (attrs["xml:id"]) {
                    // No need to do anything if there is already an ID specified
                    return;
                }

                // Look for the title and try to make a new slug.
                const title = node.children.find((node) => isTitleNode(node));
                let newSlug = isElement(title)
                    ? `${node.name} ${toString(title)}`
                    : node.name;
                newSlug = state.getUniqueId(newSlug);

                attrs["xml:id"] = newSlug;
                node.attributes = attrs;
            },
            { test: isDivision }
        );

        // Finally add ids to all other refable elements.
        visit(
            root,
            (node) => {
                const attrs = node.attributes || {};
                if (!node.attributes) {
                    node.attributes = {};
                }
                if (attrs["xml:id"]) {
                    // No need to do anything if there is already an ID specified
                    return;
                }

                // Look for the title and try to make a new slug.
                const title = node.children.find((node) => isTitleNode(node));
                let newSlug = isElement(title)
                    ? `${node.name} ${toString(title)}`
                    : node.name;
                newSlug = state.getUniqueId(newSlug);

                attrs["xml:id"] = newSlug;
                node.attributes = attrs;
            },
            { test: isRefable }
        );
    };
};
