import { Link } from "nextra-theme-docs";
import React from "react";

/**
 * Display a list of a tag's allowed children.
 */
export function ChildrenDisplay({
    name,
    childList = [],
    links = {},
    children,
}: React.PropsWithChildren<{
    name: string;
    childList: string[];
    links?: Record<string, string>;
}>) {
    childList = Array.from(new Set([...childList]));
    childList.sort();

    return (
        <React.Fragment>
            {childList.map((childName) => {
                const linkTarget = links[childName];
                const nameElm = linkTarget ? (
                    <Link href={linkTarget}>{childName}</Link>
                ) : (
                    <Link href={childName}>{childName}</Link>
                );

                return (
                    <React.Fragment key={childName}>
                        <code className="xml">
                            {"<"}
                            <span className="tag-name">{nameElm}</span>
                            {">"}
                        </code>{" "}
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
}

/**
 * Display a list of a tag's allowed parents.
 */
export function ParentsDisplay({
    name,
    parentList = [],
    links = {},
    children,
}: React.PropsWithChildren<{
    name: string;
    parentList: string[];
    links?: Record<string, string>;
}>) {
    parentList = Array.from(new Set([...parentList]));
    parentList.sort();

    return (
        <React.Fragment>
            {parentList.map((parentName) => {
                const linkTarget = links[parentName];
                const nameElm = linkTarget ? (
                    <Link href={linkTarget}>{parentName}</Link>
                ) : (
                    <Link href={parentName}>{parentName}</Link>
                );

                return (
                    <React.Fragment key={parentName}>
                        <code className="xml">
                            {"<"}
                            <span className="tag-name">{nameElm}</span>
                            {">"}
                        </code>{" "}
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
}
