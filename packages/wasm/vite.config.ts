import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import arraybuffer from "vite-plugin-arraybuffer";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

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

export default defineConfig({
    plugins: [viteStaticCopyPyodide() as any, arraybuffer()],
    optimizeDeps: { exclude: ["pyodide"] },
});
