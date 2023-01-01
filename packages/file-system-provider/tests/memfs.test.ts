import util from "util";
import * as fs from "node:fs";
import {
    BasicMemFS,
    Uri,
    FileType,
    FileChangeType,
    FileChangeEvent,
    MemFS,
} from "../src";
/* eslint-env jest */

// Make console.log pretty-print by default
const origLog = console.log;
console.log = (...args) => {
    origLog(...args.map((x) => util.inspect(x, false, 10, true)));
};

describe("BasicMemFS basic tests", () => {
    it("Can initialize a memfs object", () => {
        const memfs = new BasicMemFS();
    });
    it("Can create file", async () => {
        const memfs = new BasicMemFS();
        await memfs.writeFile("/foo.txt", "hi there", {
            create: true,
            overwrite: true,
        });
        await memfs.createDirectory("/bar");
        await memfs.writeFile("/bar/Foo.txt", "hi here", {
            create: true,
            overwrite: true,
        });

        expect(await memfs.readTextFile("/foo.txt")).toEqual("hi there");
        expect(await memfs.readTextFile("/bar/Foo.txt")).toEqual("hi here");
    });
    it("Can list directory contents", async () => {
        const memfs = new BasicMemFS();
        await memfs.writeFile("/foo.txt", "hi there", {
            create: true,
            overwrite: true,
        });
        await memfs.createDirectory("/bar");
        await memfs.writeFile("/bar/Foo.txt", "hi here", {
            create: true,
            overwrite: true,
        });
        await memfs.writeFile("/bar/Boo.txt", "hi here", {
            create: true,
            overwrite: true,
        });
        await memfs.createDirectory("/bar/baz");
        expect(await memfs.readDirectory("/bar")).toEqual([
            ["Foo.txt", FileType.File],
            ["Boo.txt", FileType.File],
            ["baz", FileType.Directory],
        ]);
    });
    it("Events are fired when file is manipulated", async () => {
        const memfs = new BasicMemFS();
        const changes = await new Promise<FileChangeEvent[]>((resolve) => {
            memfs.onDidChangeFile((e) => {
                resolve([...e]);
            });

            memfs.writeFile("/foo.txt", "hi there", {
                create: true,
                overwrite: true,
            });
            memfs.writeFile("/bar.txt", "hi here", {
                create: true,
                overwrite: true,
            });
            memfs.delete("/bar.txt");
        });

        expect(changes.map((e) => [e.type, String(e.uri)])).toEqual([
            [FileChangeType.Created, "memfs:/foo.txt"],
            [FileChangeType.Changed, "memfs:/foo.txt"],
            [FileChangeType.Created, "memfs:/bar.txt"],
            [FileChangeType.Changed, "memfs:/bar.txt"],
            [FileChangeType.Changed, "memfs:"],
            [FileChangeType.Deleted, "memfs:/bar.txt"],
        ]);
    });
});

describe("MemFS basic tests", () => {
    it("Can initialize a memfs object", () => {
        const memfs = new MemFS();
    });
    it("Can create file", async () => {
        const memfs = new MemFS();
        await memfs.writeFile("/foo.txt", "hi there", {
            create: true,
            overwrite: true,
        });
        await memfs.createDirectory("/bar");
        await memfs.writeFile("/bar/Foo.txt", "hi here", {
            create: true,
            overwrite: true,
        });

        expect(await memfs.readTextFile("/foo.txt")).toEqual("hi there");
        expect(await memfs.readTextFile("/bar/Foo.txt")).toEqual("hi here");
    });
    it("Can list directory contents", async () => {
        const memfs = new MemFS();
        await memfs.writeFile("/foo.txt", "hi there", {
            create: true,
            overwrite: true,
        });
        await memfs.createDirectory("/bar");
        await memfs.writeFile("/bar/Foo.txt", "hi here", {
            create: true,
            overwrite: true,
        });
        await memfs.writeFile("/bar/Boo.txt", "hi here", {
            create: true,
            overwrite: true,
        });
        await memfs.createDirectory("/bar/baz");
        expect(await memfs.readDirectory("/bar")).toEqual(
            expect.arrayContaining([
                ["Foo.txt", FileType.File],
                ["Boo.txt", FileType.File],
                ["baz", FileType.Directory],
            ])
        );
    });
    it("Events are fired when file is manipulated", async () => {
        const memfs = new MemFS();
        const changes = await new Promise<FileChangeEvent[]>((resolve) => {
            memfs.onDidChangeFile((e) => {
                resolve([...e]);
            });

            memfs.writeFile("/foo.txt", "hi there", {
                create: true,
                overwrite: true,
            });
            memfs.writeFile("/bar.txt", "hi here", {
                create: true,
                overwrite: true,
            });
            memfs.delete("/bar.txt");
        });

        expect(changes.map((e) => [e.type, String(e.uri)])).toEqual([
            [FileChangeType.Created, "memfs:/foo.txt"],
            [FileChangeType.Changed, "memfs:/foo.txt"],
            [FileChangeType.Created, "memfs:/bar.txt"],
            [FileChangeType.Changed, "memfs:/bar.txt"],
            [FileChangeType.Changed, "memfs:"],
            [FileChangeType.Deleted, "memfs:/bar.txt"],
        ]);
    });
});
