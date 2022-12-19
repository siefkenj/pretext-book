/**
 * Functions to directly parse a RELAX-NG XML schema. These functions only parse the features used
 * in the PreTeXt grammar https://raw.githubusercontent.com/PreTeXtBook/pretext/master/schema/pretext.rng
 */

import { Element } from "xast";
import { isElement } from "../processors/tools";
import { toString } from "xast-util-to-string";
import {
    NGAttribute,
    NGChoice,
    NGDefine,
    NGElement,
    NGGrammar,
    NGGroup,
    NGMixed,
    NGOptional,
    NGRef,
    NGZeroOrMore,
} from "./relax-ng-types";

export function parseRef(elm: Element): NGRef {
    expected(elm, "ref");
    return { type: "ref", name: elm.attributes?.name || "" };
}
export function parseAttribute(elm: Element): NGAttribute {
    const name = elm.attributes?.name || "";
    let valueType: "string" | "number" = "string";
    const children = elm.children.filter(isElement);
    if (children.length === 0) {
        return { type: "attribute", name, valueType };
    }
    if (children.length !== 1) {
        console.log("got attribute with multiple children", elm);
        throw new Error(
            `don't know how to handle attribute with multiple children`
        );
    }
    const child = children[0];
    switch (child.name) {
        case "data":
            if (child.attributes?.type === "integer") {
                valueType = "number";
            }
            return { type: "attribute", name, valueType };
        case "choice":
            // If <text /> is a child, arbitrary strings are allowed
            const genericStringAllowed = child.children
                .filter(isElement)
                .some((e) => e.name === "text");
            // In this case, we assume that the choices are a list of <value>...</value> tags
            const value = child.children
                .filter(isElement)
                .filter((e) => e.name !== "text")
                .filter((e) => expected(e, "value"))
                .map((e) => toString(e));
            if (genericStringAllowed) {
                return { type: "attribute", name, valueType, value };
            } else {
                return { type: "attribute", name, value };
            }
        case "value":
            return {
                type: "attribute",
                name,
                value: [toString(child)],
            };
        case "ref":
            return { type: "attribute", name, value: parseRef(child) };
        default:
            console.log("unknown child for attribute", child);
            throw new Error(`Unknown child for attribute ${child.name}`);
    }
}

export function parseElement(elm: Element): NGElement {
    expected(elm, "element");
    const tagName = elm.attributes?.name || "";
    const children: NGElement["children"] = elm.children
        .filter(isElement)
        .flatMap((childElm): NGElement["children"][number] | [] => {
            switch (childElm.name) {
                case "ref":
                    return parseRef(childElm);
                case "attribute":
                    return parseAttribute(childElm);
                case "optional":
                    return parseOptional(childElm);
                case "choice":
                    return parseChoice(childElm);
                case "element":
                    return parseElement(childElm);
                case "interleave":
                    return parseGroup(childElm);
                case "mixed":
                    return parseMixed(childElm);
                case "text":
                    // <text /> is just a string type in typescript.
                    return { type: "text" };
                case "oneOrMore":
                case "zeroOrMore":
                    return parseZeroOrMore(childElm);
                case "empty":
                    return [];
                default:
                    console.warn("Unknown child of element", childElm);
                    return {} as any;
            }
        });

    return { type: "element", tagName, children };
}

export function parseGroup(elm: Element): NGGroup {
    expected(elm, ["group", "interleave"]);
    const children: NGGroup["children"] = elm.children
        .filter(isElement)
        .flatMap((childElm): NGGroup["children"][number] | [] => {
            switch (childElm.name) {
                case "ref":
                    return parseRef(childElm);
                case "optional":
                    return parseOptional(childElm);
                case "element":
                    return parseElement(childElm);
                case "attribute":
                    return parseAttribute(childElm);
                case "interleave":
                    return parseGroup(childElm);
                case "choice":
                    return parseChoice(childElm);
                case "text":
                    // <text /> is just a string type in typescript.
                    return { type: "text" };
                case "oneOrMore":
                case "zeroOrMore":
                    return parseZeroOrMore(childElm);
                case "empty":
                    return [];
                default:
                    console.warn("Unknown child of group", childElm);
                    return {} as any;
            }
        });

    return { type: "group", children };
}

export function parseChoice(elm: Element): NGChoice {
    expected(elm, "choice");
    const children: NGChoice["children"] = elm.children
        .filter(isElement)
        .map((childElm): NGChoice["children"][number] => {
            switch (childElm.name) {
                case "ref":
                    return parseRef(childElm);
                case "optional":
                    return parseOptional(childElm);
                case "element":
                    return parseElement(childElm);
                case "attribute":
                    return parseAttribute(childElm);
                case "group":
                    return parseGroup(childElm);
                case "oneOrMore":
                case "zeroOrMore":
                    return parseZeroOrMore(childElm);
                case "value":
                case "text":
                    // <text /> is just a string type in typescript.
                    // If a choice has a <value /> as a child, we could be more specific than <text />,
                    // but there is no need for our purposes.
                    return { type: "text" };
                default:
                    console.warn("Unknown child of choice", childElm);
                    return {} as any;
            }
        });

    return { type: "choice", children };
}

