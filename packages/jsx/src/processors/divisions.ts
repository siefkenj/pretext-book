import { Element as XMLElement, Root } from "xast";
import { Plugin } from "unified";
import { visit } from "unist-util-visit";
import { elmMatcher } from "../utils/tools";

import Slugger from "github-slugger";
import { toString } from "xast-util-to-string";

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
 * Ensures every division has an `xml:id` attribute.
 */
export const addIdsToDivisionsPlugin: Plugin<void[], Root, Root> =
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
