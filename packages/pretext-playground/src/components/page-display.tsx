import Editor from "@monaco-editor/react";
import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import IframeResizer from "iframe-resizer-react";
import { useStoreState, useStoreActions } from "../store";

const SOURCE = `<html>
<head>
  <title>Cool Article</title>
  <link
    href="https://pretextbook.org/css/0.6/pretext.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://pretextbook.org/css/0.6/pretext_add_on.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://pretextbook.org/css/0.6/shell_default.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://pretextbook.org/css/0.6/banner_default.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://pretextbook.org/css/0.6/navbar_default.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://pretextbook.org/css/0.6/toc_default.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://pretextbook.org/css/0.6/knowls_default.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://pretextbook.org/css/0.6/style_default.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://pretextbook.org/css/0.6/colors_blue_red.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://pretextbook.org/css/0.6/setcolors.css"
    rel="stylesheet"
    type="text/css"
  />
</head>
<body class="pretext book">
  <div class="ptx-page">
    <div class="ptx-sidebar"></div>
    <main class="ptx-main">
      <div id="ptx-content" class="ptx-content">
        <section id="hello-world" class="book">
          <section id="chapter-The-first-title" class="chapter">
            <h2 id="title-1" class="heading">
              <span class="type">Chapter</span>
              <span class="codenumber">1</span>
              <span class="title">The first title!</span>
            </h2>
            <section id="section-Important" class="section">
              <h3 id="title-2" class="heading hide-type">
                <span class="type">Section</span
                ><span class="codenumber">1.1</span>
                <span class="title">Important!</span>
              </h3>
              <section id="introduction-My-Intro" class="introduction">
                <h4 id="introduction-My-Intro" class="heading">My Intro.</h4>
                <div id="p" class="para">Hello, World!</div>
                <article id="mydef" class="definition definition-like">
                  <h5 id="mydef" class="heading">
                    <span class="type">Definition</span>
                    <span class="codenumber">1.1.1</span
                    ><span class="period">.</span> The Good Dog.
                  </h5>
                  A <dfn class="terminology">Good Dog</dfn> is a dog that
                  sits.
                </article>
              </section>
              <section id="subsection-My-Sub" class="subsection">
                <h4 id="title-5" class="heading hide-type">
                  <span class="type">Subsection</span
                  ><span class="codenumber">1.1.1</span>
                  <span class="title">My Sub</span>
                </h4>
                <div id="p-1" class="para">
                  The contents of the subsection
                </div>
              </section>
              <section id="conclusion-" class="conclusion">
                <div id="p-2" class="para">And stuff</div>
              </section>
            </section>
            <section id="section-" class="section">
              <h3 id="title-7" class="heading hide-type">
                <span class="type">Section</span
                ><span class="codenumber">1.2</span
                ><span class="title"></span>
              </h3>
              <div id="p-3" class="para">Again here</div>
              <div id="p-4" class="para">Some more. See <xref></xref></div>
            </section>
          </section>
        </section>
      </div>
      <div class="ptx-page-footer"></div>
    </main>
  </div>
</body>
</html>
`;

export function PageDisplay() {
    const source = useStoreState((s) => s.renderedSource);
    const setSource = useStoreActions((a) => a.setRenderedSource);

    return (
        <div className="page-display">
            <Tabs defaultActiveKey="rendered">
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
            </Tabs>
        </div>
    );
}
