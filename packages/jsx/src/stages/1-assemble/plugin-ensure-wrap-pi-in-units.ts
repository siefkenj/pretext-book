import { Plugin } from "unified";
import { PretextRoot } from "../../assets/types";
import { elmMatcher } from "../../utils/tools";
import { SKIP, visit } from "../../utils/xast";

type PluginOptions = void;

const isMag = elmMatcher("mag");

/**
 * When `\pi` appears inside of a quantity/unit, it should be wrapped in an <m> node.
 */
export const ensureWrapPiInUnits: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function () {
    return (root, file) => {
        visit(
            root,
            (node, info) => {
                const hasUnwrappedPi = node.children.some(
                    (n) => n.type === "text" && n.value.match(/\\pi/)
                );
                if (!hasUnwrappedPi) {
                    return SKIP;
                }
                node.children = node.children.flatMap((n) => {
                    if (n.type !== "text" || n.value.indexOf("\\pi") === -1) {
                        return n;
                    }
                    const parts = n.value.split("\\pi");
                    const nodes: typeof node.children = [];
                    parts.forEach((part, i) => {
                        if (i > 0) {
                            nodes.push({
                                type: "element",
                                name: "m",
                                children: [
                                    {
                                        type: "text",
                                        value: "\\pi",
                                    },
                                ],
                                attributes: {},
                            });
                        }
                        if (part.length > 0) {
                            nodes.push({
                                type: "text",
                                value: part,
                            });
                        }
                    });
                    return nodes;
                });
                return SKIP;
            },
            { test: isMag }
        );
    };
};
