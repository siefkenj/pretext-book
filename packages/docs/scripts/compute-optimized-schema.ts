import { jsonGrammar as _jsonGrammar } from "../../jsx/src/assets/generated-grammar";
import {
    GrammarElementEntry,
    JsonGrammar,
    VariantInfo,
} from "../components/types";

const jsonGrammar = _jsonGrammar as any as JsonGrammar;

function getVariantInfo(name: string): VariantInfo[] {
    const refs = jsonGrammar.refs;
    const matching = Object.entries(refs).filter(([ref, entry]) => {
        return entry.type === "element" && entry.name === name;
    }) as [string, GrammarElementEntry][];

    return matching.map(([refId, entry]) => {
        return {
            refId,
            name: entry.name,
            attributes: entry.attributes,
            children: entry.children.map((child) => {
                return {
                    ref: child.ref,
                    name: (refs[child.ref] as GrammarElementEntry).name,
                };
            }),
            parents: Object.entries(refs)
                .filter(([ref, info]) => {
                    return (
                        info.type === "element" &&
                        info.children.some((c) => c.ref === refId)
                    );
                })
                .map(([ref, info]) => {
                    return {
                        ref,
                        name: (info as GrammarElementEntry).name,
                    };
                }),
            textChildrenAllowed: entry.textChildrenAllowed,
        };
    });
}

/**
 * Pre-computes variant info for every element in the grammar. All
 * variants of elements are grouped together.
 */
export function computeVariantLookup(): Record<string, VariantInfo[]> {
    const elmNames = new Set<string>(
        Object.values(jsonGrammar.refs)
            .map((v) => v.name)
            .filter((v) => v) as string[],
    );

    const ret: Record<string, VariantInfo[]> = {};
    for (const name of Array.from(elmNames)) {
        ret[name] = getVariantInfo(name);
    }

    return ret;
}
