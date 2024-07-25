/**
 * Returns whether list `a` contains all elements of list `b`.
 */
export function contains(a: string[], b: string[]): boolean {
    return b.every((elem) => a.includes(elem));
}
