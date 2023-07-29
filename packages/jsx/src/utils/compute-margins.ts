import { XastElement } from "./xast";

/**
 * Compute the margins from the `margins` and `width` attributes.
 *
 * Algorithm follows: https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-common.xsl#L5039-L5040
 */
export function computeMargins(node: XastElement) {
    let wasAuto = false;
    let marginString = node.attributes.margins ?? "";
    let [marginLeft, marginRight] = marginString
        .split(/\s+/g)
        .filter((x) => x)
        .map(normalizeMarginValue);
    if (marginLeft == null) {
        marginLeft = "auto";
    }
    if (marginRight == null) {
        marginRight = marginLeft;
    }

    let width = normalizeMarginValue(node.attributes.width ?? "auto");
    if (width === "auto" && marginLeft === "auto" && marginRight === "auto") {
        wasAuto = true;
        width = 100;
        marginLeft = 0;
        marginRight = 0;
    }
    if (width === "auto" && marginLeft === "auto") {
        marginLeft = 0;
        width = 100 - +marginRight;
    }
    if (width === "auto" && marginRight === "auto") {
        marginRight = 0;
        width = 100 - +marginLeft;
    }
    if (width === "auto") {
        width = 100 - +marginLeft - +marginRight;
    }
    if (marginLeft === "auto" && marginRight === "auto") {
        marginLeft = (100 - +width) / 2;
        marginRight = marginLeft;
    }
    if (marginLeft === "auto") {
        marginLeft = 100 - +width - +marginRight;
    }
    if (marginRight === "auto") {
        marginRight = 100 - +width - +marginLeft;
    }

    return { width: Number(width), marginLeft, marginRight, wasAuto };
}

/**
 * Turn the value of a margin into `"auto"` or a number.
 */
function normalizeMarginValue(value: string) {
    const guess = Number(value.replace("%", ""));
    if (Number.isNaN(guess)) {
        return "auto";
    }
    return guess;
}
