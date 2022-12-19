import { Element as XMLElement, Root } from "xast";
import { visit as origVisit } from "unist-util-visit";

const castVisit = origVisit as any;

/**
 * A wrapper around `unist-util-visit` to work around a typescript bug.
 * 
 * See
 * https://github.com/microsoft/TypeScript/issues/46900
 * https://github.com/syntax-tree/unist-util-visit/issues/33
 *
 */
export const xmlVisit = (
    ast: XMLElement | Root,
    test: (...args: any[]) => boolean,
    callback: (
        node: XMLElement,
        index: number | null,
        parent: XMLElement | undefined | null
    ) => any
) => {
    return castVisit(ast, test, callback);
};
