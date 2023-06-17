import { Element as XMLElement, Text as XMLText } from "xast";

/**
 * An index entry.
 */
type Idx = (XMLElement | XMLText)[];
type BlockText = (XMLElement | XMLText)[];
type TextLong = (XMLElement | XMLText)[];
type TextSimple = (XMLElement | XMLText)[];

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

/*
            DocInfo =
                element docinfo {
                    XMLBase?,
                    XMLLang?,
                    Configuration+
                }
XMLBase = attribute xml:base {text}
XMLLang = attribute xml:lang {text}
            Configuration |=
                element brandlogo {
                    attribute url {text}?,
                    attribute source {text}
                }
            
            Configuration |=
                element latex-preamble {
                    element package {text}*
                }
            Configuration |=
                element latex-image-preamble {
                    attribute syntax {"PGtikz"}?,
                    text
                }
            Configuration |=
                element asymptote-preamble {text}
            
            Configuration |=
                element macros {text}
            
            Configuration |=
                element
                    cross-references {
                        attribute text { XrefTextStyle }
                    }
            
            Configuration |=
                element initialism {text}
            
            Configuration |=
                element feedback {
                    element url {text}
                }
            
            Configuration |=
                element rename {
                    attribute element {text},
                    attribute xml:lang {text}?,
                    text
                }
            
            Configuration |=
                element images {
                    element archive {
                        attribute from {text}?,
                        text
                    }+
                }
            
            Configuration |=
                element author-biographies {
                    attribute length {"short" | "long"}
                }
            
            Configuration |=
                element numbering {
                    element division {
                        attribute part {"decorative" | "structural"}
                    }?
                }


            ArticleFrontMatter =
                element frontmatter {
                    MetaDataTitleOptional,
                    TitlePage,
                    Abstract?
                }
            BookFrontMatter = element frontmatter {
                    MetaDataTitleOptional,
                    TitlePage,
                    ColophonFront?,
                    Biography*,
                    Dedication?,
                    Acknowledgement?,
                    Preface*
                }
            TitlePage =
                element titlepage {
                    (
                        (Author, Author*, Editor*)
                        |
                        (Editor, Editor*)
                    ),
                    Credit*,
                    Date?
                }
*/
