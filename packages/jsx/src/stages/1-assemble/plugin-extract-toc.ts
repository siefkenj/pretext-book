import { Plugin } from "unified";
import { PretextRoot } from "../../assets/types";
import { PretextState } from "../../state";
import { TocItem } from "../../state/types";
import { elmMatcher, isElement, onlyElementsAndText } from "../../utils/tools";
import { visit, XastElement } from "../../utils/xast";

export type PluginOptions = {
    state: PretextState;
};

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

const isTitleNode = elmMatcher("title");
const isDivision = (node: any): node is XastElement => {
    return isElement(node) && DIVISIONS.has(node.name);
};

/**
 * Extract table of contents information from the tree. Nodes are left intact in the process.
 */
export const extractTocPlugin: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function (options) {
    const { state } = options;
    if (!state) {
        throw new Error(
            `Cannot use plugin without passing in a PretextState object`
        );
    }

    return (root, file) => {
        const toc = state.toc;
        const tocItemsById: Record<string, TocItem> = {};

        visit(
            root,
            (node, info) => {
                const attrs = node.attributes || {};
                if (!attrs["xml:id"]) {
                    console.warn(
                        "Trying to add TOC entry, but item has not been assigned an `xml:id`. Did you forget to decorate all items with an id first?"
                    );
                    return;
                }
                const id = attrs["xml:id"];

                // Look for the title and try to make a new slug.
                const titleNode = node.children.find((node) =>
                    isTitleNode(node)
                );
                const title = isElement(titleNode)
                    ? onlyElementsAndText(titleNode.children)
                    : [];

                const newTocItem: TocItem = {
                    id,
                    title,
                    division: node.name,
                    children: [],
                };

                const parent = info.parents[0];
                if (
                    !isElement(parent) ||
                    !(parent.attributes && parent.attributes["xml:id"])
                ) {
                    // We're a root node with no immediate parent.
                    toc.push(newTocItem);
                } else {
                    const parentId = parent.attributes["xml:id"];
                    if (!tocItemsById[parentId]) {
                        throw new Error(
                            `Parent with id "${parentId}" not in the toc. Cannot insert child.`
                        );
                    }
                    tocItemsById[parentId].children.push(newTocItem);
                }
                tocItemsById[newTocItem.id] = newTocItem;
            },
            { test: isDivision }
        );
    };
};
