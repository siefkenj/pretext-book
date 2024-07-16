# PreTeXt Docs

This repository contains PreTeXt documentation created using [Nextra](https://nextra.site/)'s architecture
(which in turn is based on [Nextjs](https://nextjs.org/)). It was created to be a reference for the PreTeXt
tags so that one can quickly look up details about a specific tag without reading about surrounding features.

The documentation should heavily feature examples written as _PreTeXt Fragments_. A PreTeXt fragment is a
part of PreTeXt code that is not part of a larger document. See `packages/fragment` for details about PreTeXt Fragments.

## Dev Instructions

In the root directory (i.e. at the same level as the root of `packages/docs` (_not_ the directory that this README is in)) run `npm install`.

Then, in this directory (the directory of this README), run

```
npm run dev
```

to start in development mode. This will start a live-reloading server that will respond to changes in the markdown files.

### Building

To build, run

```
npm run build
```

The fully build documentation should be available in the `out/` directory.

**Warning:** By default the documentation assumes that it is being served from the root of URL. It is
not relocatable to a subfolder. There are workarounds in place for deploying to github pages. See `next.config.mjs` for details.

### Building/Rebuilding Examples

Examples must be compiled with PreTeXt on a local computer. Every time a markdown code fence annotated with `ptx-example` is encountered,
the source code of the example is saved in `examples/fragments` to a file whose name is the md5 sum of the fragment. The next compiler
is configured to automatically pull any any file with the same name (except ending in `.html`) from `examples/rendered`.

To generate the rendered examples, on a unix system, run

```
./compile-examples.sh
```

This will re-compile every example whose source file (`.ptx`) is newer than one of its output files (`.raw.html`).
If you want to force recompilation of all examples regardless of file timestamps, run `compile-examples.sh --force`.
If you want to recompile a single example only, you can use the `compile-example.sh` script.
