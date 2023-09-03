import React from "react";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";
import { multiElmMatcher } from "../../../utils/tools";
import { XastElement, XastText } from "../../../utils/xast";
import { toString } from "xast-util-to-string";
import { sanitizeText } from "../../../utils/pretext-text-utilities";
import classNames from "classnames";

const isSageContent = multiElmMatcher(["input"]);

function wrapText(node: XastText | undefined | null): XastElement {
    return {
        type: "element",
        name: "input",
        attributes: {},
        children: [node || { type: "text", value: "" }],
    };
}

export const Sage: ReplacerComponentWithId = function ({ node, id }) {
    const children = node.children.filter((n) =>
        isSageContent(n),
    ) as XastElement[];

    const isPracticeCell = node.attributes.type === "practice";
    if (isPracticeCell) {
        // We are a Sage practice cell (i.e., Python/Sage)
        // Add a default comment as per https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-common.xsl#L1700

        children.push(
            wrapText(
                (node.children.find((n) => n.type === "text") as XastText) || {
                    type: "text",
                    value: "# Practice area (not linked for Sage Cell use)\n",
                },
            ),
        );
    }

    if (children.length === 0) {
        children.push(
            wrapText(node.children.find((n) => n.type === "text") as XastText),
        );
    }

    return (
        <pre
            className={classNames("ptx-sagecell", {
                [`sagecell-${node.attributes.language || "sage"}`]:
                    !isPracticeCell,
                "sagecell-practice": isPracticeCell,
            })}
            id={id}
        >
            {children.map((n, i) => {
                const value = toString(n);
                // A <program> element only has one <input> as a child that is always rendered the same way

                return <Input key={i} value={value} />;
            })}
        </pre>
    );
};

function Input({ value }: { value: string }) {
    value = sanitizeText(value);
    // Trailing newlines are stripped because PreTeXt does this.
    if (!value.trim()) {
        value = "";
    }
    return <script type="text/x-sage">{value}</script>;
}
