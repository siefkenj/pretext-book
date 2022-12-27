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
import { pretextToHtml } from "../src/target/html";
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
                                <p>Hello, World!</p>
                            </section>
                            <section>
                                <p>Again here</p>
                                <p>Some more</p>
                            </section>
                        </chapter>
                    </book>
                </pretext>`;

        const processed = pretextToHtml(source);
        console.log(processed);
    });
});
