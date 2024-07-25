import { visit } from "unist-util-visit";
import { Plugin } from "unified";

import { Root as MdastRoot } from "mdast";
// Importing this automatically imports all the types from `mdast-util-mdx-jsx`.
import "mdast-util-mdx-jsx";

// XXX: This plugin won't work with the current version of nextra. It causes an error...
// 2024-07-25
/**
 * Adds the headings produced by the `Syntax` React component to the per-page table of contents.
 */
export const addSyntaxHeadingsToToc: Plugin<void[], MdastRoot, MdastRoot> =
    function () {
        return (tree, file) => {
            file.data.extraSearchData = {};

            visit(tree, (node) => {
                if (node?.type !== "mdxJsxFlowElement") {
                    return;
                }
                if (!["SyntaxDisplay"].includes(node.name!)) {
                    return;
                }
                if (!file.data.toc) {
                    return;
                }
                const toc = file.data.toc as [
                    { depth: number; id: string; value: string },
                ];
                // If we are here, there is a `<SyntaxDisplay>` element in the mdx file.
                // This element adds #attributes #children and #parents headings, but
                // they are not added to the TOC. We must add them manually.

                const syntaxTocIndex = toc.findIndex((n) => n.id === "syntax");
                if (syntaxTocIndex === -1) {
                    return;
                }
                const depth = toc[syntaxTocIndex].depth + 1;
                const newTocItems = ["attributes", "children", "parents"].map(
                    (id) => ({
                        depth,
                        value: `${id[0].toUpperCase()}${id.slice(1)}`,
                        id,
                    }),
                );
                // Insert the TOC items into `toc` right after `syntaxToTocIndex`.
                toc.splice(syntaxTocIndex + 1, 0, ...newTocItems);

                console.log("TOC modified", file.data.toc, file.path);
            });
        };
    };
