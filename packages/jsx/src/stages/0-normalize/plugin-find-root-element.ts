import { Plugin } from "unified";
import { XastRoot } from "../../utils/xast";

/**
 * Unifiedjs plugin that removes XML preprocessing/text/etc. from the root so that there is only a single element left
 * as the child of `XastRoot`.
 */
export const findRootElementPlugin: Plugin<void[], XastRoot, XastRoot> =
    function () {
        return (root: XastRoot) => {
            root.children = root.children.filter((n) => n.type === "element");
            if (root.children.length !== 1) {
                console.warn(
                    `Expected exactly one root element, but found ${root.children.length}`
                );
            }
        };
    };
