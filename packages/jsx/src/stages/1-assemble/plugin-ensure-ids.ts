import { Plugin } from "unified";
import { toString } from "xast-util-to-string";
import { PretextRoot } from "../../assets/types";
import { PretextState } from "../../state";
import { elmMatcher, isElement } from "../../utils/tools";
import { visit, XastElement } from "../../utils/xast";

type PluginOptions = {
    state: PretextState;
};

// Division elements. They get ids auto-generated
const DIVISIONS = new Set([
    "book",
    "article",
    "part",
    "chapter",
    "section",
    "subsection",
    "subsubsection",
    "paragraphs",
    // These are special divisions; they can still be referenced.
    "frontmatter",
    "introduction",
    "conclusion",
    "headnote",
]);

// Elements that can be referenced. They get an id auto-generated
const REFABLE = new Set([
    "mrow",
    "author",
    "alert",
    "angles",
    "articletitle",
    "attribution",
    "biblio",
    "caption",
    "cell",
    "dblbrackets",
    "delete",
    "em",
    "entity",
    "fn",
    "foreign",
    "insert",
    "intertext",
    "line",
    "pubtitle",
    "q",
    "shortlicense",
    "sq",
    "stale",
    "subtitle",
    "term",
    "title",
    "p",
    "li",
]);

const isTitleNode = elmMatcher("title");
const isDivision = (node: any): node is XastElement => {
    return isElement(node) && DIVISIONS.has(node.name);
};
const isRefable = (node: any): node is XastElement => {
    return isElement(node) && REFABLE.has(node.name);
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

        return root;
    };
};
