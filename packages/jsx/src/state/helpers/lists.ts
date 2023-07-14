import { PretextState } from "..";
import { XastElement, XastRoot } from "../../utils/xast";

const CODE_TO_INDEX: Record<string, number> = {
    // For <ul>
    disc: 0,
    circle: 1,
    square: 2,

    // For <ol>
    "1": 0,
    a: 1,
    i: 2,
    A: 3,
    I: 4,
    "0": 0,
};

const UL_DEPTH_TO_MARKER: Record<number, string> = {
    0: "disc",
    1: "circle",
    2: "square",
};
const OL_DEPTH_TO_MARKER: Record<number, string> = {
    0: "1",
    1: "a",
    2: "i",
    3: "A",
    4: "I",
};

/**
 * Convert a marker string to a depth. A depth of -Infinity means there is a `""` marker or an
 * otherwise unrecognized marker.
 */
function markerToDepth(marker: string) {
    return CODE_TO_INDEX[marker] || -Infinity;
}

function depthToMarker(depth: number, type: "ul" | "ol") {
    if (type === "ul") {
        return UL_DEPTH_TO_MARKER[depth] || "";
    }
    return OL_DEPTH_TO_MARKER[depth] || "1";
}

export function normalizeMarker(marker: string, type: "ul" | "ol") {
    if (type === "ul") {
        return ["disc", "circle", "square"].includes(marker) ? marker : "";
    }
    // For <ol>, you are allowed to pass in additional formatting with the marker. E.g. `1)` or `(i)`.
    // We strip this away and return the first match
    const match = marker.match(/[01aiAI]/);
    if (match) {
        return match[0];
    }
    return "1";
}

/**
 * Get information about what type of label a list should have. This is done by walking up the
 * parents and counting down from the last one that has a specified label, cycling through the label types.
 */
export function getListItemInfo(this: PretextState, node: XastElement) {
    if (node.name !== "ol" && node.name !== "ul") {
        throw new Error(
            `getListInfo() can only be can only be called on <ol> and <ul> elements.`
        );
    }

    if (node.attributes?.marker != null) {
        const marker = normalizeMarker(node.attributes.marker, node.name);
        return { depth: markerToDepth(marker), marker, numParents: 0 };
    }

    const parents: XastElement[] = [];
    let parent: XastElement | XastRoot | undefined;
    const type = node.name;
    // If we encounter a list of another type, we break and counting resets
    const breakType = type === "ol" ? "ul" : "ol";
    do {
        parent = this._parentMap.get(parent || node);
        if (!parent || parent.type === "root") {
            break;
        }
        if (parent.name === breakType) {
            break;
        }
        if (parent.name === type) {
            parents.push(parent);
        }
    } while (parent);

    // We now have a list of all relevant parents. Find the nearest one to us that has a marker attribute.
    let numParents = 0;
    let parentDepth = 0;
    for (const parent of parents.reverse()) {
        numParents++;
        // Marker could be "" (an empty string), so we check for null explicitly
        if (parent.attributes?.marker != null) {
            parentDepth = markerToDepth(
                normalizeMarker(parent.attributes.marker, type)
            );
            break;
        }
    }
    let depth = numParents + parentDepth;
    if (depth > 0) {
        if (type === "ol") {
            depth = depth % 5;
        } else {
            depth = depth % 3;
        }
    }
    return { depth, marker: depthToMarker(depth, type), numParents };
}
