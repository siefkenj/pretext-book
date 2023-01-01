/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Volume } from "memfs";
import Dirent from "memfs/lib/Dirent";
import Stats from "memfs/lib/Stats";
import type {
    Event,
    FileChangeEvent,
    FileStat,
    FileSystemProvider,
} from "vscode";
import { FileChangeType, FileType } from "../types/vscode";
import { Emitter as EventEmitter } from "./events";
import { URI as Uri } from "./vscode/base/common/uri";
import {
    Disposable,
    FileSystemError,
} from "./vscode/workbench/api/common/extHostTypes";

export { FileType, FileChangeType, FileChangeEvent };

export type UriLike = Uri | string;
export type BufferLike = Uint8Array | string;

const textEncoder = new TextEncoder();

/**
 * An in-memory file system provider provided by the `memfs` package. Much code is duplicated from
 * https://github.com/microsoft/vscode-web-playground/blob/main/src/memfs.ts
 *
 * MIT License
 */
export class MemFS implements FileSystemProvider, Disposable {
    //, TextSearchProvider
    static scheme = "memfs";

    /**
     * The MemFS volume keeping track of all the files
     */
    vol = new Volume();

    dispose() {
        // This was used to clean up when the experimental FileSearch api was implemented.
    }

    // --- manage file metadata

