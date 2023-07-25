import { fromHtml } from "hast-util-from-html";
import type {
    Root as HastRoot,
    Node as HastNode,
    Element as HastElement,
} from "hast";
import { Plugin, unified } from "unified";
import { EXIT, visit } from "unist-util-visit";
import { toHtml } from "hast-util-to-html";
import Prettier from "prettier/standalone";
import * as prettierPluginHtml from "prettier/plugins/html";
import * as prettierPluginCss from "prettier/plugins/postcss";

function printPrettier(source: string, printWidth = 50) {
    return Prettier.format(source, {
        parser: "html",
        plugins: [prettierPluginHtml],
        // Setting a value to `insensitive` here will cause whitespace to
        // be totally ignored. We don't want that, but we do want to eagerly wrap
        // as much as possible. We attempt this by setting a small `printWidth`.
        htmlWhitespaceSensitivity: "strict",
        printWidth,
    });
}

function prettyPrintCss(source: string) {
    try {
        return Prettier.format(source, {
            parser: "css",
            plugins: [prettierPluginCss],
            printWidth: 50,
        });
    } catch (e) {
        return source;
    }
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
 * Ensure classes always occur in alphabetical order
 */
const formatStyleAttributesPlugin: Plugin<void[], HastRoot, HastRoot> =
    function () {
        return async (root) => {
            const nodesToFormat: (HastElement & {
                properties: { style: string };
            })[] = [];
            visit(root, (node) => {
                if (
                    node.type !== "element" ||
                    !node.properties.style ||
                    typeof node.properties.style !== "string"
                ) {
                    return;
                }
                nodesToFormat.push(node as any);
            });
            await Promise.all(
                nodesToFormat.map(async (node) => {
                    const style = node.properties.style;
                    let formattedStyle = (await prettyPrintCss(style)).trim();
                    // formattedStyle has newlines separating properties, but we want spaces.
                    formattedStyle = formattedStyle.replace(/\n/g, " ");
                    node.properties.style = formattedStyle;
                })
            );
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
    .use(formatStyleAttributesPlugin)
    .use(extractBody);

/**
 * Normalize the HTML of a fragment by
 *  - replacing ids with 1,2,3,...
 *  - sorting attributes in alphabetical order
 *  - sorting class names in alphabetical order
 *  - pretty printing
 */
export async function normalizeFragmentHtml(source: string): Promise<string> {
    let parsed = fromHtml(source) as HastRoot;
    parsed = await processor.run(parsed);
    let html = toHtml(parsed as any);
    try {
        // We print once with a small printWidth to force whitespace to turn into newlines.
        // We then use a larger print width to let newlines become unwrapped for easy viewing.
        html = await printPrettier(html, 10);
        html = await printPrettier(html, 50);
    } catch (e) {}

    return html.trim();
}
