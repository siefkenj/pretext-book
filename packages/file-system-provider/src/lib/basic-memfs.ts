/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type {
    CancellationToken,
    Event,
    FileChangeEvent,
    FileSearchOptions,
    FileSearchProvider,
    FileSearchQuery,
    FileStat,
    FileSystemProvider,
    Progress,
    ProviderResult,
    TextSearchComplete,
    TextSearchOptions,
    TextSearchProvider,
    TextSearchQuery,
    TextSearchResult,
} from "vscode";
import { FileChangeType, FileType } from "../types/vscode";
import { Emitter as EventEmitter } from "./events";
import { URI as Uri } from "./vscode/base/common/uri";
import {
    Disposable,
    FileSystemError,
} from "./vscode/workbench/api/common/extHostTypes";

export { FileType, FileChangeType, FileChangeEvent };

export class File implements FileStat {
    type: FileType;
    ctime: number;
    mtime: number;
    size: number;

    name: string;
    data?: Uint8Array;

    constructor(public uri: Uri, name: string) {
        this.type = FileType.File;
        this.ctime = Date.now();
        this.mtime = Date.now();
        this.size = 0;
        this.name = name;
    }
}

export class Directory implements FileStat {
    type: FileType;
    ctime: number;
    mtime: number;
    size: number;

    name: string;
    entries: Map<string, File | Directory>;

    constructor(public uri: Uri, name: string) {
        this.type = FileType.Directory;
        this.ctime = Date.now();
        this.mtime = Date.now();
        this.size = 0;
        this.name = name;
        this.entries = new Map();
    }
}

export type Entry = File | Directory;

export type UriLike = Uri | string;
export type BufferLike = Uint8Array | string;

const textEncoder = new TextEncoder();

/**
 * A simple in-memory file system provider. Most code is duplicated from
 * https://github.com/microsoft/vscode-web-playground/blob/main/src/memfs.ts
 * 
 * MIT License
 */
