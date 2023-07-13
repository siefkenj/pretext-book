import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { XastElement } from "@pretext-book/jsx/src/utils/xast";

const weightNum = { major: "3", medium: "2", minor: "1", none: "0" };
const weightAttrNum = (s: string | null | undefined) => {
    if (s && s in weightNum) {
        return weightNum[s as keyof typeof weightNum];
    }
    return "0"; // default none
};

const vAlignAbbr = { top: "t", bottom: "b", middle: "m" };
const vAlignAttrAbbr = (s: string | null | undefined) => {
    if (s && s in vAlignAbbr) {
        return vAlignAbbr[s as keyof typeof vAlignAbbr];
    }
    return "m"; // default middle
};

const hAlignAbbr = { center: "c", right: "r", justify: "j", left: "l" };
const hAlignAttrAbbr = (s: string | null | undefined) => {
    if (s && s in hAlignAbbr) {
        return hAlignAbbr[s as keyof typeof hAlignAbbr];
    }
    return "l"; // default left
};

const cellClassName = function (
    tabular: XastElement,
    row_index: number,
    col_index: number
): string {
    const rows = tabular.children.filter(
        (n): n is XastElement => n.type == "element" && n.name == "row"
    );
    const row: XastElement = rows[row_index];

    // col may be undefined
    const cols = tabular.children.filter(
        (n): n is XastElement => n.type == "element" && n.name == "col"
    );
    const col: XastElement | undefined = cols[col_index];

    const cells = row.children.filter(
        (n): n is XastElement => n.type == "element" && n.name == "cell"
    );
    const cell: XastElement = cells[col_index];

    let lines = {
        // defaults
        bottom: weightAttrNum(null),
        top: weightAttrNum(null),
        left: weightAttrNum(null),
        right: weightAttrNum(null),
    };

    // Weights are assigned in increasing priority: tabular, col, row, then cell
    // Commented out sections below are for non-schema-compliant attributes

    if (tabular.attributes?.bottom && row_index == rows.length - 1) {
        lines.bottom = weightAttrNum(tabular.attributes.bottom);
    }
    // if (col?.attributes?.bottom && row_index == rows.length - 1) {
    //     lines.bottom = weightAttrNum(col.attributes.bottom);
    // }
    if (row.attributes?.bottom) {
        lines.bottom = weightAttrNum(row.attributes.bottom);
    }
    if (cell.attributes?.bottom) {
        lines.bottom = weightAttrNum(cell.attributes.bottom);
    }

    if (tabular.attributes?.top && row_index == 0) {
        lines.top = weightAttrNum(tabular.attributes.top);
    }
    if (col?.attributes?.top && row_index == 0) {
        lines.top = weightAttrNum(col.attributes.top);
    }
    // if (row.attributes?.top) {
    //     lines.top = weightAttrNum(row.attributes.top);
    // }
    // if (cell.attributes?.top) {
    //     lines.top = weightAttrNum(cell.attributes.top);
    // }

    if (tabular.attributes?.left && col_index == 0) {
        lines.left = weightAttrNum(tabular.attributes.left);
    }
    // if (col?.attributes?.left) {
    //     lines.left = weightAttrNum(col.attributes.left);
    // }
    if (row.attributes?.left && col_index == 0) {
        lines.left = weightAttrNum(row.attributes.left);
    }
    // if (cell.attributes?.left) {
    //     lines.left = weightAttrNum(cell.attributes.left);
    // }

    if (tabular.attributes?.right && col_index == cells.length - 1) {
        lines.right = weightAttrNum(tabular.attributes.right);
    }
    if (col?.attributes?.right) {
        lines.right = weightAttrNum(col.attributes.right);
    }
    // if (row.attributes?.right && col_index == cells.length - 1) {
    //     lines.right = weightAttrNum(row.attributes.right);
    // }
    if (cell.attributes?.right) {
        lines.right = weightAttrNum(cell.attributes.right);
    }

    let align = {
        // defaults
        vertical: vAlignAttrAbbr(null),
        horizontal: hAlignAttrAbbr(null),
    };

    if (tabular.attributes?.valign) {
        align.vertical = vAlignAttrAbbr(tabular.attributes.valign);
    }
    // if (col?.attributes?.halign) {
    //     align.vertical = vAlignAttrAbbr(col.attributes.valign);
    // }
    if (row?.attributes?.halign) {
        align.vertical = vAlignAttrAbbr(row.attributes.valign);
    }
    // if (cell?.attributes?.halign) {
    //     align.vertical = vAlignAttrAbbr(cell.attributes.valign);
    // }

    if (tabular.attributes?.halign) {
        align.horizontal = hAlignAttrAbbr(tabular.attributes.halign);
    }
    if (col?.attributes?.halign) {
        align.horizontal = hAlignAttrAbbr(col.attributes.halign);
    }
    if (row.attributes?.halign) {
        align.horizontal = hAlignAttrAbbr(row.attributes.halign);
    }
    if (cell.attributes?.halign) {
        align.horizontal = hAlignAttrAbbr(cell.attributes.halign);
    }

    return `lines b${lines.bottom} t${lines.top} l${lines.left} r${lines.right} ${align.vertical} ${align.horizontal}`;
};

export const Tabular: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const rows = node.children.filter(
        (n): n is XastElement => n.type == "element" && n.name == "row"
    );

    return (
        <div className="natural-width tabular-box">
            <table className="tabular">
                <tbody>
                    {rows.map((row, row_index) => {
                        const isHeader = row.attributes?.header == "yes";
                        // CellTag is `th` or `td`
                        const CellTag = `t${
                            isHeader ? "h" : "d"
                        }` as keyof JSX.IntrinsicElements;
                        const cells = row.children.filter(
                            (n): n is XastElement =>
                                n.type == "element" && n.name == "cell"
                        );
                        return (
                            <tr
                                className={
                                    isHeader ? "header-horizontal" : undefined
                                }
                            >
                                {cells.map((cell, col_index) => {
                                    return (
                                        <CellTag
                                            className={cellClassName(
                                                node,
                                                row_index,
                                                col_index
                                            )}
                                            scope={isHeader ? "col" : undefined}
                                        >
                                            {state.processContent(cell.children)}
                                        </CellTag>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
