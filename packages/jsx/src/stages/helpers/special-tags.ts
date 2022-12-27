import { elmMatcher, isElement } from "../../utils/tools";
import { XastElement } from "../../utils/xast";

/** Division elements. They get ids auto-generated */
export const DIVISIONS = new Set([
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

/** Elements that can be referenced. They get an id auto-generated */
export const REFABLE = new Set([
    "mrow",
    "author",
    "alert",
    "angles",
    "articletitle",
    "attribution",
    "biblio",
    "caption",
    "cell",
    "dblbrackets",
    "delete",
    "em",
    "entity",
    "fn",
    "foreign",
    "insert",
    "intertext",
    "line",
    "pubtitle",
    "q",
    "shortlicense",
    "sq",
    "stale",
    "subtitle",
    "term",
    "title",
    "p",
    "li",
]);

/** Matches a `<title>` element. */
export const isTitleNode = elmMatcher("title");
/** Matches an element that can serve as a division. */
export const isDivision = (node: any): node is XastElement => {
    return isElement(node) && DIVISIONS.has(node.name);
};
/** Matches any element that can be referenced. */
export const isRefable = (node: any): node is XastElement => {
    return isElement(node) && REFABLE.has(node.name);
};
