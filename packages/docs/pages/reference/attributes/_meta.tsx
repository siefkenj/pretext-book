const ALL_ATTRIBUTES = [
    "component",
    "label",
    "xmlid",
    "xmllang",
]


export default {
    ...Object.fromEntries(
        ALL_ATTRIBUTES.map((tag) => [
            tag,
            { title: <code>{`${tag}`}</code>, isPretextAttribute: true },
        ]),
    ),
};
