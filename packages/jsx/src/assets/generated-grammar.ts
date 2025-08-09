export const jsonGrammar = {
    "startType": "ElementPretextRoot",
    "refs": {
        "XMLText": {
            "type": "text"
        },
        "ElementPretextRoot": {
            "type": "element",
            "name": "pretext",
            "attributes": {
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementArticle"
                },
                {
                    "ref": "ElementBook"
                },
                {
                    "ref": "ElementDocInfo"
                },
                {
                    "ref": "ElementLetter"
                },
                {
                    "ref": "ElementMemorandum"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementMemorandum": {
            "type": "element",
            "name": "memo",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementLetter": {
            "type": "element",
            "name": "letter",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementDocInfo": {
            "type": "element",
            "name": "docinfo",
            "attributes": {
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAsymptotePreamble"
                },
                {
                    "ref": "ElementAuthorBiographies"
                },
                {
                    "ref": "ElementBrandlogo"
                },
                {
                    "ref": "ElementCrossReferences"
                },
                {
                    "ref": "ElementFeedback"
                },
                {
                    "ref": "ElementImages"
                },
                {
                    "ref": "ElementInitialism"
                },
                {
                    "ref": "ElementLatexImagePreamble"
                },
                {
                    "ref": "ElementMacros"
                },
                {
                    "ref": "ElementMathPackage"
                },
                {
                    "ref": "ElementNumbering"
                },
                {
                    "ref": "ElementParsons"
                },
                {
                    "ref": "ElementPrograms"
                },
                {
                    "ref": "ElementRename"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementRename": {
            "type": "element",
            "name": "rename",
            "attributes": {
                "element": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementPrograms": {
            "type": "element",
            "name": "programs",
            "attributes": {
                "language": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "compiler-args": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "download": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "linenumbers": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "linker-args": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "interpreter-args": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "timeout": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementParsons": {
            "type": "element",
            "name": "parsons",
            "attributes": {
                "language": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementNumbering": {
            "type": "element",
            "name": "numbering",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementDivision"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementDivision": {
            "type": "element",
            "name": "division",
            "attributes": {
                "part": {
                    "optional": false,
                    "type": [
                        "\"decorative\"",
                        "\"structural\""
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementMathPackage": {
            "type": "element",
            "name": "math-package",
            "attributes": {
                "latex-name": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                },
                "mathjax-name": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementMacros": {
            "type": "element",
            "name": "macros",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementLatexImagePreamble": {
            "type": "element",
            "name": "latex-image-preamble",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementInitialism": {
            "type": "element",
            "name": "initialism",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementImages": {
            "type": "element",
            "name": "images",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementArchive"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementArchive": {
            "type": "element",
            "name": "archive",
            "attributes": {
                "from": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementFeedback": {
            "type": "element",
            "name": "feedback",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementFeedbackUrl"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementFeedbackUrl": {
            "type": "element",
            "name": "url",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementCrossReferences": {
            "type": "element",
            "name": "cross-references",
            "attributes": {
                "text": {
                    "optional": false,
                    "type": [
                        "\"local\"",
                        "\"global\"",
                        "\"hybrid\"",
                        "\"type-local\"",
                        "\"type-global\"",
                        "\"type-hybrid\"",
                        "\"phrase-global\"",
                        "\"phrase-hybrid\"",
                        "\"title\"",
                        "\"custom\""
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementBrandlogo": {
            "type": "element",
            "name": "brandlogo",
            "attributes": {
                "url": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "source": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementAuthorBiographies": {
            "type": "element",
            "name": "author-biographies",
            "attributes": {
                "length": {
                    "optional": false,
                    "type": [
                        "\"short\"",
                        "\"long\""
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementAsymptotePreamble": {
            "type": "element",
            "name": "asymptote-preamble",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementBook": {
            "type": "element",
            "name": "book",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementBookBackMatter"
                },
                {
                    "ref": "ElementBookFrontMatter"
                },
                {
                    "ref": "ElementChapter"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementLinedSubtitle"
                },
                {
                    "ref": "ElementLinedTitle"
                },
                {
                    "ref": "ElementPart"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementSubtitle"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementTitle": {
            "type": "element",
            "name": "title",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementXref": {
            "type": "element",
            "name": "xref",
            "attributes": {
                "ref": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "first": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "last": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "provisional": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "text": {
                    "optional": true,
                    "type": [
                        "\"local\"",
                        "\"global\"",
                        "\"hybrid\"",
                        "\"type-local\"",
                        "\"type-global\"",
                        "\"type-hybrid\"",
                        "\"phrase-global\"",
                        "\"phrase-hybrid\"",
                        "\"title\"",
                        "\"custom\""
                    ]
                },
                "detail": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementXetex": {
            "type": "element",
            "name": "xetex",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementXelatex": {
            "type": "element",
            "name": "xelatex",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementWebwork": {
            "type": "element",
            "name": "webwork",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementVs": {
            "type": "element",
            "name": "vs",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementViz": {
            "type": "element",
            "name": "viz",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementTrademark": {
            "type": "element",
            "name": "trademark",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementToday": {
            "type": "element",
            "name": "today",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementTimesignature": {
            "type": "element",
            "name": "timesignature",
            "attributes": {
                "top": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                },
                "bottom": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementTimes": {
            "type": "element",
            "name": "times",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementTimeofday": {
            "type": "element",
            "name": "timeofday",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementTex": {
            "type": "element",
            "name": "tex",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementTerm": {
            "type": "element",
            "name": "term",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementWWVariable": {
            "type": "element",
            "name": "var",
            "attributes": {
                "name": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "evaluator": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "category": {
                    "optional": true,
                    "type": [
                        "\"angle\"",
                        "\"decimal\"",
                        "\"exponent\"",
                        "\"formula\"",
                        "\"fraction\"",
                        "\"inequality\"",
                        "\"integer\"",
                        "\"interval\"",
                        "\"logarithm\"",
                        "\"limit\"",
                        "\"number\"",
                        "\"point\"",
                        "\"syntax\"",
                        "\"quantity\"",
                        "\"vector\""
                    ]
                },
                "form": {
                    "optional": true,
                    "type": [
                        "\"essay\""
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementUrl": {
            "type": "element",
            "name": "url",
            "attributes": {
                "href": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                },
                "visual": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementTaxon": {
            "type": "element",
            "name": "taxon",
            "attributes": {
                "ncbi": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementGenus"
                },
                {
                    "ref": "ElementSpecies"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementSpecies": {
            "type": "element",
            "name": "species",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementGenus": {
            "type": "element",
            "name": "genus",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementTage": {
            "type": "element",
            "name": "tage",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementTag": {
            "type": "element",
            "name": "tag",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementSwungdash": {
            "type": "element",
            "name": "swungdash",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementStale": {
            "type": "element",
            "name": "stale",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementSq": {
            "type": "element",
            "name": "sq",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementSolidus": {
            "type": "element",
            "name": "solidus",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementServicemark": {
            "type": "element",
            "name": "servicemark",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementSectionMark": {
            "type": "element",
            "name": "section-mark",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementScaledeg": {
            "type": "element",
            "name": "scaledeg",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementRsq": {
            "type": "element",
            "name": "rsq",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementRq": {
            "type": "element",
            "name": "rq",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementRegistered": {
            "type": "element",
            "name": "registered",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementRdblbracket": {
            "type": "element",
            "name": "rdblbracket",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementRangle": {
            "type": "element",
            "name": "rangle",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementQuantity": {
            "type": "element",
            "name": "quantity",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementMag"
                },
                {
                    "ref": "ElementPer"
                },
                {
                    "ref": "ElementUnit"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementUnit": {
            "type": "element",
            "name": "unit",
            "attributes": {
                "prefix": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "base": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                },
                "exp": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPer": {
            "type": "element",
            "name": "per",
            "attributes": {
                "prefix": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "base": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                },
                "exp": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementMag": {
            "type": "element",
            "name": "mag",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementQ": {
            "type": "element",
            "name": "q",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementPubtitle": {
            "type": "element",
            "name": "pubtitle",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementPs": {
            "type": "element",
            "name": "ps",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPrime": {
            "type": "element",
            "name": "prime",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPretext": {
            "type": "element",
            "name": "pretext",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPrefigure": {
            "type": "element",
            "name": "prefigure",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPm": {
            "type": "element",
            "name": "pm",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPlusminus": {
            "type": "element",
            "name": "plusminus",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPilcrow": {
            "type": "element",
            "name": "pilcrow",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPhonomark": {
            "type": "element",
            "name": "phonomark",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPf": {
            "type": "element",
            "name": "pf",
            "attributes": {
                "language": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementPermille": {
            "type": "element",
            "name": "permille",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementObelus": {
            "type": "element",
            "name": "obelus",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementNdash": {
            "type": "element",
            "name": "ndash",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementNbsp": {
            "type": "element",
            "name": "nbsp",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementNb": {
            "type": "element",
            "name": "nb",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementNatural": {
            "type": "element",
            "name": "natural",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementN": {
            "type": "element",
            "name": "n",
            "attributes": {
                "pc": {
                    "optional": false,
                    "type": [
                        "\"A\"",
                        "\"B\"",
                        "\"C\"",
                        "\"D\"",
                        "\"E\"",
                        "\"F\"",
                        "\"G\"",
                        "\"a\"",
                        "\"b\"",
                        "\"c\"",
                        "\"d\"",
                        "\"e\"",
                        "\"f\"",
                        "\"g\"",
                        "\"1\"",
                        "\"2\"",
                        "\"3\"",
                        "\"4\"",
                        "\"5\"",
                        "\"6\"",
                        "\"7\"",
                        "\"8\"",
                        "\"9\"",
                        "\"10\""
                    ]
                },
                "acc": {
                    "optional": true,
                    "type": [
                        "\"doublesharp\"",
                        "\"sharp\"",
                        "\"flat\"",
                        "\"doubleflat\""
                    ]
                },
                "octave": {
                    "optional": true,
                    "type": [
                        "\"1\"",
                        "\"2\"",
                        "\"3\"",
                        "\"4\"",
                        "\"5\""
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementMusicSharp": {
            "type": "element",
            "name": "sharp",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementMusicFlat": {
            "type": "element",
            "name": "flat",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementMinus": {
            "type": "element",
            "name": "minus",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementMidpoint": {
            "type": "element",
            "name": "midpoint",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementMdash": {
            "type": "element",
            "name": "mdash",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementMathInline": {
            "type": "element",
            "name": "m",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementFillInMath"
                },
                {
                    "ref": "ElementWWVariable"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementFillInMath": {
            "type": "element",
            "name": "fillin",
            "attributes": {
                "fill": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "characters": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementLsq": {
            "type": "element",
            "name": "lsq",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementLq": {
            "type": "element",
            "name": "lq",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementLdblbracket": {
            "type": "element",
            "name": "ldblbracket",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementLatex": {
            "type": "element",
            "name": "latex",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementLangle": {
            "type": "element",
            "name": "langle",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementKbd": {
            "type": "element",
            "name": "kbd",
            "attributes": {
                "name": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementInsert": {
            "type": "element",
            "name": "insert",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementInit": {
            "type": "element",
            "name": "init",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementIcon": {
            "type": "element",
            "name": "icon",
            "attributes": {
                "name": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementEllipsis": {
            "type": "element",
            "name": "ellipsis",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementDegree": {
            "type": "element",
            "name": "degree",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementDblprime": {
            "type": "element",
            "name": "dblprime",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementCopyrightCharacter": {
            "type": "element",
            "name": "copyright",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementCopyleft": {
            "type": "element",
            "name": "copyleft",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementIe": {
            "type": "element",
            "name": "ie",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementForeign": {
            "type": "element",
            "name": "foreign",
            "attributes": {
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementFillInText": {
            "type": "element",
            "name": "fillin",
            "attributes": {
                "characters": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "rows": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "cols": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementEtc": {
            "type": "element",
            "name": "etc",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementEtal": {
            "type": "element",
            "name": "etal",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementEmail": {
            "type": "element",
            "name": "email",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementEm": {
            "type": "element",
            "name": "em",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementEg": {
            "type": "element",
            "name": "eg",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementDoublesharp": {
            "type": "element",
            "name": "doublesharp",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementDoubleflat": {
            "type": "element",
            "name": "doubleflat",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementDelete": {
            "type": "element",
            "name": "delete",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementDblbrackets": {
            "type": "element",
            "name": "dblbrackets",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementChord": {
            "type": "element",
            "name": "chord",
            "attributes": {
                "root": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "mode": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "bps": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "bass": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "suspended": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "parentheses": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAlteration"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAlteration": {
            "type": "element",
            "name": "alteration",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementCa": {
            "type": "element",
            "name": "ca",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementC": {
            "type": "element",
            "name": "c",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementBc": {
            "type": "element",
            "name": "bc",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementAttr": {
            "type": "element",
            "name": "attr",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementArticletitle": {
            "type": "element",
            "name": "articletitle",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementAngles": {
            "type": "element",
            "name": "angles",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementAm": {
            "type": "element",
            "name": "am",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementAlert": {
            "type": "element",
            "name": "alert",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementAd": {
            "type": "element",
            "name": "ad",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementAcro": {
            "type": "element",
            "name": "acro",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementAbbr": {
            "type": "element",
            "name": "abbr",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementSubtitle": {
            "type": "element",
            "name": "subtitle",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementShortTitle": {
            "type": "element",
            "name": "shorttitle",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementPlainTitle": {
            "type": "element",
            "name": "plaintitle",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementPart": {
            "type": "element",
            "name": "part",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementChapter"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementLinedTitle"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementLinedTitle": {
            "type": "element",
            "name": "title",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementLongLine"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementLongLine": {
            "type": "element",
            "name": "line",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementIndex": {
            "type": "element",
            "name": "idx",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "sortby": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "start": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "finish": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIdxHeading"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementSee"
                },
                {
                    "ref": "ElementSeealso"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementSeealso": {
            "type": "element",
            "name": "seealso",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementSee": {
            "type": "element",
            "name": "see",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementIdxHeading": {
            "type": "element",
            "name": "h",
            "attributes": {
                "sortby": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementChapter": {
            "type": "element",
            "name": "chapter",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAuthorByline"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExercises"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementGlossary"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementLinedTitle"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObjectives"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementOutcomes"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphs"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementReadingQuestions"
                },
                {
                    "ref": "ElementReferences"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSection"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolutions"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementWarning": {
            "type": "element",
            "name": "warning",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementVideo": {
            "type": "element",
            "name": "video",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "aspect": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "start": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "end": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "play-at": {
                    "optional": true,
                    "type": [
                        "\"embed\"",
                        "\"popout\"",
                        "\"select\""
                    ]
                },
                "preview": {
                    "optional": true,
                    "type": [
                        "\"default\"",
                        "\"generic\"",
                        "string"
                    ]
                },
                "source": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "href": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "youtube": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "youtubeplaylist": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "vimeo": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementTabular": {
            "type": "element",
            "name": "tabular",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "row-headers": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "halign": {
                    "optional": true,
                    "type": [
                        "\"left\"",
                        "\"center\"",
                        "\"right\"",
                        "\"justify\""
                    ]
                },
                "valign": {
                    "optional": true,
                    "type": [
                        "\"top\"",
                        "\"middle\"",
                        "\"bottom\""
                    ]
                },
                "top": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                },
                "bottom": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                },
                "left": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                },
                "right": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementTableColumn"
                },
                {
                    "ref": "ElementTableRow"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementTableRow": {
            "type": "element",
            "name": "row",
            "attributes": {
                "header": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\"",
                        "\"vertical\""
                    ]
                },
                "halign": {
                    "optional": true,
                    "type": [
                        "\"left\"",
                        "\"center\"",
                        "\"right\"",
                        "\"justify\""
                    ]
                },
                "valign": {
                    "optional": true,
                    "type": [
                        "\"top\"",
                        "\"middle\"",
                        "\"bottom\""
                    ]
                },
                "bottom": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                },
                "left": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementTableCell"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementTableCell": {
            "type": "element",
            "name": "cell",
            "attributes": {
                "halign": {
                    "optional": true,
                    "type": [
                        "\"left\"",
                        "\"center\"",
                        "\"right\"",
                        "\"justify\""
                    ]
                },
                "bottom": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                },
                "right": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                },
                "colspan": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLongLine"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementParagraph": {
            "type": "element",
            "name": "p",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCodeDisplay"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementFootnote"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMd"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMdn"
                },
                {
                    "ref": "ElementMe"
                },
                {
                    "ref": "ElementMen"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementNotation"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUl"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementUl": {
            "type": "element",
            "name": "ul",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "cols": {
                    "optional": true,
                    "type": [
                        "\"2\"",
                        "\"3\"",
                        "\"4\"",
                        "\"5\"",
                        "\"6\""
                    ]
                },
                "marker": {
                    "optional": true,
                    "type": [
                        "\"disc\"",
                        "\"circle\"",
                        "\"square\"",
                        "\"\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementListItem"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementListItem": {
            "type": "element",
            "name": "li",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCodeDisplay"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementFootnote"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMd"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMdn"
                },
                {
                    "ref": "ElementMe"
                },
                {
                    "ref": "ElementMen"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementNotation"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUl"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementTable": {
            "type": "element",
            "name": "table",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "landscape": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSideBySideGroup": {
            "type": "element",
            "name": "sbsgroup",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "widths": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "valign": {
                    "optional": true,
                    "type": [
                        "\"top\"",
                        "\"middle\"",
                        "\"bottom\""
                    ]
                },
                "valigns": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementSideBySide"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSideBySide": {
            "type": "element",
            "name": "sidebyside",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "widths": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "valign": {
                    "optional": true,
                    "type": [
                        "\"top\"",
                        "\"middle\"",
                        "\"bottom\""
                    ]
                },
                "valigns": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementStack"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementUl"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementStack": {
            "type": "element",
            "name": "stack",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementUl"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementProgram": {
            "type": "element",
            "name": "program",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "autorun": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "chatcodes": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "codelens": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "compiler-args": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "extra-compiler-args": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "database": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "add-files": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "compile-also": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "download": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "hidecode": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "highlight-lines": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "include": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "filename": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "interactive": {
                    "optional": true,
                    "type": [
                        "\"codelens\"",
                        "\"activecode\""
                    ]
                },
                "interpreter-args": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "language": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "line-numbers": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "linker-args": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "timelimit": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementProgramCode"
                },
                {
                    "ref": "ElementProgramPostamble"
                },
                {
                    "ref": "ElementProgramPreamble"
                },
                {
                    "ref": "ElementProgramStdin"
                },
                {
                    "ref": "ElementProgramTests"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementProgramTests": {
            "type": "element",
            "name": "tests",
            "attributes": {
                "visible": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementIotest"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementIotest": {
            "type": "element",
            "name": "iotest",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementInput"
                },
                {
                    "ref": "ElementOutput"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementOutput": {
            "type": "element",
            "name": "output",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementInput": {
            "type": "element",
            "name": "input",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementProgramStdin": {
            "type": "element",
            "name": "stdin",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementProgramPreamble": {
            "type": "element",
            "name": "preamble",
            "attributes": {
                "visible": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementProgramPostamble": {
            "type": "element",
            "name": "postamble",
            "attributes": {
                "visible": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementProgramCode": {
            "type": "element",
            "name": "code",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementPreformatted": {
            "type": "element",
            "name": "pre",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCodeLine"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementCodeLine": {
            "type": "element",
            "name": "cline",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementOl": {
            "type": "element",
            "name": "ol",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "cols": {
                    "optional": true,
                    "type": [
                        "\"2\"",
                        "\"3\"",
                        "\"4\"",
                        "\"5\"",
                        "\"6\""
                    ]
                },
                "marker": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementListItem"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementImageRaster": {
            "type": "element",
            "name": "image",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "rotate": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "archive": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "source": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                },
                "decorative": {
                    "optional": true,
                    "type": [
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementImageDescription"
                },
                {
                    "ref": "ElementImageShortDescription"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementImageShortDescription": {
            "type": "element",
            "name": "shortdescription",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementImageDescription": {
            "type": "element",
            "name": "description",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementTabular"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementImageCode": {
            "type": "element",
            "name": "image",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "archive": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "decorative": {
                    "optional": true,
                    "type": [
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAsymptote"
                },
                {
                    "ref": "ElementCodeLatexImage"
                },
                {
                    "ref": "ElementImageDescription"
                },
                {
                    "ref": "ElementImageShortDescriptionCode"
                },
                {
                    "ref": "ElementSageplot"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSageplot": {
            "type": "element",
            "name": "sageplot",
            "attributes": {
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "variant": {
                    "optional": true,
                    "type": [
                        "\"2d\"",
                        "\"3d\""
                    ]
                },
                "aspect": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementImageShortDescriptionCode": {
            "type": "element",
            "name": "shortdescription",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementWWVariable"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementCodeLatexImage": {
            "type": "element",
            "name": "latex-image",
            "attributes": {
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementAsymptote": {
            "type": "element",
            "name": "asymptote",
            "attributes": {
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementDl": {
            "type": "element",
            "name": "dl",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "\"narrow\"",
                        "\"medium\"",
                        "\"wide\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementDefinitionListItem"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementDefinitionListItem": {
            "type": "element",
            "name": "li",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSage": {
            "type": "element",
            "name": "sage",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "doctest": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "tolerance": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "auto-evaluate": {
                    "optional": true,
                    "type": [
                        "\"no\"",
                        "\"yes\""
                    ]
                },
                "language": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "type": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementSageInput"
                },
                {
                    "ref": "ElementSageOutput"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSageOutput": {
            "type": "element",
            "name": "output",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementSageInput": {
            "type": "element",
            "name": "input",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementListing": {
            "type": "element",
            "name": "listing",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "landscape": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementConsole": {
            "type": "element",
            "name": "console",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "prompt": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "continuation": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConsoleInput"
                },
                {
                    "ref": "ElementConsoleOutput"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementConsoleOutput": {
            "type": "element",
            "name": "output",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementConsoleInput": {
            "type": "element",
            "name": "input",
            "attributes": {
                "prompt": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "continuation": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementList": {
            "type": "element",
            "name": "list",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "landscape": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementUl"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementIntroductionText": {
            "type": "element",
            "name": "introduction",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementBlockQuote": {
            "type": "element",
            "name": "blockquote",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAttribution"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAttribution": {
            "type": "element",
            "name": "attribution",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLongLine"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementConclusionText": {
            "type": "element",
            "name": "conclusion",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementHistorical": {
            "type": "element",
            "name": "historical",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementFigure": {
            "type": "element",
            "name": "figure",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "landscape": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCaption"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementMuseScore"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementMuseScore": {
            "type": "element",
            "name": "score",
            "attributes": {
                "musescoreuser": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                },
                "musescore": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementCaption": {
            "type": "element",
            "name": "caption",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementBiographical": {
            "type": "element",
            "name": "biographical",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAside": {
            "type": "element",
            "name": "aside",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementPoem": {
            "type": "element",
            "name": "poem",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "halign": {
                    "optional": true,
                    "type": [
                        "\"left\"",
                        "\"center\"",
                        "\"right\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementPoemAuthor"
                },
                {
                    "ref": "ElementPoemLine"
                },
                {
                    "ref": "ElementStanza"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementStanza": {
            "type": "element",
            "name": "stanza",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementPoemLine"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementPoemLine": {
            "type": "element",
            "name": "line",
            "attributes": {
                "indent": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementPoemAuthor": {
            "type": "element",
            "name": "author",
            "attributes": {
                "halign": {
                    "optional": true,
                    "type": [
                        "\"left\"",
                        "\"center\"",
                        "\"right\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementNotation": {
            "type": "element",
            "name": "notation",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementNotationDescription"
                },
                {
                    "ref": "ElementUsage"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementUsage": {
            "type": "element",
            "name": "usage",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementMathInline"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementNotationDescription": {
            "type": "element",
            "name": "description",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementMen": {
            "type": "element",
            "name": "men",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementFillInMath"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementWWVariable"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementMe": {
            "type": "element",
            "name": "me",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementFillInMath"
                },
                {
                    "ref": "ElementWWVariable"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementMdn": {
            "type": "element",
            "name": "mdn",
            "attributes": {
                "number": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "break": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "alignment": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "alignat-columns": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementMathIntertext"
                },
                {
                    "ref": "ElementMathRow"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementMathRow": {
            "type": "element",
            "name": "mrow",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "number": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "tag": {
                    "optional": true,
                    "type": [
                        "\"star\"",
                        "\"dstar\"",
                        "\"tstar\"",
                        "\"dagger\"",
                        "\"ddagger\"",
                        "\"tdagger\"",
                        "\"daggerdbl\"",
                        "\"ddaggerdbl\"",
                        "\"tdaggerdbl\"",
                        "\"hash\"",
                        "\"dhash\"",
                        "\"thash\"",
                        "\"maltese\"",
                        "\"dmaltese\"",
                        "\"tmaltese\""
                    ]
                },
                "break": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementFillInMath"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementMathIntertext": {
            "type": "element",
            "name": "intertext",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementMd": {
            "type": "element",
            "name": "md",
            "attributes": {
                "number": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "break": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "alignment": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "alignat-columns": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementMathIntertext"
                },
                {
                    "ref": "ElementMathRow"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementFootnote": {
            "type": "element",
            "name": "fn",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementCodeDisplay": {
            "type": "element",
            "name": "cd",
            "attributes": {
                "latexsep": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCodeLine"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementTableColumn": {
            "type": "element",
            "name": "col",
            "attributes": {
                "halign": {
                    "optional": true,
                    "type": [
                        "\"left\"",
                        "\"center\"",
                        "\"right\"",
                        "\"justify\""
                    ]
                },
                "top": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                },
                "right": {
                    "optional": true,
                    "type": [
                        "\"none\"",
                        "\"minor\"",
                        "\"medium\"",
                        "\"major\""
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementTheorem": {
            "type": "element",
            "name": "theorem",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementStatement": {
            "type": "element",
            "name": "statement",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementProof": {
            "type": "element",
            "name": "proof",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementCase"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementCase": {
            "type": "element",
            "name": "case",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "direction": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementCreator": {
            "type": "element",
            "name": "creator",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementTechnology": {
            "type": "element",
            "name": "technology",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSolutions": {
            "type": "element",
            "name": "solutions",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "inline": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "divisional": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "project": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "admit": {
                    "optional": true,
                    "type": [
                        "\"all\"",
                        "\"odd\"",
                        "\"even\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementIntroductionDivision": {
            "type": "element",
            "name": "introduction",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementRemark": {
            "type": "element",
            "name": "remark",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementQuestion": {
            "type": "element",
            "name": "question",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAnswer"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConclusionStatement"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHint"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatement"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolution"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTask"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementTask": {
            "type": "element",
            "name": "task",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAnswer"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConclusionStatement"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHint"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatement"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolution"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTask"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSolution": {
            "type": "element",
            "name": "solution",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementIntroductionStatement": {
            "type": "element",
            "name": "introduction",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementHint": {
            "type": "element",
            "name": "hint",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementConclusionStatement": {
            "type": "element",
            "name": "conclusion",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAnswer": {
            "type": "element",
            "name": "answer",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementProposition": {
            "type": "element",
            "name": "proposition",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementProject": {
            "type": "element",
            "name": "project",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAnswer"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConclusionStatement"
                },
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHint"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatement"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPostlude"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrelude"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolution"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTask"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWebWorkAuthored"
                },
                {
                    "ref": "ElementWebWorkSource"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementWebWorkSource": {
            "type": "element",
            "name": "webwork",
            "attributes": {
                "source": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "seed": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementWebWorkAuthored": {
            "type": "element",
            "name": "webwork",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "seed": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "copy": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementHintWW"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementPgCode"
                },
                {
                    "ref": "ElementSolutionWW"
                },
                {
                    "ref": "ElementStatementExerciseWW"
                },
                {
                    "ref": "ElementTaskWW"
                },
                {
                    "ref": "ElementWWDescription"
                },
                {
                    "ref": "ElementWWMacros"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementWWMacros": {
            "type": "element",
            "name": "pg-macros",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementMacroFile"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementMacroFile": {
            "type": "element",
            "name": "macro-file",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementWWDescription": {
            "type": "element",
            "name": "description",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSimpleLine"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementSimpleLine": {
            "type": "element",
            "name": "line",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementTaskWW": {
            "type": "element",
            "name": "task",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementHintWW"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementSolutionWW"
                },
                {
                    "ref": "ElementStatementExerciseWW"
                },
                {
                    "ref": "ElementTaskWW"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementStatementExerciseWW": {
            "type": "element",
            "name": "statement",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementImageWW"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementWWInstruction"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementWWInstruction": {
            "type": "element",
            "name": "instruction",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementImageWW": {
            "type": "element",
            "name": "image",
            "attributes": {
                "pg-name": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "decorative": {
                    "optional": true,
                    "type": [
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementImageDescription"
                },
                {
                    "ref": "ElementImageShortDescriptionCode"
                },
                {
                    "ref": "ElementWWLatexImage"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementWWLatexImage": {
            "type": "element",
            "name": "latex-image",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementSolutionWW": {
            "type": "element",
            "name": "solution",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementImageWW"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementTabular"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementHintWW": {
            "type": "element",
            "name": "hint",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementImageWW"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementTabular"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementPgCode": {
            "type": "element",
            "name": "pg-code",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementPrelude": {
            "type": "element",
            "name": "prelude",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementPostlude": {
            "type": "element",
            "name": "postlude",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementProblem": {
            "type": "element",
            "name": "problem",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAnswer"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConclusionStatement"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHint"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatement"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolution"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTask"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementPrinciple": {
            "type": "element",
            "name": "principle",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementObservation": {
            "type": "element",
            "name": "observation",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementNote": {
            "type": "element",
            "name": "note",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementListGenerator": {
            "type": "element",
            "name": "list-of",
            "attributes": {
                "elements": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                },
                "scope": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "divisions": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "empty": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementLemma": {
            "type": "element",
            "name": "lemma",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementInvestigation": {
            "type": "element",
            "name": "investigation",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAnswer"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConclusionStatement"
                },
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHint"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatement"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPostlude"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrelude"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolution"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTask"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWebWorkAuthored"
                },
                {
                    "ref": "ElementWebWorkSource"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementInsight": {
            "type": "element",
            "name": "insight",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementIdentity": {
            "type": "element",
            "name": "identity",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementHypothesis": {
            "type": "element",
            "name": "hypothesis",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementHeuristic": {
            "type": "element",
            "name": "heuristic",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementFragment": {
            "type": "element",
            "name": "fragment",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "filename": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCode"
                },
                {
                    "ref": "ElementFragref"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementFragref": {
            "type": "element",
            "name": "fragref",
            "attributes": {
                "ref": {
                    "optional": false,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementCode": {
            "type": "element",
            "name": "code",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementFact": {
            "type": "element",
            "name": "fact",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementExploration": {
            "type": "element",
            "name": "exploration",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAnswer"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConclusionStatement"
                },
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHint"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatement"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPostlude"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrelude"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolution"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTask"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWebWorkAuthored"
                },
                {
                    "ref": "ElementWebWorkSource"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementExercise": {
            "type": "element",
            "name": "exercise",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "number": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAnswer"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConclusionStatement"
                },
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementExerciseOrderedList"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHint"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatement"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolution"
                },
                {
                    "ref": "ElementStatementExercise"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTask"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWebWorkAuthored"
                },
                {
                    "ref": "ElementWebWorkSource"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementStatementExercise": {
            "type": "element",
            "name": "statement",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementExerciseOrderedList"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementExerciseOrderedList": {
            "type": "element",
            "name": "ol",
            "attributes": {
                "cols": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "marker": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementExerciseListItem"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementExerciseListItem": {
            "type": "element",
            "name": "li",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCodeDisplay"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementFootnote"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMd"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMdn"
                },
                {
                    "ref": "ElementMe"
                },
                {
                    "ref": "ElementMen"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementNotation"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUl"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementExample": {
            "type": "element",
            "name": "example",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAnswer"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConclusionStatement"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHint"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatement"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolution"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTask"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementDefinition": {
            "type": "element",
            "name": "definition",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementNotation"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementData": {
            "type": "element",
            "name": "data",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementCorollary": {
            "type": "element",
            "name": "corollary",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementConvention": {
            "type": "element",
            "name": "convention",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementConjecture": {
            "type": "element",
            "name": "conjecture",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementComputation": {
            "type": "element",
            "name": "computation",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementClaim": {
            "type": "element",
            "name": "claim",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAxiom": {
            "type": "element",
            "name": "axiom",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAssumption": {
            "type": "element",
            "name": "assumption",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAssemblage": {
            "type": "element",
            "name": "assemblage",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSideBySideNoCaption": {
            "type": "element",
            "name": "sidebyside",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "widths": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "valign": {
                    "optional": true,
                    "type": [
                        "\"top\"",
                        "\"middle\"",
                        "\"bottom\""
                    ]
                },
                "valigns": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementStack"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementUl"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSideBySideGroupNoCaption": {
            "type": "element",
            "name": "sbsgroup",
            "attributes": {
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "margins": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "width": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "widths": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "valign": {
                    "optional": true,
                    "type": [
                        "\"top\"",
                        "\"middle\"",
                        "\"bottom\""
                    ]
                },
                "valigns": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementSideBySideNoCaption"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAlgorithm": {
            "type": "element",
            "name": "algorithm",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementCreator"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementActivity": {
            "type": "element",
            "name": "activity",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAnswer"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConclusionStatement"
                },
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementHint"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatement"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPostlude"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrelude"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolution"
                },
                {
                    "ref": "ElementStatement"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTask"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWebWorkAuthored"
                },
                {
                    "ref": "ElementWebWorkSource"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementConclusionDivision": {
            "type": "element",
            "name": "conclusion",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSection": {
            "type": "element",
            "name": "section",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAuthorByline"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExercises"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementGlossary"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementLinedTitle"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObjectives"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementOutcomes"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphs"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementReadingQuestions"
                },
                {
                    "ref": "ElementReferences"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolutions"
                },
                {
                    "ref": "ElementSubsection"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSubsection": {
            "type": "element",
            "name": "subsection",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAuthorByline"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExercises"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementGlossary"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObjectives"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementOutcomes"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphs"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementReadingQuestions"
                },
                {
                    "ref": "ElementReferences"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolutions"
                },
                {
                    "ref": "ElementSubsubsection"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSubsubsection": {
            "type": "element",
            "name": "subsubsection",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAuthorByline"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExercises"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementGlossary"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObjectives"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementOutcomes"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphs"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementReadingQuestions"
                },
                {
                    "ref": "ElementReferences"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolutions"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementReferences": {
            "type": "element",
            "name": "references",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementBibliographyItem"
                },
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementBibliographyItem": {
            "type": "element",
            "name": "biblio",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "type": {
                    "optional": true,
                    "type": [
                        "\"bibtex\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementBibAuthor"
                },
                {
                    "ref": "ElementBibEditor"
                },
                {
                    "ref": "ElementBibJournal"
                },
                {
                    "ref": "ElementBibNote"
                },
                {
                    "ref": "ElementBibNumber"
                },
                {
                    "ref": "ElementBibPages"
                },
                {
                    "ref": "ElementBibPublisher"
                },
                {
                    "ref": "ElementBibSeries"
                },
                {
                    "ref": "ElementBibTitle"
                },
                {
                    "ref": "ElementBibVolume"
                },
                {
                    "ref": "ElementBibYear"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIbid"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementIbid": {
            "type": "element",
            "name": "ibid",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementBibYear": {
            "type": "element",
            "name": "year",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementBibVolume": {
            "type": "element",
            "name": "volume",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementBibTitle": {
            "type": "element",
            "name": "title",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementBibSeries": {
            "type": "element",
            "name": "series",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementBibPublisher": {
            "type": "element",
            "name": "publisher",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementBibPages": {
            "type": "element",
            "name": "pages",
            "attributes": {
                "start": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "end": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementBibNumber": {
            "type": "element",
            "name": "number",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementBibNote": {
            "type": "element",
            "name": "note",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementParagraph"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementBibJournal": {
            "type": "element",
            "name": "journal",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementBibEditor": {
            "type": "element",
            "name": "editor",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementBibAuthor": {
            "type": "element",
            "name": "author",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementReadingQuestions": {
            "type": "element",
            "name": "reading-questions",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementParagraphs": {
            "type": "element",
            "name": "paragraphs",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementOutcomes": {
            "type": "element",
            "name": "outcomes",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementUl"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementObjectives": {
            "type": "element",
            "name": "objectives",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionText"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionText"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementUl"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementGlossary": {
            "type": "element",
            "name": "glossary",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementGlossaryItem"
                },
                {
                    "ref": "ElementHeadNote"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementHeadNote": {
            "type": "element",
            "name": "headnote",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementGlossaryItem": {
            "type": "element",
            "name": "gi",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementExercises": {
            "type": "element",
            "name": "exercises",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExerciseGroup"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementSubexercises"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSubexercises": {
            "type": "element",
            "name": "subexercises",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExerciseGroup"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementExerciseGroup": {
            "type": "element",
            "name": "exercisegroup",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "cols": {
                    "optional": true,
                    "type": [
                        "\"2\"",
                        "\"3\"",
                        "\"4\"",
                        "\"5\"",
                        "\"6\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementConclusionStatementNoCaption"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIntroductionStatementNoCaption"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementIntroductionStatementNoCaption": {
            "type": "element",
            "name": "introduction",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementConclusionStatementNoCaption": {
            "type": "element",
            "name": "conclusion",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAuthorByline": {
            "type": "element",
            "name": "author",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementLinedSubtitle": {
            "type": "element",
            "name": "subtitle",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementLongLine"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementBookFrontMatter": {
            "type": "element",
            "name": "frontmatter",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAcknowledgement"
                },
                {
                    "ref": "ElementBibinfo"
                },
                {
                    "ref": "ElementBiography"
                },
                {
                    "ref": "ElementColophonFront"
                },
                {
                    "ref": "ElementDedication"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementPreface"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementTitlePage"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementTitlePage": {
            "type": "element",
            "name": "titlepage",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementTitlepageItems"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementTitlepageItems": {
            "type": "element",
            "name": "titlepage-items",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementPreface": {
            "type": "element",
            "name": "preface",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAttribution"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementContributors"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphsNoNumber"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementParagraphsNoNumber": {
            "type": "element",
            "name": "paragraphs",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementContributors": {
            "type": "element",
            "name": "contributors",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementContributor"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementContributor": {
            "type": "element",
            "name": "contributor",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAffiliation"
                },
                {
                    "ref": "ElementDepartment"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInstitution"
                },
                {
                    "ref": "ElementLocation"
                },
                {
                    "ref": "ElementPersonName"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementPersonName": {
            "type": "element",
            "name": "personname",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementLocation": {
            "type": "element",
            "name": "location",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementShortLine"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementShortLine": {
            "type": "element",
            "name": "line",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementInstitution": {
            "type": "element",
            "name": "institution",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementShortLine"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementDepartment": {
            "type": "element",
            "name": "department",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementShortLine"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementAffiliation": {
            "type": "element",
            "name": "affiliation",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementDepartment"
                },
                {
                    "ref": "ElementInstitution"
                },
                {
                    "ref": "ElementLocation"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementDedication": {
            "type": "element",
            "name": "dedication",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphLined"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementParagraphLined": {
            "type": "element",
            "name": "p",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementLine"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementLine": {
            "type": "element",
            "name": "line",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementColophonFront": {
            "type": "element",
            "name": "colophon",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementColophonItems"
                },
                {
                    "ref": "ElementIndex"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementColophonItems": {
            "type": "element",
            "name": "colophon-items",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementBiography": {
            "type": "element",
            "name": "biography",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphsNoNumber"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementBibinfo": {
            "type": "element",
            "name": "bibinfo",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAuthor"
                },
                {
                    "ref": "ElementColophonCredit"
                },
                {
                    "ref": "ElementCopyright"
                },
                {
                    "ref": "ElementCredit"
                },
                {
                    "ref": "ElementDate"
                },
                {
                    "ref": "ElementEdition"
                },
                {
                    "ref": "ElementEditor"
                },
                {
                    "ref": "ElementKeywords"
                },
                {
                    "ref": "ElementSupport"
                },
                {
                    "ref": "ElementWebsite"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementWebsite": {
            "type": "element",
            "name": "website",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementUrl"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementSupport": {
            "type": "element",
            "name": "support",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCodeDisplay"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDl"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementFootnote"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMd"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMdn"
                },
                {
                    "ref": "ElementMe"
                },
                {
                    "ref": "ElementMen"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementNotation"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementOl"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUl"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementKeywords": {
            "type": "element",
            "name": "keywords",
            "attributes": {
                "authority": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "variant": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementKeyword"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementKeyword": {
            "type": "element",
            "name": "keyword",
            "attributes": {
                "primary": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTrademark"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementEditor": {
            "type": "element",
            "name": "editor",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAffiliation"
                },
                {
                    "ref": "ElementDepartment"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementInstitution"
                },
                {
                    "ref": "ElementLocation"
                },
                {
                    "ref": "ElementPersonName"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementEdition": {
            "type": "element",
            "name": "edition",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementDate": {
            "type": "element",
            "name": "date",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementCredit": {
            "type": "element",
            "name": "credit",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAuthor"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAuthor": {
            "type": "element",
            "name": "author",
            "attributes": {
                "corresponding": {
                    "optional": true,
                    "type": [
                        "\"yes\"",
                        "\"no\""
                    ]
                },
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAffiliation"
                },
                {
                    "ref": "ElementBiography"
                },
                {
                    "ref": "ElementDepartment"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementInstitution"
                },
                {
                    "ref": "ElementLocation"
                },
                {
                    "ref": "ElementPersonName"
                },
                {
                    "ref": "ElementSupport"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementCopyright": {
            "type": "element",
            "name": "copyright",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementHolder"
                },
                {
                    "ref": "ElementMinilicense"
                },
                {
                    "ref": "ElementShortLicense"
                },
                {
                    "ref": "ElementYear"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementYear": {
            "type": "element",
            "name": "year",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementShortLicense": {
            "type": "element",
            "name": "shortlicense",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementMinilicense": {
            "type": "element",
            "name": "minilicense",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementHolder": {
            "type": "element",
            "name": "holder",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": true
        },
        "ElementColophonCredit": {
            "type": "element",
            "name": "credit",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementEntity"
                },
                {
                    "ref": "ElementRole"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementRole": {
            "type": "element",
            "name": "role",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementEntity": {
            "type": "element",
            "name": "entity",
            "attributes": {},
            "children": [
                {
                    "ref": "ElementAbbr"
                },
                {
                    "ref": "ElementAcro"
                },
                {
                    "ref": "ElementAd"
                },
                {
                    "ref": "ElementAlert"
                },
                {
                    "ref": "ElementAm"
                },
                {
                    "ref": "ElementAngles"
                },
                {
                    "ref": "ElementArticletitle"
                },
                {
                    "ref": "ElementAttr"
                },
                {
                    "ref": "ElementBc"
                },
                {
                    "ref": "ElementC"
                },
                {
                    "ref": "ElementCa"
                },
                {
                    "ref": "ElementChord"
                },
                {
                    "ref": "ElementCopyleft"
                },
                {
                    "ref": "ElementCopyrightCharacter"
                },
                {
                    "ref": "ElementDblbrackets"
                },
                {
                    "ref": "ElementDblprime"
                },
                {
                    "ref": "ElementDegree"
                },
                {
                    "ref": "ElementDelete"
                },
                {
                    "ref": "ElementDoubleflat"
                },
                {
                    "ref": "ElementDoublesharp"
                },
                {
                    "ref": "ElementEg"
                },
                {
                    "ref": "ElementEllipsis"
                },
                {
                    "ref": "ElementEm"
                },
                {
                    "ref": "ElementEmail"
                },
                {
                    "ref": "ElementEtal"
                },
                {
                    "ref": "ElementEtc"
                },
                {
                    "ref": "ElementFillInText"
                },
                {
                    "ref": "ElementForeign"
                },
                {
                    "ref": "ElementIcon"
                },
                {
                    "ref": "ElementIe"
                },
                {
                    "ref": "ElementInit"
                },
                {
                    "ref": "ElementInsert"
                },
                {
                    "ref": "ElementKbd"
                },
                {
                    "ref": "ElementLangle"
                },
                {
                    "ref": "ElementLatex"
                },
                {
                    "ref": "ElementLdblbracket"
                },
                {
                    "ref": "ElementLq"
                },
                {
                    "ref": "ElementLsq"
                },
                {
                    "ref": "ElementMathInline"
                },
                {
                    "ref": "ElementMdash"
                },
                {
                    "ref": "ElementMidpoint"
                },
                {
                    "ref": "ElementMinus"
                },
                {
                    "ref": "ElementMusicFlat"
                },
                {
                    "ref": "ElementMusicSharp"
                },
                {
                    "ref": "ElementN"
                },
                {
                    "ref": "ElementNatural"
                },
                {
                    "ref": "ElementNb"
                },
                {
                    "ref": "ElementNbsp"
                },
                {
                    "ref": "ElementNdash"
                },
                {
                    "ref": "ElementObelus"
                },
                {
                    "ref": "ElementPermille"
                },
                {
                    "ref": "ElementPf"
                },
                {
                    "ref": "ElementPhonomark"
                },
                {
                    "ref": "ElementPilcrow"
                },
                {
                    "ref": "ElementPlusminus"
                },
                {
                    "ref": "ElementPm"
                },
                {
                    "ref": "ElementPrefigure"
                },
                {
                    "ref": "ElementPretext"
                },
                {
                    "ref": "ElementPrime"
                },
                {
                    "ref": "ElementPs"
                },
                {
                    "ref": "ElementPubtitle"
                },
                {
                    "ref": "ElementQ"
                },
                {
                    "ref": "ElementQuantity"
                },
                {
                    "ref": "ElementRangle"
                },
                {
                    "ref": "ElementRdblbracket"
                },
                {
                    "ref": "ElementRegistered"
                },
                {
                    "ref": "ElementRq"
                },
                {
                    "ref": "ElementRsq"
                },
                {
                    "ref": "ElementScaledeg"
                },
                {
                    "ref": "ElementSectionMark"
                },
                {
                    "ref": "ElementServicemark"
                },
                {
                    "ref": "ElementSolidus"
                },
                {
                    "ref": "ElementSq"
                },
                {
                    "ref": "ElementStale"
                },
                {
                    "ref": "ElementSwungdash"
                },
                {
                    "ref": "ElementTag"
                },
                {
                    "ref": "ElementTage"
                },
                {
                    "ref": "ElementTaxon"
                },
                {
                    "ref": "ElementTerm"
                },
                {
                    "ref": "ElementTex"
                },
                {
                    "ref": "ElementTimeofday"
                },
                {
                    "ref": "ElementTimes"
                },
                {
                    "ref": "ElementTimesignature"
                },
                {
                    "ref": "ElementToday"
                },
                {
                    "ref": "ElementTrademark"
                },
                {
                    "ref": "ElementUrl"
                },
                {
                    "ref": "ElementViz"
                },
                {
                    "ref": "ElementVs"
                },
                {
                    "ref": "ElementWebwork"
                },
                {
                    "ref": "ElementWWVariable"
                },
                {
                    "ref": "ElementXelatex"
                },
                {
                    "ref": "ElementXetex"
                },
                {
                    "ref": "ElementXref"
                }
            ],
            "textChildrenAllowed": true
        },
        "ElementAcknowledgement": {
            "type": "element",
            "name": "acknowledgement",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphsNoNumber"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementBookBackMatter": {
            "type": "element",
            "name": "backmatter",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementBookAppendix"
                },
                {
                    "ref": "ElementColophonBack"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIndexDivision"
                },
                {
                    "ref": "ElementReferences"
                },
                {
                    "ref": "ElementSolutions"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementIndexDivision": {
            "type": "element",
            "name": "index",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIndexList"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementIndexList": {
            "type": "element",
            "name": "index-list",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementColophonBack": {
            "type": "element",
            "name": "colophon",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementSideBySideGroupNoCaption"
                },
                {
                    "ref": "ElementSideBySideNoCaption"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementBookAppendix": {
            "type": "element",
            "name": "appendix",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAuthorByline"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExercises"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementGlossary"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNotationList"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObjectives"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementOutcomes"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphs"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementReadingQuestions"
                },
                {
                    "ref": "ElementReferences"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSection"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolutions"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementNotationList": {
            "type": "element",
            "name": "notation-list",
            "attributes": {},
            "children": [],
            "textChildrenAllowed": false
        },
        "ElementArticle": {
            "type": "element",
            "name": "article",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementArticleBackMatter"
                },
                {
                    "ref": "ElementArticleFrontMatter"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExercises"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementGlossary"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementLinedSubtitle"
                },
                {
                    "ref": "ElementLinedTitle"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObjectives"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementOutcomes"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphs"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementReadingQuestions"
                },
                {
                    "ref": "ElementReferences"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementSection"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolutions"
                },
                {
                    "ref": "ElementSubtitle"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementArticleFrontMatter": {
            "type": "element",
            "name": "frontmatter",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementAbstract"
                },
                {
                    "ref": "ElementBibinfo"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementTitlePage"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementAbstract": {
            "type": "element",
            "name": "abstract",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementVideo"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementArticleBackMatter": {
            "type": "element",
            "name": "backmatter",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementArticleAppendix"
                },
                {
                    "ref": "ElementColophonBack"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementIndexDivision"
                },
                {
                    "ref": "ElementReferences"
                },
                {
                    "ref": "ElementSolutions"
                },
                {
                    "ref": "ElementTitle"
                }
            ],
            "textChildrenAllowed": false
        },
        "ElementArticleAppendix": {
            "type": "element",
            "name": "appendix",
            "attributes": {
                "xml:id": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "label": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "component": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:base": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                },
                "xml:lang": {
                    "optional": true,
                    "type": [
                        "string"
                    ]
                }
            },
            "children": [
                {
                    "ref": "ElementActivity"
                },
                {
                    "ref": "ElementAlgorithm"
                },
                {
                    "ref": "ElementAside"
                },
                {
                    "ref": "ElementAssemblage"
                },
                {
                    "ref": "ElementAssumption"
                },
                {
                    "ref": "ElementAuthorByline"
                },
                {
                    "ref": "ElementAxiom"
                },
                {
                    "ref": "ElementBiographical"
                },
                {
                    "ref": "ElementBlockQuote"
                },
                {
                    "ref": "ElementClaim"
                },
                {
                    "ref": "ElementComputation"
                },
                {
                    "ref": "ElementConclusionDivision"
                },
                {
                    "ref": "ElementConjecture"
                },
                {
                    "ref": "ElementConsole"
                },
                {
                    "ref": "ElementConvention"
                },
                {
                    "ref": "ElementCorollary"
                },
                {
                    "ref": "ElementData"
                },
                {
                    "ref": "ElementDefinition"
                },
                {
                    "ref": "ElementExample"
                },
                {
                    "ref": "ElementExercise"
                },
                {
                    "ref": "ElementExercises"
                },
                {
                    "ref": "ElementExploration"
                },
                {
                    "ref": "ElementFact"
                },
                {
                    "ref": "ElementFigure"
                },
                {
                    "ref": "ElementFragment"
                },
                {
                    "ref": "ElementGlossary"
                },
                {
                    "ref": "ElementHeuristic"
                },
                {
                    "ref": "ElementHistorical"
                },
                {
                    "ref": "ElementHypothesis"
                },
                {
                    "ref": "ElementIdentity"
                },
                {
                    "ref": "ElementImageCode"
                },
                {
                    "ref": "ElementImageRaster"
                },
                {
                    "ref": "ElementIndex"
                },
                {
                    "ref": "ElementInsight"
                },
                {
                    "ref": "ElementIntroductionDivision"
                },
                {
                    "ref": "ElementInvestigation"
                },
                {
                    "ref": "ElementLemma"
                },
                {
                    "ref": "ElementList"
                },
                {
                    "ref": "ElementListGenerator"
                },
                {
                    "ref": "ElementListing"
                },
                {
                    "ref": "ElementNotationList"
                },
                {
                    "ref": "ElementNote"
                },
                {
                    "ref": "ElementObjectives"
                },
                {
                    "ref": "ElementObservation"
                },
                {
                    "ref": "ElementOutcomes"
                },
                {
                    "ref": "ElementParagraph"
                },
                {
                    "ref": "ElementParagraphs"
                },
                {
                    "ref": "ElementPlainTitle"
                },
                {
                    "ref": "ElementPoem"
                },
                {
                    "ref": "ElementPreformatted"
                },
                {
                    "ref": "ElementPrinciple"
                },
                {
                    "ref": "ElementProblem"
                },
                {
                    "ref": "ElementProgram"
                },
                {
                    "ref": "ElementProject"
                },
                {
                    "ref": "ElementProof"
                },
                {
                    "ref": "ElementProposition"
                },
                {
                    "ref": "ElementQuestion"
                },
                {
                    "ref": "ElementReadingQuestions"
                },
                {
                    "ref": "ElementReferences"
                },
                {
                    "ref": "ElementRemark"
                },
                {
                    "ref": "ElementSage"
                },
                {
                    "ref": "ElementShortTitle"
                },
                {
                    "ref": "ElementSideBySide"
                },
                {
                    "ref": "ElementSideBySideGroup"
                },
                {
                    "ref": "ElementSolutions"
                },
                {
                    "ref": "ElementSubsection"
                },
                {
                    "ref": "ElementTable"
                },
                {
                    "ref": "ElementTabular"
                },
                {
                    "ref": "ElementTechnology"
                },
                {
                    "ref": "ElementTheorem"
                },
                {
                    "ref": "ElementTitle"
                },
                {
                    "ref": "ElementVideo"
                },
                {
                    "ref": "ElementWarning"
                }
            ],
            "textChildrenAllowed": false
        }
    }
}