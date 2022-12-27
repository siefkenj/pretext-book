import util from "util";
import * as fs from "node:fs"
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
        const source = `<pretext><docinfo />
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

        const processed = pretextToHtml(source);
        fs.writeFileSync("./tests/tmp/webpage.html", processed)
        console.log(processed);
    });
});
