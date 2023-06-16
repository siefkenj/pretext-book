import { pretextToHtml } from "@pretext-book/jsx";
import * as Comlink from "comlink";

(globalThis as any).window = globalThis

const exposed = {
    parse: (s: string) => {
        console.log("being asked to render")
        try {
            return "foo" //pretextToHtml(s);
        } catch (e: any) {
            if (e.format) {
                throw Object.assign(
                    { desc: String(e), terminalDesc: e.format([{ text: s }]) },
                    e
                );
            }
            throw e;
        }
    },
    // @ts-ignore
    //pretextToHtml(foo:any){console.log(typeof WorkerGlobalScope);return "Foo"}
    pretextToHtml,
};

export type Exposed = typeof exposed;

// We are exporting `void`, but we have to export _something_ to get the module to work correctly
export default Comlink.expose(exposed);
