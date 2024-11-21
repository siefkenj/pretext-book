import { React, pretextToReact } from "@pretext-book/jsx";
import { useStoreState } from "../store";
import { PtxCompiler } from "@pretext-book/wasm/dist/ptx-compiler";

const compiler = new PtxCompiler();
(window as any).comp = compiler;

export function XslLiveRender() {
    const pretextSource = useStoreState((s) => s.activeEditorString);
    const [compiledSource, setCompiledSource] = React.useState("");
    const [isInitialized, setIsInitialized] = React.useState(false);
    const [errorState, setErrorState] = React.useState<string | null>(null);
    const [isProcessing, setIsProcessing] = React.useState(0);
    const lastPretextSource = React.useRef("");

    React.useEffect(() => {
        if (!!errorState || isInitialized || isProcessing) {
            return;
        }
        compiler
            .init({
                lockFileURL: "assets/pyodide-lock.json",
                stdLibURL: "assets/python_stdlib.zip",
                indexURL: "assets",
            })
            .then(() => {
                setIsInitialized(true);
                setErrorState(null);
            })
            .catch((e) => {
                console.error("Error initializing compiler", e);
                setErrorState(e);
            });
    }, [errorState, isInitialized]);

    React.useEffect(() => {
        if (!isInitialized || isProcessing) {
            return;
        }
        // Only recompile if the source has changed
        if (pretextSource === lastPretextSource.current) {
            return;
        }
        lastPretextSource.current = pretextSource;
        (async () => {
            try {
                setIsProcessing(Date.now());
                await compiler.setMainPtx(pretextSource);
                await compiler.compile();
                const html = await compiler.getHtmlWithLocalReferences();
                setCompiledSource(html);
            } catch (e) {
                console.error("Error compiling source", e);
                setErrorState(
                    "Error compiling source. Try changing the source to re-run the compile or check the web console for more information.",
                );
            } finally {
                setIsProcessing(0);
            }
        })();
    }, [pretextSource, isInitialized, isProcessing]);

    if (!isInitialized) {
        if (errorState) {
            return <div>Error initializing compiler: {errorState}</div>;
        }
        return <div>Initializing...</div>;
    }

    // If processing takes more than a second, show a message
    if (isProcessing && (Date.now() - isProcessing) / 1000 > 1) {
        return <div>Compiling...</div>;
    }

    return (
        <div style={{ height: "100%", overflow: "hidden" }}>
            <iframe
                title="XSL Rendered"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                }}
                srcDoc={compiledSource}
            />
        </div>
    );
}
