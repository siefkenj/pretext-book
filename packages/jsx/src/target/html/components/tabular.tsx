import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { XastElement } from "@pretext-book/jsx/src/utils/xast";

export const Tabular: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const rows = node.children.filter(
        (n): n is XastElement => n.type == "element" && n.name == "row"
    );
    const cols = node.children.filter(
        (n): n is XastElement => n.type == "element" && n.name == "col"
    );

    return (
        <div className="natural-width tabular-box">
            <table className="tabular">
                <tbody>
                    {rows.map((r) => {
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
                                {cells.map((c) => {
                                    if (isHeader) {
                                        return (
                                            <th
                                                className="b0 l l0 lines m r0 t0"
                                                scope="col"
                                            >
                                                {state.processContent(
                                                    c.children
                                                )}
                                            </th>
                                        );
                                    } else {
                                        return (
                                            <td className="b0 l l0 lines m r0 t0">
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
