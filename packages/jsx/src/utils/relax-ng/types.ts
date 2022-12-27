import { XastNode } from "../xast";

export type RelaxNgText = {
    type: "text";
};
export type RelaxNgElement = {
    type: "element";
    name: string;
    attributes: Record<string, { optional: boolean; type: string[] }>;
    textChildrenAllowed: boolean;
    children: { ref: string }[];
};

export type RelaxNgRef = RelaxNgText | RelaxNgElement;

export type JsonGrammar = {
    startType: string;
    refs: Record<string, RelaxNgRef>;
};

export type NodeToTypeMap = Map<XastNode, string> | WeakMap<XastNode, string>;
