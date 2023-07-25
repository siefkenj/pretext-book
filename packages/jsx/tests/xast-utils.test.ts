import util from "util";
import { describe, it, expect } from "vitest";
import { toXml } from "xast-util-to-xml";
import { fromXml } from "xast-util-from-xml";
import { visit } from "../src/utils/xast/visit";
import { replaceNode } from "../src/utils/xast/replace-node";
import { XastNode } from "../src/utils/xast/types";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

describe("XAST utility functions", () => {
    it("visit can visit nodes", async () => {
        let source: string;
        source = `<pretext><article xml:id="hello-world"><p>Hello, World!</p><b>foo</b></article><baz /></pretext>`;
        const ast = fromXml(source);
        const prefixOrder: string[] = [];
        visit(ast, {
            enter: (node, info) => {
                if (node.type === "element") {
                    prefixOrder.push(node.name);
                }
            },
        });
        expect(prefixOrder).toEqual(["pretext", "article", "p", "b", "baz"]);

        const suffixOrder: string[] = [];
        visit(ast, {
            leave: (node, info) => {
                if (node.type === "element") {
                    suffixOrder.push(node.name);
                }
            },
        });
        expect(suffixOrder).toEqual(["p", "b", "article", "baz", "pretext"]);

        const elementNameOnly: string[] = [];
        visit(
            ast,
            (node, info) => {
                elementNameOnly.push(node.name);
            },
            {
                test: ((node: any) => node && node.type === "element") as (
                    node: any,
                ) => node is XastNode & { type: "element" },
            },
        );

        expect(elementNameOnly).toEqual([
            "pretext",
            "article",
            "p",
            "b",
            "baz",
        ]);
    });
    it("can replace nodes", async () => {
        let source: string;
        source = `<pretext><article xml:id="hello-world"><p>Hello, World!</p><b>foo</b></article><baz /><p>fun times</p></pretext>`;
        let ast: XastNode;

        // Get rid of any <p>
        ast = fromXml(source);
        replaceNode(ast, (node) => {
            if (Array.isArray(node)) {
                return;
            }
            if (node.type === "element" && node.name === "p") {
                return null;
            }
        });
        expect(toXml(ast)).toEqual(
            '<pretext><article xml:id="hello-world"><b>foo</b></article><baz></baz></pretext>',
        );

        // Get replace <p> with <x /><y />
        ast = fromXml(source);
        replaceNode(ast, (node) => {
            if (Array.isArray(node)) {
                return;
            }
            if (node.type === "element" && node.name === "p") {
                return [
                    {
                        type: "element",
                        name: "x",
                        children: [],
                        attributes: {},
                    },
                    {
                        type: "element",
                        name: "y",
                        children: [],
                        attributes: {},
                    },
                ];
            }
        });
        expect(toXml(ast)).toEqual(
            '<pretext><article xml:id="hello-world"><x></x><y></y><b>foo</b></article><baz></baz><x></x><y></y></pretext>',
        );
    });
});
