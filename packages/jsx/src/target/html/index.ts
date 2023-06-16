import { unified } from "unified";
import { VFile } from "vfile";
import { normalizePretextPlugin } from "../../stages/0-normalize/plugin-normalize-pretext";
import { assemblePlugin } from "../../stages/1-assemble/plugin-assemble";
import { attachRootToStatePlugin } from "../../stages/helpers/attach-root-to-state";
import { PretextState } from "../../state";
import { xastReactTransformer } from "../../utils/xast";
import { xastParserPlugin } from "../../utils/xast";
import { Book, BookPtxMain } from "./components/book";
import { ClassedSection } from "./components/classed-section";
import { Definition } from "./components/definition";
import { Input } from "./components/input";
import { IntroOrConclusion } from "./components/intro-conclusion";
import { P } from "./components/p";
import { Term } from "./components/term";
import { Title } from "./components/title";
import { reactToHtml } from "./react-to-html";
import { createContextPassingRootReplacer } from "./replacers/pretext";
import {
    replacerFactory,
    replacerFactoryWithId,
} from "./replacers/replacer-factory";
import { XRef } from "./components/xref";

/**
 * Parse PreTeXt source and turn it into HTML.
 */
export function pretextToHtml(source: string) {
    const state = new PretextState();
    const processor = unified()
        .use(xastParserPlugin)
        .use(normalizePretextPlugin)
        .use(assemblePlugin, { state })
        .use(attachRootToStatePlugin, { state })
        .use(xastReactTransformer, {
            replacers: [
                createContextPassingRootReplacer(state),
                replacerFactoryWithId("book", Book),
                replacerFactoryWithId("p", P),
                replacerFactoryWithId("title", Title),
                replacerFactoryWithId("chapter", ClassedSection),
                replacerFactoryWithId("section", ClassedSection),
                replacerFactoryWithId("subsection", ClassedSection),
                replacerFactoryWithId("introduction", IntroOrConclusion),
                replacerFactoryWithId("conclusion", IntroOrConclusion),
                replacerFactoryWithId("definition", Definition),
                replacerFactory("term", Term),
                replacerFactory("input", Input),
                replacerFactory("xref", XRef),
            ],
        });

    const file = new VFile(source);
    const processed = processor.processSync(file as any);
    return reactToHtml(processed.result);
}

/**
 * Parse PreTeXt source and turn it into a React component.
 */
export function pretextToReact(source: string) {
    const state = new PretextState();
    const processor = unified()
        .use(xastParserPlugin)
        .use(normalizePretextPlugin)
        .use(assemblePlugin, { state })
        .use(attachRootToStatePlugin, { state })
        .use(xastReactTransformer, {
            replacers: [
                createContextPassingRootReplacer(state),
                // We don't want to return a frame with `<html>...` We only want to return the `<div id="ptx-main">...`
                replacerFactoryWithId("book", BookPtxMain),
                replacerFactoryWithId("p", P),
                replacerFactoryWithId("title", Title),
                replacerFactoryWithId("chapter", ClassedSection),
                replacerFactoryWithId("section", ClassedSection),
                replacerFactoryWithId("subsection", ClassedSection),
                replacerFactoryWithId("introduction", IntroOrConclusion),
                replacerFactoryWithId("conclusion", IntroOrConclusion),
                replacerFactoryWithId("definition", Definition),
                replacerFactory("term", Term),
                replacerFactory("input", Input),
                replacerFactory("xref", XRef),
            ],
        });

    const file = new VFile(source);
    const processed = processor.processSync(file as any);
    return processed.result;
}
