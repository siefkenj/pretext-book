import { loadPyodide } from "pyodide";

// The required python packages that are not part of pyodide's standard library.
// @ts-ignore
import rawZipImport from "../python/dist/pretext_wasm-0.1.0-py3-none-any.whl?uint8array&base64";
const rawZip = rawZipImport as Uint8Array;
// @ts-ignore
import rawMicropipImport from "./assets/micropip-0.7.1-py3-none-any.whl?uint8array&base64";
const rawMicropip = rawMicropipImport as Uint8Array;
// @ts-ignore
import rawPackagingImport from "./assets/packaging-24.2-py3-none-any.whl?uint8array&base64";
const rawPackaging = rawPackagingImport as Uint8Array;
// @ts-ignore
import rawLxmlImport from "./assets/lxml-5.2.1-cp312-cp312-pyodide_2024_0_wasm32.whl?uint8array&base64";
const rawLxml = rawLxmlImport as Uint8Array;

type PyodideAPI = Awaited<ReturnType<typeof loadPyodide>>;

// Get some default templates
import mainPtxDefault from "../python/pretext_wasm/templates/hello/source/main.ptx?raw";
import publicationPtxDefault from "../python/pretext_wasm/templates/hello/publication/publication.ptx?raw";
export { mainPtxDefault, publicationPtxDefault };

const MAIN_PTX_PATH = "/home/pyodide/tmp_compile/main.ptx";
const PUBLICATION_PTX_PATH = "/home/pyodide/tmp_compile/publication.ptx";
const OUT_DIR = "/home/pyodide/tmp_compile/out";

const DECODER = new TextDecoder();

/**
 * A class for compiling a PreTeXt file using a WASM implementation of python.
 */
export class PtxCompiler {
    pyodide: PyodideAPI | null = null;

    /**
     * Initialize the compiler.
     */
    async init() {
        this.pyodide = await loadPyodide();
        await this.pyodide.unpackArchive(rawZip, "zip");
        await this.pyodide.unpackArchive(rawMicropip, "zip");
        await this.pyodide.unpackArchive(rawPackaging, "zip");
        await this.pyodide.unpackArchive(rawLxml, "zip");
        this.pyodide.FS.mkdir("./tmp_compile");
        this.pyodide.FS.mkdir("./tmp_compile/generated-assets");
        this.pyodide.FS.mkdir("./tmp_compile/assets");
        this.pyodide.FS.mkdir("./tmp_compile/out");
    }

    _check_init(): asserts this is { pyodide: PyodideAPI } {
        if (!this.pyodide) {
            throw new Error("Compiler not initialized");
        }
    }

    /**
     * Set `main.ptx` to the given string. If no string is provided, a default "hello world" template is used.
     */
    set_main_ptx(contents: string = mainPtxDefault) {
        this._check_init();
        this.pyodide.FS.writeFile(MAIN_PTX_PATH, contents);
    }

    /**
     * Get the contents of `main.ptx`.
     */
    get_main_ptx() {
        this._check_init();
        return this.pyodide.FS.readFile(MAIN_PTX_PATH);
    }

    /**
     * Set `publication.ptx` to the given string. If no string is provided, a default template is used.
     */
    set_publication_ptx(contents: string = publicationPtxDefault) {
        this._check_init();
        this.pyodide.FS.writeFile(PUBLICATION_PTX_PATH, contents);
    }

    /**
     * Get the contents of `publication.ptx`.
     */
    get_publication_ptx() {
        this._check_init();
        return this.pyodide.FS.readFile(PUBLICATION_PTX_PATH);
    }

    /**
     * Compile the PreTeXt file.
     */
    async compile() {
        this._check_init();
        // Check that `main.ptx` and `publication.ptx` exist.
        if (!this.pyodide.FS.findObject("/home/pyodide/tmp_compile/main.ptx")) {
            this.set_main_ptx();
        }
        if (
            !this.pyodide.FS.findObject(
                "/home/pyodide/tmp_compile/publication.ptx",
            )
        ) {
            this.set_publication_ptx();
        }
        await this.pyodide.runPythonAsync(`
            import pretext_wasm
            pretext_wasm.compile("${MAIN_PTX_PATH}", "${PUBLICATION_PTX_PATH}")
        `);
    }

    /**
     * Get the compiled HTML.
     */
    getHtml() {
        this._check_init();
        return DECODER.decode(
            this.pyodide.FS.readFile(
                "/home/pyodide/tmp_compile/out/root-1-1.html",
            ),
        );
    }

    /**
     * Returns the HTML but references to local style sheets/javascript are replaced by blob URLs
     * containing the contents of the requested files.
     */
    getHtmlWithLocalReferences() {
        this._check_init();
        const rawHtml = this.getHtml();
        const parser = new DOMParser();
        const doc = parser.parseFromString(rawHtml, "text/html");
        // Loop through all the CSS tags and replace the href with a blob URL if applicable
        for (const link of doc.querySelectorAll("link[rel=stylesheet]")) {
            const href = link.getAttribute("href");
            const path = `${OUT_DIR}/${href}`;
            if (!this.pyodide.FS.findObject(path)) {
                continue;
            }
            const cssFile = DECODER.decode(this.pyodide.FS.readFile(path));
            const blob = new Blob([cssFile], { type: "text/css" });
            const blobUrl = URL.createObjectURL(blob);
            link.setAttribute("href", blobUrl);
        }

        // Loop through all the script tags and replace the src with a blob URL if applicable
        for (const script of doc.querySelectorAll("script")) {
            const src = script.getAttribute("src");
            const path = `${OUT_DIR}/${src}`;
            if (!this.pyodide.FS.findObject(path)) {
                continue;
            }
            const jsFile = DECODER.decode(this.pyodide.FS.readFile(path));
            const blob = new Blob([jsFile], { type: "text/javascript" });
            const blobUrl = URL.createObjectURL(blob);
            script.setAttribute("src", blobUrl);
        }

        return doc.documentElement.outerHTML;
    }
}