export class BasicMemFS
    implements FileSystemProvider, Disposable, FileSearchProvider
{
    //, TextSearchProvider
    static scheme = "memfs";

    constructor() {}

    dispose() {
        // This was used to clean up when the experimental FileSearch api was implemented.
    }

    root = new Directory(Uri.parse(`${BasicMemFS.scheme}:/`), "");

    // --- manage file metadata

    async stat(uri: UriLike): Promise<FileStat> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        return this._lookup(uri, false);
    }

    async readDirectory(uri: UriLike): Promise<[string, FileType][]> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        const entry = this._lookupAsDirectory(uri, false);
        let result: [string, FileType][] = [];
        for (const [name, child] of entry.entries) {
            result.push([name, child.type]);
        }
        return result;
    }

    // --- manage file contents

    async readFile(uri: UriLike): Promise<Uint8Array> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        const data = this._lookupAsFile(uri, false).data;
        if (data) {
            return data;
        }
        throw FileSystemError.FileNotFound();
    }

    /**
     * Read the contents of `uri` directly as a string (assuming that the contents are encoded
     * in UTF-8).
     */
    async readTextFile(uri: UriLike): Promise<string> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        const data = this._lookupAsFile(uri, false).data;
        if (data) {
            return this._textDecoder.decode(data);
        }
        throw FileSystemError.FileNotFound();
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
        let basename = this._basename(uri.path);
        let parent = this._lookupParentDirectory(uri);
        let entry = parent.entries.get(basename);
        if (entry instanceof Directory) {
            throw FileSystemError.FileIsADirectory(uri);
        }
        if (!entry && !options.create) {
            throw FileSystemError.FileNotFound(uri);
        }
        if (entry && options.create && !options.overwrite) {
            throw FileSystemError.FileExists(uri);
        }
        if (!entry) {
            entry = new File(uri, basename);
            parent.entries.set(basename, entry);
            this._fireSoon({ type: FileChangeType.Created, uri });
        }
        entry.mtime = Date.now();
        entry.size = content.byteLength;
        entry.data = content;

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
        if (!options.overwrite && this._lookup(newUri, true)) {
            throw FileSystemError.FileExists(newUri);
        }

        let entry = this._lookup(oldUri, false);
        let oldParent = this._lookupParentDirectory(oldUri);

        let newParent = this._lookupParentDirectory(newUri);
        let newName = this._basename(newUri.path);

        oldParent.entries.delete(entry.name);
        entry.name = newName;
        newParent.entries.set(newName, entry);

        this._fireSoon(
            { type: FileChangeType.Deleted, uri: oldUri },
            { type: FileChangeType.Created, uri: newUri }
        );
    }

    async delete(uri: UriLike): Promise<void> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        let dirname = uri.with({ path: this._dirname(uri.path) });
        let basename = this._basename(uri.path);
        let parent = this._lookupAsDirectory(dirname, false);
        if (!parent.entries.has(basename)) {
            throw FileSystemError.FileNotFound(uri);
        }
        parent.entries.delete(basename);
        parent.mtime = Date.now();
        parent.size -= 1;
        this._fireSoon(
            { type: FileChangeType.Changed, uri: dirname },
            { uri, type: FileChangeType.Deleted }
        );
    }

    async createDirectory(uri: UriLike): Promise<void> {
        if (typeof uri === "string") {
            uri = this._strToUri(uri);
        }
        let basename = this._basename(uri.path);
        let dirname = uri.with({ path: this._dirname(uri.path) });
        let parent = this._lookupAsDirectory(dirname, false);

        let entry = new Directory(uri, basename);
        parent.entries.set(entry.name, entry);
        parent.mtime = Date.now();
        parent.size += 1;
        this._fireSoon(
            { type: FileChangeType.Changed, uri: dirname },
            { type: FileChangeType.Created, uri }
        );
    }

    // --- lookup

    private _lookup<Silent extends boolean>(
        uri: Uri,
        silent: Silent
    ): Silent extends false ? Entry : Entry | undefined {
        let parts = uri.path.split("/");
        let entry: Entry = this.root;
        for (const part of parts) {
            if (!part) {
                continue;
            }
            let child: Entry | undefined;
            if (entry instanceof Directory) {
                child = entry.entries.get(part);
            }
            if (!child) {
                if (!silent) {
                    throw FileSystemError.FileNotFound(uri);
                } else {
                    return undefined as any;
                }
            }
            entry = child;
        }
        return entry;
    }

    private _lookupAsDirectory(uri: Uri, silent: boolean): Directory {
        let entry = this._lookup(uri, silent);
        if (entry instanceof Directory) {
            return entry;
        }
        throw FileSystemError.FileNotADirectory(uri);
    }

    private _lookupAsFile(uri: Uri, silent: boolean): File {
        let entry = this._lookup(uri, silent);
        if (entry instanceof File) {
            return entry;
        }
        throw FileSystemError.FileIsADirectory(uri);
    }

    private _lookupParentDirectory(uri: Uri): Directory {
        const dirname = uri.with({ path: this._dirname(uri.path) });
        return this._lookupAsDirectory(dirname, false);
    }

    // --- manage file events

    private _emitter = new EventEmitter<FileChangeEvent[]>();
    private _bufferedEvents: FileChangeEvent[] = [];
    private _fireSoonHandle?: any;

    readonly onDidChangeFile: Event<FileChangeEvent[]> = this._emitter.event;

    watch(
        _resource: Uri,
        options: { recursive: boolean; excludes: string[] }
    ): Disposable {
        // We already fire events for all changes
        return new Disposable(() => {});
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

    private _basename(path: string): string {
        path = this._rtrim(path, "/");
        if (!path) {
            return "";
        }

        return path.substr(path.lastIndexOf("/") + 1);
    }

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

    private _getFiles(): Set<File> {
        const files = new Set<File>();

        this._doGetFiles(this.root, files);

        return files;
    }

    private _doGetFiles(dir: Directory, files: Set<File>): void {
        dir.entries.forEach((entry) => {
            if (entry instanceof File) {
                files.add(entry);
            } else {
                this._doGetFiles(entry, files);
            }
        });
    }

    private _convertSimple2RegExpPattern(pattern: string): string {
        return pattern
            .replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&")
            .replace(/[\*]/g, ".*");
    }

    // --- search provider

    provideFileSearchResults(
        query: FileSearchQuery,
        _options: FileSearchOptions,
        _token: CancellationToken
    ): ProviderResult<Uri[]> {
        return this._findFiles(query.pattern);
    }

    private _findFiles(query: string | undefined): Uri[] {
        const files = this._getFiles();
        const result: Uri[] = [];

        const pattern = query
            ? new RegExp(this._convertSimple2RegExpPattern(query))
            : null;

        for (const file of files) {
            if (!pattern || pattern.exec(file.name)) {
                result.push(file.uri);
            }
        }

        return result;
    }

    private _strToUri(str: string): Uri {
        return Uri.parse(str).with({
            scheme: BasicMemFS.scheme,
        });
    }
    private _textDecoder = new TextDecoder();

    /*
    provideTextSearchResults(
        query: TextSearchQuery,
        options: TextSearchOptions,
        progress: Progress<TextSearchResult>,
        _token: CancellationToken
    ) {
        const result: TextSearchComplete = { limitHit: false };

        const files = this._findFiles(options.includes[0]);
        if (files) {
            for (const file of files) {
                const content = this._textDecoder.decode(this.readFile(file));

                const lines = content.split("\n");
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    const index = line.indexOf(query.pattern);
                    if (index !== -1) {
                        progress.report({
                            uri: file,
                            ranges: new Range(
                                new Position(i, index),
                                new Position(i, index + query.pattern.length)
                            ),
                            preview: {
                                text: line,
                                matches: new Range(
                                    new Position(0, index),
                                    new Position(
                                        0,
                                        index + query.pattern.length
                                    )
                                ),
                            },
                        });
                    }
                }
            }
        }

        return result;
    }
    */
}

export { Uri };
