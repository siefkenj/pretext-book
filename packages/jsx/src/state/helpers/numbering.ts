import { PretextState } from "..";
import { isXRefable } from "../../stages/helpers/special-tags";
import { isElement, multiElmMatcher } from "../../utils/tools";
import { visit, XastNode } from "../../utils/xast";

const isEquation = multiElmMatcher(["me", "mrow"]);

/**
 * Generates numbering for all equations. Numbering works as follows: every single
 * refable item is assigned a number. The number is incremented when a numbered equation
 * is encountered. This information can be used to compute the number of an equation
 * by first looking up the number of the parent division and then taking the difference
 * between that and the number of the equation.
 */
export function _generateEquationNumberingMap(this: PretextState) {
    const map: Map<string, number> = new Map();

    let currentNumber = 0;

    visit(
        this.root,
        (node, info) => {
            const attrs = node.attributes || {};
            if (!attrs["xml:id"]) {
                return;
            }
            const id = attrs["xml:id"];
            map.set(id, currentNumber);

            // We advance the equation number if we encounter a numbered equation.
            // These can be <me> or <mrow> children of <mdn> or <mrow> children that have `numbered="yes"` on them.
            if (isEquation(node)) {
                if (node.attributes?.numbered === "no") {
                    return;
                }
                switch (node.name) {
                    case "me":
                        currentNumber++;
                        break;
                    case "mrow": {
                        const parent = info.parents[0];
                        if (!isElement(parent)) {
                            break;
                        }
                        if (
                            parent.name === "mdn" ||
                            parent.attributes?.number === "yes" ||
                            node.attributes?.number === "yes"
                        ) {
                            currentNumber++;
                        }
                        break;
                    }
                }
            }
        },
        { test: isXRefable }
    );

    this._equationNumberingMap = map;
}
