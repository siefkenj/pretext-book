export type NGGrammar = {
    type: "grammar";
    start: NGElement;
    defined: NGDefine[];
};

export type NGChoice = {
    type: "choice";
    children: (NGNode | NGAttribute)[];
};
export type NGOptional = {
    type: "optional";
    child: NGNode | NGChoice | NGAttribute;
};
export type NGElement = {
    type: "element";
    tagName: string;
    children: (NGNode | NGChoice | NGText | NGAttribute)[];
};
export type NGAttribute = {
    type: "attribute";
    name: string;
    value?: string[] | NGRef | undefined;
    valueType?: "string" | "number";
    optional?: boolean
};
export type NGRef = {
    type: "ref";
    name: string;
};
export type NGGroup = {
    type: "group";
    children: (NGNode | NGAttribute)[];
};
export type NGZeroOrMore = {
    type: "array";
    children: (NGRef | NGChoice | NGElement | NGOptional)[];
};
export type NGMixed = { type: "mixed"; children: NGZeroOrMore[] };
export type NGDefine = {
    type: "define";
    name: string;
    combine?: "choice" | "interleave";
    children: (NGNode | NGAttribute)[];
};
/**
 * Indicates XML text nodes
 */
export type NGText = { type: "text" };

export type NGNode =
    | NGOptional
    | NGElement
    | NGRef
    | NGGroup
    | NGZeroOrMore
    | NGText
    | NGChoice
    | NGMixed;

// Types for dealing with only attributes

export type NGOptionalAttribute = {
    type: "optional";
    child: NGAttribute | NGNodeAttribute;
};
export type NGChoiceAttribute = {
    type: "choice";
    children: (NGAttribute | NGNodeAttribute)[];
};
export type NGGroupAttribute = {
    type: "group";
    children: (NGAttribute | NGNodeAttribute)[];
};
export type NGNodeAttribute =
    | NGAttribute
    | NGOptionalAttribute
    | NGChoiceAttribute
    | NGGroupAttribute;
