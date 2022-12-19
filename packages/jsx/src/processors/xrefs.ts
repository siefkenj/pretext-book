import { Element as XMLElement, Root } from "xast";
import { Plugin } from "unified";
import { visit, EXIT } from "unist-util-visit";
import { elmMatcher, onlyElementsAndText } from "./tools";
import { remove } from "unist-util-remove";

import Slugger from "github-slugger";
import { toString } from "xast-util-to-string";

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
const isElement = (node: any): node is XMLElement => {
    if (node == null || typeof node !== "object") {
        return false;
    }
    return node.type === "element";
};
const isDivision = (node: any): node is XMLElement => {
    return isElement(node) && REFABLE.has(node.name);
};

/**
 * Ensures every division has an `xml:id` attribute.
 */
export const addIdsToRefableElementsPlugin: Plugin<void[], Root, Root> =
    () => (ast, file) => {
        // We'll be creating new ids on the fly, so first get stock of all the existing ones.
        const existingIds: Set<string> = new Set();
        visit(ast, isElement, (node) => {
            const attrs = node.attributes;
            if (!attrs) {
                return;
            }
            if (attrs["xml:id"]) {
                existingIds.add(attrs["xml:id"]);
            }
        });

        // Slugger will make sure that every new slug that is generated is unique.
        // To keep it from trampling existing slugs, we add all the IDs we've found
        // so far. Newly generated slugs will be all lower case, but existing slugs may not be.
        const slugs = new Slugger();
        slugs.reset();
        existingIds.forEach((id) => slugs.slug(id, true));

        visit(ast, isDivision, (node) => {
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
            let newSlug: string;
            if (isElement(title)) {
                newSlug = slugs.slug(`${node.name} ${toString(title)}`);
            } else {
                newSlug = slugs.slug(node.name);
            }

            attrs["xml:id"] = newSlug;
            existingIds.add(newSlug);

            node.attributes = attrs;
        });
    };
