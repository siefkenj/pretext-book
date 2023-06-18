import { fromHtml } from "hast-util-from-html";
import { visit } from "unist-util-visit";
import { toHtml } from "hast-util-to-html";
import Prettier from "prettier/standalone";
import * as prettierPluginHtml from "prettier/parser-html";

type HastNode = ReturnType<typeof fromHtml>["children"][0];
type HastElement = HastNode & { type: "element" };

function printPrettier(source: string) {
    return Prettier.format(source, {
        parser: "html",
        plugins: [prettierPluginHtml],
    });
}

/**
 * Extract the fragment that has been rendered to HTML. Extracting
 * is a process of best-guessing. A fragment's parents get ids of the form "FRAGMENT_PARENT_ID__##"
 * with lower numbers indicating the element is closer to the root of the fragment. This script searches
 * for the portion of the tree with an is with the lowest number and returns the children of that
 * fragment.
 * @param source
 */
export function extractFragmentFromHtml(
    source: string,
    options?: { prettyPrint?: boolean }
): string {
    const { prettyPrint = false } = options || {};

    const html = fromHtml(source);
    const parentNodeMap: Map<string, HastElement> = new Map();

    visit(html, (node) => {
        if (node.type !== "element") {
            return;
        }
        const id: string = (node.properties?.id as string) || "";
        if (!id) {
            return;
        }
        if (id.startsWith("FRAGMENT_PARENT_ID")) {
            // We found a parent!
            parentNodeMap.set(id, node);
        }
    });

    // Find the node closest to the root
    const ids = Array.from(parentNodeMap.keys());
    ids.sort((a, b) => {
        const [, aNum] = a.split("__");
        const [, bNum] = b.split("__");
        return Number(aNum) - Number(bNum);
    });
    const minId = ids[0];
    const parent = parentNodeMap.get(minId);
    if (!parent) {
        throw new Error(
            "Could not detect fragment part. No ids of the form 'FRAGMENT_PARENT_ID__*' found."
        );
    }

    const ret = toHtml(parent.children);
    if (prettyPrint) {
        try {
            return printPrettier(ret);
        } catch {}
    }

    return ret;
}
