import { unified } from "unified";
import { fromXml } from "xast-util-from-xml";
import { StartElement } from "../preprocessors/generated-types";
import { normalizePretextPlugin } from "../preprocessors/normalize-pretext";

/**
 * Inputs PreTeXt xml (as a string) and outputs a normalized and validated
 * xml Root object (in the xast format). For example, unneeded whitespace/comments
 * are removed, etc..
 */
export function normalizePretextXml(relaxNgSource: string): {
    type: "root";
    children: [StartElement];
} {
    const processor = unified()
        .use(function () {
            this.Parser = fromXml;
        })
        .use(normalizePretextPlugin);
    const file = processor.processSync(relaxNgSource);
    return file.result as any;
}
