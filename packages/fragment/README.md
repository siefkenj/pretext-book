# @pretext-book/fragment

Take a PreTeXt fragment and embed it in a pretext document. Then, extract the fragment from the compiled output.

This can be used to make unit tests for PreTeXt implementations.

## Fragments and Templates

A PreTeXt _fragment_ looks like the following:

```xml
<FRAGMENT parents="chapter section[foo='bar']" template="article">
    <p>Some text and <m>math</m></p>
</FRAGMENT>
```

It represents a small piece of isolated PreTeXt code that will be inserted into a larger document
(a _template_). The `parents` attribute is a CSS selector that determines what parent nodes will
be dynamically created before being inserted into the template. For the fragment above, the code
that would be inserted into the template is

```xml
<chapter>
    <section foo="bar">
        <p>Some text and <m>math</m></p>
    </section>
</chapter>
```

A _template_ is a PreTeXt document with a single `<FRAGMENT />` tag in it. For example

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<pretext>
    <article>
        <FRAGMENT />
    </article>
</pretext>
```

When substituting into the template, the `<FRAGMENT />` tag is replaced with the content of a PreTeXt fragment.

## Installation

Make sure you have nodejs (>= v18) installed.

To install the fragment cli globally, run

```
npm install @pretext-book/fragment -g
```

To make a local installation, you'll need a directory with a `package.json` file. (One can be created
for you by running `npm init` and answering the prompts.) Then run

```
npm install @pretext-book/fragment
```

## Usage

If you installed globally (and you've configured your path to include npm-install-executables), you should have
access to the `pretext-fragment` command. Otherwise, `npx pretext-fragment` should execute the fragment cli.

### Basic Usage

If all you want to do is render a fragment to its corresponding HTML with a basic PreTeXt temple, you can use the `basic_compile.sh` command.

```bash
./basic_compile ./path/to/fragment.xml
```
The result will be stored in `./tmp_fragment_compile/fragment.html` file.

### Advanced Usage

If you want total control over the environments that the fragments are compiled with, you can use the `pretext-fragment` command directly.

The fragment cli can be used to expand a template and to extract the contents of a template that has been rendered
by PreTeXt. For example, if you have `@pretext-book/fragment` installed locally, you can run

```
npx pretext-fragment --fragment-file node_modules/@pretext-book/fragment/tests/fragments/p1.xml \
                     --template-file node_modules/@pretext-book/fragment/tests/templates/article.xml \
                     --out sample-main.ptx
```

`sample-main.ptx` should now contain a fully-expanded template ready to be compiled to HTML by PreTeXt.

Once the code is compiled, run

```
npx pretext-fragment --extract-from-html-file node_modules/@pretext-book/fragments/tests/rendered-fragments/p1.html \
                     --out p1-extracted.html
```

to extract the rendered portion of the fragment.

For more information on the fragment cli, run `npx pretext-fragment --help`.

## Limitations

PreTeXt doesn't always leave clues about what PreTeXt elements render to what HTML. So, `@pretext-book/fragment`
uses a heuristic: it applies unique and ordered ids to all parent elements of the fragment and then
extracts the contents of the element with the smallest id in the output source. This means, if the inserted template
has auto-generated siblings in the html output, those siblings will also show up in the extracted html.

## Development

To develop, follow the instructions in the root directory of the `@pretext-book` monorepo.
