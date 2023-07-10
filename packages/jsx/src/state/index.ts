import Slugger from "github-slugger";
import { toXml } from "xast-util-to-xml";
import {
    DIVISIONS,
    DIVISIONS_WITHOUT_NUMBERS,
    isDivision,
    isRefable,
    isTitleNode,
    isXRefable,
    NUMBERED_BLOCKS,
} from "../stages/helpers/special-tags";
import { JsonGrammar } from "../utils/relax-ng/types";
import { elmMatcher, isElement, onlyElementsAndText } from "../utils/tools";
import {
    ProcessContentFunc,
    visit,
    XastNode,
    XastElement,
    XastRoot,
} from "../utils/xast";
import { STRING_ID_TO_DISPLAY_NAME } from "./i18n";
import { ArticleFrontMatter, DocInfo, Toc, TocItem } from "./types";

export type XRefTargetInfo = {
    node: XastElement;
    tag: string;
    id: string;
    title: XastNode[];
    codenumber: string;
};

/**
 * Object to keep track of the global processing state during a transformation.
 * E.g., to generate unique ids, etc.
 */
export class PretextState {
    /** Information grabbed from the `<docinfo>` element. */
    docinfo: DocInfo;
    schema: JsonGrammar | null;
    _slugger: Slugger;
    _declaredIdCache: Set<string>;
    frontmatter: ArticleFrontMatter;
    /** Information for the table of contents. */
    toc: Toc;
    _tocInfoMap: Map<
        string,
        {
            numbering: number[];
            level: number;
            parent?: TocItem;
            item: TocItem;
        }
    >;
    _xrefableMap: Map<string, XRefTargetInfo>;
    root: XastRoot;
    /**
     * Function that continues processing content with XastToReact's `processContent` function.
     * This property must be set some time in the rendering phase.
     */
    processContent?: ProcessContentFunc;
    _parentMap: WeakMap<XastNode, XastNode>;
    _xastNodeToTocDivisionId: WeakMap<XastNode, string>;
    _xastDivisions: WeakSet<XastElement>;
    _xastBlockToNumber: WeakMap<XastElement, number>;

    constructor(schema?: JsonGrammar) {
        this.docinfo = {};
        this.schema = schema || null;
        this._slugger = new Slugger();
        this._declaredIdCache = new Set();
        this.frontmatter = {
            titlepage: { authors: [], credits: [], editors: [] },
        };
        this.toc = [];
        this._tocInfoMap = new Map();
        this._xrefableMap = new Map();
        this.root = { type: "root", children: [] };
        this._parentMap = new WeakMap();
        this._xastNodeToTocDivisionId = new WeakMap();
        this._xastDivisions = new WeakSet();
        this._xastBlockToNumber = new WeakMap();
    }

    /**
     * Declares that `id` is an id that is explicitly declared in the document.
     * Returns `true` if the id has been declared already.
     */
    declareId(id: string) {
        if (
            this._declaredIdCache.has(id) ||
            this._slugger.occurrences[id] > 0
        ) {
            return true;
        }
        this._declaredIdCache.add(id);
        return false;
    }
    /**
     * Get an unused id that matches `preferredName`, if possible.
     */
    getUniqueId(preferredName?: string) {
        if (this._declaredIdCache.size > 0) {
            // If there are any ids in the cache, we need to drain it first.
            this._declaredIdCache.forEach((id) => this._slugger.slug(id, true));
            this._declaredIdCache.clear();
        }
        return this._slugger.slug(preferredName || "auto-generated-id", true);
    }

    setRoot(root: XastRoot) {
        this.root = root;
        this._generateParentMap();
        this._generateToc();
        this._generateRefalbeInfoMap();
    }

    _generateParentMap() {
        visit(this.root, (node, info) => {
            const parent = info.parents[0];
            if (parent) {
                this._parentMap.set(node, parent);
            }
        });
    }

    _generateBlockToNumberMap() {
        let number = 0;
        visit(
            this.root,
            (node) => {
                if (isDivision(node)) {
                    // Counting resets in every division.
                    number = 0;
                }
                if (NUMBERED_BLOCKS.has(node.name)) {
                    this._xastBlockToNumber.set(node, number);
                    number++;
                }
            },
            { test: isElement }
        );
    }

