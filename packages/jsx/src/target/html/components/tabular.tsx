import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { XastElement } from "@pretext-book/jsx/src/utils/xast";

const cellClasses = function (
    tabular: XastElement,
    r_index: number,
    c_index: number
): string {
    const rows = tabular.children.filter(
        (n): n is XastElement => n.type == "element" && n.name == "row"
    );
    const cols = tabular.children.filter(
        (n): n is XastElement => n.type == "element" && n.name == "col"
    );
    const row: XastElement = rows[r_index];
    const cells = row.children.filter(
        (n): n is XastElement => n.type == "element" && n.name == "cell"
    );
    const cell: XastElement = cells[c_index];
    const col: XastElement | undefined = cols[c_index];

    const toNum = (s: string | null | undefined) => {
        if (s == "major") {
            return "3";
        }
        if (s == "medium") {
            return "2";
        }
        if (s == "minor") {
            return "1";
        }
        return "0";
    };

    let bottomLine: string = "b0";
    if (tabular.attributes?.bottom && r_index == rows.length - 1) {
        bottomLine = "b" + toNum(tabular.attributes.bottom);
    }
    // if (col?.attributes?.bottom && r_index == rows.length - 1) {
    //     bottomLine = "b" + toNum(col.attributes.bottom);
    // }
    if (row.attributes?.bottom) {
        bottomLine = "b" + toNum(row.attributes.bottom);
    }
    if (cell.attributes?.bottom) {
        bottomLine = "b" + toNum(cell.attributes.bottom);
    }

    let topLine: string = "t0";
    if (tabular.attributes?.top && r_index == 0) {
        topLine = "t" + toNum(tabular.attributes.top);
    }
    if (col?.attributes?.top && r_index == 0) {
        topLine = "t" + toNum(col.attributes.top);
    }
    // if (row.attributes?.top) {
    //     topLine = "t" + toNum(row.attributes.top);
    // }
    // if (cell.attributes?.top) {
    //     topLine = "t" + toNum(cell.attributes.top);
    // }

    let leftLine: string = "l0";
    if (tabular.attributes?.left && c_index == 0) {
        leftLine = "l" + toNum(tabular.attributes.left);
    }
    // if (col?.attributes?.left) {
    //     leftLine = "l" + toNum(col.attributes.left);
    // }
    if (row.attributes?.left && c_index == 0) {
        leftLine = "l" + toNum(row.attributes.left);
    }
    // if (cell.attributes?.left) {
    //     leftLine = "l" + toNum(cell.attributes.left);
    // }

    let rightLine: string = "r0";
    if (tabular.attributes?.right && c_index == cells.length - 1) {
        rightLine = "r" + toNum(tabular.attributes.right);
    }
    if (col?.attributes?.right) {
        rightLine = "r" + toNum(col.attributes.right);
    }
    // if (row.attributes?.right && c_index == cells.length - 1) {
    //     rightLine = "r" + toNum(row.attributes.right);
    // }
    if (cell.attributes?.right) {
        rightLine = "r" + toNum(cell.attributes.right);
    }

    const toVAlign = (s: string | null | undefined) => {
        if (s == "top") {
            return "t";
        }
        if (s == "bottom") {
            return "b";
        }
        return "m"; // middle
    };
    let vAlign: string = "m";
    if (tabular.attributes?.valign) {
        vAlign = toVAlign(tabular.attributes.valign);
    }
    // if (col?.attributes?.halign) {
    //     vAlign = toVAlign(col.attributes.valign);
    // }
    if (row?.attributes?.halign) {
        vAlign = toVAlign(row.attributes.valign);
    }
    // if (cell?.attributes?.halign) {
    //     vAlign = toVAlign(cell.attributes.valign);
    // }

    const toHAlign = (s: string | null | undefined) => {
        if (s == "center") {
            return "c";
        }
        if (s == "right") {
            return "r";
        }
        if (s == "justify") {
            return "j";
        }
        return "l"; // left
    };

    let hAlign: string = "l";
    if (tabular.attributes?.halign) {
        hAlign = toHAlign(tabular.attributes.halign);
    }
    if (col?.attributes?.halign) {
        hAlign = toHAlign(col.attributes.halign);
    }
    if (row?.attributes?.halign) {
        hAlign = toHAlign(row.attributes.halign);
    }
    if (cell?.attributes?.halign) {
        hAlign = toHAlign(cell.attributes.halign);
    }

    return `lines ${vAlign} ${hAlign} ${bottomLine} ${topLine} ${leftLine} ${rightLine}`;
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
                    {rows.map((r, r_index) => {
                        const isHeader = r.attributes?.header == "yes";
                        const cells = r.children.filter(
                            (n): n is XastElement =>
                                n.type == "element" && n.name == "cell"
                        );
                        return (
                            <tr
                                className={
                                    isHeader ? "header-horizontal" : undefined
                                }
                            >
                                {cells.map((c, c_index) => {
                                    if (isHeader) {
                                        return (
                                            <th
                                                className={cellClasses(
                                                    node,
                                                    r_index,
                                                    c_index
                                                )}
                                                scope="col"
                                            >
                                                {state.processContent(
                                                    c.children
                                                )}
                                            </th>
                                        );
                                    } else {
                                        return (
                                            <td
                                                className={cellClasses(
                                                    node,
                                                    r_index,
                                                    c_index
                                                )}
                                            >
                                                {state.processContent(
                                                    c.children
                                                )}
                                            </td>
                                        );
                                    }
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
