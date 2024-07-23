import { Link } from "nextra-theme-docs";
import React from "react";
import { VariantInfo } from "./types";
import {
    Tab,
    TabList,
    TabPanel,
    TabProvider,
    useTabStore,
} from "@ariakit/react";
import { ChildrenDisplay, ParentsDisplay } from "./children-display";

export function VariantsTabs({
    name,
    variants,
}: React.PropsWithChildren<{
    name: string;
    variants: VariantInfo[];
}>) {
    const store = useTabStore();

    return (
        <TabProvider>
            <TabList className="tab-strip">
                {variants.map((variant) => (
                    <Tab
                        key={variant.refId}
                        store={store}
                        id={variant.refId}
                        title={`Information about the ${variant.refId} variant`}
                    >
                        <i>{formatVariantName(variant)}</i>
                    </Tab>
                ))}
            </TabList>
            {variants.map((variant) => (
                <TabPanel key={variant.refId} store={store} id={variant.refId}>
                    <Heading>Children</Heading>
                    <ChildrenDisplay
                        name={name}
                        textAllowed={variant.textChildrenAllowed}
                        childList={variant.children.map((c) => c.name)}
                    />
                    <Heading>Parents</Heading>
                    <ParentsDisplay
                        name={name}
                        parentList={variant.parents.map((p) => p.name)}
                    />
                </TabPanel>
            ))}
        </TabProvider>
    );
}

/**
 * Display a list of a tag's allowed children.
 *
 * @name The name of the tag.
 * @variant The variant of the tag as specified in `generated-grammar.ts`.
 */
export function SyntaxDisplay({
    name,
    variants = [],
}: React.PropsWithChildren<{
    name: string;
    variants: VariantInfo[];
}>) {
    const variantPluralization = variants.length === 1 ? `variant` : `variants`;
    const variantsDescription =
        variants.length === 0 ? null : (
            <React.Fragment>
                <Heading>Variants</Heading>
                <p>
                    There are {variants.length} {variantPluralization} of{" "}
                    <code>{`<${name}>`}</code>:{" "}
                    {variants
                        .flatMap((v) => [
                            <i key={v.name}>{formatVariantName(v)}</i>,
                            ", ",
                        ])
                        .slice(0, -1)}
                    .
                </p>
            </React.Fragment>
        );

    return (
        <React.Fragment>
            {variantsDescription}
            <VariantsTabs name={name} variants={variants} />
        </React.Fragment>
    );
}

/**
 * Format `variant.refId` for display to the user.
 */
function formatVariantName(variant: VariantInfo): string {
    // Strip off any leading `Element` from `variant.name` unless
    // `variant.name` is `Element` itself.
    return variant.refId === "Element"
        ? variant.refId
        : variant.refId.replace(/^Element/, "");
}

/**
 * Heading that matches Nextra's theme for a `### Foo` heading.
 */
function Heading({ children }: React.PropsWithChildren<{}>) {
    return (
        <h2 className="_font-semibold _tracking-tight _text-slate-900 dark:_text-slate-100 _mt-8 _text-2xl">
            {children}
        </h2>
    );
}
