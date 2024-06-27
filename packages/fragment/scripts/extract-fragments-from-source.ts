import * as fs from "node:fs/promises";
import { it } from "vitest";
import { fromXml } from "xast-util-from-xml";
import {
    Element as XastElement,
    Root as XastRoot,
    Node as XastNode,
} from "xast";
import { visit } from "../src/utils/xast";
import { isElement } from "../src/utils/tools";
import { toXml } from "xast-util-to-xml";

const toXmlCache = new Map<XastNode | XastNode[], string>();
function cachedToXml(node: Parameters<typeof toXml>[0]) {
    if (toXmlCache.has(node)) {
        return toXmlCache.get(node)!;
    }
    const result = toXml(node);
    toXmlCache.set(node, result);
    return result;
}

function generateParentMap(root: XastRoot) {
    const parentMap: Map<XastNode, XastElement> = new Map();
    visit(root, (node) => {
        if (node.type === "element") {
            for (const child of node.children) {
                parentMap.set(child, node);
            }
        }
    });
    return parentMap;
}

function getParents(node: XastNode, parentMap: Map<XastNode, XastElement>) {
    const parents: XastElement[] = [];
    while (parentMap.has(node)) {
        const parent = parentMap.get(node)!;
        parents.push(parent);
        node = parent;
    }
    return parents;
}

/**
 * Remove nodes from the front of the array until we find a node with the given tag name.
 */
function shiftUntilNode(nodes: XastElement[], tagName: string) {
    if (!nodes.some((n) => n.name === tagName)) {
        return;
    }
    while (nodes[nodes.length - 1].name !== tagName) {
        nodes.pop();
    }
}

// @ts-ignore
const baseURL = import.meta.url;

async function main() {
    const path = new URL("./sample-article.xml", baseURL).pathname;

    const source = await fs.readFile(path, {
        encoding: "utf-8",
    });
    const ast = fromXml(source);

    const parentMap = generateParentMap(ast);

    // Grab every instance of a tag being used
    const tagsUsed = new Map<string, XastElement[]>();
    visit(ast, (node) => {
        if (!isElement(node)) {
            return;
        }
        const tag = node.name;
        const tagList = tagsUsed.get(tag) ?? [];
        tagList.push(node);
        tagsUsed.set(tag, tagList);
    });

    // Sort the used tags based on how much content they have in them.
    // Any tag with too much content is discarded.
    for (const [tag, tagList] of tagsUsed.entries()) {
        tagList.sort((a, b) => cachedToXml(a).length - cachedToXml(b).length);
        // Discard any tags with too much content. They won't make good examples
        const detectedContent: Set<string> = new Set();
        tagsUsed.set(
            tag,
            tagList.filter((node) => {
                const ret =
                    cachedToXml(node).length < 2000 &&
                    !detectedContent.has(cachedToXml(node));
                detectedContent.add(cachedToXml(node));
                return ret;
            }),
        );
    }

    // Cycle through the results and generate proposed fragments
    const keys = Array.from(tagsUsed.keys());
    keys.sort();
    for (const tag of keys) {
        const tagList = tagsUsed.get(tag)!.slice(0, 9);
        if (tagList.length === 0) {
            continue;
        }
        for (let i = 0; i < tagList.length; i++) {
            const node = tagList[i];
            const fragmentFileName = `${tag}-${i + 1}.xml`;

            // Get the parents of the node
            const parents = getParents(node, parentMap);
            // The first parent is the <pretext> element, so we don't need it
            parents.pop();
            // No need to include any parents higher-level than a <section>
            shiftUntilNode(parents, "section");
            // If a <p> is a parent, we don't need it either
            shiftUntilNode(parents, "p");

            // Construct the parents attribute
            let attributes: Record<string, string> = {};
            if (parents.length > 0) {
                parents.reverse();
                attributes.parents = parents.map((p) => p.name).join(" ");
            }

            const fragment: XastElement = {
                type: "element",
                name: "FRAGMENT",
                attributes,
                children: [
                    { type: "text", value: "\n\t" },
                    node,
                    { type: "text", value: "\n" },
                ],
            };
            const outPath = new URL(`./tmp/${fragmentFileName}`, baseURL)
                .pathname;
            console.log(outPath, toXml(fragment));
            await fs.writeFile(outPath, toXml(fragment));
        }
    }
}

const mainPromise = main().catch((error) => {
    console.error(error);
});

it("dummy test", async () => {
    await mainPromise;
});
