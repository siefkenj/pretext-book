import { Element as XMLElement, Text as XMLText } from "xast";

export type Toc = TocItem[];

export interface TocItem {
    /**
     * The XML extracted from the `<title />` element.
     */
    title: (XMLElement | XMLText)[];
    /**
     * The globally unique `id`. Contains only [a-zA-Z0-9_-]
     */
    id: string;
    /**
     * Division that the entry is part of. E.g. `section`, `subsection`, etc.
     */
    division: string;
    /**
     * Any descendent entries.
     *
     * @type {TocItem[]}
     * @memberof TocEntry
     */
    children: TocItem[];
}
