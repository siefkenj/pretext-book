import {
    Element as XastElement,
    Text as XastText,
    Root as XastRoot,
} from "xast";
import { XastNode } from "../utils/xast";

export { XastElement, XastText, XastRoot };

export type Fragment = {
    content: XastNode | XastNode[];
    template: string;
    selector: string;
};
