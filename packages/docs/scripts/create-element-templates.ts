import fs from "node:fs";
import path from "node:path";
// @ts-ignore
import { jsonGrammar } from "../../jsx/src/assets/generated-grammar";

function dumpAllElements(): string[] {
    let ret = Object.values(jsonGrammar.refs)
        .filter((r) => r.type === "element")
        .map((r) => (r as any).name);
    ret = Array.from(new Set(ret));
    ret.sort();
    return ret;
}

function dumpAllAttributes(): string[] {
    let ret = Object.values(jsonGrammar.refs)
        .filter((r) => r.type === "element")
        .flatMap((r) => Object.keys((r as any).attributes));
    ret = Array.from(new Set(ret));
    ret.sort();
    return ret;
}

/**
 * Create a template file `${elmName}.mdx` in the `outDir` directory.
 */
function createElementTemplate(elmName: string, outDir: string = "generated/", type: string = "element"): void {
    // Check if outDir exists, create it if it doesn't
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    // Create the template file
    const templateFileName = `${elmName}.mdx`;
    const templateFilePath = path.join(outDir, templateFileName);

    if (!fs.existsSync(templateFilePath)) {
        console.log(`Creating template file: ${templateFilePath}`);

        fs.writeFileSync(templateFilePath, populateTemplate(elmName, type));
    } else {
        console.log(`Template file already exists: ${templateFilePath}`);
    }
}


function populateTemplate(elmName: string, type: string = "element"): string {
    if (type === "element") {
    return `import {
    AttrDisplay,
    ChildrenDisplay,
    ParentsDisplay,
    PtxExample,
    SyntaxDisplay,
} from "../../../components";

# \`<${elmName}>\`

Short description of what the \`${elmName}\` element does.

## Syntax

<SyntaxDisplay name="${elmName}" />

## Examples

    `
    } else {
    return `# \`${elmName}\`

Short description of what the \`${elmName}\` attribute does.

## Examples
`
    }
}

for (const elm of dumpAllElements()) {
    createElementTemplate(elm, "pages/reference/elements");
}

//for (const atr of dumpAllAttributes()) {
//    createElementTemplate(atr, "pages/reference/attributes", "attribute");
//}
