import { XastElement, XastText } from "../utils/xast";

export interface DocInfo {
    base?: string;
    lang?: string;
    brandlogo?: { url?: string; source: string }[];
    latex_preamble?: string[];
    latex_image_preamble?: { syntax?: "PGtikz"; content: string }[];
    asymptote_preamble?: string[];
    macros?: string[];
    cross_references?: XrefTextStyle;
    initialism?: string[];
    feedback?: string[];
    rename?: { element: string; lang: string; content: string }[];
    images?: { from?: string; content: string }[];
    author_biographies?: "short" | "long";
    numbering?: "decorative" | "structural";
}

export type XrefTextStyle =
    | "local"
    | "global"
    | "hybrid"
    | "type-local"
    | "type-global"
    | "type-hybrid"
    | "phrase-global"
    | "phrase-hybrid"
    | "title"
    | "custom";

/**
 * An index entry.
 */
type Idx = (XastElement | XastText)[];
type BlockText = (XastElement | XastText)[];
type TextLong = (XastElement | XastText)[];
type TextSimple = (XastElement | XastText)[];

export interface ArticleFrontMatter {
    xmlId?: string;
    title?: TextLong;
    titlepage: TitlePage;
    abstract?: BlockText;
    idx?: Idx[];
}

export interface TitlePage {
    authors: Author[];
    editors: Editor[];
    credits: Credit[];
    date?: TextSimple;
}

export interface Author {
    personname: TextSimple;
    department?: TextSimple;
    institution?: TextSimple;
    email?: TextSimple;
}
export type Editor = Author;

export interface Credit {
    title: TextLong;
    authors: Author[];
}
export type Toc = TocItem[];

export interface TocItem {
    /**
     * The XML extracted from the `<title />` element.
     */
    title: (XastElement | XastText)[];
    /**
     * The globally unique `id`. Contains only [a-zA-Z0-9_-]
     */
    id: string;
    /**
     * Division that the entry is part of. E.g. `section`, `subsection`, etc.
     */
    division: string;
    /**
     * Any descendent entries.
     */
    children: TocItem[];
}
