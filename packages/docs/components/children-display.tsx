import { Link } from "nextra-theme-docs";
import React from "react";

/**
 * Display a list of a tag's allowed children.
 *
 * @name The name of the tag.
 * @variant The variant of the tag as specified in `generated-grammar.ts`.
 */
export function ChildrenDisplay({
    name,
    variant,
    childList = [],
    textAllowed,
    links = {},
    children,
}: React.PropsWithChildren<{
    name: string;
    variant?: string;
    childList: string[];
    links?: Record<string, string>;
    textAllowed?: boolean;
}>) {
    childList = Array.from(new Set([...childList]));
    childList.sort();

    const noChildren = childList.length === 0 && !textAllowed;

    if (noChildren) {
        return (
            <em>This tag must be empty (i.e., no children or text allowed).</em>
        );
    }

    return (
        <React.Fragment>
            {[
                ...childList.map((childName) => {
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
                }),
                ...(textAllowed
                    ? [
                          <Link key="Text" href="Text">
                              <em>Text</em>
                          </Link>,
                      ]
                    : []),
            ]}
        </React.Fragment>
    );
}

/**
 * Display a list of a tag's allowed parents.
 *
 * @name The name of the tag.
 * @variant The variant of the tag as specified in `generated-grammar.ts`.
 */
export function ParentsDisplay({
    name,
    variant,
    parentList = [],
    links = {},
    children,
}: React.PropsWithChildren<{
    name: string;
    variant?: string;
    parentList: string[];
    links?: Record<string, string>;
}>) {
    parentList = Array.from(new Set([...parentList]));
    parentList.sort();

    if (parentList.length === 0) {
        return <em>This tag cannot be the child of any other.</em>;
    }

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
