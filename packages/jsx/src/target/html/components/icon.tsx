import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";

// Icon list taken from
// https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-common.xsl#L3544-L3545
const ICONS: Record<string, { fontAwesome: string; unicode: string }> = {
    "arrow-left": {
        fontAwesome: "arrow-left",
        unicode: "←",
    },
    "arrow-up": {
        fontAwesome: "arrow-up",
        unicode: "↑",
    },
    "arrow-right": {
        fontAwesome: "arrow-right",
        unicode: "→",
    },
    "arrow-down": {
        fontAwesome: "arrow-down",
        unicode: "↓",
    },
    "file-save": {
        fontAwesome: "save",
        unicode: "💾",
    },
    gear: {
        fontAwesome: "cog",
        unicode: "⚙",
    },
    menu: {
        fontAwesome: "bars",
        unicode: "☰",
    },
    wrench: {
        fontAwesome: "wrench",
        unicode: "🔧",
    },
    power: {
        fontAwesome: "power-off",
        unicode: "⏻",
    },
    "media-play": {
        fontAwesome: "play",
        unicode: "▶",
    },
    "media-pause": {
        fontAwesome: "pause",
        unicode: "⏸",
    },
    "media-stop": {
        fontAwesome: "stop",
        unicode: "⏹",
    },
    "media-fast-forward": {
        fontAwesome: "forward",
        unicode: "⏩",
    },
    "media-rewind": {
        fontAwesome: "backward",
        unicode: "⏪",
    },
    "media-skip-to-end": {
        fontAwesome: "fast-forward",
        unicode: "⏭",
    },
    "media-skip-to-start": {
        fontAwesome: "fast-backward",
        unicode: "⏮",
    },
};

export const IconPure: PureFunctionComponent<{ name: string }> = function ({
    name,
}) {
    const faNameBase = ICONS[name]?.fontAwesome || "";
    if (!faNameBase) {
        console.warn(
            `Could not find icon "${name}". Valid icon names are ${Object.keys(
                ICONS,
            ).join(", ")}`,
        );
    }

    return <span className={`fas fa-${faNameBase}`}></span>;
};

export const Icon: ReplacerComponent = function ({ node }) {
    const name = node.attributes?.["name"] || "";
    return <IconPure name={name} />;
};
