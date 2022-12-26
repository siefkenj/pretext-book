import { Plugin } from "unified";
import { PretextRoot } from "../../assets/types";
import { PretextState } from "../../state";
import { ensureIdsPlugin } from "./plugin-ensure-ids";
import { extractDocInfoPlugin } from "./plugin-extract-docinfo";
import { extractFrontmatterPlugin } from "./plugin-extract-frontmatter";
import { extractTocPlugin } from "./plugin-extract-toc";

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
        this.use(extractDocInfoPlugin, { state })
            .use(ensureIdsPlugin, { state })
            .use(extractTocPlugin, { state })
            .use(extractFrontmatterPlugin, { state });
    };
