import esbuild from "esbuild";
import fs from "node:fs/promises";
//import {pegjsLoader} from "./scripts/esbuild-pegjs-loader.mjs";

// Automatically exclude all node_modules from the bundled version
import { nodeExternalsPlugin } from "esbuild-node-externals";

(async () => {
    const packageJson = JSON.parse(
        await fs.readFile(new URL("./package.json", import.meta.url))
    );

    // We want to externalize modules that are explicitly installed as a dependency
    let explicitDeps = Object.keys(packageJson.dependencies || {});
    explicitDeps = explicitDeps.filter((d) => !d.startsWith("prettier"));
    console.log("excluding", explicitDeps);

    const commonConfig = {
        entryPoints: ["./src/index.ts"],
        outfile: "./dist/index.js",
        bundle: true,
        minify: false,
        sourcemap: true,
        format: "esm",
        target: "es2020",
        plugins: [
            //nodeExternalsPlugin(),
            //pegjsLoader()
        ],
 //       external: [...explicitDeps],
    };

    // Build the ESM
    esbuild.build(commonConfig).catch(() => process.exit(1));

    // Build a CommonJS version as well
    esbuild
        .build({
            ...commonConfig,
            outfile: "./dist/index.cjs",
            format: "cjs",
        })
        .catch(() => process.exit(1));
})();
