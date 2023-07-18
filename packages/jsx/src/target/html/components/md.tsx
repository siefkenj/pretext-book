import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
import { toString } from "xast-util-to-string";
import { isElement } from "../../../utils/tools";
import { XastElement } from "../../../utils/xast";
import { toXml } from "xast-util-to-xml";

export const Md: ReplacerComponentWithId = function ({ node, id }) {
    const state = React.useContext(PretextStateContext);

    // If there are no `&` or `\amp`, we are a gather*, otherwise we are an align*
    const textContent = toString(node);
    let alignment =
        node.attributes?.alignment ||
        (textContent.includes("&") || textContent.includes("\\amp")
            ? "align"
            : "gather");

    if (!["align", "alignat", "gather"].includes(alignment)) {
        console.warn(`Unknown alignment for <md> tag: "${alignment}"`);
    }
    const rows = node.children.filter(
        (n) => isElement(n) && n.name === "mrow"
    ) as XastElement[];

    const starred = rows.some(
        (n) => n.attributes?.number === "yes" || n.attributes?.tag
    )
        ? ""
        : "*";

    let envParams = "";
    if (node.attributes?.["alignat-columns"]) {
        envParams = `{${node.attributes?.["alignat-columns"]}}`;
    } else if (alignment === "alignat") {
        // In this case, we automatically determine the number of columns
        // This algorithm is stupid. It just counts the number of ampersands that appear in a row.
        const numAmps = toString(rows[0]).split(/&|\\amp/).length - 1;
        // Follow the (rule amps + 1)/2 round up as specified by
        // https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-common.xsl#L1185
        envParams = `{${Math.ceil((numAmps + 1) / 2)}}`;
    }

    const innerText = rows
        .map((n) => {
            const base = toString(n);
            if (starred) {
                return base;
            }
            // If the environment is not starred, we need to add a \tag{number} or a \notag to the end of the line
            const number = state.getEquationNumber(n);
            if (number) {
                return base + "\\tag{" + number + "}";
            }
            return base + "\\notag";
        })
        .join("\\\\\n");

    return (
        <div className="displaymath process-math" id={id}>
            \begin{"{" + alignment + starred + "}"}
            {envParams} {innerText} \end
            {"{" + alignment + starred + "}"}
        </div>
    );
};
