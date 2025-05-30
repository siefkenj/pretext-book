import { Link } from "nextra-theme-docs";
import { useRouter } from "next/router";
import React from "react";
import {
    Tab,
    TabList,
    TabPanel,
    TabProvider,
    useTabStore,
} from "@ariakit/react";

export function PtxExample({
    code,
    rendered,
    devData,
    children,
}: React.PropsWithChildren<{
    code: string;
    rendered?: string;
    devData?: string;
}>) {
    const store = useTabStore();

    return (
        <TabProvider>
            <TabList className="tab-strip">
                <Tab store={store} id="source" title="View Source Code">
                    Source
                </Tab>
                <Tab store={store} id="preview" title="View Rendered Output">
                    Preview
                </Tab>
                {devData && (
                    <Tab
                        store={store}
                        id="debug"
                        title="Debug Info"
                        style={{ color: "red" }}
                    >
                        Debug Info
                    </Tab>
                )}
            </TabList>
            <TabPanel store={store} id="source">
                {children}
            </TabPanel>
            <TabPanel store={store} id="preview">
                {rendered ? (
                    <IframePretext fragmentSource={rendered} />
                ) : (
                    "No preview available"
                )}
            </TabPanel>
            {devData && (
                <TabPanel store={store} id="debug">
                    <DebugDisplay devData={devData} />
                </TabPanel>
            )}
        </TabProvider>
    );
}

