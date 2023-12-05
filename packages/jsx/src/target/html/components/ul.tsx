import React from "react";
import { PretextStateContext } from "../state";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import classNames from "classnames";

const MARKER_TO_STYLE: Record<string, string> = {
    circle: "circle",
    disc: "disc",
    square: "square",
    "": "no-marker",
};

export const UlPure: PureFunctionComponent<{
    marker: string;
    colStyle?: string;
}> = function ({ children, marker, colStyle }) {
    return (
        <ul className={classNames(MARKER_TO_STYLE[marker], colStyle)}>
            {children}
        </ul>
    );
};

export const Ul: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    const itemInfo = state.getListItemInfo(node);
    const colStyle = node.attributes?.cols
        ? `cols${node.attributes?.cols}`
        : undefined;
    const children = state.processContent(node.children);

    return (
        <UlPure marker={itemInfo.marker} colStyle={colStyle}>
            {children}
        </UlPure>
    );
};
