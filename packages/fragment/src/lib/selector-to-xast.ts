import type {
    Root as XastRoot,
    Node as XastNode,
    Element as XastElement,
} from "xast";
import type { Selector, SimpleSelector } from "../grammars/peggy-types";

/**
 * Convert a parsed CSS selector into a minimal chain of elements for which
 * it would select. E.g., `foo > bar` would turn into `<foo><bar /></foo>`
 *
 * Results are wrapped in a xast Root node.
 */
export function selectorToXast(selector: Selector | null): XastRoot {
    const ret: XastRoot = { type: "root", children: [] };
    if (!selector) {
        return ret;
    }
    ret.children.push(selectorToXastNode(selector));
    return ret;
}

/**
 * Convert a parsed CSS selector into a minimal chain of elements for which
 * it would select. E.g., `foo > bar` would turn into `<foo><bar /></foo>`
 */
export function selectorToXastNode(selector: Selector): XastElement {
    const type = selector.type;
    switch (type) {
        case "SimpleSelector":
            return simpleSelectorToNode(selector);
        case "Selector": {
            if (selector.combinator === "+") {
                throw new Error(`+ combinator is not supported`);
            }
            const left = simpleSelectorToNode(selector.left);
            const right = selectorToXastNode(selector.right);
            left.children.push(right);
            return left;
        }
        default: {
            const unhandled: void = type;
            console.warn("Encountered unhandled selector", selector);
        }
    }
    console.warn("Failed to convert", selector, "into xast element");
    const ret: XastElement = { type: "element", name: "ERROR", children: [], attributes: {} };
    return ret;
}

function simpleSelectorToNode(selector: SimpleSelector): XastElement {
    const attrs = selector.qualifiers.flatMap((q) => {
        const type = q.type;
        switch (type) {
            case "IDSelector":
                return [
                    ["xml:id", q.id.startsWith("#") ? q.id.slice(1) : q.id],
                ];
            case "ClassSelector":
                return [["class", q.class]];
            case "AttributeSelector":
                return [[q.attribute, q.value || ""]];
            case "PseudoSelector":
                return [];
            default: {
                const unhandled: void = type;
                console.warn("Encountered unhandled selector quantifier", q);
            }
        }
    }) as [string, string][];

    const attributes: Record<string, string> = {};
    for (const [name, attr] of attrs) {
        if (name !== "class") {
            attributes[name] = attr;
        } else {
            // name === "class". We can list multiple class names with multiple dots.
            // class attributes are merged with a space, unlike any other attribute.
            attributes[name] ||= "";
            attributes[name] +=
                attributes[name].length === 0 ? attr : " " + attr;
        }
    }

    const ret: XastElement = {
        type: "element",
        name: selector.element,
        children: [],
        attributes,
    };

    return ret;
}
