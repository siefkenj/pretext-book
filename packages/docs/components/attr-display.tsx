import { Link } from "nextra-theme-docs";
import React from "react";
import { GrammarEntry } from "./types";

export function AttrDisplay({
    name,
    variant,
    attrs = {},
    links = {},
    children,
}: React.PropsWithChildren<{
    name: string;
    variant?: string;
    attrs: GrammarEntry["attributes"];
    links?: Record<string, string>;
}>) {
    const order = Object.keys(attrs);
    order.sort();

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
                                {attrInfo.type?.map((v) => (
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
                                )) || ""}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
