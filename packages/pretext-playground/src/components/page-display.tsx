import Editor from "@monaco-editor/react";
import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import IframeResizer from "iframe-resizer-react";
import { useStoreState, useStoreActions } from "../store";
import { ReactLiveRender } from "./react-live-render";
import { XslLiveRender } from "./xsl-live-render";

export function PageDisplay() {
    const source = useStoreState((s) => s.renderedSource);
    const setSource = useStoreActions((a) => a.setRenderedSource);
    const [key, setKey] = React.useState("rendered");

    return (
        <div className="page-display">
            <Tabs
                defaultActiveKey="rendered"
                activeKey={key}
                onSelect={(k) => setKey(k || "")}
            >
                <Tab eventKey="source" title="Source">
                    <div className="editor-surround">
                        <Editor
                            height="100%"
                            defaultLanguage="html"
                            value={source}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 12,
                                lineNumbers: "off",
                                guides: { indentation: false },
                                folding: false,
                                automaticLayout: true,
                            }}
                            onChange={(value) => {
                                if (value != null) {
                                    setSource(value);
                                }
                            }}
                        />
                    </div>
                </Tab>
                <Tab eventKey="rendered" title="Rendered">
                    <IframeResizer
                        srcDoc={source}
                        title="Rendered source"
                        style={{
                            width: "1px",
                            minWidth: "100%",
                            height: "100%",
                        }}
                        scrolling={true}
                    />
                </Tab>
                <Tab eventKey="react-version" title="React Rendered">
                    {key === "react-version" && <ReactLiveRender />}
                </Tab>
                <Tab eventKey="xsl-version" title="XSL Rendered">
                    {key === "xsl-version" && <XslLiveRender />}
                </Tab>
            </Tabs>
        </div>
    );
}
