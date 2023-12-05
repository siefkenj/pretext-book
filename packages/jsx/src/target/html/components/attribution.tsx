import React from "react";
import { PretextStateContext } from "../state";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { isElement } from "../../../utils/tools";
import { interleaveWith } from "../../../utils/interleave";
import { XastElement } from "../../../utils/xast";

export const AttributionPure: PureFunctionComponent<{
    lines: React.ReactNode[];
}> = function ({ lines }) {
    return (
        <cite className="attribution">―{interleaveWith(lines, <br />)}</cite>
    );
};

export const Attribution: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const lineChildren = node.children.filter(
        (n) => isElement(n) && n.name === "line",
    ) as XastElement[];
    let lines: React.ReactNode[];

    if (lineChildren.length > 0) {
        lines = lineChildren.map((c) => state.processContent(c.children));
    } else {
        lines = [state.processContent(node.children)];
    }

    return <AttributionPure lines={lines} />;
};
