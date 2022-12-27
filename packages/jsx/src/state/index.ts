import Slugger from "github-slugger";
import { toXml } from "xast-util-to-xml";
import { JsonGrammar } from "../utils/relax-ng/types";
import { elmMatcher, isElement, onlyElementsAndText } from "../utils/tools";
import {
    ProcessContentFunc,
    visit,
    XastNode,
    XastElement,
    XastRoot,
} from "../utils/xast";
import { ArticleFrontMatter, DocInfo, Toc, TocItem } from "./types";

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
    root: XastRoot;
    /**
     * Function that continues processing content with XastToReact's `processContent` function.
     * This property must be set some time in the rendering phase.
     */
    processContent?: ProcessContentFunc;
    _parentMap: WeakMap<XastNode, XastNode>;
    _xastNodeToTocDivisionId: WeakMap<XastNode, string>;
    _xastDivisions: WeakSet<XastElement>;

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
        this.root = { type: "root", children: [] };
        this._parentMap = new WeakMap();
        this._xastNodeToTocDivisionId = new WeakMap();
        this._xastDivisions = new WeakSet();
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
    }

    _generateParentMap() {
        visit(this.root, (node, info) => {
            const parent = info.parents[0];
            if (parent) {
                this._parentMap.set(node, parent);
            }
        });
    }

    /**
     * Generate a map from TOC item ids to information about that item.
     */
    _generateTocItemInfoMap() {
        const map: typeof this._tocInfoMap = new Map();

        const traverse = (items: TocItem[], level = 0, parent?: TocItem) => {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const parentInfo = map.get(parent?.id || "");
                let numbering = [i];
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
     * Extract table of contents information from the tree. Nodes are left intact in the process.
     */
    _generateToc() {
        const DIVISIONS = new Set([
            "book",
            "article",
            "part",
            "chapter",
            "section",
            "subsection",
            "subsubsection",
            "paragraphs",
            // These are special divisions; they can still be referenced.
            "frontmatter",
            "introduction",
            "conclusion",
            "headnote",
        ]);

        const isTitleNode = elmMatcher("title");
        const isDivision = (node: any): node is XastElement => {
            return isElement(node) && DIVISIONS.has(node.name);
        };

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
                if (!isElement(parent) || !parent.attributes?.["xml:id"]) {
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
}

// PartiallyRequired from https://pawelgrzybek.com/make-the-typescript-interface-partially-optional-required/
type PartiallyRequired<T, K extends keyof T> = Omit<T, K> &
    Required<Pick<T, K>>;
export type PretextStateWithProcessContent = PartiallyRequired<
    PretextState,
    "processContent"
>;
