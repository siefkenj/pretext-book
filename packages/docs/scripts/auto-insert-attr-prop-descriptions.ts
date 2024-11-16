import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { Root as MdastRoot } from "mdast";
// Importing this automatically imports all the types from `mdast-util-mdx-jsx`.
import "mdast-util-mdx-jsx";
// @ts-ignore
import { jsonGrammar as _jsonGrammar } from "../../jsx/src/assets/generated-grammar";
import { JsonGrammar, VariantInfo } from "../components/types";
import { objectToEstree } from "./object-to-estree";
import { computeVariantLookup } from "./compute-optimized-schema";

const jsonGrammar = _jsonGrammar as any as JsonGrammar;

export const autoInsertAttrPropDescriptions: Plugin<
    void[],
    MdastRoot,
    MdastRoot
> = function () {
    const variantInfo = computeVariantLookup();

    return (tree, file) => {
        file.data.extraSearchData = {};

        visit(tree, (node) => {
            if (node?.type !== "mdxJsxFlowElement") {
                return;
            }
            if (
                ![
                    "AttrDisplay",
                    "ChildrenDisplay",
                    "ParentsDisplay",
                    "SyntaxDisplay",
                ].includes(node.name!)
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
            if (!info || !infoKey || info.type !== "element") {
                return;
            }

            if (
                node.name === "SyntaxDisplay" &&
                !node.attributes.find(
                    (attr) =>
                        attr.type === "mdxJsxAttribute" &&
                        attr.name === "variants",
                )
            ) {
                // Info has all the schema information for this element. We need to insert it into the node.
                node.attributes.push({
                    type: "mdxJsxAttribute",
                    name: "variants",
                    value: {
                        type: "mdxJsxAttributeValueExpression",
                        value: JSON.stringify(variantInfo[name]),
                        data: {
                            estree: objectToEstree(variantInfo[name] || []),
                        },
                    },
                });

                // Add some data that will be used for search
                const multipleVariants =
                    Object.keys(variantInfo[name] || {}).length > 1;
                // @ts-ignore
                file.data.extraSearchData["attributes#Attribute"] =
                    Object.values(variantInfo[name] || {})
                        .flat()
                        .flatMap((v) =>
                            Object.keys(v.attributes).map(
                                (attrName) => [attrName, v] as const,
                            ),
                        )
                        .map(([attrName, elm]) => {
                            return (
                                `${attrName} = "…" (attribute of <${elm.name}/>)` +
                                (multipleVariants
                                    ? ` (variant: ${formatVariantName(elm)})`
                                    : "")
                            );
                        })
                        .join("\n");
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

/**
 * Format `variant.refId` for display to the user.
 */
function formatVariantName(variant: VariantInfo): string {
    // Strip off any leading `Element` from `variant.name` unless
    // `variant.name` is `Element` itself.
    return variant.refId === "Element"
        ? variant.refId
        : variant.refId.replace(/^Element/, "");
}
