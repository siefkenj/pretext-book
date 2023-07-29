import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { multiElmMatcher } from "../../../utils/tools";
import { XastElement } from "../../../utils/xast";
import { toString } from "xast-util-to-string";
import { sanitizeText } from "../../../utils/pretext-text-utilities";
import { computeMargins } from "../../../utils/compute-margins";

const isConsoleContent = multiElmMatcher(["prompt", "input", "output"]);

export const Console: ReplacerComponent = function ({ node }) {
    const children = node.children.filter((n) =>
        isConsoleContent(n),
    ) as XastElement[];

    const { width, marginLeft, marginRight } = computeMargins(node);

    return (
        <div
            className="code-box"
            style={{
                width: `${width}%`,
                marginLeft: `${marginLeft}%`,
                marginRight: `${marginRight}%`,
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
