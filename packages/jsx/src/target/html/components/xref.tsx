import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { STRING_ID_TO_DISPLAY_NAME } from "@typescript-xml/jsx/src/state/i18n";

function isEquation(name: string): boolean {
    return name === "men" || name === "mrow";
}

export const XRef: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const targetInfo = state.getRefTargetInfo(node);

    if (!targetInfo) {
        return <span className="missing-reference">REFERENCE ??</span>;
    }

    if (isEquation(targetInfo.tag)) {
        return <a href={`#${targetInfo.id}`}>({targetInfo.codenumber})</a>;
    }

    const localisedName = STRING_ID_TO_DISPLAY_NAME[targetInfo.tag];
    const fullName = `${localisedName} ${targetInfo.codenumber}`;

    return (
        <a
            href={`#${targetInfo.id}`}
            title={`Cross-Reference to ${fullName}`}
            className="internal"
        >
            {fullName}
            {state.processContent(node.children)}
        </a>
    );
};
