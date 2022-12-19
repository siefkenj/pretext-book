/**
 * Functions normalize a parsed RELAX-NG grammar so that types for the output can be created.
 */

import { visit } from "unist-util-visit";
import {
    NGAttribute,
    NGChoice,
    NGChoiceAttribute,
    NGDefine,
    NGElement,
    NGGrammar,
    NGGroup,
    NGMixed,
    NGNode,
    NGNodeAttribute,
    NGOptional,
    NGRef,
    NGZeroOrMore,
} from "./relax-ng-types";

/**
 * Nested choice blocks don't do anything, so we can flatten all the
 * choices into one.
 */
function flattenChoice(choice: NGChoice): NGChoice {
    return {
        ...choice,
        children: choice.children.flatMap((n) => {
            if (n.type === "choice") {
                return flattenChoice(n).children;
            }
            return n;
        }),
    };
}

/**
 * Recursively filter all nodes so that only `NGAttribute` nodes (and nodes
 * with `NGAttribute` children) remain.
 */
function extractAttributeNodes(
    nodes: NGNode | NGAttribute | (NGNode | NGAttribute)[]
): NGNodeAttribute[] {
    if (!Array.isArray(nodes)) {
        nodes = [nodes];
    }

    return nodes.flatMap((n) => {
        switch (n.type) {
            case "attribute":
                return n;
            case "optional": {
                const extracted = extractAttributeNodes(n.child);
                return extracted.length > 0
                    ? { ...n, child: extracted[0] }
                    : [];
            }
            case "group":
            case "choice": {
                const extracted = extractAttributeNodes(n.children);
                return extracted.length > 0
                    ? { ...n, children: extracted }
                    : [];
            }
        }
        return [];
    });
}

/**
 * For our purposes, we don't care about the detailed structure of exclusive attributes/etc.
 * We just want a flat list of all possible attributes.
 */
function flattenAttributes(attrs: NGNodeAttribute[]): NGAttribute[] {
    return attrs.flatMap((node) => {
        switch (node.type) {
            case "optional":
                return flattenAttributes([node.child]).map((a) => ({
                    ...a,
                    optional: true,
                }));
            case "choice":
            case "group":
                return flattenAttributes(node.children);
            case "attribute":
                return node;
        }
        return [];
    });
}

export function normalizeGrammar(grammar: NGGrammar) {
    // Flatten all <choice> blocks before we start.
    visit({ type: "root", children: grammar.defined }, (node) => {
        if (node.type === "choice") {
            const flattenedChoice = flattenChoice(node as NGChoice);
            Object.assign(node, flattenedChoice);
        }
    });

    // We need to combine definitions with the same name.
    const ngDefined: Record<string, NGDefine> = {};
    for (const def of grammar.defined) {
        if (!def.combine) {
            ngDefined[def.name] = def;
        }
    }
    for (const def of grammar.defined) {
        if (!def.combine) {
            continue;
        }
        if (!ngDefined[def.name]) {
            console.warn(
                `Trying to combine definitions for "${def.name}" but cannot find base definition`
            );
            ngDefined[def.name] = {
                type: "define",
                name: def.name,
                children: [],
            };
        }
        if (def.combine === "choice") {
            const baseDef = ngDefined[def.name];
            baseDef.children = [
                flattenChoice({
                    type: "choice",
                    children: [...baseDef.children, ...def.children],
                }),
            ];
        }
        if (def.combine === "interleave") {
            console.warn('combine="interleave" is not supported yet');
        }
    }
    //const ex = ngDefined["UnitSpecification"];
    //console.log(
    //    "extracted attrs",
    //    flattenAttributes(extractAttributeNodes(ex.children)),
    //    ex
    //);
    for (const [key, val] of Object.entries(ngDefined)) {
        const attrs = extractAttributeNodes(val.children);
        if (attrs.length > 0) {
            console.log("Found attributes in", key, flattenAttributes(attrs));
        }
    }
    console.log("ngDefined", ngDefined);
}
