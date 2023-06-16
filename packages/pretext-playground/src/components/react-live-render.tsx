import { React, pretextToReact } from "@pretext-book/jsx";
import { useStoreState } from "../store";

export function ReactLiveRender() {
    const pretextSource = useStoreState((s) => s.activeEditorString);
    let reactRendered: React.ReactElement | null = null;
    if (pretextSource) {
        try {
            reactRendered = pretextToReact(pretextSource);
        } catch (e) {
            console.log("Encountered error when rendering", e);
        }
    }

    return (
        <div style={{ height: "100%", overflow: "scroll" }}>
            {reactRendered}
        </div>
    );
}
