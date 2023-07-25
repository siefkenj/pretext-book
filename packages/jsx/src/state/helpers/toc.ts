import { PretextState } from "..";
import {
    DIVISIONS_WITHOUT_NUMBERS,
    isDivision,
    isTitleNode,
} from "../../stages/helpers/special-tags";
import { isElement, onlyElementsAndText } from "../../utils/tools";
import { visit } from "../../utils/xast";
import { TocItem } from "../types";

/**
 * Extract table of contents information from the tree. Nodes are left intact in the process.
 */
export function _generateToc(this: PretextState) {
    const toc = this.toc;
    const tocItemsById: Record<string, TocItem> = {};

    visit(
        this.root,
        (node, info) => {
            const attrs = node.attributes || {};
            if (!attrs["xml:id"]) {
                console.warn(
                    "Trying to add TOC entry, but item has not been assigned an `xml:id`. Did you forget to decorate all items with an id first?",
                );
                return;
            }
            const id = attrs["xml:id"];

            // Look for the title and try to make a new slug.
            const titleNode = node.children.find((node) => isTitleNode(node));
            const title = isElement(titleNode)
                ? onlyElementsAndText(titleNode.children)
                : [];

            const newTocItem: TocItem = {
                id,
                title,
                division: node.name,
                children: [],
            };

            const parent = info.parents[0];
            if (
                !isElement(parent) ||
                !parent.attributes?.["xml:id"] ||
                // The root <pretext> element may have an ID on it, but it shouldn't show up in the TOC.
                parent.name === "pretext"
            ) {
                // We're a root node with no immediate parent.
                toc.push(newTocItem);
            } else {
                const parentId = parent.attributes["xml:id"];
                if (!tocItemsById[parentId]) {
                    const error = `Parent with id "${parentId}" not in the toc. Cannot insert child.`;
                    console.warn(error);
                    return;
                }
                tocItemsById[parentId].children.push(newTocItem);
            }
            tocItemsById[newTocItem.id] = newTocItem;

            // Keep track of all the nodes that we assigned a TOC item to.
            this._xastDivisions.add(node);
        },
        { test: isDivision },
    );

    this._generateTocItemInfoMap();
    this._generateNodeToDivisionIdMap();
    this._generateBlockToNumberMap();
}

/**
 * Generate a map from TOC item ids to information about that item.
 */
export function _generateTocItemInfoMap(this: PretextState) {
    const map: typeof this._tocInfoMap = new Map();

    const traverse = (items: TocItem[], level = 0, parent?: TocItem) => {
        let number = 0;
        for (const item of items) {
            const parentInfo = map.get(parent?.id || "");
            let numbering = [number];
            if (parentInfo) {
                numbering.unshift(...parentInfo.numbering);
            }

            map.set(item.id, {
                level,
                numbering,
                item,
                parent: parentInfo?.item,
            });

            traverse(item.children, level + 1, item);
            if (!DIVISIONS_WITHOUT_NUMBERS.has(item.division)) {
                // Some divisions are "skipped over" for numbering.
                // To accomplish this, we only advance the number on regular divisions.
                number++;
            } else {
                // Divisions that don't have numbers also should have their `numbering`
                // array one shorter.
                numbering.pop();
            }
        }
    };
    traverse(this.toc);
    this._tocInfoMap = map;
}
