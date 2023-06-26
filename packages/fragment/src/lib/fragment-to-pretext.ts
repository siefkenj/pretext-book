import { fromXml } from "xast-util-from-xml";
import { Fragment, XastElement, XastRoot } from "../types";
import { EXIT, replaceNode, visit } from "../utils/xast";
import { isElement } from "../utils/tools";
import { parseFragment } from "./parse-fragment";
import { selectorToXast } from "./selector-to-xast";
import { CssSelectorParser } from "../parser";

const REPLACEMENT_NODE_NAME = "__REPLACEMENT_NODE__";

export function fragmentToXast(
    fragmentSource: string,
    templates: Record<string, string>
): XastRoot {
    const fragment = parseFragment(fragmentSource);
    const template = fromXml(templates[fragment.template] || "");
    if (template.children.length === 0) {
        throw new Error(`Blank or missing template "${fragment.template}"`);
    }

    // First, we construct the fragment's parents
    const parents = selectorToXast(
        CssSelectorParser.parse(fragment.selector + " " + REPLACEMENT_NODE_NAME)
    );
    replaceNode(template, (node) => {
        if (!isElement(node)) {
            return;
        }
        if (node.name === "FRAGMENT") {
            return parents.children;
        }
    });

    // Next, assign ids to every element that doesn't already have one. These ids will be used
    // to retrieve the contents after of the fragment after it's rendered.
    let replacementNode: XastElement;
    let parentsOfReplacementNode: XastElement[] = [];
    visit(
        template,
        (node, info) => {
            if (node.name === REPLACEMENT_NODE_NAME) {
                replacementNode = node;
                parentsOfReplacementNode = info.parents.filter(isElement);
                return EXIT;
            }
        },
        { test: isElement }
    );
    // @ts-ignore
    if (!replacementNode) {
        throw new Error(
            `Could not find replacement node in substituted template`
        );
    }
    // Now we have the immediate parents of replacement node, so we can add ids
    parentsOfReplacementNode.forEach((parent, i) => {
        if (parent.attributes?.["xml:id"]) {
            return;
        }
        parent.attributes ||= {};
        parent.attributes["xml:id"] = `FRAGMENT_PARENT_ID__${i}`;
    });

    // We have inserted a node with name REPLACEMENT_NODE_NAME as the lowest "child" This child should be replaced
    // with our content.
    replaceNode(template, (node) => {
        if (!isElement(node)) {
            return;
        }
        if (node.name === REPLACEMENT_NODE_NAME) {
            return fragment.content;
        }
    });

    return template;
}
