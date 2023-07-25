import {
    Attributes,
    Cdata,
    Comment,
    Doctype,
    Element,
    ElementContent,
    Instruction,
    Literal,
    Node,
    Parent,
    Root,
    Text,
} from "xast";

export type XastNode =
    | Cdata
    | Comment
    | Doctype
    | Element
    | Instruction
    | Root
    | Text
    | ElementContent;

export type XastAttributes = Attributes;
export type XastRoot = Root;
export type XastCdata = Cdata;
export type XastElement = Element;
export type XastInstruction = Instruction;
export type XastText = Text;
export type XastDoctype = Doctype;
