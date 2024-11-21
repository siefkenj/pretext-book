import { defineConfig } from "vitest/config";
// XXX Waiting on bug #152. Cannot hot reload
//import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PYODIDE_EXCLUDE = [
    "!**/*.{md,html}",
    "!**/*.d.ts",
    "!**/*.whl",
    "!**/node_modules",
];

export function viteStaticCopyPyodide() {
    const pyodideDir = dirname(fileURLToPath(import.meta.resolve("pyodide")));
    return viteStaticCopy({
        targets: [
            {
                src: [join(pyodideDir, "*")].concat(PYODIDE_EXCLUDE),
                dest: "assets",
            },
        ],
    });
}

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    build: {
        outDir: "./build",
        rollupOptions: {
            // Suppress unneeded warnings. These come from bundled code, so there's nothing
            // we can do about it.
            // https://github.com/remix-run/remix/issues/8891
            onwarn(warning, warn) {
                // Suppress "Module level directives cause errors when bundled" warnings
                if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
                    return;
                }
                warn(warning);
            },
        },
    },
    define: {
        global: "globalThis",
    },
    plugins: [
        //     react(),
        viteTsconfigPaths(),
        svgrPlugin(),
        nodePolyfills({
            globals: {
                Buffer: true, // can also be 'build', 'dev', or false
                global: true,
                process: true,
            },
            // Whether to polyfill `node:` protocol imports.
            protocolImports: true,
        }),
        viteStaticCopyPyodide() as any,
    ],
    resolve: {
        alias: {
            stream: "vite-compatible-readable-stream",
        },
    },
    optimizeDeps: { exclude: ["pyodide"] },
    test: {
        globals: true,
    },
});
