#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "node:fs/promises";
import path from "node:path";
import { getTemplateName } from "../lib/get-template-name";
import { fragmentToXast } from "../lib/fragment-to-pretext";
import { toXml } from "xast-util-to-xml";
import { extractFragmentFromHtml } from "../lib/extract-fragment-from-html";
// Typescript doesn't like us importing from outside the project root.
// However, this is a static import, so it is fine.
// @ts-ignore
import { version } from "../../package.json";

const yargsObj = yargs(hideBin(process.argv))
    .usage(
        `$0 --template-file ./template.ptx --fragment-file ./fragment.xml`.trim()
    )
    .version(version)
    .options({
        "template-file": {
            type: "string",
            description:
                "Path to the template file. This file should have a <fragment /> element where you want the substitution to occur",
            requiresArg: true,
        },
        template: {
            type: "string",
            description:
                "Template as a string. This string should have a <fragment /> element where you want the substitution to occur",
            requiresArg: true,
        },
        "template-name": {
            type: "boolean",
            description:
                "Extract the name of the template requested by the fragment.",
        },
        "fragment-file": {
            type: "string",
            description:
                "Path to the fragment file. This file should have a <fragment /> element as the root node.",
            requiresArg: true,
        },
        fragment: {
            type: "string",
            description:
                "Fragment as a string. This string should have a <fragment /> element as the root node.",
            requiresArg: true,
        },
        "extract-from-html-file": {
            type: "string",
            description:
                "Extract the rendered fragment from the specified file.",
            requiresArg: true,
        },
        "extract-from-html": {
            type: "string",
            description:
                "Extract the rendered fragment from the specified string.",
            requiresArg: true,
        },
        "pretty-print": {
            type: "boolean",
            description:
                "Whether to pretty-print fragments extracted from HTML",
        },
        out: {
            type: "string",
            alias: "o",
            description: "Path to the file where the result will be saved.",
            requiresArg: true,
        },
    })
    .help();
const options = yargsObj.argv;

type Options = Awaited<typeof options>;

const cache: { template?: string; fragment?: string; html?: string } = {};

/**
 * Normalize a file path to a path that is relative to the current working directory.
 */
function makePath(pathName: string) {
    if (pathName.startsWith("/")) {
        return pathName;
    }
    const cwd = process.env.INIT_CWD || process.cwd();
    return path.join(cwd, pathName);
}

/**
 * Cached function to get the contents of the _fragment_ as specified
 * by command-line options
 */
async function getFragment(options: Options) {
    if (cache.fragment) {
        return cache.fragment;
    }
    return (
        options.fragment ||
        (options.fragmentFile &&
            (await fs.readFile(makePath(options.fragmentFile), {
                encoding: "utf-8",
            })))
    );
}

/**
 * Cached function to get the contents of the _template_ as specified
 * by command-line options
 */
async function getTemplate(options: Options) {
    if (cache.fragment) {
        return cache.fragment;
    }
    return (
        options.template ||
        (options.templateFile &&
            (await fs.readFile(makePath(options.templateFile), {
                encoding: "utf-8",
            })))
    );
}

/**
 * Cached function to extract the contents of the rendered fragment from the _html_ as specified
 * by command-line options
 */
async function getHtml(options: Options) {
    if (cache.html) {
        return cache.html;
    }
    return (
        options.extractFromHtml ||
        (options.extractFromHtmlFile &&
            (await fs.readFile(makePath(options.extractFromHtmlFile), {
                encoding: "utf-8",
            })))
    );
}

async function getTemplateNameFromFragment(options: Options) {
    const fragment = await getFragment(options);
    if (!fragment) {
        throw new Error(
            `Must supply a fragment to extract its requested template's name.`
        );
    }
    return getTemplateName(fragment);
}

async function evaluateTemplate(options: Options) {
    const fragment = await getFragment(options);
    const template = await getTemplate(options);
    if (!fragment) {
        throw new Error(
            `You must supply a fragment string or file to evaluate a template`
        );
    }
    if (!template) {
        throw new Error(
            `You must supply a template string or file to evaluate a template`
        );
    }

    // On the command line, we just assume that the supplied template is the requested template
    const templateName = getTemplateName(fragment);
    const renderedAst = fragmentToXast(fragment, { [templateName]: template });
    return toXml(renderedAst);
}

async function extractFromHtml(options: Options) {
    const html = await getHtml(options);
    if (!html) {
        throw new Error(
            `You must supply an html string or file to extract a fragment from`
        );
    }
    return extractFragmentFromHtml(html, { prettyPrint: options.prettyPrint });
}

/**
 * Write to a file or log to stdout the contents of `str`, depending on
 * whether `--out` was specified in `options`.
 */
async function writeOrLog(str: string, options: Options) {
    if (!options.out) {
        console.log(str);
        return;
    }
    await fs.writeFile(options.out, str, { encoding: "utf-8", flag: "w" });
}

async function main() {
    const opts = await options;

    if (opts.templateName) {
        console.log(await getTemplateNameFromFragment(opts));
        return;
    }

    if (opts.fragment || opts.fragmentFile) {
        const rendered = await evaluateTemplate(opts);
        await writeOrLog(rendered, opts);
        return;
    }

    if (opts.extractFromHtml || opts.extractFromHtmlFile) {
        const extracted = await extractFromHtml(opts);
        await writeOrLog(extracted, opts);
        return;
    }

    // If no arguments were given, show the help
    yargsObj.showHelp();
}

main();
