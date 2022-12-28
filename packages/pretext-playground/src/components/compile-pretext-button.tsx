import React from "react";
import { Button } from "react-bootstrap";
import { useStoreActions, useStoreState } from "../store";
import { getActiveFile } from "../store/model";
import { pretextToHtml } from "@pretext-book/jsx";

export function CompilePretextButton() {
    const files = useStoreState((s) => s.files);
    const activeFilePath = useStoreState((s) => s.activeFilePath);
    const activeFile = getActiveFile(files, activeFilePath);
    const setRenderedSource = useStoreActions((a) => a.setRenderedSource);

    const onClick = React.useCallback(() => {
        console.log("rendering", String(activeFile))
        const rendered = pretextToHtml(String(activeFile));
        setRenderedSource(rendered);
        console.log(rendered);
    }, [activeFile, setRenderedSource]);

    return <Button onClick={onClick}>Compile PreTeXt Source</Button>;
}
