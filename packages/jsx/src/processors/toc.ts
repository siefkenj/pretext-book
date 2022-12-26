import { Element as XMLElement, Root } from "xast";
import { Plugin } from "unified";
import { elmMatcher, onlyElementsAndText } from "../utils/tools";

import { Toc, TocItem } from "../types/extra";
import { xmlVisit } from "../workarounds/visitor";

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
const isElement = (node: any): node is XMLElement => {
    if (node == null || typeof node !== "object") {
        return false;
    }
    return node.type === "element";
};
const isDivision = (node: any): node is XMLElement => {
    return isElement(node) && DIVISIONS.has(node.name);
};

/**
 * Extract data needed for the table of contents. This function assumes every indexable element
 * already has a unique `xml:id` assigned to it.
 */
export const extractTocPlugin: Plugin<void[], Root, Root> =
    () => (ast, file) => {
        const toc: Toc = [];
        const tocItemsById: Record<string, TocItem> = {};

        xmlVisit(ast, isDivision, (node, index, parent) => {
            const attrs = node.attributes || {};
            if (!attrs["xml:id"]) {
                console.warn(
                    "Trying to add TOC entry, but item has not been assigned an `xml:id`. Did you forget to decorate all items with an id first?"
                );
                return;
            }
            const id = attrs["xml:id"];

            // Look for the title and try to make a new slug.
            const titleNode = node.children.find((node) => isTitleNode(node));
            const title = isElement(titleNode)
                ? onlyElementsAndText(titleNode.children)
                : [];

            const newTocItem: TocItem = {
                id,
                title,
                division: node.name,
                children: [],
            };

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
        });

        file.data.toc = toc;
    };
