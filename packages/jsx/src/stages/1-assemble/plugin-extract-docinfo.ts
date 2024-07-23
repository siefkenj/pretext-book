import { Plugin } from "unified";
import { toString } from "xast-util-to-string";
import { ElementDocInfo } from "../../assets/generated-types";
import { PretextRoot } from "../../assets/types";
import { PretextState } from "../../state";
import { isElement } from "../../utils/tools";
import { replaceNode, XastElement, XastNode, XastRoot } from "../../utils/xast";

export type PluginOptions = {
    state: PretextState;
};

/**
 * Extract all information from the `<docinfo />` node and
 * remove it from the tree.
 */
export const extractDocInfoPlugin: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function (options) {
    const { state } = options;
    if (!state) {
        throw new Error(
            `Cannot use plugin without passing in a PretextState object`,
        );
    }

    return (root, file) => {
        const pretext = root.children[0];
        const docinfoNode = pretext.children.find(
            (n) => n.name === "docinfo",
        ) as ElementDocInfo;
        if (!docinfoNode) {
            // This turns out to be a common occurrence in fragments.
            // console.warn("Could not find <docinfo> node");
            return;
        }
        const docinfo = state.docinfo;
        docinfo.base = docinfoNode.attributes["xml:base"];
        docinfo.lang = docinfoNode.attributes["xml:lang"];

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
                        content: toString(node as XastNode),
                        // @ts-ignore
                        syntax: node.attributes.syntax,
                    });
                    break;
                case "macros":
                    docinfo.macros = docinfo.macros || [];
                    docinfo.macros.push(toString(node as XastElement).trim());
                    break;
                case "numbering":
                case "rename":
                    console.warn(`<${node.name}> not implemented yet`);
                    break;
                default:
                    console.warn(
                        `Encountered unknown element while processing`,
                        node,
                    );
            }
        }

        // Remove the docinfo element from the tree
        replaceNode(root as XastRoot, (node) =>
            isElement(node) && node.name === "docinfo" ? null : undefined,
        );
    };
};
