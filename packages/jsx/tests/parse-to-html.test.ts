import util from "util";
import { describe, it } from "vitest";
import * as fs from "node:fs";
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
import { pretextToHtml } from "../src/target/html";
import { fstat } from "fs";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

const toXmlPlugin = function () {
    Object.assign(this, { Compiler: toXml });
} as Plugin<never[], XastRoot, string>;

describe("Parse to HTML tests", () => {
    it("Can do a basic conversion", () => {
        let source = `<pretext><docinfo />
                    <book xml:id="hello-world">
                        <title>Cool Article</title>
                        <chapter>
                            <title>The first title!</title>
                            <section>
                                <title>Important!</title>
				<introduction>
					<title>My Intro</title>
					<p>Hello, World!</p>
					<definition xml:id="mydef">
						<title>The Good Dog</title>
						<statement>A <term>Good Dog</term> is a dog that sits.</statement>
					</definition>
				</introduction>
				<subsection>
					<title>My Sub</title>
					<p>The contents of the subsection</p>
				</subsection>
				<conclusion>
					<p>And stuff</p>
				</conclusion>
                            </section>
                            <section>
                                <p>Again here</p>
				<p>Some more. See <xref ref="mydef" /></p>
                            </section>
                        </chapter>
                    </book>
                </pretext>`;
        source = String.raw`<?xml version="1.0" encoding="UTF=8"?><pretext>

        <docinfo>
            <macros>
            \newcommand{\doubler}[1]{2#1}
            </macros>
        </docinfo>
    
        <article xml:id="minimal">
            <title>A Minimal Article</title>
    
            <frontmatter>
    
                <titlepage>
                    <author>
                        <personname>Robert A. Beezer</personname>
                        <institution>University of Puget Sound</institution>
                    </author>
                    <date><today /></date>
                </titlepage>
    
                <abstract>
                    <p>This is a very short article, but it still exercises some advanced features of MathBook XML.</p>
                </abstract>
    
            </frontmatter>
    
            <introduction>
                <p>This is a short paragraph to introduce the article (but it is not the abstract).  It is optional, in case it would be preferable to have the first section be titled an <q>Introduction.</q></p>
            </introduction>
    
            <section xml:id="section-textual">
                <title>Just Some Text</title>
    
                <p>Now a single paragraph inside a titled section of the article.</p>
            </section>
    
            <section xml:id="section-interesting">
                <title>A Bit More Interesting</title>
    
                <p>The previous section (<xref ref="section-textual" />) was a bit boring.</p>
    
                <p>This paragraph has some inline math, a Diophantine equation, <m>x^2 + \doubler{y^2} = z^2</m>.  And some display math about infinite series: <me>\sum_{n=1}^\infty\,\frac{1}{n^2} = \frac{\pi^2}{6}.</me>  Look at the XML source to see how <latex /> macros are employed universally across all possible output formats.</p>
            </section>
    
            <section xml:id="section-computation">
                <title>Computation</title>
    
                <p>The following is a chunk of Sage code.  Your output format will dictate what you see next.  In print, you will see expected output.  In HTML you will have an executable, and editable, Sage Cell to work with.  In a SageMathCloud worksheet, you will be able to execute and edit the code with all the other features of SageMathCloud.  Note that if you include the expected output in your source, then you can test the example to verify that the behavior of Sage has not changed.</p> 
    
                <sage>
                    <input>
                    A = matrix(4,5, srange(20))
                    A.rref()
                    </input>
                    <output>
                    [ 1  0 -1 -2 -3]
                    [ 0  1  2  3  4]
                    [ 0  0  0  0  0]
                    [ 0  0  0  0  0]
                    </output>
                </sage>
            </section>
    
        </article>
    
    </pretext>
    `;

        const processed = pretextToHtml(source);
        //fs.writeFileSync("./tests/tmp/webpage.html", processed)
        console.log(processed);
    });
});
