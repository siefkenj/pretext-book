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
import { AttrDisplay } from "./attr-display";

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
    variants = [...variants].sort((a, b) => a.refId.localeCompare(b.refId));

    const variantsDescription =
        variants.length <= 1 ? null : (
            <React.Fragment>
                <Heading>Variants</Heading>
                <p className="_my-4">
                    There are {variants.length} variants of{" "}
                    <code>{`<${name}>`}</code>.{" "}
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
 * Displays a tab strip with one tab per variant. Each tab contains information about attributes/children/parents of
 * the variant.
 */
export function VariantsTabs({
    name,
    variants,
}: React.PropsWithChildren<{
    name: string;
    variants: VariantInfo[];
}>) {
    const store = useTabStore();

    if (variants.length === 1) {
        return (
            <VariantInfoDisplay
                variant={variants[0]}
                name={name}
                marginTop={8}
            />
        );
    }

    return (
        <TabProvider>
            <TabList className="tab-strip">
                {variants.map((variant) => (
                    <Tab
                        key={variant.refId}
                        store={store}
                        id={variant.refId}
                        title={`Information about the ${formatVariantName(variant)} variant of <${name}>`}
                    >
                        <i>{formatVariantName(variant)}</i>
                    </Tab>
                ))}
            </TabList>
            {variants.map((variant) => (
                <TabPanel key={variant.refId} store={store} id={variant.refId}>
                    <VariantInfoDisplay
                        variant={variant}
                        name={name}
                        marginTop={2}
                    />
                </TabPanel>
            ))}
        </TabProvider>
    );
}

/**
 * Display all relevant information about a particular variant of a tag.
 */
export function VariantInfoDisplay({
    variant,
    name,
    marginTop,
}: {
    variant: VariantInfo;
    name: string;
    marginTop: number;
}) {
    return (
        <React.Fragment>
            <Heading marginTop={marginTop}>Attributes</Heading>
            <AttrDisplay name={name} attrs={variant.attributes} />
            <Heading>Children</Heading>
            <ChildrenDisplay
                name={name}
                textAllowed={variant.textChildrenAllowed}
                childList={variant.children.map((c) => c.name)}
            />
            <Heading>Parents</Heading>
            {variant.parents.length !== 0 && "This element may appear as an immediate child of the following elements: "}
            <ParentsDisplay
                name={name}
                parentList={variant.parents.map((p) => p.name)}
            />
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
function Heading({
    children,
    marginTop,
}: React.PropsWithChildren<{ marginTop?: number }>) {
    return (
        <h2
            className={`_font-semibold _tracking-tight _text-slate-900 dark:_text-slate-100 _mt-${marginTop || 8} _text-2xl`}
        >
            {children}
        </h2>
    );
}
