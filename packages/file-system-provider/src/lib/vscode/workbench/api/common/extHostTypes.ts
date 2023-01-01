/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { URI } from "../../../base/common/uri";

export enum FileSystemProviderErrorCode {
    FileExists = "EntryExists",
    FileNotFound = "EntryNotFound",
    FileNotADirectory = "EntryNotADirectory",
    FileIsADirectory = "EntryIsADirectory",
    FileExceedsMemoryLimit = "EntryExceedsMemoryLimit",
    FileTooLarge = "EntryTooLarge",
    FileWriteLocked = "EntryWriteLocked",
    NoPermissions = "NoPermissions",
    Unavailable = "Unavailable",
    Unknown = "Unknown",
}

export class Disposable {
    static from(...inDisposables: { dispose(): any }[]): Disposable {
        let disposables: ReadonlyArray<{ dispose(): any }> | undefined =
            inDisposables;
        return new Disposable(function () {
            if (disposables) {
                for (const disposable of disposables) {
                    if (
                        disposable &&
                        typeof disposable.dispose === "function"
                    ) {
                        disposable.dispose();
                    }
                }
                disposables = undefined;
            }
        });
    }

    #callOnDispose?: () => any;

    constructor(callOnDispose: () => any) {
        this.#callOnDispose = callOnDispose;
    }

    dispose(): any {
        if (typeof this.#callOnDispose === "function") {
            this.#callOnDispose();
            this.#callOnDispose = undefined;
        }
    }
}

export function markAsFileSystemProviderError(
    error: Error,
    code: FileSystemProviderErrorCode
): Error {
    error.name = code ? `${code} (FileSystemError)` : `FileSystemError`;

    return error;
}

export class FileSystemError extends Error {
    static FileExists(messageOrUri?: string | URI): FileSystemError {
        return new FileSystemError(
            messageOrUri,
            FileSystemProviderErrorCode.FileExists,
            FileSystemError.FileExists
        );
    }
    static FileNotFound(messageOrUri?: string | URI): FileSystemError {
        return new FileSystemError(
            messageOrUri,
            FileSystemProviderErrorCode.FileNotFound,
            FileSystemError.FileNotFound
        );
    }
    static FileNotADirectory(messageOrUri?: string | URI): FileSystemError {
        return new FileSystemError(
            messageOrUri,
            FileSystemProviderErrorCode.FileNotADirectory,
            FileSystemError.FileNotADirectory
        );
    }
    static FileIsADirectory(messageOrUri?: string | URI): FileSystemError {
        return new FileSystemError(
            messageOrUri,
            FileSystemProviderErrorCode.FileIsADirectory,
            FileSystemError.FileIsADirectory
        );
    }
    static NoPermissions(messageOrUri?: string | URI): FileSystemError {
        return new FileSystemError(
            messageOrUri,
            FileSystemProviderErrorCode.NoPermissions,
            FileSystemError.NoPermissions
        );
    }
    static Unavailable(messageOrUri?: string | URI): FileSystemError {
        return new FileSystemError(
            messageOrUri,
            FileSystemProviderErrorCode.Unavailable,
            FileSystemError.Unavailable
        );
    }

    readonly code: string;

    constructor(
        uriOrMessage?: string | URI,
        code: FileSystemProviderErrorCode = FileSystemProviderErrorCode.Unknown,
        terminator?: Function
    ) {
        super(
            URI.isUri(uriOrMessage) ? uriOrMessage.toString(true) : uriOrMessage
        );

        this.code = terminator?.name ?? "Unknown";

        // mark the error as file system provider error so that
        // we can extract the error code on the receiving side
        markAsFileSystemProviderError(this, code);

        // workaround when extending builtin objects and when compiling to ES5, see:
        // https://github.com/microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FileSystemError.prototype);

        if (
            typeof Error.captureStackTrace === "function" &&
            typeof terminator === "function"
        ) {
            // nice stack traces
            Error.captureStackTrace(this, terminator);
        }
    }
}
