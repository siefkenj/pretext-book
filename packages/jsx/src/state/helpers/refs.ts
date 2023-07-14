import { PretextState, XRefTargetInfo } from "..";
import {
    isDivision,
    isTitleNode,
    isXRefable,
} from "../../stages/helpers/special-tags";
import { isElement, onlyElementsAndText } from "../../utils/tools";
import { visit } from "../../utils/xast";

/**
 * Generate a map for all items that can be xref-ed.
 */
export function _generateRefalbeInfoMap(this: PretextState) {
    const map: typeof this._xrefableMap = new Map();
    visit(
        this.root,
        (node, info) => {
            const attrs = node.attributes || {};
            if (!attrs["xml:id"]) {
                console.warn(
                    "Trying to add entry for a refable item, but item has not been assigned an `xml:id`. Did you forget to decorate all items with an id first?"
                );
                return;
            }
            const id = attrs["xml:id"];

            // Look for the title and try to make a new slug.
            const titleNode = node.children.find((node) => isTitleNode(node));
            const title = isElement(titleNode)
                ? onlyElementsAndText(titleNode.children)
                : [];
            const blockInfo = this.getBlockInfo(node);
            /**
             * Make a codenumber (e.g., `1.1.3`) out of a `numbering` array.
             */
            function makeCodenumber(numbering: number[]) {
                // The first division is `book` or `article`. These don't get displayed in the codenumbers
                return numbering
                    .slice(1)
                    .map((n) => `${n + 1}`)
                    .join(".");
            }
            const codenumberBase = makeCodenumber(
                blockInfo?.divisionInfo?.numbering || []
            );
            let codenumber = codenumberBase;
            // non-division tags get an extra number after them.
            // E.g., a definition in section 2.2 gets an extra digit
            // like 2.2.1
            if (!isDivision(node)) {
                codenumber =
                    codenumberBase.length > 0
                        ? `${codenumberBase}.${(blockInfo?.number || 0) + 1}`
                        : String((blockInfo?.number || 0) + 1) || "";
            }

            const refInfo: XRefTargetInfo = {
                node,
                tag: node.name,
                id,
                title,
                codenumber,
            };
            map.set(id, refInfo);
        },
        { test: isXRefable }
    );

    this._xrefableMap = map;
}
