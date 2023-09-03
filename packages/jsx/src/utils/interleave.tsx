import React from "react";

/**
 * Like `Array.prototype.join`, but for React nodes.
 */
export function interleaveWith(arr: React.ReactNode[], sep: React.ReactNode) {
    const result: React.ReactNode[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        if (i < arr.length - 1) {
            result.push(
                <React.Fragment key={`added-${i}`}>{sep}</React.Fragment>,
            );
        }
    }
    return result;
}