    async stat(uri: UriLike): Promise<FileStat> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        try {
            const stats = this.vol.statSync(uri.path);
            return {
                type: this.toType(stats),
                ctime: stats.birthtime.getTime(), // intentionally not using ctime here, we want the creation time
                mtime: stats.mtime.getTime(),
                size: stats.size,
            };
        } catch (e) {
            throw FileSystemError.FileNotFound(uri);
        }
    }

    async readDirectory(uri: UriLike): Promise<[string, FileType][]> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        const dirs = this.vol.readdirSync(uri.path, {
            withFileTypes: true,
            encoding: "utf-8",
        }) as Dirent[];
        const result: [string, FileType][] = dirs.map((d) => [
            d.name as string,
            this.toType(d),
        ]);

        return result;
    }

    // --- manage file contents

    async readFile(uri: UriLike): Promise<Uint8Array> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        try {
            const file = this.vol.readFileSync(uri.path, {
                encoding: "buffer",
            });
            return file as Uint8Array;
        } catch (e) {
            throw FileSystemError.FileNotFound(uri);
        }
    }

    /**
     * Read the contents of `uri` directly as a string (assuming that the contents are encoded
     * in UTF-8).
     */
    async readTextFile(uri: UriLike): Promise<string> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        try {
            const file = this.vol.readFileSync(uri.path, { encoding: "utf-8" });
            return file as string;
        } catch (e) {
            throw FileSystemError.FileNotFound(uri);
        }
    }

    async writeFile(
        uri: UriLike,
        content: BufferLike,
        options: { create: boolean; overwrite: boolean }
    ): Promise<void> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        if (typeof content === "string") {
            content = textEncoder.encode(content);
        }
        if (this.vol.existsSync(uri.path)) {
            const stats = this.vol.statSync(uri.path);
            if (stats.isDirectory()) {
                throw FileSystemError.FileIsADirectory(uri);
            }
            if (options.create && !options.overwrite) {
                throw FileSystemError.FileExists(uri);
            }
        } else if (!options.create) {
            throw FileSystemError.FileNotFound(uri);
        } else {
            // We're creating the file
            this._fireSoon({ type: FileChangeType.Created, uri });
        }

        this.vol.writeFileSync(uri.path, content);
        this._fireSoon({ type: FileChangeType.Changed, uri });
    }

    // --- manage files/folders

    async rename(
        oldUri: UriLike,
        newUri: UriLike,
        options: { overwrite: boolean }
    ): Promise<void> {
        if (typeof oldUri === "string") {
            oldUri = this._strToUri(oldUri);
        }
        if (typeof newUri === "string") {
            newUri = this._strToUri(newUri);
        }
        if (!options.overwrite && this.vol.existsSync(newUri.path)) {
            throw FileSystemError.FileExists(newUri);
        }
        this.vol.renameSync(oldUri.path, newUri.path);

        this._fireSoon(
            { type: FileChangeType.Deleted, uri: oldUri },
            { type: FileChangeType.Created, uri: newUri }
        );
    }

    async delete(uri: UriLike): Promise<void> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        try {
            this.vol.unlinkSync(uri.path);
        } catch (e) {
            throw FileSystemError.FileNotFound(uri);
        }
        let dirname = uri.with({ path: this._dirname(uri.path) });
        this._fireSoon(
            { type: FileChangeType.Changed, uri: dirname },
            { uri, type: FileChangeType.Deleted }
        );
    }

    async createDirectory(uri: UriLike): Promise<void> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        let dirname = uri.with({ path: this._dirname(uri.path) });
        try {
            this.vol.mkdirSync(uri.path);
        } catch (e) {
            throw FileSystemError.FileExists(uri.path);
        }
        this._fireSoon(
            { type: FileChangeType.Changed, uri: dirname },
            { type: FileChangeType.Created, uri }
        );
    }

    // --- manage file events

    private _emitter = new EventEmitter<FileChangeEvent[]>();
    private _bufferedEvents: FileChangeEvent[] = [];
    private _fireSoonHandle?: any;

    readonly onDidChangeFile: Event<FileChangeEvent[]> = this._emitter.event;

    watch(
        resource: UriLike,
        options: { recursive: boolean; excludes: string[] }
    ): Disposable {
        if (typeof resource === "string") {
            resource = this._strToUri(resource);
        }
        const watcher = this.vol.watch(
            resource.path,
            { recursive: options.recursive },
            (eventname, filename) => {
                console.log("watch event 1", eventname, filename);
                this._fireSoon({
                    type: FileChangeType.Changed,
                    uri: this._strToUri(filename),
                });
            }
        );

        watcher.addListener("change", (a, b) => console.log("watcher 2", a, b));

        return new Disposable(() => {
            watcher.close();
        });
    }

    private _fireSoon(...events: FileChangeEvent[]): void {
        this._bufferedEvents.push(...events);

        if (this._fireSoonHandle) {
            clearTimeout(this._fireSoonHandle);
        }

        this._fireSoonHandle = setTimeout(() => {
            this._emitter.fire(this._bufferedEvents);
            this._bufferedEvents.length = 0;
        }, 5);
    }

    // --- path utils

    private _dirname(path: string): string {
        path = this._rtrim(path, "/");
        if (!path) {
            return "/";
        }

        return path.substr(0, path.lastIndexOf("/"));
    }

    private _rtrim(haystack: string, needle: string): string {
        if (!haystack || !needle) {
            return haystack;
        }

        const needleLen = needle.length,
            haystackLen = haystack.length;

        if (needleLen === 0 || haystackLen === 0) {
            return haystack;
        }

        let offset = haystackLen,
            idx = -1;

        while (true) {
            idx = haystack.lastIndexOf(needle, offset - 1);
            if (idx === -1 || idx + needleLen !== offset) {
                break;
            }
            if (idx === 0) {
                return "";
            }
            offset = idx;
        }

        return haystack.substring(0, offset);
    }

    // --- search provider

    private _strToUri(str: string): Uri {
        return Uri.parse(str).with({
            scheme: MemFS.scheme,
        });
    }

    /**
     * Return the vscode file type based on the one returned from `fs`.
     */
    private toType(
        entry: Stats | Dirent,
        symbolicLink?: { dangling: boolean }
    ): FileType {
        // Signal file type by checking for file / directory, except:
        // - symbolic links pointing to nonexistent files are FileType.Unknown
        // - files that are neither file nor directory are FileType.Unknown
        let type: FileType;
        if (symbolicLink?.dangling) {
            type = FileType.Unknown;
        } else if (entry.isFile()) {
            type = FileType.File;
        } else if (entry.isDirectory()) {
            type = FileType.Directory;
        } else {
            type = FileType.Unknown;
        }

        // Always signal symbolic link as file type additionally
        if (symbolicLink) {
            type |= FileType.SymbolicLink;
        }

        return type;
    }
}

export { Uri };
