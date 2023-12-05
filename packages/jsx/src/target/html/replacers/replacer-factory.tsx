import { ReplacerFunc, XastElement } from "../../../utils/xast";
import React from "react";

export type ReplacerComponent = React.FunctionComponent<{ node: XastElement }>;
export type ReplacerComponentWithId = React.FunctionComponent<{
    node: XastElement;
    id: string;
}>;
export type ReplacerComponentPureWithNode<AdditionalProps extends {} = {}> =
    React.FunctionComponent<
        React.PropsWithChildren<{ node: XastElement } & AdditionalProps>
    >;
export type ReplacerComponentPureWIthNodeAndId<
    AdditionalProps extends {} = {},
> = React.FunctionComponent<
    React.PropsWithChildren<
        {
            node: XastElement;
            id: string;
        } & AdditionalProps
    >
>;

/**
 * A component that does not have any state nor does it use any hooks. It may have
 * children passed in.
 */
export type PureFunctionComponent<T extends {} = {}> = React.FunctionComponent<
    React.PropsWithChildren<T>
>;

/**
 * A component that does not have any state nor does it use any hooks. It may have
 * children passed in and always has an `id` passed in.
 */
export type PureFunctionComponentWithId<T extends {} = {}> =
    React.FunctionComponent<React.PropsWithChildren<{ id: string } & T>>;

/**
 * Returns a replacer function that checks for an element and returns the appropriate component function.
 */
export function replacerFactory(
    elementName: string,
    Component: ReplacerComponent,
): ReplacerFunc {
    return (node) => {
        if (node.name === elementName) {
            return <Component node={node} />;
        }
    };
}

/**
 * Returns a replacer function that checks for an element and returns the appropriate component function.
 * This function also checks for and passes an `id` to the child
 */
export function replacerFactoryWithId(
    elementName: string,
    Component: ReplacerComponentWithId,
): ReplacerFunc {
    return (node) => {
        if (node.name === elementName) {
            const id = node.attributes?.["xml:id"] || "";
            if (id === "") {
                console.warn(
                    `Expected element <${node.name}> to have a non-blank \`xml:id\`.`,
                );
            }
            return <Component node={node} id={id} />;
        }
    };
}
