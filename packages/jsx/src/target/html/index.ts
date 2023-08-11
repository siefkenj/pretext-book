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
    Blockquote,
    Book,
    BookPtxMain,
    ClassedSection,
    Date,
    Definition,
    Em,
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
    Cd,
    M,
    Md,
    LatinAbbreviation,
    Kbd,
    Url,
    Quantity,
    ConsoleOrProgram,
    Tag,
    Tage,
    Attr,
    Delete,
    Stale,
    Icon,
    Insert,
    TexLogo,
    Dl,
    C,
    Image,
    Sidebyside,
    Stack,
    Pre,
    Foreign,
    Angles,
    Attribution,
    DblBrackets,
    Q,
    Listing,
    Caption,
    Sage,
    ScaleDeg,
    TimeSignature,
    Taxon,
    Poem,
} from "./components";
import { replaceInvalidReactAndHtmlElements } from "./replacers/dummy-replacer";

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
        em: { component: Em },
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
        blockquote: { component: Blockquote, passId: true },
        ndash: { component: SpecialSymbol },
        mdash: { component: SpecialSymbol },
        nbsp: { component: SpecialSymbol },
        degree: { component: SpecialSymbol },
        prime: { component: SpecialSymbol },
        dblprime: { component: SpecialSymbol },
        langle: { component: SpecialSymbol },
        rangle: { component: SpecialSymbol },
        flat: { component: SpecialSymbol },
        sharp: { component: SpecialSymbol },
        natural: { component: SpecialSymbol },
        doubleflat: { component: SpecialSymbol },
        doublesharp: { component: SpecialSymbol },
        lq: { component: SpecialSymbol },
        rq: { component: SpecialSymbol },
        lsq: { component: SpecialSymbol },
        rsq: { component: SpecialSymbol },
        date: { component: Date },
        cd: { component: Cd },
        m: { component: M },
        md: { component: Md, passId: true },
        ad: { component: LatinAbbreviation },
        am: { component: LatinAbbreviation },
        bc: { component: LatinAbbreviation },
        ca: { component: LatinAbbreviation },
        eg: { component: LatinAbbreviation },
        etal: { component: LatinAbbreviation },
        etc: { component: LatinAbbreviation },
        ie: { component: LatinAbbreviation },
        nb: { component: LatinAbbreviation },
        pm: { component: LatinAbbreviation },
        ps: { component: LatinAbbreviation },
        vs: { component: LatinAbbreviation },
        viz: { component: LatinAbbreviation },
        kbd: { component: Kbd },
        url: { component: Url },
        quantity: { component: Quantity },
        console: { component: ConsoleOrProgram },
        tag: { component: Tag },
        tage: { component: Tage },
        attr: { component: Attr },
        delete: { component: Delete },
        stale: { component: Stale },
        icon: { component: Icon },
        insert: { component: Insert },
        tex: { component: TexLogo },
        latex: { component: TexLogo },
        dl: { component: Dl },
        c: { component: C },
        image: { component: Image },
        sidebyside: { component: Sidebyside },
        stack: { component: Stack },
        pre: { component: Pre },
        foreign: { component: Foreign },
        angles: { component: Angles },
        attribution: { component: Attribution },
        dblbrackets: { component: DblBrackets },
        q: { component: Q },
        listing: { component: Listing, passId: true },
        caption: { component: Caption },
        program: { component: ConsoleOrProgram },
        sage: { component: Sage, passId: true },
        scaledeg: { component: ScaleDeg },
        timesignature: { component: TimeSignature },
        taxon: { component: Taxon },
        poem: { component: Poem, passId: true },
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
                replaceInvalidReactAndHtmlElements(),
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