    /**
     * Generate a map from TOC item ids to information about that item.
     */
    _generateTocItemInfoMap() {
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

    /**
     * Map every element to its nearest division parent.
     */
    _generateNodeToDivisionIdMap() {
        visit(this.root, (node, info) => {
            if (isElement(node) && this._xastDivisions.has(node)) {
                this._xastNodeToTocDivisionId.set(
                    node,
                    node.attributes?.["xml:id"] || ""
                );
                return;
            }
            // We just walk up the parents tree until we find one that is
            // recorded as a division. That is assumed to be its "division parent"
            for (const parent of info.parents) {
                if (isElement(parent) && this._xastDivisions.has(parent)) {
                    this._xastNodeToTocDivisionId.set(
                        node,
                        parent.attributes?.["xml:id"] || ""
                    );
                    break;
                }
            }
        });
    }

    /**
     * Generate a map for all items that can be xref-ed.
     */
    _generateRefalbeInfoMap() {
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
                const titleNode = node.children.find((node) =>
                    isTitleNode(node)
                );
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
                // E.g., a definition in section 2.2 gets an extra digition
                // like 2.2.1
                if (!isDivision(node)) {
                    codenumber =
                        codenumberBase.length > 0
                            ? `${codenumberBase}.${
                                  (blockInfo?.number || 0) + 1
                              }`
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

    /**
     * Extract table of contents information from the tree. Nodes are left intact in the process.
     */
    _generateToc() {
        const toc = this.toc;
        const tocItemsById: Record<string, TocItem> = {};

        visit(
            this.root,
            (node, info) => {
                const attrs = node.attributes || {};
                if (!attrs["xml:id"]) {
                    console.warn(
                        "Trying to add TOC entry, but item has not been assigned an `xml:id`. Did you forget to decorate all items with an id first?"
                    );
                    return;
                }
                const id = attrs["xml:id"];

                // Look for the title and try to make a new slug.
                const titleNode = node.children.find((node) =>
                    isTitleNode(node)
                );
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
                        throw new Error(
                            `Parent with id "${parentId}" not in the toc. Cannot insert child.`
                        );
                    }
                    tocItemsById[parentId].children.push(newTocItem);
                }
                tocItemsById[newTocItem.id] = newTocItem;

                // Keep track of all the nodes that we assigned a TOC item to.
                this._xastDivisions.add(node);
            },
            { test: isDivision }
        );

        this._generateTocItemInfoMap();
        this._generateNodeToDivisionIdMap();
        this._generateBlockToNumberMap();
    }

    /**
     * Get information about refable item that is included in the TOC.
     * The item is referred to by its id (explicit or auto-generated).
     */
    getTocItemInfo(node: XastNode) {
        const tocParentId = this._xastNodeToTocDivisionId.get(node);
        if (tocParentId) {
            return this._tocInfoMap.get(tocParentId);
        }
    }

    /**
     * Return TOC info relating to the target of an `<xref ... />` node.
     */
    getRefTargetInfo(node: XastElement) {
        const refTargetId = node.attributes?.ref || "";
        return this._xrefableMap.get(refTargetId);
    }

    /**
     * Get the display name of the division that `node` belongs to. (`node` could itself
     * be a division.) For example, if `node` is `<chapter>`, `"Chapter"` is returned.
     */
    getDivisionDisplayName(node: XastElement) {
        const tocParentId = this._xastNodeToTocDivisionId.get(node);
        const tocInfo = this._tocInfoMap.get(tocParentId || "");
        if (tocInfo) {
            return STRING_ID_TO_DISPLAY_NAME[tocInfo.item.division];
        }
    }

    /**
     * Returns information about the block `node`. This is used,
     * for example, when `node` is a `<definition>` element, etc.
     */
    getBlockInfo(node: XastElement) {
        const number = this._xastBlockToNumber.get(node);
        const divisionInfo = this.getTocItemInfo(node);
        if (!divisionInfo) {
            return;
        }
        return {
            displayName: STRING_ID_TO_DISPLAY_NAME[node.name] || node.name,
            number,
            divisionInfo,
        };
    }
}

// PartiallyRequired from https://pawelgrzybek.com/make-the-typescript-interface-partially-optional-required/
type PartiallyRequired<T, K extends keyof T> = Omit<T, K> &
    Required<Pick<T, K>>;
export type PretextStateWithProcessContent = PartiallyRequired<
    PretextState,
    "processContent"
>;
