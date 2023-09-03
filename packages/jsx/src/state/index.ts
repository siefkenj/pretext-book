import Slugger from "github-slugger";
import { isDivision, NUMBERED_BLOCKS } from "../stages/helpers/special-tags";
import { JsonGrammar } from "../utils/relax-ng/types";
import { isElement } from "../utils/tools";
import {
    ProcessContentFunc,
    visit,
    XastNode,
    XastElement,
    XastRoot,
} from "../utils/xast";
import { STRING_ID_TO_DISPLAY_NAME } from "./i18n";
import { _generateToc, _generateTocItemInfoMap } from "./helpers/toc";
import { ArticleFrontMatter, DocInfo, Toc, TocItem } from "./types";
import { _generateRefalbeInfoMap } from "./helpers/refs";
import { getListItemInfo } from "./helpers/lists";
import { _generateEquationNumberingMap } from "./helpers/numbering";

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
    _parentMap: WeakMap<XastNode, XastElement | XastRoot>;
    _xastNodeToTocDivisionId: WeakMap<XastNode, string>;
    _xastDivisions: WeakSet<XastElement>;
    _xastBlockToNumber: WeakMap<XastElement, number>;
    _equationNumberingMap: Map<string, number> = new Map();

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

    /**
     * Set the root node of the XAST tree. This function
     * also generates information needed for the TOC, etc.
     */
    setRoot(root: XastRoot) {
        this.root = root;
        this._generateParentMap();
        this._generateToc();
        this._generateRefalbeInfoMap();
        this._generateEquationNumberingMap();
    }

    _generateParentMap() {
        visit(this.root, (node, info) => {
            const parent = info.parents[0];
            if (parent) {
                this._parentMap.set(node, parent as XastElement | XastRoot);
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
            { test: isElement },
        );
    }

    /**
     * Generate a map from TOC item ids to information about that item.
     */
    _generateTocItemInfoMap = _generateTocItemInfoMap;

    /**
     * Map every element to its nearest division parent.
     */
    _generateNodeToDivisionIdMap() {
        visit(this.root, (node, info) => {
            if (isElement(node) && this._xastDivisions.has(node)) {
                this._xastNodeToTocDivisionId.set(
                    node,
                    node.attributes?.["xml:id"] || "",
                );
                return;
            }
            // We just walk up the parents tree until we find one that is
            // recorded as a division. That is assumed to be its "division parent"
            for (const parent of info.parents) {
                if (isElement(parent) && this._xastDivisions.has(parent)) {
                    this._xastNodeToTocDivisionId.set(
                        node,
                        parent.attributes?.["xml:id"] || "",
                    );
                    break;
                }
            }
        });
    }

    /**
     * Generate a map for all items that can be xref-ed.
     */
    _generateRefalbeInfoMap = _generateRefalbeInfoMap;

    /**
     * Extract table of contents information from the tree. Nodes are left intact in the process.
     */
    _generateToc = _generateToc;

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

    /**
     * Get information about a <caption> element.
     */
    getCaptionInfo(node: XastElement) {
        const parent = this._parentMap.get(node);
        if (!parent || !isElement(parent)) {
            throw new Error("Could not find parent of caption");
        }
        return this.getBlockInfo(parent);
    }

    /**
     * Get information about what type of label a list should have. This is done by walking up the
     * parents and counting down from the last one that has a specified label, cycling through the label types.
     */
    getListItemInfo = getListItemInfo;

    /**
     * Generates numbering for all equations. Numbering works as follows: every single
     * refable item is assigned a number. The number is incremented when a numbered equation
     * is encountered. This information can be used to compute the number of an equation
     * by first looking up the number of the parent division and then taking the difference
     * between that and the number of the equation.
     */
    _generateEquationNumberingMap = _generateEquationNumberingMap;

    getEquationNumber(node: XastElement) {
        // If this element cannot take a number, we return null.
        const parent = this._parentMap.get(node) as XastElement | undefined;
        if (
            node.name === "me" ||
            node.attributes?.number === "no" ||
            node.attributes?.tag ||
            (parent?.name === "md" &&
                parent?.attributes?.number !== "yes" &&
                node.attributes?.number !== "yes")
        ) {
            return "";
        }

        const id = node.attributes?.["xml:id"];
        const eqRawNum = this._equationNumberingMap.get(id || "") || 0;
        const parentDivisionId = this._xastNodeToTocDivisionId.get(node);
        const parentDivision = this._xrefableMap.get(parentDivisionId || "");
        if (!parentDivision || !parentDivision.codenumber) {
            return `${eqRawNum + 1}`;
        }
        const parentDivisionNumber =
            this._equationNumberingMap.get(parentDivision.id) || 0;

        return `${parentDivision.codenumber}.${
            eqRawNum - parentDivisionNumber + 1
        }`;
    }

    /**
     * Returns whether `node` is a child of an element with name `parentName`.
     */
    isChildOf(node: XastNode, parentName: string) {
        const parent = this._parentMap.get(node);
        return parent && isElement(parent) && parent.name === parentName;
    }
}

// PartiallyRequired from https://pawelgrzybek.com/make-the-typescript-interface-partially-optional-required/
type PartiallyRequired<T, K extends keyof T> = Omit<T, K> &
    Required<Pick<T, K>>;
export type PretextStateWithProcessContent = PartiallyRequired<
    PretextState,
    "processContent"
>;
