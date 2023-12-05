import React from "react";
import {
    ReplacerComponent,
    ReplacerComponentPureWIthNodeAndId,
    ReplacerComponentPureWithNode,
    ReplacerComponentWithId,
} from "../../replacers/replacer-factory";
import { PretextStateContext } from "../../state";

/**
 * A higher order component that wraps the input in a component that gets its processed children as a prop.
 * This component is shorthand for
 * ```jsx
 * function Comp({ node }) {
 *    const state = React.useContext(PretextStateContext);
 *    const children = state.processContent(node.children);
 *    return <InnerComponent>{children}</InnerComponent>
 * }
 * ```
 */
export function passThroughChildren(
    InnerComponent: ReplacerComponentPureWithNode,
) {
    const ret: ReplacerComponent = (props) => {
        const state = React.useContext(PretextStateContext);
        const children = state.processContent(props.node.children);
        return <InnerComponent {...props}>{children}</InnerComponent>;
    };
    return ret;
}

/**
 * A higher order component that wraps the input in a component that gets its processed children as a prop.
 * This component is shorthand for
 * ```jsx
 * function Comp({ node, id }) {
 *    const state = React.useContext(PretextStateContext);
 *    const children = state.processContent(node.children);
 *    return <InnerComponent id={id}>{children}</InnerComponent>
 * }
 * ```
 */
export function passThroughChildrenWithId(
    InnerComponent: ReplacerComponentPureWIthNodeAndId,
) {
    const ret: ReplacerComponentWithId = (props) => {
        const state = React.useContext(PretextStateContext);
        const children = state.processContent(props.node.children);
        return <InnerComponent {...props}>{children}</InnerComponent>;
    };
    return ret;
}
