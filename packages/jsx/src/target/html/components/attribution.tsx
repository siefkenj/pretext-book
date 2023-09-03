import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { isElement } from "../../../utils/tools";
import { interleaveWith } from "../../../utils/interleave";
import { XastElement } from "../../../utils/xast";

export const Attribution: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const lineChildren = node.children.filter(
        (n) => isElement(n) && n.name === "line",
    ) as XastElement[];
    let content: React.ReactNode = null;
    if (lineChildren.length > 0) {
        content = interleaveWith(
            lineChildren.map((c) => state.processContent(c.children)),
            <br />,
        );
    } else {
        content = (
            <React.Fragment>
                {state.processContent(node.children)}
            </React.Fragment>
        );
    }

    return <cite className="attribution">―{content}</cite>;
};
