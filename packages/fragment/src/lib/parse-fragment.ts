import { fromXml } from "xast-util-from-xml";
import { Fragment, XastElement } from "../types";
import { EXIT, visit } from "../utils/xast";
import { isElement } from "../utils/tools";

/**
 * Parse a fragment to an intermediate Fragment object.
 * 
 * XXX: This is for internal use. This is probably not the function you're looking for.
 */
export function parseFragment(source: string): Fragment {
    const ast = fromXml(source);
    let fragmentNode: XastElement;
    visit(
        ast,
        (node) => {
            if (node.name === "fragment") {
                fragmentNode = node;
                return EXIT;
            }
        },
        { test: isElement }
    );

    // @ts-ignore
    if (!fragmentNode) {
        throw new Error(`Could not find fragment node in xml: ${source}`);
    }
    // Children of <fragment> that are not just whitespace are kept.
    const significantChildren = fragmentNode.children.filter(
        (n) => !(n.type === "text" && n.value.match(/^\s+$/))
    );

    return {
        content:
            significantChildren.length === 1
                ? significantChildren[0]
                : significantChildren,
        selector: fragmentNode.attributes?.parents || "",
        template: fragmentNode.attributes?.template || "article",
    };
}
