import util from "util";
import { normalizePretextXml } from "../src";
import { toString } from "hast-util-to-string";
import { toXml } from "xast-util-to-xml";
import { fromXml } from "xast-util-from-xml";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

describe("Normalize PreTeXt XML", () => {
    it("Passes hello world", async () => {
        let source: string;
        source = `<pretext>
                    <article xml:id="hello-world">
                       <p>Hello, World!</p>
                    </article>
                </pretext>`;
        expect(toXml(normalizePretextXml(source))).toMatchSnapshot();
    });
});
