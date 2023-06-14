import React from "react";
import Prettier from "prettier/standalone";
import * as ReactDOMServer from "./react-dom-server";
import * as prettierPluginHtml from "prettier/parser-html";

function printPrettier(source: string) {
  return Prettier.format(source, {
    parser: "html",
    plugins: [prettierPluginHtml],
  });
}

/**
 * Compiler plugin that turns a React tree into an html string.
 */
export function reactToHtml(node: React.ReactElement): string {
  const rawHtml = ReactDOMServer.renderToStaticMarkup(node);
  try {
    return printPrettier(rawHtml);
  } catch (e) {
    console.warn("Failed to pretty print html", e);
  }
  return rawHtml;
}
