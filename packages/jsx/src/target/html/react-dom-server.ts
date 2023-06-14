// ReactDom Server has some issues with proper types, so we import and re-export a copy of it
import type {
  renderToStaticMarkup as renderToStaticMarkupFunction,
  renderToString as renderToStringFunction,
} from "react-dom/server";
// @ts-ignore
import {
  renderToStaticMarkup as rtsm,
  renderToString as rts,
  // @ts-ignore
} from "react-dom/server.browser";

export const renderToStaticMarkup: typeof renderToStaticMarkupFunction = rtsm;
export const renderToString: typeof renderToStringFunction = rts;
