import React from "react";
import {
    PureFunctionComponent,
    ReplacerComponent,
} from "../replacers/replacer-factory";
import { toString } from "xast-util-to-string";
import { isElement } from "../../../utils/tools";

export const TaxonPure: PureFunctionComponent<{
    species?: string;
    genus?: string;
    base: string;
}> = function ({ species, genus, base }) {
    if (species || genus) {
        return (
            <span className="taxon">
                {genus && <Genus key="genus" value={genus} />}
                {species && genus && " "}
                {species && <Species key="species" value={species} />}
            </span>
        );
    }
    return <span className="taxon">{base}</span>;
};

export const Taxon: ReplacerComponent = function ({ node }) {
    const speciesNode = node.children.find(
        (n) => isElement(n) && n.name === "species",
    );
    const genusNode = node.children.find(
        (n) => isElement(n) && n.name === "genus",
    );
    const base = toString(node);
    const genus = genusNode && toString(genusNode);
    const species = speciesNode && toString(speciesNode);

    return <TaxonPure species={species} genus={genus} base={base} />;
};

function Genus({ value }: { value: string }) {
    return <span className="genus">{value}</span>;
}

function Species({ value }: { value: string }) {
    return <span className="species">{value}</span>;
}
