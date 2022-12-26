import { Plugin } from "unified";
import { createNodeToSchemaMap } from "../../utils/relax-ng/create-node-to-schema-map";
import { JsonGrammar } from "../../utils/relax-ng/types";
import { XastAst, XastRoot } from "../../utils/xast";

export type PluginOptions = {
    schema: JsonGrammar;
    nodeToSchemaMap: Map<XastAst, string> | WeakMap<XastAst, string>;
    validationErrors?: string[];
};

/**
 * Unifiedjs plugin creates a map of elements to schema references.
 */
export const createNodeToSchemaMapPlugin: Plugin<
    PluginOptions[],
    XastRoot,
    XastRoot
> = function (options) {
    const { schema, nodeToSchemaMap, validationErrors } = options;

    return (root: XastRoot) => {
        const { warnings } = createNodeToSchemaMap(
            root,
            schema,
            nodeToSchemaMap
        );
        if (validationErrors) {
            validationErrors.push(...warnings);
        }
    };
};
