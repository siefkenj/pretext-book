import { ReplacerFunc, XastNode, XastElement } from "../../../utils/xast";
import React from "react";
import { PretextStateContext } from "../state";

const SELF_CLOSING_TAGS = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
    "command",
    "keygen",
    "menuitem",
    "frame",
]);

/**
 * This is a fallback plugin that replaces any unhandled elements that may not render correctly
 * with valid html elements. When PreTeXt is fully implemented, this should never render anything.
 *
 * @returns
 */
export function replaceInvalidReactAndHtmlElements(): ReplacerFunc {
    return (node) => {
        let shouldReplace = false;
        const newNode = { ...node };
        newNode.attributes = { ...node.attributes };
        if (node.attributes?.ref) {
            shouldReplace = true;
            // React cannot handle `ref` as an attribute.
            // Any unhandled elements with the an attribute `ref` should have `ref` stripped.
            delete newNode.attributes.ref;
        }
        if (SELF_CLOSING_TAGS.has(newNode.name)) {
            shouldReplace = true;
            console.log("RENAMING", newNode.name, "to pre");
            newNode.attributes.oldName = newNode.name;
            newNode.name = "pre";
        }
        if (shouldReplace) {
            return <Component node={newNode} />;
        }
    };
}

function Component({ node }: { node: XastElement }) {
    const state = React.useContext(PretextStateContext);
    return <React.Fragment>{state.processContent(node)}</React.Fragment>;
}
