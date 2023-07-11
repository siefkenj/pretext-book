import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { XastElement } from "@pretext-book/jsx/src/utils/xast";

export const Cell: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    return (
        <td className="b0 l l0 lines m r0 t0">
            {state.processContent(node.children)}
        </td>
    );
};

export const CellHeader: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    return (
        <th scope="col" className="b0 l l0 lines m r0 t0">
            {state.processContent(node.children)}
        </th>
    );
};

export const Row: ReplacerComponent = function ({ node }) {
    const isHeader = node.attributes?.header == "yes"
    const cells = node.children.filter((n) :n is XastElement=>n.type == "element" && n.name=="cell")
    if (isHeader) {
        return (
            <tr className="header-horizontal">
                {cells.map(c=>CellHeader({node: c}))}
            </tr>
        );
    } else {
        return (
            <tr>
                {cells.map(c=>Cell({node: c}))}
            </tr>
        )
    }
};

export const Tabular: ReplacerComponent = function ({ node }) {
    const rows = node.children.filter((n) :n is XastElement=>n.type == "element" && n.name=="row")

    return (
        <div className="natural-width tabular-box">
            <table className="tabular">
                <tbody>
                    {rows.map(r=>Row({node: r}))}
                </tbody>
            </table>
        </div>
    );
};
