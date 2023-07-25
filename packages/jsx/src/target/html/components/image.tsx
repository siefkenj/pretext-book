import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { isElement } from "../../../utils/tools";
import { toString } from "xast-util-to-string";
import { computeMargins } from "../../../utils/compute-margins";
import { PretextStateContext } from "../state";

export const Image: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);
    let imageDir = "external";
    const description = node.children.find(
        (n) => isElement(n) && n.name === "description",
    );
    let alt: string | undefined = undefined;
    if (description) {
        alt = toString(description);
    }
    if (node.attributes.decorative === "yes" && !alt) {
        // Decorative images always have alt text even if that text is blank...
        alt = "";
    }
    let src = node.attributes?.source || "";
    const { width, marginLeft, marginRight } = computeMargins(node);

    let urlInfo = getUrlComponents(src);
    // If no file has been detected, we assume there is a latex-image that has been
    // auto-generated for us as an svg with name based on the xml:id
    if (urlInfo.fileName === "") {
        urlInfo = getUrlComponents(
            `latex-image/${node.attributes?.["xml:id"]}`,
        );
        imageDir = "generated";
    }

    let archiveNodes: React.ReactNode = null;
    if (node.attributes.archive) {
        const formats = node.attributes.archive.split(/\s+/);
        archiveNodes = (
            <div className="image-archive">
                {formats.map((format) => (
                    <a
                        key={format}
                        href={`${
                            urlInfo.extension ? `${imageDir}/` : ""
                        }${imageDir}${urlInfo.dir}${
                            urlInfo.baseName
                        }.${format}`}
                    >
                        {format}
                    </a>
                ))}
            </div>
        );
    }

    // If the source file has no file extension, we assume an .svg has been generated
    src = `${imageDir}${urlInfo.dir}${urlInfo.baseName}.${
        urlInfo.extension || "svg"
    }`;

    const imageInner = (
        <React.Fragment>
            <img
                alt={alt}
                className="contained"
                src={src}
                role={urlInfo.extension ? undefined : "img"}
            />
            {archiveNodes}
        </React.Fragment>
    );

    if (state.isChildOf(node, "sidebyside")) {
        return imageInner;
    }

    return (
        <div
            className="image-box"
            style={{
                width: `${width}%`,
                marginLeft: `${marginLeft}%`,
                marginRight: `${marginRight}%`,
            }}
        >
            {imageInner}
        </div>
    );
};

function getUrlComponents(urlStr: string) {
    const url = new URL(urlStr, "file:///");
    const path = url.pathname;
    const fileName = path.slice(path.lastIndexOf("/") + 1);
    const dir = path.slice(0, path.lastIndexOf("/") + 1);
    const baseName =
        fileName.indexOf(".") > 0
            ? fileName.slice(0, fileName.lastIndexOf("."))
            : fileName;
    const extension = fileName.slice(baseName.length + 1);
    return { path, dir, fileName, baseName, extension };
}
