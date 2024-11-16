import { defineConfig } from "vitest/config";
// XXX Waiting on bug #152. Cannot hot reload
//import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";
import { nodePolyfills } from "vite-plugin-node-polyfills";

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
    ],
    resolve: {
        alias: {
            stream: "vite-compatible-readable-stream",
        },
    },
    test: {
        globals: true,
    },
});