export function parseMixed(elm: Element): NGMixed {
    expected(elm, "mixed");
    const children: NGMixed["children"] = elm.children
        .filter(isElement)
        .map((childElm): NGMixed["children"][number] => {
            switch (childElm.name) {
                case "oneOrMore":
                case "zeroOrMore":
                    return parseZeroOrMore(childElm);
                default:
                    console.warn("Unknown child of choice", childElm);
                    return {} as any;
            }
        });

    return { type: "mixed", children };
}

export function parseDefine(elm: Element): NGDefine {
    expected(elm, "define");
    const name = elm.attributes?.name || "";
    const combine =
        (elm.attributes?.combine as NGDefine["combine"] | undefined) || null;

    const children: NGDefine["children"] = elm.children
        .filter(isElement)
        .map((childElm): NGDefine["children"][number] => {
            switch (childElm.name) {
                case "ref":
                    return parseRef(childElm);
                case "optional":
                    return parseOptional(childElm);
                case "element":
                    return parseElement(childElm);
                case "attribute":
                    return parseAttribute(childElm);
                case "choice":
                    return parseChoice(childElm);
                case "mixed":
                    return parseMixed(childElm);
                case "oneOrMore":
                case "zeroOrMore":
                    return parseZeroOrMore(childElm);
                case "text":
                    // <text /> is just a string type in typescript.
                    return { type: "text" };
                default:
                    console.warn("Unknown child of define", childElm);
                    return {} as any;
            }
        });

    if (combine) {
        return { type: "define", name, children, combine };
    }
    return { type: "define", name, children };
}

export function parseZeroOrMore(elm: Element): NGZeroOrMore {
    expected(elm, ["zeroOrMore", "oneOrMore"]);
    const children: NGZeroOrMore["children"] = elm.children
        .filter(isElement)
        .map((childElm): NGZeroOrMore["children"][number] => {
            switch (childElm.name) {
                case "ref":
                    return parseRef(childElm);
                case "element":
                    return parseElement(childElm);
                case "choice":
                    return parseChoice(childElm);
                case "optional":
                    return parseOptional(childElm);
                default:
                    console.warn("Unknown child of zeroOrMore", childElm);
                    return {} as any;
            }
        });

    return { type: "array", children };
}

export function parseOptional(elm: Element): NGOptional {
    expected(elm, "optional");
    let children = elm.children.filter(isElement);
    if (children.length !== 1) {
        // in this case, we assume that the child is a group
        children = [
            { type: "element", name: "group", children: [...children] },
        ];
    }
    const childElm = children[0];
    let child: NGOptional["child"];
    switch (childElm.name) {
        case "ref":
            child = parseRef(childElm);
            break;
        case "attribute":
            child = parseAttribute(childElm);
            break;
        case "element":
            child = parseElement(childElm);
            break;
        case "choice":
            child = parseChoice(childElm);
            break;
        case "group":
            child = parseGroup(childElm);
            break;
        default:
            console.warn("Unknown child of optional", childElm);
            child = {} as any;
    }

    return { type: "optional", child };
}

export function parseGrammar(elm: Element): NGGrammar {
    expected(elm, "grammar");
    let children = elm.children.filter(isElement);

    const startElm = children.find((e) => e.name === "start");
    const startElmChildren = startElm?.children.filter(isElement);
    if (!startElmChildren) {
        throw new Error(`Could not find "start" element of grammar`);
    }

    const start = parseElement(startElmChildren[0]);
    const defined = children
        .filter((e) => e.name === "define")
        .map(parseDefine);

    return { type: "grammar", start, defined };
}

/**
 * Throw unless `elm` has the correct tagname
 */
function expected(
    elm: any,
    expectedTagName: string | string[]
): elm is Element & { name: typeof expectedTagName } {
    if (!elm) {
        throw new Error(
            `Expected tag name \`${expectedTagName}\` but got \`${elm}\``
        );
    }
    if (!(elm.type === "element")) {
        throw new Error(
            `Expected element type with tag name \`${expectedTagName}\` but got \`${elm}\``
        );
    }
    if (
        !(
            elm.name === expectedTagName ||
            (Array.isArray(expectedTagName) &&
                expectedTagName.includes(elm.name))
        )
    ) {
        const { children, ...rest } = elm;
        throw new Error(
            `Expected tag name \`${
                Array.isArray(expectedTagName)
                    ? expectedTagName.join("/")
                    : expectedTagName
            }\` but found element ${JSON.stringify(rest)}`
        );
    }
    return true;
}
