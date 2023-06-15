import esbuild from "esbuild";
import fs from "node:fs/promises";

const [bin, sourcePath, ...args] = process.argv;

const printOnBuildPlugin = () => ({
    name: "print-on-build",
    setup(build) {
        build.onEnd(async (result, x) => {
            const { errors, outputFiles } = result;
            if (!errors.length) {
                console.log("Built", build.initialOptions.outfile);
            } else {
                console.error(errors);
            }
        });
    },
});

(async () => {
    const packageJson = JSON.parse(
        await fs.readFile(new URL("./package.json", import.meta.url))
    );

    // We want to externalize modules that are explicitly installed as a dependency
    let explicitDeps = Object.keys(packageJson.dependencies || {});

    const commonConfig = {
        entryPoints: ["./src/index.ts"],
        outfile: "./dist/index.js",
        bundle: true,
        minify: false,
        sourcemap: true,
        format: "esm",
        target: "es2020",
        platform: "node",
        plugins: [printOnBuildPlugin()],
        //       external: [...explicitDeps],
    };
    // Build the ESM
    const esBuilder = await esbuild
        .context(commonConfig)
        .catch(() => process.exit(1));

    // Build a CommonJS version as well
    const cjsBuilder = await esbuild
        .context({
            ...commonConfig,
            outfile: "./dist/index.cjs",
            format: "cjs",
        })
        .catch(() => process.exit(1));

    // Build both versions and watch appropriately
    if (args.includes("--watch")) {
        esBuilder.watch();
        cjsBuilder.watch();
    } else {
        await Promise.all([esBuilder.rebuild(), cjsBuilder.rebuild()]);
        esBuilder.dispose();
        cjsBuilder.dispose();
    }
})();
