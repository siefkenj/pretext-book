# PreTeXt in the Browser

_Run PreTeXt in the browser_.

This library uses [Pyodide](https://pyodide.org/en/stable/) to run Python in the browser (via WebAssembly).
It then imports `lxml` and the PreTeXt _core_ python files. Using a minimal wrapper in `python/pretext_wasm`,
the core `pretext/pretext.py` script is called. The resulting compiled source file is returned.

## Dev

To build the library, do

```
npm run build
```

To test out the code using the web interface, run

```
npm run dev
```
