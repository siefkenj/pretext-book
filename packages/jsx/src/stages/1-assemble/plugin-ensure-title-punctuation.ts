import { Plugin } from "unified";
import { toString } from "xast-util-to-string";
import { PretextRoot } from "../../assets/types";
import { visit, XastElement } from "../../utils/xast";
import {
    ASIDE_LIKE,
    AXIOM_LIKE,
    COMPUTATION_LIKE,
    DEFINITION_LIKE,
    EXAMPLE_LIKE,
    PROJECT_LIKE,
    PROOF_LIKE,
    REMARK_LIKE,
    THEOREM_LIKE,
} from "../helpers/entities";
import { isTitleNode } from "../helpers/special-tags";

type PluginOptions = void;

const ALWAYS_NEEDS_PUNCTUATION = new Set([
    ...THEOREM_LIKE,
    ...PROOF_LIKE,
    ...AXIOM_LIKE,
    ...DEFINITION_LIKE,
    ...REMARK_LIKE,
    ...COMPUTATION_LIKE,
    ...EXAMPLE_LIKE,
    ...PROJECT_LIKE,
    ...ASIDE_LIKE,
    "exercise",
    "commentary",
    "assemblage",
    "task",
    "gi",
]);

const SOMETIMES_NEEDS_PUNCTUATION: Record<string, Set<string>> = {
    introduction: new Set([
        "article",
        "chapter",
        "section",
        "subsection",
        "appendix",
        "exercises",
        "solutions",
        "worksheet",
        "reading-questions",
        "glossary",
        "references",
    ]),
    conclusion: new Set([
        "article",
        "chapter",
        "section",
        "subsection",
        "appendix",
        "exercises",
        "solutions",
        "worksheet",
        "reading-questions",
        "glossary",
        "references",
    ]),
    li: new Set(["ol", "ul"]),
};

/**
 * Returns whether a specific title element needs punctuation.
 * This is the same algorithm from
 * https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-common.xsl#L2938
 */
function needsPunctuation(node: XastElement, parents: XastElement[]): boolean {
    if (node.name !== "title") {
        return false;
    }
    if (ALWAYS_NEEDS_PUNCTUATION.has(parents[0]?.name)) {
        return true;
    }
    const grandparentRequirement =
        SOMETIMES_NEEDS_PUNCTUATION[parents[0]?.name];
    if (
        grandparentRequirement &&
        grandparentRequirement.has(parents[1]?.name)
    ) {
        return true;
    }
    return false;
}

/**
 * Add a `.` to the end of a node's children if it doesn't already have punctuation.
 */
function ensurePunctuation(node: XastElement): void {
    const text = toString(node);
    const lastChar = text[text.length - 1];
    if (lastChar === "." || lastChar === "?" || lastChar === "!") {
        return;
    }
    const lastChild = node.children[node.children.length - 1];
    if (lastChild?.type === "text") {
        lastChild.value += ".";
    } else {
        node.children.push({
            type: "text",
            value: ".",
        });
    }
}

/**
 * Some titles need punctuation, like a `.`, after them. This plugin adds `.` to titles that need it.
 * It does not add a `.` to titles that already have punctuation.
 */
export const ensureTitlePunctuation: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function () {
    return (root, file) => {
        visit(
            root,
            (node, info) => {
                if (needsPunctuation(node, info.parents)) {
                    ensurePunctuation(node);
                }
            },
            { test: isTitleNode },
        );
    };
};
