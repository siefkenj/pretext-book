export type JsonGrammar = {
    startType: string;
    refs: Record<string, GrammarEntry>;
};

export type GrammarElementEntry = {
    type: "element";
    name: string;
    attributes: Record<string, { optional?: boolean; type: string[] }>;
    children: { ref: string }[];
    textChildrenAllowed: boolean;
};

export type GrammarEntry =
    | GrammarElementEntry
    | { type: "text"; name?: undefined };

/**
 * Information about a specific variant of an element.
 */
export type VariantInfo = {
    refId: string;
    name: string;
    attributes: Record<string, { optional?: boolean; type: string[] }>;
    children: { ref: string; name: string }[];
    parents: { ref: string; name: string }[];
    textChildrenAllowed: boolean;
};
