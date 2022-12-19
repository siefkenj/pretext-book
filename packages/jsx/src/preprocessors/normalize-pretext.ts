import { Plugin } from "unified";
import { Element as XMLElement, Text as XMLText, Root as XMLRoot } from "xast";

import { jsonGrammar } from "./generated-grammar";
import { StartElement } from "./generated-types";

type Ref =
    | {
          type: "text";
      }
    | {
          type: "element";
          name: string;
          attributes: Record<string, { optional: boolean; type: string[] }>;
          textChildrenAllowed: boolean;
          children: { ref: string }[];
      };
export type JsonGrammar = {
    startType: string;
    refs: Record<string, Ref>;
};
export type Root = { type: "root"; children: [StartElement] };

const REFS = jsonGrammar.refs as Record<string, Ref>;
const START = REFS[jsonGrammar.startType];

/**
 * Unifiedjs plugin that removes excess text nodes that are allowed by the pretext xsl, but
 * shouldn't be there.
 */
export const normalizePretextPlugin: Plugin<void[], XMLRoot, Root> =
    function () {
        this.Compiler = (root: XMLRoot) => {
            const startNode = root.children.find(
                (n) =>
                    n.type === "element" &&
                    START.type === "element" &&
                    n.name === START.name
            );
            if (startNode && startNode.type === "element") {
                root.children = [startNode];
                startNode.children = filterNodes(startNode.children, START);
            } else {
                console.warn("Could not find start node");
            }
            return root;
        };
    };

function filterNodes(
    nodes: XMLRoot["children"],
    targetType: typeof REFS[string]
): (XMLElement | XMLText)[] {
    let allowedChildren: Record<string, string> = {};
    if (targetType.type === "element") {
        for (const child of targetType.children) {
            const ref = REFS[child.ref];
            if (ref.type === "element") {
                allowedChildren[ref.name] = child.ref;
            }
        }
    }
    return nodes.filter((node) => {
        switch (node.type) {
            case "cdata":
            case "comment":
            case "doctype":
            case "instruction":
                // We unconditionally filter out these nodes
                return false;
            case "text":
                return (
                    targetType.type === "element" &&
                    targetType.textChildrenAllowed
                );
            case "element":
                const allowed = allowedChildren[node.name];
                if (allowed) {
                    // Elements have children that we need to check!
                    node.children = filterNodes(node.children, REFS[allowed]);
                    return true;
                }
                console.warn(
                    `Found <${node.name}> as a child of <${
                        targetType.type === "element"
                            ? targetType.name
                            : targetType.type
                    }> but such a child is not allowed by the schema.`
                );
                return false;
        }
        return false;
    }) as (XMLElement | XMLText)[];
}
