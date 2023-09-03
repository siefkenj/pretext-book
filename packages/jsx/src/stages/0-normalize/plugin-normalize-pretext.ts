import { Plugin, unified } from "unified";
import { jsonGrammar } from "../../assets/generated-grammar";
import { PretextRoot } from "../../assets/types";
import { JsonGrammar } from "../../utils/relax-ng/types";
import { XastNode, XastRoot } from "../../utils/xast";
import { expandCdataPlugin } from "./plugin-expand-cdata";
import { mergeAdjacentTextPlugin } from "./plugin-merge-adjacent-text";
import { removeUnneededTextPlugin } from "./plugin-remove-unneeded-text";
import { stripCommentsAndFriendsPlugin } from "./plugin-strip-comments";
import { createNodeToSchemaMapPlugin } from "../helpers/plugin-create-node-to-schema-map";
import { findRootElementPlugin } from "./plugin-find-root-element";
import { trimTitleAndFriendsPlugin } from "./plugin-trim-title-and-friends";

/**
 * Unifiedjs plugin that removes normalizes a pretext document to conform to the pretext schema. E.g.,
 * all whitespace is removed where it doesn't belong, cdata is expanded into text, etc..
 */
export const normalizePretextPlugin: Plugin<void[], XastRoot, PretextRoot> =
    function () {
        const schema = jsonGrammar as JsonGrammar;
        const validationErrors: string[] = [];
        const nodeToSchemaMap: Map<XastNode, string> = new Map();

        const processor = unified()
            .use(findRootElementPlugin)
            .use(stripCommentsAndFriendsPlugin)
            .use(expandCdataPlugin)
            .use(mergeAdjacentTextPlugin)
            .use(createNodeToSchemaMapPlugin, {
                schema,
                nodeToSchemaMap,
                validationErrors,
            })
            .use(removeUnneededTextPlugin, { schema, nodeToSchemaMap })
            .use(trimTitleAndFriendsPlugin);

        return (root: XastRoot, file) => {
            const processed = processor.runSync(root, file);
            return processed as PretextRoot;
        };
    };
