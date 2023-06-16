import { pretextToHtml, pretextToReact } from "./target/html";
import React from "react";

export { pretextToHtml, pretextToReact };
// We need to re-export React so that we can use a consistent version of React when other programs use it
export { React };
