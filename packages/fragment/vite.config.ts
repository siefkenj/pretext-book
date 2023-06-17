import { defineConfig } from "vitest/config";
import type { Plugin } from "vite";
import fs from "node:fs/promises";
import path from "node:path";
import peg from "peggy";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [pegjsLoader()],
});

function pegjsLoader(options = {}) {
    const svgRegex = /\.peg(js|gy)$/;

    const ret: Plugin = {
        name: "pegjs-loader",
        enforce: "pre",

        async load(filePath) {
            if (!filePath.match(svgRegex)) {
                return;
            }
            const source = await fs.readFile(filePath, "utf-8");
            const filename = path.relative(process.cwd(), filePath);

            const defaultOptions: Record<string, any> = {
                output: "source",
                format: "bare",
                ...options,
            };
            if (filename.match(/latex\.(pegjs|peggy)$/)) {
                defaultOptions.allowedStartRules = ["document", "math"];
            }
            if (filename.match(/tikz\.(pegjs|peggy)$/)) {
                defaultOptions.allowedStartRules = [
                    "path_spec",
                    "foreach_body",
                ];
            }

            const contents = peg.generate(source, defaultOptions);
            return { code: `export default ${contents}` };
        },
    };
    return ret;
}
