# @pretext-book/jsx

A `jsx` implementation of PreTeXt

## Development

To build this project, you need `nodejs` installed (>= v18 is recommended). Then run `npm install` **in the root directory of the monorepo** (i.e., not in the directory of this package).

Then, in the directory of this package, run
```
npm run build
```
This will build the package and put the built files in the `dist/` directory. The `package.json` in this package directly references built files from `dist/`.

### Live Rebuilding
Running `npm run watch` will start the build script with live reloading every time a file changes.

### Tests
Run `npm run test` to execute the test suite. `vitest` is used as a test runner. Test are located in `test/` and always end in a `.test.ts`. Because the tests are ouside of `src/` your Typescript linter _may_ complain about using references outside of the Typescript root.

# How it Works

`@pretext-book/jsx` mimics the steps of the XSLT implementation of PreTeXt. Processing a document proceeds via:

 0. The XML input is parsed to a [unifiedjs/xast](https://github.com/syntax-tree/xast-util-from-xml)
 1. The XML is normalized via rules derived from the schema. Normalizing expands all `<CDATA...` to actual text nodes, removes whitespace ocurring between nodes where whitespace is ignored, etc. The code for this is in `src/stages/0-normalize`
 2. An "assemble" stage where unique ids are added to all id-able elements, blank titles are inserted into elements that can have a title but don't, `<docinfo />` tags and frontmatter is extracted from the document. The code for this is in `src/stages/1-normalize`.
 3. The conversion to HTML via `unifiedjs` plugins
  (code in `src/target/html`):
     
     i. Gather information about the document such as the information needed for creating the TOC and for allowing complex queries of the XML tree (e.g., collecting data about node parents, etc.)

     ii. Conversion to React. During this process, `unifiedjs` walks
     the syntax tree and asks for each node if there is a `replacer` available for that node. If so, the return value of the replacer is used. If not, the node is converted verbatim to React/html. To see exactly which elements are replaced, see `src/target/html/index.ts` and for the replacers themselves, see `src/target/html/replacers/`

 4. The resulting React object is converted to HTML via ReactDOM. It is then pretty-printed with Prettier.

### Replacers

A replacer consists of two parts: a **test** function that determines whether a node should be replaced, and the **React component** that replaces the node.

#### Test Functions
A test function can be arbitrarily complicated, but there are ready-made test functions for the operation "if the node name matches X, it should be replaced". See `replacerFactory` and `replacerFactoryWithId`.

#### React Components
See `src/target/html/components` for examples of react components. (Components like `p.tsx` tend to be simpler, for your viewing pleasure.)
At the start of each React component, you will see
```javascript
const state = React.useContext(PretextStateContext);
```
This `state` object contains all information that was collected before the React processing started. It includes TOC information, information for references, etc. If you need any global information, or you need to look up a node's parents, you will be quierying the `state` object.

The rest of the component should look like standard React code, save for the special call
```javascript
state.processContent(node.children)
```
which asks the replacer to run on all the current node's children. Calling this function (or not) gives you control over the recursive
replacement process.

## Contributing
Please contribute by adding replacers and tests! Add a file in `src/target/html/components` corresponding to the tag you wich in implement. Then add a line in `src/target/html/index.ts` to have your replacer called whenever your tag shows up in the source.

After you implement a tag/replacer, please add a test to the `test/`
folder to make sure your code doesn't break in the future!

### Tips
If you run `npm run watch`, your code will automatically recompile when
a file changes. Then, if you are running the `pretext-playground` in
development mode (via `npm run start`), you will have hot-reloading upon
file change, so you can immediately play around with your new tag.
