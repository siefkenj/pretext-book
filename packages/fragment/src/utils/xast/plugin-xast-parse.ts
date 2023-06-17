import { Plugin } from "unified";
import { fromXml } from "xast-util-from-xml";
import { XastRoot } from "./types";

/**
 * Parse a string to a Xast ast tree.
 */
export const xastParserPlugin: Plugin<void[], string, XastRoot> = function () {
    this.Parser = fromXml;
};
