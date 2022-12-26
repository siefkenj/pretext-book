import { XastAst } from "./types";
import { VisitInfo } from "./visit";

/**
 * Replaces the current node with `replacement`. It is assumed that the current
 * node is in an array that is a child of a parent element. If this is not the case,
 * the function will error.
 */
export function replaceNodeDuringVisit(
    replacement: XastAst | XastAst[],
    info: VisitInfo
) {
    const parent = info.parents[0];
    if (!parent) {
        throw new Error(`Cannot replace node: parent not found`);
    }
    const container = parent[info.key as keyof typeof parent] as
        | XastAst[]
        | undefined;
    if (!Array.isArray(container)) {
        throw new Error(`Cannot replace node: containing array not found`);
    }
    if (info.index == null) {
        throw new Error(`Cannot replace node: node index undefined`);
    }
    if (!Array.isArray(replacement)) {
        container[info.index] = replacement;
    } else {
        container.splice(info.index, 1, ...replacement);
    }
}
