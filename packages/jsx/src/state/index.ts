import Slugger from "github-slugger";
import { JsonGrammar } from "../utils/relax-ng/types";
import { ArticleFrontMatter, DocInfo, Toc } from "./types";

/**
 * Object to keep track of the global processing state during a transformation.
 * E.g., to generate unique ids, etc.
 */
export class PretextState {
    docinfo: DocInfo;
    schema: JsonGrammar | null;
    _slugger: Slugger;
    _declaredIdCache: Set<string>;
    frontmatter: ArticleFrontMatter;
    toc: Toc;

    constructor(schema?: JsonGrammar) {
        this.docinfo = {};
        this.schema = schema || null;
        this._slugger = new Slugger();
        this._declaredIdCache = new Set();
        this.frontmatter = {
            titlepage: { authors: [], credits: [], editors: [] },
        };
        this.toc = [];
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
}