function DebugDisplay({ devData }: { devData: string }) {
    const data = JSON.parse(devData) as {
        fragment: string;
        logs: { level: string; message: string }[];
        rawHtml: string;
        rawPretext: string;
    };
    return (
        <div className="debug-data">
            <h2>Debug Info</h2>
            <h4>PreTeXt Source</h4>
            <p>
                The following is the PreTeXt code that was compiled for this
                example. It is a result of expanding the fragment code.
            </p>
            <pre>{data.rawPretext}</pre>
            <h4>Original Fragment</h4>
            <pre>{data.fragment}</pre>
            <h4>PreTeXt Compile Logs</h4>
            <table>
                <tbody>
                    {data.logs.map((log, i) => {
                        const message = typeof log.message === "string" ? log.message : JSON.stringify(log.message);
                        return (
                            <tr key={i} className={log.level}>
                                <td className="log-header">{log.level}</td>
                                <td className="log-message">
                                    {message.startsWith(":")
                                        ? message.slice(1).trim()
                                        : message}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h4>Raw HTML</h4>
            <p>
                This is the HTML that was produced by PreTeXt. The HTML rendered
                for the preview is the fragment extracted from this HTML. (Look
                for nodes with IDs <code>FRAGMENT_PARENT_ID__*</code> to find
                what should be extracted.)
            </p>
            <pre className="raw-html">{data.rawHtml}</pre>
        </div>
    );
}

/**
 * Render PreTeXt in an iframe so that its styling/state is completely isolated from the page.
 */
export function IframePretext({ fragmentSource }: { fragmentSource: string }) {
    const ref = React.useRef<HTMLIFrameElement>(null);
    const [height, setHeight] = React.useState("0px");
    const router = useRouter();

    const onLoad = () => {
        const iframe =
            ref.current?.contentWindow?.document?.body?.parentElement;
        if (iframe) {
            setHeight(iframe.scrollHeight + "px");
        }

        const updateHeight = () => {
            const iframe =
                ref.current?.contentWindow?.document?.body?.parentElement;
            if (!iframe) {
                return;
            }
            const newHeight = iframe.scrollHeight + "px";
            if (newHeight !== height) {
                setHeight(newHeight);
            }
        };

        // The mutation observer might not catch all resize changes, so we poll as well.
        const interval = setInterval(updateHeight, 500);

        return () => {
            clearInterval(interval);
        };
    };
    React.useEffect(() => {
        return onLoad();
    }, []);

    if (typeof fragmentSource !== "string") {
        console.error(
            "Error with PreTeXt component. Expected a string child containing PreTeXt source code, but found",
            fragmentSource,
        );
        return (
            <div className="docs-error">
                <em>Error with PreTeXt component.</em> Expected a string child
                containing PreTeXt source code, but found{" "}
                {typeof fragmentSource}. Check the console for details
            </div>
        );
    }
    return (
        <iframe
            ref={ref}
            srcDoc={createHtmlForIframe(fragmentSource, router.basePath)}
            style={{
                width: "100%",
                boxSizing: "content-box",
                overflow: "hidden",
            }}
            height={height}
        />
    );
}

/**
 * Create HTML for a single page document that renders the given PreTeXt.
 */
function createHtmlForIframe(pretext: string, basePath = "") {
    return `
    <html>
    <head>
        <script>
            var runestoneMathReady = new Promise((resolve) => window.rsMathReady = resolve);
            window.MathJax = {
              "tex": {
                "inlineMath": [
                  [
                    "\\\\(",
                    "\\\\)"
                  ]
                ],
                "tags": "none",
                "tagSide": "right",
                "tagIndent": ".8em",
                "packages": {
                  "[+]": [
                    "base",
                    "extpfeil",
                    "ams",
                    "amscd",
                    "color",
                    "newcommand",
                    "knowl"
                  ]
                }
              },
              "options": {
                "ignoreHtmlClass": "tex2jax_ignore|ignore-math",
                "processHtmlClass": "process-math"
              },
              "chtml": {
                "scale": 0.98,
                "mtextInheritFont": true
              },
              "loader": {
                "load": [
                  "input/asciimath",
                  "[tex]/extpfeil",
                  "[tex]/amscd",
                  "[tex]/color",
                  "[tex]/newcommand",
                  "[pretext]/mathjaxknowl3.js"
                ],
                "paths": {
                  "pretext": "${basePath}/_static/pretext/js/lib"
                }
              },
              "startup": {
                pageReady() {
                  return MathJax.startup.defaultPageReady().then(function () {
                  rsMathReady();
                  }
                )}
              }
            };
        </script>
        <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
        <script src="${basePath}/_static/pretext/js/pretext.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&amp;family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&amp;family=Tinos:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/dejavu-serif" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wdth,wght@8..144,50..150,100..900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wdth,wght@75..100,300..800&amp;display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link href="${basePath}/_static/pretext/css/pretext.css" rel="stylesheet" type="text/css">
        <link href="${basePath}/_static/pretext/css/pretext_add_on.css" rel="stylesheet" type="text/css">
        <link href="${basePath}/_static/pretext/css/shell_default.css" rel="stylesheet" type="text/css">
        <link href="${basePath}/_static/pretext/css/banner_default.css" rel="stylesheet" type="text/css">
        <link href="${basePath}/_static/pretext/css/navbar_default.css" rel="stylesheet" type="text/css">
        <link href="${basePath}/_static/pretext/css/toc_default.css" rel="stylesheet" type="text/css">
        <link href="${basePath}/_static/pretext/css/knowls_default.css" rel="stylesheet" type="text/css">
        <link href="${basePath}/_static/pretext/css/style_default.css" rel="stylesheet" type="text/css">
        <link href="${basePath}/_static/pretext/css/colors_blue_red.css" rel="stylesheet" type="text/css">
        <link href="${basePath}/_static/pretext/css/setcolors.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

        <!-- Override some of the default styles -->
        <style>
            .pretext .ptx-page > .ptx-main {
                margin: unset;
                padding: unset;
                border: unset;
            }
            pre {
                white-space: initial;
            }
        </style>
    </head>
    <body class="pretext article">
        <div
          id="latex-macros"
          class="hidden-content process-math"
          style="display: none"
        >
            <span class="process-math"
                >\\( \\newcommand{\\lt}{&lt;} \\newcommand{\\gt}{&gt;}
                \\newcommand{\\amp}{&amp;} \\definecolor{fillinmathshade}{gray}{0.9}
                \\newcommand{\\fillinmath}[1]{\\mathchoice{\\colorbox{fillinmathshade}{$\\displaystyle
                \\phantom{\\,#1\\,}$}}{\\colorbox{fillinmathshade}{$\\textstyle
                \\phantom{\\,#1\\,}$}}{\\colorbox{fillinmathshade}{$\\scriptstyle
                \\phantom{\\,#1\\,}$}}{\\colorbox{fillinmathshade}{$\\scriptscriptstyle\\phantom{\\,#1\\,}$}}}
                \\)
            </span>
        </div>
        <div class="ptx-page">
            <main class="ptx-main">
                <div id="ptx-content" class="ptx-content">
                    ${pretext}
                </div>
            </main>
        </div>
    </body>
    </html>
    `;
}
