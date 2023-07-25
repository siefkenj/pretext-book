/**
 * Main template for cleaning up hunks of raw text
 *
 *   1) Trim all trailing whitespace
 *   2) Add carriage return marker to last line
 *   3) Strip all totally blank leading lines
 *   4) Determine indentation of left-most non-blank line
 *   5) Strip indentation from all lines
 *   6) Allow intermediate blank lines
 *
 * From https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-text-utilities.xsl#L226C1-L233C62
 */
export function sanitizeText(text: string): string {
    let lines = text.trimEnd().split("\n");
    while (lines.length > 0 && lines[0].trim() === "") {
        lines.shift();
    }
    // Find minimum leading indentation
    // Replace tabs with four spaces first.
    lines = lines.map((l) => l.replace(/\t/g, "    "));
    lines = lines.map((l) => l.trimEnd());
    const minIndent = Math.min(
        ...lines.map((l) =>
            l.trim().length > 0 ? l.length - l.trimStart().length : Infinity,
        ),
        Infinity,
    );
    // Strip indentation
    lines = lines.map((l) => l.slice(minIndent));
    return lines.join("\n") + "\n";
}

/**
 * Xsl limits the precision of floats to 16 digits. This function truncates the number to 16 digits so our output appears
 * the same as the XSL output.
 */
export function toXslPercentage(value: number) {
    const strVal = `${value}`;
    let truncVal = strVal.slice(0, 16);
    if (strVal.endsWith("6667") && !truncVal.endsWith("6667")) {
        truncVal = truncVal.slice(0, truncVal.length - 1) + "7";
    }
    return `${truncVal}%`;
}
