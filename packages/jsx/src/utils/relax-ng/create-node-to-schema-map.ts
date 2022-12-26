import { toXml } from "xast-util-to-xml";
import { XastAst, XastElement } from "../xast";
import {
    JsonGrammar,
    NodeToTypeMap,
    RelaxNgElement,
    RelaxNgText,
} from "./types";

type SchemaType = RelaxNgText | RelaxNgElement;

/**
 * Create a mapping from nodes in `tree` to ref names in `schema`.
 * If a node does not fit the schema, a best guess is made as to its type
 * and a diagnostic warning is returned.
 */
export function createNodeToSchemaMap(
    tree: XastAst,
    schema: JsonGrammar,
    nodeToTypeMap?: NodeToTypeMap
): { nodeToTypeMap: NodeToTypeMap; warnings: string[] } {
    const warnings: string[] = [];
    if (!nodeToTypeMap) {
        nodeToTypeMap = new Map();
    }

    // Special care is taken with the `root` element, since it doesn't actually get a type.
    if (tree.type === "root") {
        for (const rootElement of tree.children) {
            if (rootElement.type !== "element") {
                continue;
            }
            let rootElementType = null;
            if (matches(rootElement, schema.refs[schema.startType])) {
                rootElementType = schema.startType;
                nodeToTypeMap.set(rootElement, schema.startType);
            } else {
                rootElementType = guessType(rootElement, schema);
                warnings.push(
                    makeWarning.guessedType(rootElement, rootElementType)
                );
            }
            if (rootElementType) {
                nodeToTypeMap.set(rootElement, rootElementType);
            }
            for (const child of rootElement.children) {
                if (child.type === "text") {
                    nodeToTypeMap.set(child, "XMLText");
                } else if (child.type === "element") {
                    mapElementTypes(
                        child,
                        rootElementType,
                        schema,
                        nodeToTypeMap,
                        warnings
                    );
                }
            }
        }
    }

    return { nodeToTypeMap, warnings };
}

/**
 * Maps the type of `node` and all its children.
 */
function mapElementTypes(
    node: XastElement,
    parentTypeName: string | null,
    schema: JsonGrammar,
    nodeToTypeMap: NodeToTypeMap,
    warnings: string[]
) {
    let nodeType: string | null = null;
    const parentType = schema.refs[parentTypeName || ""];
    if (parentType && parentType.type === "element") {
        // Search through the allowed children to see if we match one of them.
        for (const ref of parentType.children) {
            if (matches(node, schema.refs[ref.ref])) {
                nodeType = ref.ref;
                break;
            }
        }
    }
    if (!nodeType) {
        nodeType = guessType(node, schema);
        warnings.push(makeWarning.guessedType(node, nodeType));
    }
    if (nodeType) {
        nodeToTypeMap.set(node, nodeType);
    }
    for (const child of node.children) {
        if (child.type === "text") {
            nodeToTypeMap.set(child, "XMLText");
        } else if (child.type === "element") {
            mapElementTypes(child, nodeType, schema, nodeToTypeMap, warnings);
        }
    }
}

/**
 * Guess the type of `node`, using element name if `node` is an XastElement.
 */
function guessType(node: XastAst, schema: JsonGrammar): string | null {
    if (node.type === "text") {
        return "XMLText";
    }
    if (node.type === "element") {
        for (const refName in schema.refs) {
            if (matches(node, schema.refs[refName])) {
                return refName;
            }
        }
    }
    return null;
}

/**
 * Returns whether the `node` matches the type of `schemaType`.
 */
function matches(node: XastAst, schemaType: SchemaType): boolean {
    if (!schemaType) {
        throw new Error("`schemaType` is undefined");
    }
    if (node.type === "text" && schemaType.type === "text") {
        return true;
    }
    if (
        node.type === "element" &&
        schemaType.type === "element" &&
        schemaType.name === node.name
    ) {
        return true;
    }
    return false;
}

const makeWarning = {
    guessedType(node: XastAst, guessedType: string | null) {
        return `${nodePosition(node)}Type of ${nodeToString(
            node
        )} could not be determined. Guessing ${guessedType || "null"}`;
    },
};

function nodeToString(node: XastAst) {
    if (node.type === "element") {
        return `<${node.name}>`;
    }
    return `${node.type.charAt(0).toUpperCase()}${node.type.slice(1)}`;
}

/**
 * Format `node`'s position as `line:column `, with a trailing space.
 */
function nodePosition(node: XastAst): string {
    if (node.position) {
        return `${node.position.start.line}:${node.position.start.column} `;
    }
    return "";
}
