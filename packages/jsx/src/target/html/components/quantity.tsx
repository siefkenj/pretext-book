import { isElement } from "../../../utils/tools";
import React from "react";
import { ReplacerComponent } from "../replacers/replacer-factory";
import { PretextStateContext } from "../state";
import { XastElement } from "../../../utils/xast";

// From https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-units.xsl#L38
const PREFIX: Record<string, string> = {
    yocto: "y",
    zepto: "z",
    atto: "a",
    femto: "f",
    pico: "p",
    nano: "n",
    micro: "µ",
    milli: "m",
    centi: "c",
    deci: "d",
    deca: "da",
    deka: "da",
    hecto: "h",
    kilo: "k",
    mega: "M",
    giga: "G",
    tera: "T",
    peta: "P",
    exa: "E",
    zetta: "Z",
    yotta: "Y",
};

// From https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-units.xsl#L64
const BASES: Record<string, string> = {
    ampere: "A",
    candela: "cd",
    kelvin: "K",
    gram: "g",
    meter: "m",
    metre: "m",
    mole: "mol",
    second: "s",
    becquerel: "Bq",
    gray: "Gy",
    sievert: "Sv",
    degreeCelsius: "°C",
    celsius: "°C",
    coulomb: "C",
    henry: "H",
    ohm: "Ω",
    siemens: "S",
    tesla: "T",
    volt: "V",
    electronvolt: "eV",
    weber: "Wb",
    hertz: "Hz",
    katal: "kat",
    joule: "J",
    newton: "N",
    pascal: "Pa",
    watt: "W",
    lumen: "lm",
    lux: "lx",
    radian: "rad",
    steradian: "sr",
    degree: "°",
    arcminute: "′",
    arcsecond: "″",
    day: "d",
    hour: "h",
    minute: "min",
    hectare: "ha",
    liter: "L",
    litre: "l",
    tonne: "t",
    percent: "%",
    degreeFahrenheit: "°F",
    fahrenheit: "°F",
    pound: "lb",
    ounce: "oz",
    ton: "T",
    foot: "ft",
    inch: "in",
    yard: "yd",
    mile: "mi",
    millennium: "millennium",
    century: "century",
    decade: "decade",
    year: "yr",
    month: "mo",
    week: "wk",
    kilometerperhour: "kph",
    kilometreperhour: "kph",
    mileperhour: "mph",
    gallon: "gal",
    cubiccentimeter: "cc",
    tablespoon: "tbsp",
    teaspoon: "tsp",
    cup: "c",
    pint: "pt",
    quart: "qt",
    fluidounce: "fl oz",
    milepergallon: "mpg",
    kilometerpergallon: "kpg",
    revolution: "rev",
    revolutionperminute: "rpm",
    cycle: "cycle",
    bit: "b",
    byte: "B",
    bitpersecond: "bps",
    bytepersecond: "Bps",
    unit: "1",
};

export const Quantity: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    const mag = node.children.find((n) => isElement(n) && n.name === "mag") as
        | XastElement
        | undefined;
    let units = node.children.filter(
        (n) => isElement(n) && n.name === "unit"
    ) as XastElement[];
    let pers = node.children.filter(
        (n) => isElement(n) && n.name === "per"
    ) as XastElement[];

    const displayMag = state.processContent(mag?.children || []);

    if (units.length === 0 && pers.length === 0) {
        return <span className="quantity">{displayMag}</span>;
    }

    // If there are no units or pers, we put `1` in their place
    if (units.length === 0 && pers.length > 0) {
        units.push({
            type: "element",
            name: "unit",
            attributes: { base: "unit" },
            children: [],
        });
    }

    const displayUnitsInner = interleaveWith(
        units.map((n, i) => <UnitOrPerInner key={i} node={n} />),
        <React.Fragment>·</React.Fragment>
    );
    const displayUnits =
        pers.length > 0 ? <sup>{displayUnitsInner}</sup> : displayUnitsInner;

    const displayPersInner = interleaveWith(
        pers.map((n, i) => <UnitOrPerInner key={i} node={n} />),
        <React.Fragment>·</React.Fragment>
    );
    const displayPers = displayPersInner.length > 0 && (
        <sub>{displayPersInner}</sub>
    );

    return (
        <span className="quantity">
            {displayMag}
            {(displayUnitsInner.length > 0 || displayPersInner.length > 0) &&
            (mag?.children?.length || 0) > 0
                ? " "
                : ""}
            {displayUnits}
            {displayPersInner.length > 0 && "⁄"}
            {displayPers}
        </span>
    );
};

/**
 * Component that renders the inner part of either a unit or a per element.
 * These are not wrapped in `<sup>...</sup>` or `<sub>...</sub>`.
 */
function UnitOrPerInner({ node }: { node: XastElement }) {
    const prefix = node.attributes?.prefix;
    const base = node.attributes?.base;
    const exp = node.attributes?.exp;

    return (
        <React.Fragment>
            {(prefix && PREFIX[prefix]) || prefix}
            {(base && BASES[base]) || base}
            {exp && <sup>{exp}</sup>}
        </React.Fragment>
    );
}

function interleaveWith(arr: React.ReactNode[], sep: React.ReactNode) {
    const result: React.ReactNode[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        if (i < arr.length - 1) {
            result.push(
                <React.Fragment key={`added-${i}`}>{sep}</React.Fragment>
            );
        }
    }
    return result;
}
