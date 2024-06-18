import { visit } from "unist-util-visit";
import { Plugin } from "unified";
import { parseModule, Program as EstreeProgram } from "esprima";
import { Root as MdastRoot } from "mdast";
// Importing this automatically imports all the types from `mdast-util-mdx-jsx`.
import "mdast-util-mdx-jsx";
import { jsonGrammar as _jsonGrammar } from "../../jsx/src/assets/generated-grammar";
import { JsonGrammar } from "../components/types";

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
            const info = Object.values(jsonGrammar.refs).find(
                (v) => v.name === name,
            );
            const infoKey = Object.entries(jsonGrammar.refs).find(
                ([k, v]) => v === info,
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
 * Turn a plain JS object into an ESTree object suitable for including in a `mdxJsxAttributeValueExpression`.
 */
function objectToEstree(obj: any): EstreeProgram {
    const estreeRaw = parseModule(`const IGNORE = ${JSON.stringify(obj)}`);

    const decl = estreeRaw.body[0];
    if (decl.type !== "VariableDeclaration") {
        throw new Error("PARSE ERROR: Expected a VariableDeclaration");
    }
    const decl2 = decl.declarations[0];
    if (decl2.type !== "VariableDeclarator") {
        throw new Error("PARSE ERROR: Expected a VariableDeclarator");
    }
    const expr = decl2.init;
    if (!expr) {
        throw new Error("PARSE ERROR: Expected an Expression");
    }

    return {
        type: "Program",
        body: [
            {
                type: "ExpressionStatement",
                expression: expr,
            },
        ],
        sourceType: "module",
    };
}
