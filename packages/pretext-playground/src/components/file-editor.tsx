import React from "react";
import Editor, { OnChange } from "@monaco-editor/react";
import { useStoreActions, useStoreState } from "../store";
import { VFile } from "vfile";
import { Button, Tab, Tabs } from "react-bootstrap";
import classNames from "classnames";
import { getActiveFile } from "../store/model";
import { useDropzone } from "react-dropzone";
import { Folder2Open } from "react-bootstrap-icons";
import { useDebouncedCallback } from "use-debounce";
import { parsingWorker } from "../worker/worker-wrapper";

function normalizeVFileValue(value: VFile["value"]): string {
    if (typeof value === "string") {
        return value;
    }
    if (value == null) {
        return "";
    }
    const decoder = new TextDecoder();
    return decoder.decode(value);
}

export function FileEditor() {
    const activeFilePath = useStoreState((s) => s.activeFilePath);
    const setFileContents = useStoreActions((a) => a.setFileContents);
    const setActiveEditorString = useStoreActions(
        (a) => a.setActiveEditorString
    );
    const activeFile = useStoreState((s) => s.activeFile);
    const addFile = useStoreActions((a) => a.addFile);
    const setActiveFile = useStoreActions((a) => a.setActiveFile);
    const clearFiles = useStoreActions((a) => a.clearFiles);
    // Only rerender the source at most once per second
    const debouncedRender = useDebouncedCallback(async (source: string) => {
        const rendered = await parsingWorker.pretextToHtml(source);
        setRenderedSource(rendered);
    }, 500);
    const setRenderedSource = useStoreActions((a) => a.setRenderedSource);
    const onChange = React.useCallback<OnChange>(
        (value, event) => {
            if (!activeFilePath) {
                // In this situation we have a "phantom" file that is created when there
                // are no active files. We want to create this file and then use it.
                addFile(activeFile);
                setFileContents({
                    filePath: activeFile.path,
                    value: value || "",
                });
                setActiveFile(activeFile.path);
                return;
            }
            debouncedRender(value || "");
            setFileContents({ filePath: activeFilePath, value: value || "" });
            setActiveEditorString(value || "");
        },
        [
            activeFilePath,
            setFileContents,
            activeFile,
            setActiveFile,
            addFile,
            debouncedRender,
        ]
    );
    const [initialRenderCompleted, setInitialRenderCompleted] =
        React.useState(false);
    React.useEffect(() => {
        if (initialRenderCompleted) {
            return;
        }
        const source = normalizeVFileValue(activeFile.value);
        if (source) {
            setInitialRenderCompleted(true);
            debouncedRender(source);
            setActiveEditorString(source);
        }
    }, [activeFile, initialRenderCompleted]);

    const onDrop = React.useCallback(
        async (acceptedFiles: File[]) => {
            clearFiles();
            const decoder = new TextDecoder();
            for (const file of acceptedFiles) {
                if (!file.name.endsWith("xml") && !file.name.endsWith("ptx")) {
                    continue;
                }
                const path = file.webkitRelativePath || (file as any).path;
                const vfile = new VFile({
                    path,
                    value: decoder.decode(await file.arrayBuffer()),
                });
                addFile(vfile);
                setActiveFile(path);
            }
        },
        [addFile, clearFiles, setActiveFile]
    );
    const { getRootProps, isDragActive } = useDropzone({
        noClick: true,
        onDrop,
    });

    return (
        <div className="code-editor" {...getRootProps()}>
            {isDragActive ? (
                <div className="file-dropper-overlay">
                    <div>Drop a file or folder here...</div>
                </div>
            ) : null}
            <TabStrip />
            <div className="editor-surround">
                <Editor
                    height="100%"
                    defaultLanguage="xml"
                    path={activeFile.path}
                    defaultValue={normalizeVFileValue(activeFile.value)}
                    onChange={onChange}
                    options={{
                        minimap: { enabled: false },
                        fontSize: 12,
                        lineNumbers: "off",
                        guides: { indentation: false },
                        automaticLayout: true,
                    }}
                    className="monaco-editor-parent"
                />
            </div>
        </div>
    );
}

