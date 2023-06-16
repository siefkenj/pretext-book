# PreTeXt Playground

Try the [playground](siefkenj.github.io/pretext-book)!

The PreTeXt playground is a live-rendered (via Javascript) implementation of PreTeXt. It is nowhere near complete, but can be used to experimentation.

### What is in this repository?

In this repository is the frontend code for the PreTeXt playground. The code that actually processes XML into HTML/React components can be found in `packages/jsx`.

## Development

This project uses the `vite` build system and depends 
on `packages/jsx`. To build, first to **from the root directory
of the monorepo**

```
npm install
npm run build
```

This will build all packages and install required dependencies. Once these are built, from the `packages/jsx` folder, run

```
npm install
npm run start
```

This will spin up a web server with hot reloading. See the console output for details about the url for the server.
