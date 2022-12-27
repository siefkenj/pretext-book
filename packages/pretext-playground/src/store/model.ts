import {
    action,
    Action,
    computed,
    Computed,
    thunk,
    Thunk,
    thunkOn,
    ThunkOn,
} from "easy-peasy";
import { VFile } from "vfile";

export interface Todo {
    text: string;
    done: boolean;
}

export interface PlaygroundModel {
    files: VFile[];
    addFile: Action<this, VFile>;
    clearFiles: Action<this, void>;
    activeFilePath: string | null;
    activeFile: Computed<this, VFile>;
    setActiveFile: Action<this, this["activeFilePath"]>;
    setFileContents: Action<this, { filePath: string; value: string }>;
}

const playgroundStore: PlaygroundModel = {
    files: [],
    addFile: action((state, payload) => {
        state.files.push(payload);
    }),
    clearFiles: action((state) => {
        state.files = [];
    }),
    activeFilePath: null,
    activeFile: computed(
        [(state) => state.files, (state) => state.activeFilePath],
        (files, activeFilePath) => {
            return getActiveFile(files, activeFilePath);
        }
    ),
    setActiveFile: action((state, filePath) => {
        state.activeFilePath = filePath;
        state.files.push(new VFile());
        state.files.pop();
    }),
    setFileContents: action((state, payload) => {
        const file = state.files.find((f) => f.path === payload.filePath);
        if (!file) {
            return;
        }
        file.value = payload.value;
    }),
};

export { playgroundStore };

export function getActiveFile(files: VFile[], activeFilePath: string | null) {
    return (
        files.find((f) => f.path === activeFilePath) ||
        new VFile({
            path: "main.ptx",
            value: `<?xml version="1.0" encoding="UTF-8" ?>\n<pretext>\n\n</pretext>`,
        })
    );
}
