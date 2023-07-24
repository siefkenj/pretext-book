import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { multiElmMatcher } from "../../../utils/tools";
import { XastElement } from "../../../utils/xast";
import { toString } from "xast-util-to-string";
import { sanitizeText } from "../../../utils/pretext-text-utilities";

const isConsoleContent = multiElmMatcher(["prompt", "input", "output"]);

export const Console: ReplacerComponent = function ({ node }) {
    const children = node.children.filter((n) =>
        isConsoleContent(n)
    ) as XastElement[];

    let [leftMargin, rightMargin] = node.attributes?.margins
        ?.trim()
        ?.split(/\s+/)
        ?.map((m) => Number(m.replace("%", ""))) || [0, 0];
    if (rightMargin == null) {
        rightMargin = leftMargin;
    }
    if (Number.isNaN(leftMargin)) {
        leftMargin = 0;
    }
    if (Number.isNaN(rightMargin)) {
        rightMargin = 0;
    }
    let width = Number((node.attributes?.width || "100%").replace("%", ""));
    if (Number.isNaN(width)) {
        width = 100;
    }
    // If the margins are not specified, we need to calculate them from the width
    if (leftMargin == null || rightMargin == null) {
        leftMargin = (100 - width) / 2;
        rightMargin = (100 - width) / 2;
    }
    if (width + leftMargin + rightMargin !== 100) {
        width = 100 - (leftMargin + rightMargin);
    }

    return (
        <div
            className="code-box"
            style={{
                width: `${width}%`,
                marginLeft: `${leftMargin}%`,
                marginRight: `${rightMargin}%`,
            }}
        >
            <pre className="console">
                {children.map((n, i) => {
                    const value = toString(n);
                    switch (n.name) {
                        case "prompt":
                            return <Prompt key={i} value={value} />;
                        case "input":
                            return <Input key={i} value={value} />;
                        case "output":
                            return <Output key={i} value={value} />;
                    }
                    return null;
                })}
            </pre>
        </div>
    );
};

function Prompt({ value }: { value: string }) {
    return <span className="prompt unselectable">{value}</span>;
}

function Input({ value }: { value: string }) {
    return <b>{sanitizeText(value)}</b>;
}

function Output({ value }: { value: string }) {
    return <React.Fragment>{sanitizeText(value)}</React.Fragment>;
}
