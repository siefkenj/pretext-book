import { jsonGrammar } from "../../jsx/src/assets/generated-grammar";

function dumpAllElements() {
    let ret = Object.values(jsonGrammar.refs)
        .filter((r) => r.type === "element")
        .map((r) => (r as any).name);
    ret = Array.from(new Set(ret));
    ret.sort();
    return ret;
}

console.log(JSON.stringify(dumpAllElements()));