import { XastNode, XastElement, XastText } from "./xast";

/**
 * Filter a list of XML nodes to ensure that only elements and text nodes are in the list.
 */
export function onlyElementsAndText(
    nodes: XastNode[],
): (XastElement | XastText)[] {
    return nodes.filter(
        (node) => node.type === "element" || node.type === "text",
    ) as (XastElement | XastText)[];
}

/**
 * Create a matcher that matches elements with tagName = `name`
 */
export function elmMatcher<T extends string>(
    name: T,
): (node: any) => node is XastElement {
    return ((node: any) => isElement(node) && node.name === name) as any;
}

/**
 * Create a matcher that matches elements with tagName is in the name list
 */
export function multiElmMatcher(
    names: string[],
): (node: any) => node is XastElement {
    const nameSet = new Set(names);
    return ((node: any) => isElement(node) && nameSet.has(node.name)) as any;
}

/**
 * Returns whether the node is a XAST element
 */
export const isElement = (node: any): node is XastElement => {
    if (node == null || typeof node !== "object") {
        return false;
    }
    return node.type === "element";
};

const isTitleNode = elmMatcher("title");
/**
 * Extract the <title> element from the node list. The title is extracted regardless of its position in the list.
 */
export function extractTitle(nodes: XastNode[]): {
    title: XastElement | null;
    rest: XastNode[];
} {
    const ret = { title: null, rest: nodes };
    const titleIndex = nodes.findIndex((n) => isTitleNode(n));
    if (titleIndex < 0) {
        return ret;
    }
    return {
        title: nodes[titleIndex] as XastElement,
        rest: [...nodes.slice(0, titleIndex), ...nodes.slice(titleIndex + 1)],
    };
}

/**
 * Find the last element in a list that matches a predicate.
 */
export function findLast<T extends XastNode>(
    nodes: XastNode[],
    predicate: (node: XastNode) => node is T,
): T | null {
    for (let i = nodes.length - 1; i >= 0; i--) {
        if (predicate(nodes[i])) {
            return nodes[i] as T;
        }
    }
    return null;
}

/**
 * Make a codenumber (e.g., `1.1.3`) out of a `numbering` array.
 */
export function makeCodenumber(numbering: number[]) {
    // The first division is `book` or `article`. These don't get displayed in the codenumbers
    return numbering
        .slice(1)
        .map((n) => `${n + 1}`)
        .join(".");
}
