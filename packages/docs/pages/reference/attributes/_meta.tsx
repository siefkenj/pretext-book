const ALL_ATTRIBUTES = [
    "component",
    "label",
    "xml:id",
    "xml:lang",
]


export default {
    ...Object.fromEntries(
        ALL_ATTRIBUTES.map((tag) => [
            tag.replace(/:/g, ""),
            { title: <code>{`${tag}`}</code>, isPretextAttribute: true },
        ]),
    ),
};
