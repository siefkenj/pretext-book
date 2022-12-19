import { convert } from "unist-util-is";
import { Root, Element as XMLElement, Text as XMLText } from "xast";

type Node = Root["children"][number];

/**
 * Filter a list of XML nodes to ensure that only elements and text nodes are in the list.
 *
 * @export
 * @param {Node[]} nodes
 * @returns {((XMLElement | XMLText)[])}
 */
export function onlyElementsAndText(nodes: Node[]): (XMLElement | XMLText)[] {
    return nodes.filter(
        (node) => node.type === "element" || node.type === "text"
    ) as (XMLElement | XMLText)[];
}

/**
 * Create a matcher that matches elements with tagName = `name`
 *
 * @export
 * @param {string} name
 * @returns
 */
export function elmMatcher(name: string) {
    return convert<XMLElement>({ type: "element", name });
}

/**
 * Returns whether the node is a XAST element
 */
export const isElement = (node: any): node is XMLElement => {
    if (node == null || typeof node !== "object") {
        return false;
    }
    return node.type === "element";
};