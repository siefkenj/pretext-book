import util from "util";
import { toXml } from "xast-util-to-xml";
import { fromXml } from "xast-util-from-xml";
import { XastNode, XastRoot } from "../src/utils/xast/types";
import { Plugin, unified } from "unified";
import { JsonGrammar } from "../src/utils/relax-ng/types";
import { PretextState } from "../src/state";
import { normalizePretextPlugin } from "../src/stages/0-normalize/plugin-normalize-pretext";
import { extractDocInfoPlugin } from "../src/stages/1-assemble/plugin-extract-docinfo";
import { ensureIdsPlugin } from "../src/stages/1-assemble/plugin-ensure-ids";
import { extractFrontmatterPlugin } from "../src/stages/1-assemble/plugin-extract-frontmatter";
import { assemblePlugin } from "../src/stages/1-assemble/plugin-assemble";
import { visit } from "../src/utils/xast";
import { attachRootToStatePlugin } from "../src/stages/helpers/attach-root-to-state";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

const toXmlPlugin = function () {
    Object.assign(this, { Compiler: toXml });
} as Plugin<never[], XastRoot, string>;

describe("Stage 1 tests", () => {
    it("Can extract docinfo", () => {
        const source = `<pretext>
                        <docinfo xml:lang="en-US" xml:base="https://my-book.com">
                            <brandlogo url="http://abstract.pugetsound.edu" source="cover_2014.png" />
                            <macros>\\newcommand{identity}{\\mathrm{id}}\\newcommand{notdivide}{{\\not{\\mid}}}</macros>
                            <cross-references text="type-global" />
                            <latex-image-preamble>\\usepackage{tikz}</latex-image-preamble>
                        </docinfo>
                    <article xml:id="hello-world">
                       <p>Hello, World!</p>
                    </article>
                </pretext>`;
        const ast = fromXml(source) as XastRoot;

        const state = new PretextState();

        // Set up the processor
        const processor = unified()
            .use(normalizePretextPlugin)
            .use(extractDocInfoPlugin, { state });
        const processed = processor.runSync(ast);

        expect(state.docinfo).toEqual({
            base: "https://my-book.com",
            lang: "en-US",
            brandlogo: [
                {
                    source: "cover_2014.png",
                    url: "http://abstract.pugetsound.edu",
                },
            ],
            macros: [
                "\\newcommand{identity}{\\mathrm{id}}\\newcommand{notdivide}{{\\not{\\mid}}}",
            ],
            cross_references: "type-global",
            latex_image_preamble: [
                { content: "\\usepackage{tikz}", syntax: undefined },
            ],
        });
        // The <docinfo> tag is removed from the tree after the info is extracted.
        expect(
            processed.children[0].children.find((e) => e.name === "docinfo")
        ).toBeUndefined();
    });
    it("Can populate with unique ids", () => {
        const source = `<pretext>
                    <article xml:id="hello-world">
                        <section>
                            <title>Important!</title>
                            <p>Hello, World!</p>
                        </section>
                        <section>
                            <p>Again here</p>
                            <p>Some more</p>
                        </section>
                    </article>
                </pretext>`;
        const ast = fromXml(source) as XastRoot;

        const state = new PretextState();

        // Set up the processor
        const processor = unified()
            .use(normalizePretextPlugin)
            .use(ensureIdsPlugin, { state });
        const processed = processor.runSync(ast);

        expect(toXml(processed)).toEqual(
            '<pretext><article xml:id="hello-world"><section xml:id="section-Important"><title xml:id="title">Important!</title><p xml:id="p">Hello, World!</p></section><section xml:id="section"><p xml:id="p-1">Again here</p><p xml:id="p-2">Some more</p></section></article></pretext>'
        );
    });
    it("Can extract frontmatter", () => {
        const source = `<pretext>
                    <frontmatter xml:id="frontmatter">
                        <titlepage>
                            <author>
                                <personname>Foo Bar</personname>
                                <department>Department of Mathematics and Computer Science</department>
                                <institution>
                                    <line>University of Puget Sound</line>
                                    <line>Tacoma, Washington, USA</line>
                                </institution>
                                <email>a@b.com</email>
                            </author>
                            <date><today /></date>
                        </titlepage>
                        <abstract>
                            <p>This is a sample</p>
                        </abstract>
                    </frontmatter>
                    <article xml:id="hello-world">
                        <section>
                            <title>Important!</title>
                            <p>Hello, World!</p>
                        </section>
                        <section>
                            <p>Again here</p>
                            <p>Some more</p>
                        </section>
                    </article>
                </pretext>`;
        const ast = fromXml(source) as XastRoot;

        const state = new PretextState();

        // Set up the processor
        const processor = unified()
            .use(normalizePretextPlugin)
            .use(ensureIdsPlugin, { state })
            .use(extractFrontmatterPlugin, { state });
        const processed = processor.runSync(ast);

        expect(state.frontmatter).toMatchObject({
            titlepage: {
                authors: [
                    {
                        personname: [
                            {
                                type: "text",
                                value: "Foo Bar",
                            },
                        ],
                        department: [
                            {
                                type: "text",
                                value: "Department of Mathematics and Computer Science",
                            },
                        ],
                        institution: [
                            {
                                type: "text",
                                value: "\n                                    ",
                            },
                            {
                                type: "element",
                                name: "line",
                                attributes: { "xml:id": "line" },
                                children: [
                                    {
                                        type: "text",
                                        value: "University of Puget Sound",
                                    },
                                ],
                            },
                            {
                                type: "text",
                                value: "\n                                    ",
                            },
                            {
                                type: "element",
                                name: "line",
                                attributes: { "xml:id": "line-1" },
                                children: [
                                    {
                                        type: "text",
                                        value: "Tacoma, Washington, USA",
                                    },
                                ],
                            },
                            {
                                type: "text",
                                value: "\n                                ",
                            },
                        ],
                        email: [
                            {
                                type: "text",
                                value: "a@b.com",
                            },
                        ],
                    },
                ],
                editors: [],
                credits: [],
                date: [
                    {
                        type: "element",
                        name: "today",
                        attributes: {},
                        children: [],
                    },
                ],
            },
            abstract: [
                {
                    type: "element",
                    name: "p",
                    attributes: { "xml:id": "p" },
                    children: [
                        {
                            type: "text",
                            value: "This is a sample",
                        },
                    ],
                },
            ],
        });
        let frontmatterNode: XastNode | null = null;
        visit(processed, (node) => {
            if (node.type === "element" && node.name === "frontmatter") {
                frontmatterNode = node;
            }
        });
        expect(frontmatterNode).toBeNull();
    });
    it("Can extract toc", () => {
        const source = `<pretext>
                    <article xml:id="hello-world">
                        <section>
                            <title>Important!</title>
                            <p>Hello, World!</p>
                        </section>
                        <section>
                            <p>Again here</p>
                            <p>Some more</p>
                        </section>
                    </article>
                </pretext>`;
        const ast = fromXml(source) as XastRoot;

        const state = new PretextState();

        // Set up the processor
        const processor = unified()
            .use(normalizePretextPlugin)
            .use(ensureIdsPlugin, { state })
            .use(attachRootToStatePlugin, { state });
        const processed = processor.runSync(ast);

        expect(state.toc).toMatchObject([
            {
                id: "hello-world",
                title: [],
                division: "article",
                children: [
                    {
                        id: "section-Important",
                        title: [
                            {
                                type: "text",
                                value: "Important!",
                            },
                        ],
                        division: "section",
                        children: [],
                    },
                    {
                        id: "section",
                        title: [],
                        division: "section",
                        children: [],
                    },
                ],
            },
        ]);
    });
    it("Can assemble", () => {
        const source = `<pretext><docinfo></docinfo>
                    <article xml:id="hello-world">
                        <section>
                            <title>Important!</title>
                            <p>Hello, World!</p>
                        </section>
                        <section>
                            <p>Again here</p>
                            <p>Some more</p>
                        </section>
                    </article>
                </pretext>`;
        const ast = fromXml(source) as XastRoot;

        const state = new PretextState();

        // Set up the processor
        const processor = unified()
            .use(normalizePretextPlugin)
            .use(assemblePlugin, { state })
            .use(attachRootToStatePlugin, { state });
        const processed = processor.runSync(ast);

        // If the TOC got extracted, we'll assume everything else worked too
        expect(state.toc).toHaveLength(1);
    });
});
