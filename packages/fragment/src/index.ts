export { CssSelectorParser } from "./parser";
import { toXml } from "xast-util-to-xml";
import { fragmentToXast } from "./lib/fragment-to-pretext";
export { jestToMatchFragment } from "./lib/jest-render-as-fragment";
export { getTemplateName } from "./lib/get-template-name";
export { extractFragmentFromHtml } from "./lib/extract-fragment-from-html";
export { normalizeFragmentHtml } from "./lib/normalize-fragment-html";

export function fragmentToPretext(
    source: string,
    templates: Record<string, string>
): string {
    const rendered = fragmentToXast(source, templates);
    return toXml(rendered);
}
