import { unified } from "unified";
import { VFile } from "vfile";
import { normalizePretextPlugin } from "../../stages/0-normalize/plugin-normalize-pretext";
import { assemblePlugin } from "../../stages/1-assemble/plugin-assemble";
import { attachRootToStatePlugin } from "../../stages/helpers/attach-root-to-state";
import { PretextState } from "../../state";
import { xastReactTransformer } from "../../utils/xast";
import { xastParserPlugin } from "../../utils/xast";
import { reactToHtml } from "./react-to-html";
import { createContextPassingRootReplacer } from "./replacers/pretext";
import { replacerFactoryWithId } from "./replacers/replacer-factory";
import { multiReplacer } from "./replacers/multi-replacer";

// Element components
import {
    Abbr,
    Acro,
    Article,
    ArticlePtxMain,
    Book,
    BookPtxMain,
    ClassedSection,
    Definition,
    Init,
    Input,
    IntroOrConclusion,
    Li,
    Ol,
    P,
    Tabular,
    SpecialSymbol,
    Term,
    Title,
    Ul,
    XRef,
} from "./components";

const REPLACERS = [
    multiReplacer({
        p: { component: P, passId: true },
        title: { component: Title, passId: true },
        chapter: { component: ClassedSection, passId: true },
        section: { component: ClassedSection, passId: true },
        subsection: { component: ClassedSection, passId: true },
        introduction: { component: IntroOrConclusion, passId: true },
        conclusion: { component: IntroOrConclusion, passId: true },
        definition: { component: Definition, passId: true },
        li: { component: Li, passId: true },
        ul: { component: Ul },
        ol: { component: Ol },
        term: { component: Term },
        input: { component: Input },
        xref: { component: XRef },
        abbr: { component: Abbr },
        acro: { component: Acro },
        init: { component: Init },
        tabular: { component: Tabular },
        copyright: { component: SpecialSymbol },
        phonomark: { component: SpecialSymbol },
        copyleft: { component: SpecialSymbol },
        registered: { component: SpecialSymbol },
        trademark: { component: SpecialSymbol },
        servicemark: { component: SpecialSymbol },
        ellipsis: { component: SpecialSymbol },
        midpoint: { component: SpecialSymbol },
        swungdash: { component: SpecialSymbol },
        permille: { component: SpecialSymbol },
        pilcrow: { component: SpecialSymbol },
        "section-mark": { component: SpecialSymbol },
        minus: { component: SpecialSymbol },
        plusminus: { component: SpecialSymbol },
        times: { component: SpecialSymbol },
        solidus: { component: SpecialSymbol },
        obelus: { component: SpecialSymbol },
    }),
];

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
                replacerFactoryWithId("article", Article),
                ...REPLACERS,
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
                replacerFactoryWithId("article", ArticlePtxMain),
                ...REPLACERS,
            ],
        });

    const file = new VFile(source);
    const processed = processor.processSync(file as any);
    return processed.result;
}
