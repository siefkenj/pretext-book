// @ts-ignore
import { jsonGrammar } from "../../jsx/src/assets/generated-grammar";

function dumpAllAttributes(): string[] {
    let ret = Object.values(jsonGrammar.refs)
        .filter((r) => r.type === "element")
        .flatMap((r) => Object.keys((r as any).attributes));
    ret = Array.from(new Set(ret));
    ret.sort();
    return ret;
}

console.log(JSON.stringify(dumpAllAttributes()));