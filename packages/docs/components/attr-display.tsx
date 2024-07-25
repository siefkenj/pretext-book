import { Link } from "nextra-theme-docs";
import React from "react";
import { GrammarElementEntry } from "./types";
import { SPECIAL_ATTRS } from "./special-groups";

export function AttrDisplay({
    name,
    variant,
    attrs = {},
    links = {},
    typeOverrides = {},
    children,
}: React.PropsWithChildren<{
    name: string;
    variant?: string;
    attrs: GrammarElementEntry["attributes"];
    links?: Record<string, string>;
    typeOverrides?: Record<string, React.ReactNode>;
}>) {
    const order = Object.keys(attrs);
    order.sort();

    if (order.length === 0) {
        return <em>This tag has no attributes.</em>;
    }

    for (const attrName of Object.keys(attrs)) {
        if (attrName in links) {
            continue;
        }
        if (SPECIAL_ATTRS.includes(attrName)) {
            links[attrName] = `../attributes/${attrName.replace(":", "")}`;
        }
    }

    return (
        <table className="attr-table" id="attr-list">
            <caption>
                Attributes for{" "}
                {children || (
                    <code>
                        {"<"}
                        {name}
                        {">"}
                    </code>
                )}
            </caption>
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Required?</th>
                    <th>Values</th>
                </tr>
            </thead>
            <tbody>
                {order.map((attrName) => {
                    const attrInfo = attrs[attrName];
                    const linkTarget = links[attrName];
                    const nameElm = linkTarget ? (
                        <Link href={linkTarget}>{attrName}</Link>
                    ) : (
                        attrName
                    );
                    return (
                        <tr key={attrName}>
                            <td>
                                <code>
                                    <span className="attr-name">{nameElm}</span>
                                     = "…"
                                </code>
                            </td>
                            <td className="attr-type">
                                {attrInfo.optional ? "optional" : "required"}
                            </td>
                            <td className="attr-values">
                                {typeOverrides[attrName] ||
                                    attrInfo.type?.map((v) => (
                                        <React.Fragment key={v}>
                                            {v.startsWith('"') ? (
                                                <code className="attr-value">
                                                    {v}
                                                </code>
                                            ) : (
                                                <React.Fragment>
                                                    <code className="attr-value abstract-type">
                                                        {v}
                                                    </code>
                                                </React.Fragment>
                                            )}
                                        </React.Fragment>
                                    )) ||
                                    ""}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
