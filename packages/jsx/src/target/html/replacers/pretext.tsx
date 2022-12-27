import { PretextState, PretextStateWithProcessContent } from "../../../state";
import React from "react";
import { ReplacerFunc } from "../../../utils/xast";
import { PretextStateContext } from "../state";

/**
 * A replacer for the <pretext> element that passes the given `PretextState` via a `React.Context`.
 */
export function createContextPassingRootReplacer(
    state: PretextState
): ReplacerFunc {
    return (node, processContent) => {
        if (node.name === "pretext") {
            // We attach the `processContent` function to `state` so other components can freely use it.
            // By default `processContent` optional, but not in the `state` that we pass to components.
            state.processContent = processContent;
            return (
                <PretextStateContext.Provider
                    value={state as PretextStateWithProcessContent}
                >
                    {processContent(node.children)}
                </PretextStateContext.Provider>
            );
        }
    };
}
