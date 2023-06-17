// This file needs to be here because typescript does not know how to use the transpiler
// to directly load Pegjs grammars.
// @ts-nocheck
import _CssSelectorParser from "../grammars/css-selector.peggy";
import type { ParseFunction } from "../grammars/peggy-types";

type PegParser = {
    parse: ParseFunction;
    SyntaxError: (
        message: string,
        expected: string,
        found: unknown,
        location: unknown
    ) => unknown;
};

const CssSelectorParser = _CssSelectorParser as PegParser;

export { CssSelectorParser };
