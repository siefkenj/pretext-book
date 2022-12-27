import React from "react";
import { ElementBook } from "../../../assets/generated-types";
import { PretextStateContext } from "../state";
import { toString } from "xast-util-to-string";
import { ReplacerComponentWithId } from "../replacers/replacer-factory";

export const Book: ReplacerComponentWithId = function ({ node: _node, id }) {
    const state = React.useContext(PretextStateContext);

    const node = _node as ElementBook;

    const titleElement = node.children.find(
        (e) => e.type === "element" && e.name === "title"
    );
    const titleChildren = titleElement?.children || [];
    const titleString = toString({
        type: "element",
        name: "",
        children: titleChildren,
    }).trim();
    const title = state.processContent(titleChildren);

    const rest = node.children.filter(
        (n) =>
            !["title", "shorttitle", "subtitle", "plaintitle"].includes(n.name)
    );
    


    return (
        <html>
            <head>
                <title>{titleString}</title>
            </head>
            <body className="pretext book">
                <main className="ptx-main">
                    <div id="ptx-context" className="ptx-context">
                        <section id={id} className="book">
                            {state.processContent(rest)}
                        </section>
                    </div>
                </main>
            </body>
        </html>
    );
};
