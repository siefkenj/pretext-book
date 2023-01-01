# @pretext-book/file-system-provider

Two implementations of VSCode's [FileSystemProvider](https://code.visualstudio.com/api/references/vscode-api#FileSystemProvider)
API compiled to work in the browser.

Code is largely based on https://github.com/microsoft/vscode-web-playground with modifications to eliminate the dependency on the vscode runtime.

### `BasicMemFS`

`BasicMemFS` is a basic implementation based on https://github.com/microsoft/vscode-web-playground with imported libraries copy-and-pasted (and slightly modified) from the `vscode` source.

### `MemFS`

`MemFS` is an implementation based on the [memfs](https://github.com/streamich/memfs) package with browser compatibility layers added, making it a significantly larger implementation.

However, `(new MemFS()).vol` gives access to the underlying `memfs` volume on which you can use the regular node `fs` function calls on.
