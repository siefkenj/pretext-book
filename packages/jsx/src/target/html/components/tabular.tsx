import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const Tabular: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return (
        <div className="natural-width tabular-box">
            <table className="tabular">
                <tbody>
                    {state.processContent(node.children)}
                </tbody>
            </table>
        </div>
    );
};
