import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { multiElmMatcher } from "../../../utils/tools";
import { XastElement } from "../../../utils/xast";
import { toString } from "xast-util-to-string";
import { sanitizeText } from "../../../utils/pretext-text-utilities";
import { computeMargins } from "../../../utils/compute-margins";
import { LANGUAGE_NAMES } from "../../../stages/helpers/languages";

const isConsoleContent = multiElmMatcher(["prompt", "input", "output"]);

export const ConsoleOrProgramPure: PureFunctionComponent<{
    type: "console" | "program";
    width: number;
    marginLeft: number;
    marginRight: number;
}> = function ({ type, width, marginLeft, marginRight, children }) {
    return (
        <div
            className="code-box"
            style={{
                width: `${width}%`,
                marginLeft: `${marginLeft}%`,
                marginRight: `${marginRight}%`,
            }}
        >
            <pre className={type}>{children}</pre>
        </div>
    );
};

export const ConsoleOrProgram: ReplacerComponent = function ({ node }) {
    const type = node.name as "console" | "program";
    const children = (
        node.children.filter((n) => isConsoleContent(n)) as XastElement[]
    ).map((n, i) => {
        const value = toString(n);
        // A <program> element only has one <input> as a child that is always rendered the same way
        if (type === "program") {
            return (
                <ProgramSource
                    key={i}
                    value={value}
                    language={node.attributes["language"] || ""}
                />
            );
        }

        switch (n.name) {
            case "prompt":
                return <Prompt key={i} value={value} />;
            case "input":
                return <Input key={i} value={value} />;
            case "output":
                return <Output key={i} value={value} />;
        }
        return null;
    });

    const { width, marginLeft, marginRight } = computeMargins(node);

    return (
        <ConsoleOrProgramPure
            type={type}
            width={width}
            marginLeft={marginLeft}
            marginRight={marginRight}
        >
            {children}
        </ConsoleOrProgramPure>
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

function ProgramSource({
    value,
    language,
}: {
    value: string;
    language: string;
}) {
    const prismLanguage = LANGUAGE_NAMES[language]?.prism;

    return (
        <code className={`language-${prismLanguage}`}>
            {sanitizeText(value)}
        </code>
    );
}
