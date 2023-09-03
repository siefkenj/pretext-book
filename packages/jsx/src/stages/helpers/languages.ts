// List of PTX language names and their corresponding values for prism/etc.
// Take from https://github.com/PreTeXtBook/pretext/blob/9bce7e55911fb14e3e6e362bfa78bd6431c38597/xsl/pretext-common.xsl#L7207-L7248
export const LANGUAGE_NAMES: Record<
    string,
    { active: string; listings: string; prism: string }
> = {
    basic: {
        active: "",
        listings: "Basic",
        prism: "basic",
    },
    c: {
        active: "c",
        listings: "C",
        prism: "c",
    },
    cpp: {
        active: "cpp",
        listings: "C++",
        prism: "cpp",
    },
    go: {
        active: "",
        listings: "C",
        prism: "go",
    },
    java: {
        active: "java",
        listings: "Java",
        prism: "java",
    },
    javascript: {
        active: "javascript",
        listings: "",
        prism: "javascript",
    },
    lua: {
        active: "",
        listings: "Lua",
        prism: "lua",
    },
    pascal: {
        active: "",
        listings: "Pascal",
        prism: "pascal",
    },
    perl: {
        active: "",
        listings: "Perl",
        prism: "perl",
    },
    python: {
        active: "python",
        listings: "Python",
        prism: "py",
    },
    python3: {
        active: "python3",
        listings: "Python",
        prism: "py",
    },
    r: {
        active: "",
        listings: "R",
        prism: "r",
    },
    s: {
        active: "",
        listings: "S",
        prism: "s",
    },
    sas: {
        active: "",
        listings: "SAS",
        prism: "s",
    },
    sage: {
        active: "",
        listings: "Python",
        prism: "py",
    },
    splus: {
        active: "",
        listings: "[Plus]S",
        prism: "s",
    },
    vbasic: {
        active: "",
        listings: "[Visual]Basic",
        prism: "visual-basic",
    },
    vbscript: {
        active: "",
        listings: "VBscript",
        prism: "visual-basic",
    },
    clojure: {
        active: "",
        listings: "Lisp",
        prism: "clojure",
    },
    lisp: {
        active: "",
        listings: "Lisp",
        prism: "lisp",
    },
    clisp: {
        active: "",
        listings: "Lisp",
        prism: "lisp",
    },
    elisp: {
        active: "",
        listings: "Lisp",
        prism: "elisp",
    },
    scheme: {
        active: "",
        listings: "Lisp",
        prism: "scheme",
    },
    racket: {
        active: "",
        listings: "Lisp",
        prism: "racket",
    },
    sql: {
        active: "sql",
        listings: "SQL",
        prism: "sql",
    },
    llvm: {
        active: "",
        listings: "LLVM",
        prism: "llvm",
    },
    matlab: {
        active: "",
        listings: "Matlab",
        prism: "matlab",
    },
    octave: {
        active: "octave",
        listings: "Octave",
        prism: "matlab",
    },
    ml: {
        active: "",
        listings: "ML",
        prism: "",
    },
    ocaml: {
        active: "",
        listings: "[Objective]Caml",
        prism: "ocaml",
    },
    fsharp: {
        active: "",
        listings: "ML",
        prism: "fsharp",
    },
    css: {
        active: "",
        listings: "",
        prism: "css",
    },
    latex: {
        active: "",
        listings: "[LaTeX]TeX",
        prism: "latex",
    },
    html: {
        active: "html",
        listings: "HTML",
        prism: "html",
    },
    tex: {
        active: "",
        listings: "[plain]TeX",
        prism: "tex",
    },
    xml: {
        active: "",
        listings: "XML",
        prism: "xml",
    },
    xslt: {
        active: "",
        listings: "XSLT",
        prism: "xml",
    },
};
