#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import fs from "node:fs/promises";
import { getTemplateName } from "../lib/get-template-name";
import { fragmentToXast } from "../lib/fragment-to-pretext";
import { toXml } from "xast-util-to-xml";

const options = yargs(hideBin(process.argv))
    .usage(
        `
Substitute a fragment into a template:
> $0 --template-file ./template.ptx --fragment-file ./fragment.xml
`.trim()
    )
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
        out: {
            type: "string",
            alias: "o",
            description: "Path to the file where the result will be saved.",
            requiresArg: true,
        },
    })
    .help("h").argv;

type Options = Awaited<typeof options>;

const cache: { template?: string; fragment?: string } = {};

async function getFragment(options: Options) {
    if (cache.fragment) {
        return cache.fragment;
    }
    return (
        options.fragment ||
        (options.fragmentFile &&
            (await fs.readFile(options.fragmentFile, { encoding: "utf-8" })))
    );
}
async function getTemplate(options: Options) {
    if (cache.fragment) {
        return cache.fragment;
    }
    return (
        options.template ||
        (options.templateFile &&
            (await fs.readFile(options.templateFile, { encoding: "utf-8" })))
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
}

main();
