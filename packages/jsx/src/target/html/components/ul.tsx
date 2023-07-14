import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";
import classNames from "classnames";

const MARKER_TO_STYLE: Record<string, string> = {
    circle: "circle",
    disc: "disc",
    square: "square",
    "": "no-marker",
};

export const Ul: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const itemInfo = state.getListItemInfo(node);
    let style: string | undefined = MARKER_TO_STYLE[itemInfo.marker];
    let colStyle = node.attributes?.cols ? `cols${node.attributes?.cols}` : undefined;

    return <ul className={classNames(style, colStyle)}>{state.processContent(node.children)}</ul>;
};
