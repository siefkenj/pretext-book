import { Plugin } from "unified";
import { DocInfo } from "../types/relax-ng";
import { elmMatcher } from "./tools";
import { remove } from "unist-util-remove";
import { toString } from "xast-util-to-string";
import { PretextRoot } from "./types";
import { ElementDocInfo } from "../preprocessors/generated-types";

const isDocInfoNode = elmMatcher("docinfo");

/**
 * Extract all information from the `<docinfo />` node and
 * remove it from the tree.
 */
export const extractDocInfoPlugin: Plugin<void[], PretextRoot, PretextRoot> =
    () => (ast, file) => {
        const pretext = ast.children[0];
        const docinfoNode = pretext.children.find(
            (n) => n.name === "docinfo"
        ) as ElementDocInfo;
        if (!docinfoNode) {
            console.warn("Could not find <docinfo> node");
            return;
        }
        const docinfo: DocInfo = {
            base: docinfoNode.attributes["xml:base"],
            lang: docinfoNode.attributes["xml:lang"],
        };

        for (const node of docinfoNode.children) {
            switch (node.name) {
                case "asymptote-preamble":
                case "author-biographies":
                    console.warn(`<${node.name}> not implemented yet`);
                    break;
                case "brandlogo":
                    docinfo.brandlogo = docinfo.brandlogo || [];
                    docinfo.brandlogo.push({
                        source: node.attributes.source,
                        url: node.attributes.url,
                    });
                    break;
                case "cross-references":
                    docinfo.cross_references = node.attributes.text;
                    break;
                case "feedback":
                case "images":
                case "initialism":
                    console.warn(`<${node.name}> not implemented yet`);
                    break;
                case "latex-image-preamble":
                    docinfo.latex_image_preamble =
                        docinfo.latex_image_preamble || [];
                    docinfo.latex_image_preamble.push({
                        content: toString(node),
                        syntax: node.attributes.syntax,
                    });
                    break;
                case "latex-preamble":
                    docinfo.latex_preamble = docinfo.latex_preamble || [];
                    for (const n of node.children) {
                        docinfo.latex_preamble.push(toString(n).trim());
                    }
                    break;
                case "macros":
                    docinfo.macros = docinfo.macros || [];
                    docinfo.macros.push(toString(node).trim());
                    break;
                case "numbering":
                case "rename":
                    console.warn(`<${node.name}> not implemented yet`);
                    break;
                default:
                    console.warn(
                        `Encountered unknown element while processing`,
                        node
                    );
            }
        }

        file.data.docinfo = docinfo;

        // Remove from the tree when we've extracted the info
        (remove as any)(ast, isDocInfoNode);
    };
