import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { toXml } from "xast-util-to-xml";
import classNames from "classnames";

export const Title: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const tocItemInfo = state.getTocItemInfo(node);
    const displayName =
        state.getDivisionDisplayName(node) || "Unknown Division";
    // As per pretext source, only "Chapter" is displayed in a title.
    // https://github.com/PreTeXtBook/pretext/blob/1e78f38800e6180fc70e2b3635055212f020e0a4/xsl/pretext-html.xsl#L783
    const hideType = tocItemInfo?.item?.division !== "chapter";
    const hasTitle = toXml(node.children).trim().length > 0;

    return (
        <LeveledHeading
            level={tocItemInfo?.level ?? 1}
            className={classNames({
                "hide-type": hideType,
            })}
        >
            <span className="type">{displayName}</span>
            {
                // See https://github.com/PreTeXtBook/pretext/blob/1e78f38800e6180fc70e2b3635055212f020e0a4/xsl/pretext-html.xsl#L862, which puts a space here and ...
                " "
            }
            <span className="codenumber">
                {makeCodenumber(tocItemInfo?.numbering || [])}
            </span>
            {
                // ... here. These are invoked inside the template at line 783 referenced above.
                " "
            }
            <span className="title">{state.processContent(node.children)}</span>
        </LeveledHeading>
    );
};

/**
 * A title element that is not associated with a division so it doesn't have, e.g., "Section 1.1" inserted
 * in front of it. However, it is still wrapped in an <h#> as appropriate.
 */
export const AnonymousTitle: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const tocItemInfo = state.getTocItemInfo(node);

    return (
        <LeveledHeading level={tocItemInfo?.level ?? 1}>
            <span className="title">{state.processContent(node.children)}</span>
        </LeveledHeading>
    );
};

/**
 * Make a codenumber (e.g., `1.1.3`) out of a `numbering` array.
 */
function makeCodenumber(numbering: number[]) {
    // The first division is `book` or `article`. These don't get displayed in the codenumbers
    return numbering
        .slice(1)
        .map((n) => `${n + 1}`)
        .join(".");
}

export function LeveledHeading({
    level,
    children,
    ...rest
}: React.PropsWithChildren<
    { level: number } & React.HTMLProps<HTMLHeadingElement>
>) {
    let { className = "", ...otherProps } = rest;
    className = "heading " + className;
    switch (level) {
        case 0:
            return (
                <h1 className={className} {...otherProps}>
                    {children}
                </h1>
            );
        case 1:
            return (
                <h2 className={className} {...otherProps}>
                    {children}
                </h2>
            );
        case 2:
            return (
                <h3 className={className} {...otherProps}>
                    {children}
                </h3>
            );
        case 3:
            return (
                <h4 className={className} {...otherProps}>
                    {children}
                </h4>
            );
        case 4:
            return (
                <h5 className={className} {...otherProps}>
                    {children}
                </h5>
            );
        case 5:
        default:
            return (
                <h6 className={className} {...otherProps}>
                    {children}
                </h6>
            );
    }
}
