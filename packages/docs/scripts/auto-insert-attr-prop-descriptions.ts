import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { Root as MdastRoot } from "mdast";
// Importing this automatically imports all the types from `mdast-util-mdx-jsx`.
import "mdast-util-mdx-jsx";
import { jsonGrammar as _jsonGrammar } from "../../jsx/src/assets/generated-grammar";
import { JsonGrammar } from "../components/types";
import { objectToEstree } from "./object-to-estree";

const jsonGrammar = _jsonGrammar as any as JsonGrammar;

export const autoInsertAttrPropDescriptions: Plugin<
    void[],
    MdastRoot,
    MdastRoot
> = function () {
    return (tree, file) => {
        file.data.extraSearchData = {};

        visit(tree, (node) => {
            if (node?.type !== "mdxJsxFlowElement") {
                return;
            }
            if (
                !["AttrDisplay", "ChildrenDisplay", "ParentsDisplay"].includes(
                    node.name!,
                )
            ) {
                return;
            }
            const nameAttr = node.attributes.find(
                (attr) =>
                    attr.type === "mdxJsxAttribute" && attr.name === "name",
            );
            const name = String(nameAttr?.value);
            const variantRaw = node.attributes.find(
                (attr) =>
                    attr.type === "mdxJsxAttribute" && attr.name === "variant",
            )?.value;
            const variant = variantRaw == null ? undefined : String(variantRaw);
            const info = Object.entries(jsonGrammar.refs).find(
                ([tVar, v]) =>
                    v.name === name && (variant ? tVar === variant : true),
            )?.[1];
            const infoKey = Object.entries(jsonGrammar.refs).find(
                ([k, v]) => v === info && (variant ? k === variant : true),
            )?.[0];
            if (!info || !infoKey) {
                return;
            }

            if (
                node.name === "AttrDisplay" &&
                !node.attributes.find(
                    (attr) =>
                        attr.type === "mdxJsxAttribute" &&
                        attr.name === "attrs",
                )
            ) {
                // Info has all the schema information for this element. We need to insert it into the node.
                node.attributes.push({
                    type: "mdxJsxAttribute",
                    name: "attrs",
                    value: {
                        type: "mdxJsxAttributeValueExpression",
                        value: JSON.stringify(info.attributes),
                        data: {
                            estree: objectToEstree(info.attributes),
                        },
                    },
                });

                // Add some data that will be used for search
                // @ts-ignore
                file.data.extraSearchData["attr-list#Attribute"] = Object.keys(
                    info.attributes,
                )
                    .map((v) => `${v} = "…" (attribute of <${info.name}/>)`)
                    //.filter((attr) => !attr.common)
                    .join("\n");
            }
            if (
                node.name === "ChildrenDisplay" &&
                !node.attributes.find(
                    (attr) =>
                        attr.type === "mdxJsxAttribute" &&
                        attr.name === "childList",
                )
            ) {
                const childList = info.children
                    .map((v) => jsonGrammar.refs[v.ref]?.name)
                    .filter((x) => x);
                // Info has all the schema information for this element. We need to insert it into the node.
                node.attributes.push({
                    type: "mdxJsxAttribute",
                    name: "childList",
                    value: {
                        type: "mdxJsxAttributeValueExpression",
                        value: JSON.stringify(childList),
                        data: {
                            estree: objectToEstree(childList),
                        },
                    },
                });
                node.attributes.push({
                    type: "mdxJsxAttribute",
                    name: "textAllowed",
                    value: {
                        type: "mdxJsxAttributeValueExpression",
                        value: JSON.stringify(info.textChildrenAllowed),
                        data: {
                            estree: objectToEstree(info.textChildrenAllowed),
                        },
                    },
                });
            }
            if (
                node.name === "ParentsDisplay" &&
                !node.attributes.find(
                    (attr) =>
                        attr.type === "mdxJsxAttribute" &&
                        attr.name === "childList",
                )
            ) {
                const parentList = Object.values(jsonGrammar.refs)
                    .filter(
                        (v) =>
                            v.type === "element" &&
                            v.children.some((c) => c.ref === infoKey),
                    )
                    .map((v) => v.name);
                // Info has all the schema information for this element. We need to insert it into the node.
                node.attributes.push({
                    type: "mdxJsxAttribute",
                    name: "parentList",
                    value: {
                        type: "mdxJsxAttributeValueExpression",
                        value: JSON.stringify(parentList),
                        data: {
                            estree: objectToEstree(parentList),
                        },
                    },
                });
            }
        });
    };
};
