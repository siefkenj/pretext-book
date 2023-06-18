export { CssSelectorParser } from "./parser";
import { toXml } from "xast-util-to-xml";
import { fragmentToXast } from "./lib/fragment-to-pretext";
export { getTemplateName } from "./lib/get-template-name";
export { extractFragmentFromHtml } from "./lib/extract-fragment-from-html";

export function fragmentToPretext(
    source: string,
    templates: Record<string, string>
): string {
    const rendered = fragmentToXast(source, templates);
    return toXml(rendered);
}
