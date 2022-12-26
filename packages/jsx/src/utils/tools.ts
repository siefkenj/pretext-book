import { XastAst, XastElement, XastText } from "./xast";

/**
 * Filter a list of XML nodes to ensure that only elements and text nodes are in the list.
 */
export function onlyElementsAndText(
    nodes: XastAst[]
): (XastElement | XastText)[] {
    return nodes.filter(
        (node) => node.type === "element" || node.type === "text"
    ) as (XastElement | XastText)[];
}

/**
 * Create a matcher that matches elements with tagName = `name`
 *
 * @export
 * @param {string} name
 * @returns
 */
export function elmMatcher<T extends string>(
    name: T
): (node: any) => node is XastElement {
    return ((node: any) => isElement(node) && node.name === name) as any;
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
