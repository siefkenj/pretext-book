import { Plugin } from "unified";
import { PretextRoot } from "../../assets/types";
import { PretextState } from "../../state";

type PluginOptions = {
    state: PretextState;
};

/**
 * Ensure `state` has a reference to the `XastRoot` element. Perform no modifications to the source.
 */
export const attachRootToStatePlugin: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function (options) {
    const { state } = options;
    return (root, file) => {
        state.setRoot(root);
        return root;
    };
};
