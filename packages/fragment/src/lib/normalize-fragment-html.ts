import { fromHtml } from "hast-util-from-html";
import type { Root as HastRoot, Node as HastNode } from "hast";
import { Plugin, unified } from "unified";
import { EXIT, visit } from "unist-util-visit";
import { toHtml } from "hast-util-to-html";
import Prettier from "prettier/standalone";
import * as prettierPluginHtml from "prettier/parser-html";

function printPrettier(source: string) {
    return Prettier.format(source, {
        parser: "html",
        plugins: [prettierPluginHtml],
        htmlWhitespaceSensitivity: "ignore",
    });
}

/**
 * Replace all ids in order of appearance with id-0, id-1, id-2, ...
 */
const normalizeIdsPlugin: Plugin<void[], HastRoot, HastRoot> = function () {
    return (root) => {
        let idCounter = 0;
        visit(root, (node) => {
            if (node.type !== "element") {
                return;
            }
            if (node.properties.id) {
                node.properties.id = `id-${idCounter++}`;
            }
        });
    };
};

/**
 * Ensure attributes always occur in alphabetical order
 */
const alphabetizeAttributesPlugin: Plugin<void[], HastRoot, HastRoot> =
    function () {
        return (root) => {
            let idCounter = 0;
            visit(root, (node) => {
                if (node.type !== "element") {
                    return;
                }
                const attrNames = Object.keys(node.properties);
                attrNames.sort();
                const properties: Record<string, any> = {};
                for (const attrName of attrNames) {
                    properties[attrName] = node.properties[attrName];
                }
                node.properties = properties;
            });
        };
    };

/**
 * Ensure classes always occur in alphabetical order
 */
const alphabetizeClassNamesPlugin: Plugin<void[], HastRoot, HastRoot> =
    function () {
        return (root) => {
            let idCounter = 0;
            visit(root, (node) => {
                if (
                    node.type !== "element" ||
                    !node.properties.className ||
                    !Array.isArray(node.properties.className) ||
                    node.properties.className.length === 0
                ) {
                    return;
                }
                node.properties.className.sort();
            });
        };
    };

/**
 * Extract the children of the body element from the HTML
 */
const extractBody: Plugin<void[], HastRoot, HastNode[]> = function () {
    return (root: HastRoot) => {
        let elms: HastNode[] = [];
        visit(root, (node) => {
            if (node.type === "element" && node.tagName === "body") {
                elms = node.children;
                return EXIT;
            }
        });
        return elms;
    };
};

const processor = unified()
    .use(normalizeIdsPlugin)
    .use(alphabetizeAttributesPlugin)
    .use(alphabetizeClassNamesPlugin)
    .use(extractBody);

/**
 * Normalize the HTML of a fragment by
 *  - replacing ids with 1,2,3,...
 *  - sorting attributes in alphabetical order
 *  - sorting class names in alphabetical order
 *  - pretty printing
 */
export function normalizeFragmentHtml(source: string): string {
    let parsed = fromHtml(source) as HastRoot;
    parsed = processor.runSync(parsed);
    let html = toHtml(parsed as any);
    try {
        html = printPrettier(html);
    } catch (e) {}

    return html.trim();
}
