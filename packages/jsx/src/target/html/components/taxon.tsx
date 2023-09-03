import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { XastNode } from "../../../utils/xast";
import { toString } from "xast-util-to-string";
import { isElement } from "../../../utils/tools";

export const Taxon: ReplacerComponent = function ({ node }) {
    const species = node.children.find(
        (n) => isElement(n) && n.name === "species",
    );
    const genus = node.children.find((n) => isElement(n) && n.name === "genus");
    let content: React.ReactNode = toString(node);
    if (species || genus) {
        content = (
            <React.Fragment>
                {genus && <Genus key="genus" node={genus} />}
                {species && genus && " "}
                {species && <Species key="species" node={species} />}
            </React.Fragment>
        );
    }

    return <span className="taxon">{content}</span>;
};

function Genus({ node }: { node: XastNode }) {
    return <span className="genus">{toString(node)}</span>;
}

function Species({ node }: { node: XastNode }) {
    return <span className="species">{toString(node)}</span>;
}
