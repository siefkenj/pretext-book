import { Plugin, unified } from "unified";
import { PretextRoot } from "../../assets/types";
import { PretextState } from "../../state";
import { ensureIdsPlugin } from "./plugin-ensure-ids";
import { ensureLiHasPChildrenPlugin } from "./plugin-ensure-li-have-p-children";
import { ensureTitleElementsPlugin } from "./plugin-ensure-title-elements";
import { extractDocInfoPlugin } from "./plugin-extract-docinfo";
import { extractFrontmatterPlugin } from "./plugin-extract-frontmatter";

export type PluginOptions = {
    state: PretextState;
};

/**
 * "Assemble" the document by adding unique ids on all id-able elements and extract information
 * that is needed for global processing, like references for the TOC, etc.
 */
export const assemblePlugin: Plugin<PluginOptions[], PretextRoot, PretextRoot> =
    function (options) {
        const { state } = options;
        if (!state) {
            throw new Error(
                `Cannot use plugin without passing in a PretextState object`
            );
        }
        const processor = unified()
            .use(extractDocInfoPlugin, { state })
            .use(ensureTitleElementsPlugin)
            .use(ensureLiHasPChildrenPlugin)
            .use(ensureIdsPlugin, { state })
            .use(extractFrontmatterPlugin, { state });
        return (root, file) => {
            const processed = processor.runSync(root, file);
            return processed;
        };
    };
