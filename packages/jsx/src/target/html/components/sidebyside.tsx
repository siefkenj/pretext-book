import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { isElement } from "../../../utils/tools";
import { XastElement } from "../../../utils/xast";
import { computeMargins } from "../../../utils/compute-margins";
import classNames from "classnames";
import { toXslPercentage } from "../../../utils/pretext-text-utilities";

export const Sidebyside: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const cols = node.children.filter((n) => isElement(n)) as XastElement[];
    let {
        marginLeft,
        marginRight,
        wasAuto: marginsWereAuto,
    } = computeMargins(node);
    // We need to apply a fixed-width class if we have a tabular child...
    // https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-html.xsl#L6888-L6889
    const hasTabular = node.children.some(
        (n) => isElement(n) && (n.name === "tabular" || n.name === "table"),
    );

    let widths = computeWidths(
        node.attributes?.widths || "",
        cols.length,
        node.attributes.width || undefined,
    );
    // If the margins were auto computed and the widths sum up to less than 100, we need to recompute the margins
    let sumWidths = sum(...widths);
    if (sumWidths < 100 && marginsWereAuto) {
        const marginSpace = 100 - sumWidths;
        marginLeft = marginRight = marginSpace / (2 * cols.length);
    }
    const alignments = computeAlignment(
        node.attributes?.valigns || "",
        cols.length,
        node.attributes.valign || undefined,
    );

    const remainingSpace = (100 - marginLeft - marginRight) / 100;

    return (
        <div className="sidebyside">
            <div
                className="sbsrow"
                style={{
                    marginLeft: toXslPercentage(marginLeft),
                    marginRight: toXslPercentage(marginRight),
                }}
            >
                {cols.map((col, i) => (
                    <div
                        className={classNames("sbspanel", alignments[i], {
                            "fixed-width": hasTabular,
                        })}
                        key={i}
                        style={{
                            width: toXslPercentage(widths[i] / remainingSpace),
                        }}
                    >
                        {state.processContent(col)}
                    </div>
                ))}
            </div>
        </div>
    );
};

function computeWidths(widths: string, cols: number, defaultWidth?: string) {
    widths = widths.trim();
    widths = widths.replace(/%/g, "");
    let _defaultWidth: number | undefined = undefined;
    if (defaultWidth) {
        defaultWidth = defaultWidth.replace(/%/g, "").trim();
        if (!Number.isNaN(Number(defaultWidth))) {
            _defaultWidth = Number(defaultWidth);
        }
    }
    const numericWidths = widths
        .split(/\s+/)
        .filter((w) => w)
        .map((w) => Number(w));
    if (numericWidths.length !== cols) {
        return Array.from({ length: cols }).map(
            (_) => _defaultWidth || 100 / cols,
        );
    }
    return numericWidths;
}

function computeAlignment(
    alignments: string,
    cols: number,
    defaultAlign?: string,
) {
    alignments = alignments.trim();
    const alignmentsArr = alignments.split(/\s+/).filter((a) => a);
    if (alignmentsArr.length !== cols) {
        return alignmentsArr.concat(
            Array.from({ length: cols - alignments.length }).map(
                (_) => defaultAlign || "top",
            ),
        );
    }
    return alignmentsArr;
}

function sum(...nums: number[]) {
    let ret = 0;
    for (const num of nums) {
        ret += num;
    }
    return ret;
}
