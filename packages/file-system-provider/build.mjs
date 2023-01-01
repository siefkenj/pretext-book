import esbuild from "esbuild";
import fs from "node:fs/promises";
import { createRequire } from "module";
import plugin from "node-stdlib-browser/helpers/esbuild/plugin";
import stdLibBrowser from "node-stdlib-browser";
const require = createRequire(import.meta.url);

// Automatically exclude all node_modules from the bundled version
import { nodeExternalsPlugin } from "esbuild-node-externals";

(async () => {
    const packageJson = JSON.parse(
        await fs.readFile(new URL("./package.json", import.meta.url))
    );

    // We want to externalize modules that are explicitly installed as a dependency
    let explicitDeps = Object.keys(packageJson.dependencies || {});
    explicitDeps = explicitDeps.filter((d) => !d.startsWith("prettier"));
    console.log("Imported dependencies. Bundling anyways:", explicitDeps);

    const commonConfig = {
        entryPoints: ["./src/index.ts"],
        outfile: "./dist/index.js",
        bundle: true,
        minify: false,
        sourcemap: true,
        format: "esm",
        target: "es6",
    };
    const nodeCompat = {
        inject: [require.resolve("node-stdlib-browser/helpers/esbuild/shim")],
        define: {
            path: "path",
            stream: "stream",
        },
        plugins: [plugin(stdLibBrowser)],
    };

    // Build the ESM
    esbuild
        .build({
            ...commonConfig,
            ...nodeCompat,
        })
        .catch(() => process.exit(1));

    // Build a CommonJS version as well
    esbuild
        .build({
            ...commonConfig,
            ...nodeCompat,
            outfile: "./dist/index.cjs",
            format: "cjs",
        })
        .catch(() => process.exit(1));

    // Build the two standalone packages
    esbuild
        .build({
            ...commonConfig,
            ...nodeCompat,
            entryPoints: ["./src/memfs.ts"],
            outfile: "./dist/memfs.js",
        })
        .catch(() => process.exit(1));
    esbuild
        .build({
            ...commonConfig,
            entryPoints: ["./src/basic-memfs.ts"],
            outfile: "./dist/basic-memfs.js",
        })
        .catch(() => process.exit(1));
})();
