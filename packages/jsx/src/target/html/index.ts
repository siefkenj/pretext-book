import { unified } from "unified";
import { VFile } from "vfile";
import { normalizePretextPlugin } from "../../stages/0-normalize/plugin-normalize-pretext";
import { assemblePlugin } from "../../stages/1-assemble/plugin-assemble";
import { attachRootToStatePlugin } from "../../stages/helpers/attach-root-to-state";
import { PretextState } from "../../state";
import { xastReactTransformer } from "../../utils/xast";
import { xastParserPlugin } from "../../utils/xast";
import { Book } from "./components/book";
import { ClassedSection } from "./components/classed-section";
import { P } from "./components/p";
import { Title } from "./components/title";
import { reactToHtml } from "./react-to-html";
import { createContextPassingRootReplacer } from "./replacers/pretext";
import { replacerFactoryWithId } from "./replacers/replacer-factory";

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
            ],
        });

    const file = new VFile(source);
    const processed = processor.processSync(file);
    return reactToHtml(processed.result);
}
