import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
import { XastNode } from "../../../utils/xast";

const BLOCK_CHILDREN = new Set("ul|ol|dl|me|men|md|mdn|cd".split("|"));

/**
 * A paragraph that contains block children must handle its contents differently.
 * This detection is based on
 * https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-html.xsl#L5736
 */
function analyzeChildren(nodes: XastNode[]) {
    return {
        containsBlock: nodes.some(
            (n) => n.type === "element" && BLOCK_CHILDREN.has(n.name)
        ),
        containsNonBlock: nodes.some(
            (n) =>
                n.type === "text" ||
                (n.type === "element" && !BLOCK_CHILDREN.has(n.name))
        ),
    };
}

export const P: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);
    const significantChildren = node.children.filter(
        (n) => n.type !== "text" || n.value.trim()
    );
    const childAnalysis = analyzeChildren(significantChildren);

    if (childAnalysis.containsBlock) {
        // All text nodes are wrapped in div.para elements
        const children = significantChildren.map((n, i) =>
            n.type === "text" ? (
                <div className="para" key={i}>
                    {n.value}
                </div>
            ) : (
                <React.Fragment key={i}>
                    {state.processContent(n)}
                </React.Fragment>
            )
        );
        if (childAnalysis.containsBlock) {
            return (
                <div id={id} className="para logical">
                    {children}
                </div>
            );
        }
        return (
            <div id={id} className="para">
                {children}
            </div>
        );
    }

    return (
        <div id={id} className="para">
            {state.processContent(node.children)}
        </div>
    );
};
