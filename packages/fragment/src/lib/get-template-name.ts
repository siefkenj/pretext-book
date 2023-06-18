import { fromXml } from "xast-util-from-xml";
import { isElement } from "../utils/tools";
import { visit } from "../utils/xast";

/**
 * Extracts the name of the template that the current fragment is requesting.
 */
export function getTemplateName(fragmentSource: string): string {
    const ast = fromXml(fragmentSource);
    
    // "article" is the default template name, so we will return this if no template is listed.
    let templateName: string = "article";

    visit(
        ast,
        (node) => {
            if (node.name === "FRAGMENT") {
                templateName = node.attributes?.template || templateName;
            }
        },
        { test: isElement }
    );

    return templateName;
}
