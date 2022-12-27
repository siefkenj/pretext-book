import React from "react";
import { PretextState, PretextStateWithProcessContent } from "../../state";

/**
 * Context (i.e. state) that is passed to every component.
 */
export const PretextStateContext = React.createContext(new PretextState() as PretextStateWithProcessContent);
