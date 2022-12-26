import { Plugin } from "unified";
import {
    ElementArticleFrontMatter,
    ElementAuthor,
    ElementEditor,
    ElementTitlePage,
} from "../../assets/generated-types";
import { PretextRoot } from "../../assets/types";
import { PretextState } from "../../state";
import {
    ArticleFrontMatter,
    Author,
    Editor,
    TitlePage,
} from "../../state/types";
import { elmMatcher } from "../../utils/tools";
import { EXIT, replaceNode, visit } from "../../utils/xast";

export type PluginOptions = {
    state: PretextState;
};

const isFrontmatterNode = elmMatcher("frontmatter");

/**
 * Extract information from the <frontmatter> node and remove it from the tree.
 */
export const extractFrontmatterPlugin: Plugin<
    PluginOptions[],
    PretextRoot,
    PretextRoot
> = function (options) {
    const { state } = options;
    if (!state) {
        throw new Error(
            `Cannot use plugin without passing in a PretextState object`
        );
    }

    return (root, file) => {
        visit(
            root,
            (node) => {
                const frontmatter: ArticleFrontMatter = state.frontmatter;
                const frontmatterNode = node as ElementArticleFrontMatter;
                for (const node of frontmatterNode.children) {
                    switch (node.name) {
                        case "abstract":
                            frontmatter.abstract = node.children;
                            break;
                        case "idx":
                            console.warn(
                                `<${node.name}> is not implemented yet`
                            );
                            break;
                        case "title":
                            frontmatter.title = node.children;
                            break;
                        case "titlepage":
                            frontmatter.titlepage =
                                extractTitlePageDetails(node);
                            break;
                        default:
                            const unknownNode: never = node;
                            console.warn("Unexpected child", unknownNode);
                    }
                }

                if (!frontmatter.titlepage) {
                    throw new Error(
                        "Frontmatter must have a <titlepage>, but no title page was found."
                    );
                }
                file.data.frontmatter = frontmatter;

                // We found the front matter. There isn't any more of it.
                return EXIT;
            },
            { test: isFrontmatterNode }
        );

        // Remove the docinfo element from the tree
        replaceNode(root, (node) =>
            isFrontmatterNode(node) ? null : undefined
        );
    };
};

function extractTitlePageDetails(ast: ElementTitlePage) {
    const ret: TitlePage = { authors: [], editors: [], credits: [] };
    for (const node of ast.children) {
        switch (node.name) {
            case "author":
                ret.authors.push(extractPersonDetails(node));
                break;
            case "credit":
                console.warn(`<${node.name}> is not implemented yet`);
                break;
            case "date":
                ret.date = node.children;
                break;
            case "editor":
                ret.editors.push(extractPersonDetails(node));
                break;
            default:
                const unknownNode: never = node;
                console.warn("Unexpected child", unknownNode);
        }
    }
    return ret;
}

function extractPersonDetails(
    ast: ElementAuthor | ElementEditor
): Author | Editor {
    const ret: Author = { personname: [] };

    for (const node of ast.children) {
        switch (node.name) {
            case "department":
                ret.department = node.children;
                break;
            case "email":
                ret.email = node.children;
                break;
            case "institution":
                ret.institution = node.children;
                break;
            case "personname":
                ret.personname = node.children;
                break;
            default:
                const unknownNode: never = node;
                console.warn("Unexpected child", unknownNode);
        }
    }

    return ret;
}
