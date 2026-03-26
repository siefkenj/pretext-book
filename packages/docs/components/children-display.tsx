import { Link } from "nextra-theme-docs";
import React from "react";
import { contains } from "./utils";
import { SPECIAL_GROUPS } from "./special-groups";

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

    // Some common tags are grouped together and hidden. They are only displayed if the user expands them.
    const [hideSpecialCharacters, setHideSpecialCharacters] = React.useState(
        contains(childList, SPECIAL_GROUPS["Special Characters"]),
    );
    const [hideLatinTerms, setHideLatinTerms] = React.useState(
        contains(childList, SPECIAL_GROUPS["Latin Terms"]),
    );
    const [hideFormattingTags, setHideFormattingTags] = React.useState(
        contains(childList, SPECIAL_GROUPS["Formatting Tags"]),
    );
    const [hideMusic, setHideMusic] = React.useState(
        contains(childList, SPECIAL_GROUPS["Music"]),
    );
    const [hideMath, setHideMath] = React.useState(
        contains(childList, SPECIAL_GROUPS["Math"]),
    );
    const [hideKeywordTags, setHideKeywordTags] = React.useState(
        contains(childList, SPECIAL_GROUPS["Keyword Tags"]),
    );
    const [hideLists, setHideLists] = React.useState(
        contains(childList, SPECIAL_GROUPS["Lists"]),
    );
    const [hideQuotation, setHideQuotation] = React.useState(
        contains(childList, SPECIAL_GROUPS["Quotation"]),
    );

    const anyHiddenTags =
        hideSpecialCharacters ||
        hideLatinTerms ||
        hideFormattingTags ||
        hideMusic ||
        hideMath ||
        hideKeywordTags ||
        hideLists ||
        hideQuotation;

    const noChildren = childList.length === 0 && !textAllowed;

    if (noChildren) {
        return (
            <em>This tag must be empty (i.e., no children or text allowed).</em>
        );
    }

    if (hideSpecialCharacters) {
        childList = childList.filter(
            (child) => !SPECIAL_GROUPS["Special Characters"].includes(child),
        );
    }
    if (hideLatinTerms) {
        childList = childList.filter(
            (child) => !SPECIAL_GROUPS["Latin Terms"].includes(child),
        );
    }
    if (hideFormattingTags) {
        childList = childList.filter(
            (child) => !SPECIAL_GROUPS["Formatting Tags"].includes(child),
        );
    }
    if (hideMusic) {
        childList = childList.filter(
            (child) => !SPECIAL_GROUPS["Music"].includes(child),
        );
    }
    if (hideMath) {
        childList = childList.filter(
            (child) => !SPECIAL_GROUPS["Math"].includes(child),
        );
    }
    if (hideKeywordTags) {
        childList = childList.filter(
            (child) => !SPECIAL_GROUPS["Keyword Tags"].includes(child),
        );
    }
    if (hideLists) {
        childList = childList.filter(
            (child) => !SPECIAL_GROUPS["Lists"].includes(child),
        );
    }
    if (hideQuotation) {
        childList = childList.filter(
            (child) => !SPECIAL_GROUPS["Quotation"].includes(child),
        );
    }

    return (
        <React.Fragment>
            The following may appear as children
            {anyHiddenTags && (
                <ExpandAllTagsButton
                    label="Expand All Tags"
                    onClick={() => {
                        setHideSpecialCharacters(false);
                        setHideLatinTerms(false);
                        setHideFormattingTags(false);
                        setHideMusic(false);
                        setHideMath(false);
                        setHideKeywordTags(false);
                        setHideLists(false);
                        setHideQuotation(false);
                    }}
                />
            )}
            :{" "}
            {hideFormattingTags && (
                <HiddenTagsButton
                    label="Formatting Tags"
                    onClick={() => setHideFormattingTags(false)}
                />
            )}
            {hideKeywordTags && (
                <HiddenTagsButton
                    label="Keyword Tags"
                    onClick={() => setHideKeywordTags(false)}
                />
            )}
            {hideLatinTerms && (
                <HiddenTagsButton
                    label="Latin Terms"
                    onClick={() => setHideLatinTerms(false)}
                />
            )}
            {hideLists && (
                <HiddenTagsButton
                    label="Lists"
                    onClick={() => setHideLists(false)}
                />
            )}
            {hideMath && (
                <HiddenTagsButton
                    label="Math"
                    onClick={() => setHideMath(false)}
                />
            )}
            {hideMusic && (
                <HiddenTagsButton
                    label="Music"
                    onClick={() => setHideMusic(false)}
                />
            )}
            {hideQuotation && (
                <HiddenTagsButton
                    label="Quotation"
                    onClick={() => setHideQuotation(false)}
                />
            )}
            {hideSpecialCharacters && (
                <HiddenTagsButton
                    label="Special Characters"
                    onClick={() => setHideSpecialCharacters(false)}
                />
            )}
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

function HiddenTagsButton({
    label,
    onClick,
}: {
    label: string;
    onClick: () => void;
}) {
    return (
        <React.Fragment>
            <button
                className="hidden-tags-expand-button"
                title={`Click to show all ${label}`}
                onClick={onClick}
            >
                <i className="hidden-tags-label">{label}</i>
            </button>
        </React.Fragment>
    );
}

function ExpandAllTagsButton({
    onClick,
}: {
    label: string;
    onClick: () => void;
}) {
    return (
        <React.Fragment>
            <button
                className="hidden-tags-expand-all-button"
                title={`Click to show all tags`}
                onClick={onClick}
            >
                (Show all)
            </button>
        </React.Fragment>
    );
}
