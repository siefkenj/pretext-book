import type { expect } from "vitest";
import { normalizeFragmentHtml } from "./normalize-fragment-html";

type Expect = typeof expect;
type ExpectExtend = Expect["extend"];
type ExpectExtendObject = Parameters<ExpectExtend>[0];

// This code is used to tell vitest that there is a custom matcher.
interface CustomMatchers<R = unknown> {
    toMatchFragment(frag: string): R;
}
declare module "vitest" {
    interface Assertion<T = any> extends CustomMatchers<T> {}
    interface AsymmetricMatchersContaining extends CustomMatchers {}
}

/**
 * Extend jest's expect with a matcher for PreTeXt fragments. This matcher
 * will normalize the input HTML before comparing it to the expected HTML.
 * 
 * You may need to include
 * ```
 *   interface CustomMatchers<R = unknown> {
 *       toMatchFragment(frag: string): R;
 *   }
 *   declare module "vitest" {
 *       interface Assertion<T = any> extends CustomMatchers<T> {}
 *       interface AsymmetricMatchersContaining extends CustomMatchers {}
 *   }
 * 
 * ```
 * for vitest/jest types to work correctly.
 */
export const jestToMatchFragment: ExpectExtendObject = {
    async toMatchFragment(received: string, expected: string) {
        const normalizedReceived = await normalizeFragmentHtml(received);
        const normalizedExpected = await normalizeFragmentHtml(expected);
        const pass: boolean = this.equals(
            normalizedReceived,
            normalizedExpected
        );
        if (pass) {
            return {
                pass,
                message: () => {
                    return `expected ${this.utils.printReceived(
                        normalizedReceived
                    )} not to match fragment ${this.utils.printExpected(
                        normalizedExpected
                    )}, but it did`;
                },
            };
        }
        return {
            pass,
            message: () => {
                return `Expected ${this.utils.printReceived(
                    received
                )} to match fragment ${this.utils.printExpected(
                    expected
                )}, but it didn't.\n\nA normalized diff is shown below:\n\n${this.utils.diff(
                    normalizedReceived,
                    normalizedExpected
                )}`;
            },
        };
    },
};
