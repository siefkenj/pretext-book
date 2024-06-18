export type JsonGrammar = {
    startType: string;
    refs: Record<string, GrammarEntry>;
};

export type GrammarEntry = {
    type: "element" | "text";
    name: string;
    attributes: Record<string, { optional?: boolean; type: string[] }>;
    children: { ref: string }[];
    textChildrenAllowed: boolean;
};
