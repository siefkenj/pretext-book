import fs from "node:fs";
import path from "node:path";
import { jsonGrammar } from "../../jsx/src/assets/generated-grammar";

function dumpAllElements() {
    let ret = Object.values(jsonGrammar.refs)
        .filter((r) => r.type === "element")
        .map((r) => (r as any).name);
    ret = Array.from(new Set(ret));
    ret.sort();
    return ret;
}

/**
 * Create a template file `${elmName}.mdx` in the `outDir` directory.
 */
function createElementTemplate(elmName: string, outDir: string = "generated/") {
    // Check if outDir exists, create it if it doesn't
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    // Create the template file
    const templateFileName = `${elmName}.mdx`;
    const templateFilePath = path.join(outDir, templateFileName);
    
    console.log(`Creating template file: ${templateFilePath}`);

    fs.writeFileSync(templateFilePath, populateTemplate(elmName));
}

function populateTemplate(elmName: string): string {
    return `import {
    AttrDisplay,
    ChildrenDisplay,
    ParentsDisplay,
    PtxExample,
} from "../../../components";

# \`<${elmName}>\`

Short description of what the \`${elmName}\` element does.

## Syntax

### Attributes

<AttrDisplay name="${elmName}" />

### Children

The following can be used as children.

<ChildrenDisplay name="${elmName}" />

### Child of

This element can appear as an immediate child of the following elements.

<ParentsDisplay name="${elmName}" />

## Examples

    `
}

for (const elm of dumpAllElements()) {
    createElementTemplate(elm);
}