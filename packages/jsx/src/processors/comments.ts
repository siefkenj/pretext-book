import { Plugin } from "unified";
import { convert } from "unist-util-is";
import { remove } from "unist-util-remove";
import { Root } from "xast";

export const removeCommentsPlugin: Plugin<void[], Root, Root> =
    () => (ast, file) => {
        // Remove frontmatter from the tree
        remove(ast, convert("comment"));
    };
