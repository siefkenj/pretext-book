import { Element, domToReact, HTMLReactParserOptions } from "html-react-parser";
import React from "react";
import { Plugin, unified } from "unified";
import { VFile } from "vfile";
import { fromXml } from "xast-util-from-xml";
import { Root } from "xast-util-to-string";
import { toXml } from "xast-util-to-xml";
import { removeCommentsPlugin } from "../processors/comments";
import { addIdsToDivisionsPlugin } from "../processors/divisions";
import { extractDocInfoPlugin } from "../processors/docinfo";
import { extractFrontmatterPlugin } from "../processors/frontmatter";
import { extractTocPlugin } from "../processors/toc";
import { addIdsToRefableElementsPlugin } from "../processors/xrefs";
import { normalizePretextXml } from "../relax-ng/normalize-pretext-xml";

const globalState: Record<string, any> = {};

const options: HTMLReactParserOptions = {
    replace: (node) => {
        if (!(node instanceof Element)) {
            return;
        }
        if (node.name === "pretext") {
            return (
                <React.Fragment>
                    {domToReact(node.children, options)}
                </React.Fragment>
            );
        }
        if (node.name === "docinfo") {
            // Process the contents but don't render anything
            domToReact(node.children, options);
            return <React.Fragment></React.Fragment>;
        }
        if (node.name === "macros") {
            globalState.docinfoMacros = globalState.docinfoMacros || [];
            globalState.docinfoMacros.push(node.children);
        }

        if (node instanceof Element && node.name === "a") {
            return (
                <a
                    href={node.attribs.href}
                    className={node.attribs["class"]}
                    title={node.attribs.title}
                >
                    {domToReact(node.children)}
                </a>
            );
        }
        if (node.attribs.ref) {
            return <React.Fragment>HAS REF CANNOT PROCESS</React.Fragment>;
        }
    },
};

export function PretextToHtml({ source }: { source: string }) {
    const [pState, setPState] = React.useState("");

    /*
    React.useEffect(() => {
        (async () => {
            const pp = await unified()
                // XML Processor
                .use(function () {
                    Object.assign(this, { Parser: fromXml });
                })
                .use(extractFrontmatterPlugin)
                .use(removeCommentsPlugin)
                .use(addIdsToDivisionsPlugin)
                .use(addIdsToRefableElementsPlugin)
                .use(() => (ast, file) => {
                    console.log("n", ast, file.data);
                })
                .use(function () {
                    Object.assign(this, { Compiler: toXml });
                })
                .process(source);
            // console.log("pp", pp);
            setPState("" + pp.value);
        })();
    }, [source]);
*/
    //   const processed = HTMLReactParser(source, options);
    const processed = pState;
    return <React.Fragment>{processed}</React.Fragment>;
}

export async function pretextToHtml2({ source }: { source: string }) {
    const pp = await unified()
        // XML Processor
        .use(function () {
            Object.assign(this, { Parser: fromXml });
        })
        .use(extractDocInfoPlugin)
        .use(extractFrontmatterPlugin)
        .use(removeCommentsPlugin)
        .use(addIdsToDivisionsPlugin)
        .use(addIdsToRefableElementsPlugin)
        .use(extractTocPlugin)
        .use(() => (ast, file) => {
            console.log("n", ast, file.data);
        })
        .use(function () {
            Object.assign(this, { Compiler: toXml });
        })
        .process(source);
    return "" + pp.value;
}

export async function pretextToHtml3({ source }: { source: string }) {
    const normalizedPretextXml = normalizePretextXml(source);

    const processor = unified()
        .use(extractDocInfoPlugin)
        .use(extractFrontmatterPlugin)
        .use(addIdsToDivisionsPlugin)
        .use(addIdsToRefableElementsPlugin)
        .use(extractTocPlugin)
        .use(() => (ast, file) => {
            console.log("n", ast, file.data);
        })
        .use(function () {
            Object.assign(this, { Compiler: toXml });
        } as Plugin<never[], Root, string>);

    const file = new VFile();
    const processed = processor.runSync(normalizedPretextXml, file);
    return processor.stringify(processed);
}