function TabStrip() {
    let files = useStoreState((s) => s.files);
    const activeFilePath = useStoreState((s) => s.activeFilePath);
    const setActiveFile = useStoreActions((a) => a.setActiveFile);

    const activeFile = React.useMemo(
        () => getActiveFile(files, activeFilePath),
        [files, activeFilePath]
    );

    if (files.length === 0) {
        files = [activeFile];
    }

    return (
        <div className="file-tabstrip">
            <Tabs
                activeKey={activeFile.path}
                onSelect={(path) => {
                    setActiveFile(path);
                }}
                transition={false}
            >
                {files.map((f) => (
                    <Tab
                        key={f.path}
                        eventKey={f.path}
                        title={<FileTabLabel file={f} />}
                        tabAttrs={{
                            title: f.path,
                            className: classNames(
                                {
                                    "text-light": f.path === activeFile.path,
                                    "text-dark": f.path !== activeFile.path,
                                },
                                "py-1",
                                "px-3"
                            ),
                        }}
                    />
                ))}
            </Tabs>
            <NewFileButton />
            <UploadFileButton />
        </div>
    );
}

function FileTabLabel({ file }: { file: VFile }) {
    return (
        <div className="file-tab-label">
            <div className="file-name">{file.basename}</div>
            <div className="file-path">{file.path}</div>
        </div>
    );
}

function NewFileButton() {
    const files = useStoreState((s) => s.files);
    const setActiveFile = useStoreActions((a) => a.setActiveFile);
    const addFile = useStoreActions((a) => a.addFile);

    const makeNewFile = React.useCallback(() => {
        const existingFileNames = new Set(files.map((f) => f.path));
        let newFileNameBase = "new-file";
        let newFileIndex = 1;
        while (
            existingFileNames.has(`${newFileNameBase}-${newFileIndex}.ptx`)
        ) {
            newFileIndex++;
        }
        const path = `${newFileNameBase}-${newFileIndex}.ptx`;
        addFile(
            new VFile({
                path,
                value: `<?xml version="1.0" encoding="UTF-8" ?>`,
            })
        );
        setActiveFile(path);
    }, [addFile, setActiveFile, files]);
    return (
        <div className="nav-tabs ms-1">
            <div className="nav-item h-100">
                <Button
                    className="nav-link px-2 h-100 font-weight-bold"
                    onClick={makeNewFile}
                    title="Add new file"
                >
                    +
                </Button>
            </div>
        </div>
    );
}

function UploadFileButton() {
    const addFile = useStoreActions((a) => a.addFile);
    const clearFiles = useStoreActions((a) => a.clearFiles);
    const setActiveFile = useStoreActions((a) => a.setActiveFile);

    const onDrop = React.useCallback(
        async (acceptedFiles: File[]) => {
            clearFiles();
            const decoder = new TextDecoder();
            for (const file of acceptedFiles) {
                if (!file.name.endsWith("xml") && !file.name.endsWith("ptx")) {
                    continue;
                }
                const path = file.webkitRelativePath || (file as any).path;
                const vfile = new VFile({
                    path,
                    value: decoder.decode(await file.arrayBuffer()),
                });
                addFile(vfile);
                setActiveFile(path);
            }
        },
        [addFile, clearFiles, setActiveFile]
    );
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    });

    return (
        <div className="nav-tabs ms-auto open-file-button-surround">
            <div className="nav-item h-100" {...getRootProps()}>
                <input
                    {...getInputProps({
                        multiple: true,
                        // webkitdirectory: "",
                        type: "file",
                    })}
                />
                <Button
                    className="nav-link px-3 h-100 font-weight-bold"
                    title="Open file"
                >
                    <Folder2Open />
                </Button>
            </div>
        </div>
    );
}
