app.controller("MainController", function($scope){
  


  $scope.alignmentData = {"alignment": {
    
    "language": [
        {
            "lnum": "L1",
            "xmlLang": "heb",
            "dir": "rtl"
        },
        {
            "lnum": "L2",
            "xmlLang": "eng",
            "dir": "ltr"
        }
    ],
    "sentence": [
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "1-1",
                            "text": "דִּבְרֵי֙",
                            "refs": {"nrefs": "1-1 1-2"}
                        },
                        {
                            "n": "1-2",
                            "text": "קֹהֶ֣לֶת",
                            "refs": {"nrefs": "1-3 1-4 1-5"}
                        },
                        {
                            "n": "1-3",
                            "text": "בֶּן־דָּוִ֔ד",
                            "refs": {"nrefs": "1-7 1-8 1-9 1-10"}
                        },
                        {
                            "n": "1-4",
                            "text": "מֶ֖לֶךְ",
                            "refs": {"nrefs": "1-12"}
                        },
                        {
                            "n": "1-5",
                            "text": "בִּירוּשָׁלִָֽם׃",
                            "refs": {"nrefs": "1-13 1-14"}
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "1-1",
                            "text": "The",
                            "refs": {"nrefs": "1-1"}
                        },
                        {
                            "n": "1-2",
                            "text": "words",
                            "refs": {"nrefs": "1-1"}
                        },
                        {
                            "n": "1-3",
                            "text": "of",
                            "refs": {"nrefs": "1-2"}
                        },
                        {
                            "n": "1-4",
                            "text": "the",
                            "refs": {"nrefs": "1-2"}
                        },
                        {
                            "n": "1-5",
                            "text": "Preacher",
                            "refs": {"nrefs": "1-2"}
                        },
                        {
                            "n": "1-6",
                            "text": ","
                        },
                        {
                            "n": "1-7",
                            "text": "the",
                            "refs": {"nrefs": "1-3"}
                        },
                        {
                            "n": "1-8",
                            "text": "son",
                            "refs": {"nrefs": "1-3"}
                        },
                        {
                            "n": "1-9",
                            "text": "of",
                            "refs": {"nrefs": "1-3"}
                        },
                        {
                            "n": "1-10",
                            "text": "David",
                            "refs": {"nrefs": "1-3"}
                        },
                        {
                            "n": "1-11",
                            "text": ","
                        },
                        {
                            "n": "1-12",
                            "text": "king",
                            "refs": {"nrefs": "1-4"}
                        },
                        {
                            "n": "1-13",
                            "text": "in",
                            "refs": {"nrefs": "1-5"}
                        },
                        {
                            "n": "1-14",
                            "text": "Jerusalem",
                            "refs": {"nrefs": "1-5"}
                        },
                        {
                            "n": "1-15",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "2-1",
                            "text": "הֲבֵ֤ל",
                            "refs": {"nrefs": "2-1"}
                        },
                        {
                            "n": "2-2",
                            "text": "הֲבָלִים֙",
                            "refs": {"nrefs": "2-2 2-3"}
                        },
                        {
                            "n": "2-3",
                            "text": "אָמַ֣ר",
                            "refs": {"nrefs": "2-6"}
                        },
                        {
                            "n": "2-4",
                            "text": "קֹהֶ֔לֶת",
                            "refs": {"nrefs": "2-7 2-8"}
                        },
                        {
                            "n": "2-5",
                            "text": "הֲבֵ֥ל",
                            "refs": {"nrefs": "2-10"}
                        },
                        {
                            "n": "2-6",
                            "text": "הֲבָלִ֖ים",
                            "refs": {"nrefs": "2-11 2-12"}
                        },
                        {
                            "n": "2-7",
                            "text": "הַכֹּ֥ל",
                            "refs": {"nrefs": "2-14"}
                        },
                        {
                            "n": "2-8",
                            "text": "הָֽבֶל׃",
                            "refs": {"nrefs": "2-16"}
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "2-1",
                            "text": "\u201cVanity",
                            "refs": {"nrefs": "2-1"}
                        },
                        {
                            "n": "2-2",
                            "text": "of",
                            "refs": {"nrefs": "2-2"}
                        },
                        {
                            "n": "2-3",
                            "text": "vanities",
                            "refs": {"nrefs": "2-2"}
                        },
                        {
                            "n": "2-4",
                            "text": ","
                        },
                        {
                            "n": "2-5",
                            "text": "\u201d"
                        },
                        {
                            "n": "2-6",
                            "text": "says",
                            "refs": {"nrefs": "2-3"}
                        },
                        {
                            "n": "2-7",
                            "text": "the",
                            "refs": {"nrefs": "2-4"}
                        },
                        {
                            "n": "2-8",
                            "text": "Preacher",
                            "refs": {"nrefs": "2-4"}
                        },
                        {
                            "n": "2-9",
                            "text": ";"
                        },
                        {
                            "n": "2-10",
                            "text": "\u201cVanity",
                            "refs": {"nrefs": "2-5"}
                        },
                        {
                            "n": "2-11",
                            "text": "of",
                            "refs": {"nrefs": "2-6"}
                        },
                        {
                            "n": "2-12",
                            "text": "vanities",
                            "refs": {"nrefs": "2-6"}
                        },
                        {
                            "n": "2-13",
                            "text": ","
                        },
                        {
                            "n": "2-14",
                            "text": "all",
                            "refs": {"nrefs": "2-7"}
                        },
                        {
                            "n": "2-15",
                            "text": "is"
                        },
                        {
                            "n": "2-16",
                            "text": "vanity",
                            "refs": {"nrefs": "2-8"}
                        },
                        {
                            "n": "2-17",
                            "text": "."
                        },
                        {
                            "n": "2-18",
                            "text": "\u201d"
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "3-1",
                            "text": ""
                        },
                        {
                            "n": "3-2",
                            "text": "מַה־יִּתְרֹ֖ון",
                            "refs": {"nrefs": "3-1 3-2"}
                        },
                        {
                            "n": "3-3",
                            "text": "לָֽאָדָ֑ם",
                            "refs": {"nrefs": "3-4 3-5"}
                        },
                        {
                            "n": "3-4",
                            "text": "בְּכָל־עֲמָלֹ֔ו",
                            "refs": {"nrefs": "3-6 3-7 3-8 3-9"}
                        },
                        {
                            "n": "3-5",
                            "text": "שֶֽׁיַּעֲמֹ֖ל",
                            "refs": {"nrefs": "3-10 3-11 3-12 3-13"}
                        },
                        {
                            "n": "3-6",
                            "text": "תַּ֥חַת",
                            "refs": {"nrefs": "3-14"}
                        },
                        {
                            "n": "3-7",
                            "text": "הַשָּֽׁמֶשׁ׃",
                            "refs": {"nrefs": "3-15 3-16"}
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "3-1",
                            "text": "What",
                            "refs": {"nrefs": "3-2"}
                        },
                        {
                            "n": "3-2",
                            "text": "profit",
                            "refs": {"nrefs": "3-2"}
                        },
                        {
                            "n": "3-3",
                            "text": "has"
                        },
                        {
                            "n": "3-4",
                            "text": "a",
                            "refs": {"nrefs": "3-3"}
                        },
                        {
                            "n": "3-5",
                            "text": "man",
                            "refs": {"nrefs": "3-3"}
                        },
                        {
                            "n": "3-6",
                            "text": "from",
                            "refs": {"nrefs": "3-4"}
                        },
                        {
                            "n": "3-7",
                            "text": "all",
                            "refs": {"nrefs": "3-4"}
                        },
                        {
                            "n": "3-8",
                            "text": "his",
                            "refs": {"nrefs": "3-4"}
                        },
                        {
                            "n": "3-9",
                            "text": "labor",
                            "refs": {"nrefs": "3-4"}
                        },
                        {
                            "n": "3-10",
                            "text": "In",
                            "refs": {"nrefs": "3-5"}
                        },
                        {
                            "n": "3-11",
                            "text": "which",
                            "refs": {"nrefs": "3-5"}
                        },
                        {
                            "n": "3-12",
                            "text": "he",
                            "refs": {"nrefs": "3-5"}
                        },
                        {
                            "n": "3-13",
                            "text": "toils",
                            "refs": {"nrefs": "3-5"}
                        },
                        {
                            "n": "3-14",
                            "text": "under",
                            "refs": {"nrefs": "3-6"}
                        },
                        {
                            "n": "3-15",
                            "text": "the",
                            "refs": {"nrefs": "3-7"}
                        },
                        {
                            "n": "3-16",
                            "text": "sun?",
                            "refs": {"nrefs": "3-7"}
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "4-1",
                            "text": "דֹּ֤ור",
                            "refs": {"nrefs": "4-1 4-2"}
                        },
                        {
                            "n": "4-2",
                            "text": "הֹלֵךְ֙",
                            "refs": {"nrefs": "4-3 4-4"}
                        },
                        {
                            "n": "4-3",
                            "text": "וְדֹ֣ור",
                            "refs": {"nrefs": "4-6 4-7 4-8"}
                        },
                        {
                            "n": "4-4",
                            "text": "בָּ֔א",
                            "refs": {"nrefs": "4-9"}
                        },
                        {
                            "n": "4-5",
                            "text": "וְהָאָ֖רֶץ",
                            "refs": {"nrefs": "4-11 4-12 4-13"}
                        },
                        {
                            "n": "4-6",
                            "text": "לְעֹולָ֥ם",
                            "refs": {"nrefs": "4-15"}
                        },
                        {
                            "n": "4-7",
                            "text": "עֹמָֽדֶת",
                            "refs": {"nrefs": "4-14"}
                        },
                        {
                            "n": "4-8",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "4-1",
                            "text": "One",
                            "refs": {"nrefs": "4-1"}
                        },
                        {
                            "n": "4-2",
                            "text": "generation",
                            "refs": {"nrefs": "4-1"}
                        },
                        {
                            "n": "4-3",
                            "text": "passes",
                            "refs": {"nrefs": "4-2"}
                        },
                        {
                            "n": "4-4",
                            "text": "away",
                            "refs": {"nrefs": "4-2"}
                        },
                        {
                            "n": "4-5",
                            "text": ","
                        },
                        {
                            "n": "4-6",
                            "text": "and",
                            "refs": {"nrefs": "4-3"}
                        },
                        {
                            "n": "4-7",
                            "text": "another",
                            "refs": {"nrefs": "4-3"}
                        },
                        {
                            "n": "4-8",
                            "text": "generation",
                            "refs": {"nrefs": "4-3"}
                        },
                        {
                            "n": "4-9",
                            "text": "comes",
                            "refs": {"nrefs": "4-4"}
                        },
                        {
                            "n": "4-10",
                            "text": ";"
                        },
                        {
                            "n": "4-11",
                            "text": "But",
                            "refs": {"nrefs": "4-5"}
                        },
                        {
                            "n": "4-12",
                            "text": "the",
                            "refs": {"nrefs": "4-5"}
                        },
                        {
                            "n": "4-13",
                            "text": "earth",
                            "refs": {"nrefs": "4-5"}
                        },
                        {
                            "n": "4-14",
                            "text": "abides",
                            "refs": {"nrefs": "4-7"}
                        },
                        {
                            "n": "4-15",
                            "text": "forever",
                            "refs": {"nrefs": "4-6"}
                        },
                        {
                            "n": "4-16",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "5-1",
                            "text": "וְזָרַ֥ח",
                            "refs": {"nrefs": "5-3 5-4"}
                        },
                        {
                            "n": "5-2",
                            "text": "הַשֶּׁ֖מֶשׁ",
                            "refs": {"nrefs": "5-1 5-2"}
                        },
                        {
                            "n": "5-3",
                            "text": "וּבָ֣א",
                            "refs": {"nrefs": "5-6 5-9 5-10"}
                        },
                        {
                            "n": "5-4",
                            "text": "הַשָּׁ֑מֶשׁ",
                            "refs": {"nrefs": "5-7 5-8"}
                        },
                        {
                            "n": "5-5",
                            "text": "וְאֶ֨ל־מְקֹומֹ֔ו",
                            "refs": {"nrefs": "5-13 5-15 5-16 5-17"}
                        },
                        {
                            "n": "5-6",
                            "text": "שֹׁואֵ֛ף",
                            "refs": {"nrefs": "5-14"}
                        },
                        {
                            "n": "5-7",
                            "text": "זֹורֵ֥חַֽ",
                            "refs": {"nrefs": "5-20"}
                        },
                        {
                            "n": "5-8",
                            "text": "ה֖וּא",
                            "refs": {"nrefs": "5-19"}
                        },
                        {
                            "n": "5-9",
                            "text": "שָֽׁם",
                            "refs": {"nrefs": "5-18"}
                        },
                        {
                            "n": "5-10",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "5-1",
                            "text": "The",
                            "refs": {"nrefs": "5-2"}
                        },
                        {
                            "n": "5-2",
                            "text": "sun",
                            "refs": {"nrefs": "5-2"}
                        },
                        {
                            "n": "5-3",
                            "text": "also",
                            "refs": {"nrefs": "5-1"}
                        },
                        {
                            "n": "5-4",
                            "text": "rises",
                            "refs": {"nrefs": "5-1"}
                        },
                        {
                            "n": "5-5",
                            "text": ","
                        },
                        {
                            "n": "5-6",
                            "text": "and",
                            "refs": {"nrefs": "5-3"}
                        },
                        {
                            "n": "5-7",
                            "text": "the",
                            "refs": {"nrefs": "5-4"}
                        },
                        {
                            "n": "5-8",
                            "text": "sun",
                            "refs": {"nrefs": "5-4"}
                        },
                        {
                            "n": "5-9",
                            "text": "goes",
                            "refs": {"nrefs": "5-3"}
                        },
                        {
                            "n": "5-10",
                            "text": "down",
                            "refs": {"nrefs": "5-3"}
                        },
                        {
                            "n": "5-11",
                            "text": ","
                        },
                        {
                            "n": "5-12",
                            "text": ""
                        },
                        {
                            "n": "5-13",
                            "text": "And",
                            "refs": {"nrefs": "5-5"}
                        },
                        {
                            "n": "5-14",
                            "text": "hastens",
                            "refs": {"nrefs": "5-6"}
                        },
                        {
                            "n": "5-15",
                            "text": "to",
                            "refs": {"nrefs": "5-5"}
                        },
                        {
                            "n": "5-16",
                            "text": "the",
                            "refs": {"nrefs": "5-5"}
                        },
                        {
                            "n": "5-17",
                            "text": "place",
                            "refs": {"nrefs": "5-5"}
                        },
                        {
                            "n": "5-18",
                            "text": "where",
                            "refs": {"nrefs": "5-9"}
                        },
                        {
                            "n": "5-19",
                            "text": "it",
                            "refs": {"nrefs": "5-8"}
                        },
                        {
                            "n": "5-20",
                            "text": "arose",
                            "refs": {"nrefs": "5-7"}
                        },
                        {
                            "n": "5-21",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "6-1",
                            "text": "הוֹלֵךְ",
                            "refs": {"nrefs": "6-4"}
                        },
                        {
                            "n": "6-2",
                            "text": ","
                        },
                        {
                            "n": "6-3",
                            "text": "אֶל",
                            "refs": {"nrefs": "6-5"}
                        },
                        {
                            "n": "6-4",
                            "text": "-"
                        },
                        {
                            "n": "6-5",
                            "text": "דָּרוֹם",
                            "refs": {"nrefs": "6-6 6-7"}
                        },
                        {
                            "n": "6-6",
                            "text": ","
                        },
                        {
                            "n": "6-7",
                            "text": "וְסוֹבֵב",
                            "refs": {"nrefs": "6-10 6-11 6-12"}
                        },
                        {
                            "n": "6-8",
                            "text": ","
                        },
                        {
                            "n": "6-9",
                            "text": "אֶל",
                            "refs": {"nrefs": "6-13"}
                        },
                        {
                            "n": "6-10",
                            "text": "-"
                        },
                        {
                            "n": "6-11",
                            "text": "צָפוֹן",
                            "refs": {"nrefs": "6-14 6-15"}
                        },
                        {
                            "n": "6-12",
                            "text": ";"
                        },
                        {
                            "n": "6-13",
                            "text": "סוֹבֵב",
                            "refs": {"nrefs": "6-20 6-21 6-22"}
                        },
                        {
                            "n": "6-14",
                            "text": "סֹבֵב",
                            "refs": {"nrefs": "6-20 6-21 6-22"}
                        },
                        {
                            "n": "6-15",
                            "text": "הוֹלֵךְ",
                            "refs": {"nrefs": "6-20 6-21 6-22"}
                        },
                        {
                            "n": "6-16",
                            "text": "הָרוּחַ",
                            "refs": {"nrefs": "6-2 6-3"}
                        },
                        {
                            "n": "6-17",
                            "text": ","
                        },
                        {
                            "n": "6-18",
                            "text": "וְעַל",
                            "refs": {"nrefs": "6-25 6-28"}
                        },
                        {
                            "n": "6-19",
                            "text": "-"
                        },
                        {
                            "n": "6-20",
                            "text": "סְבִיבֹתָיו",
                            "refs": {"nrefs": "6-29 6-30"}
                        },
                        {
                            "n": "6-21",
                            "text": "שָׁב",
                            "refs": {"nrefs": "6-26 6-27"}
                        },
                        {
                            "n": "6-22",
                            "text": "הָרוּחַ",
                            "refs": {"nrefs": "6-18 6-19"}
                        },
                        {
                            "n": "6-23",
                            "text": "."
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "6-1",
                            "text": ""
                        },
                        {
                            "n": "6-2",
                            "text": "The",
                            "refs": {"nrefs": "6-16"}
                        },
                        {
                            "n": "6-3",
                            "text": "wind",
                            "refs": {"nrefs": "6-16"}
                        },
                        {
                            "n": "6-4",
                            "text": "goes",
                            "refs": {"nrefs": "6-1"}
                        },
                        {
                            "n": "6-5",
                            "text": "toward",
                            "refs": {"nrefs": "6-3"}
                        },
                        {
                            "n": "6-6",
                            "text": "the",
                            "refs": {"nrefs": "6-5"}
                        },
                        {
                            "n": "6-7",
                            "text": "south",
                            "refs": {"nrefs": "6-5"}
                        },
                        {
                            "n": "6-8",
                            "text": ","
                        },
                        {
                            "n": "6-9",
                            "text": ""
                        },
                        {
                            "n": "6-10",
                            "text": "And",
                            "refs": {"nrefs": "6-7"}
                        },
                        {
                            "n": "6-11",
                            "text": "turns",
                            "refs": {"nrefs": "6-7"}
                        },
                        {
                            "n": "6-12",
                            "text": "around",
                            "refs": {"nrefs": "6-7"}
                        },
                        {
                            "n": "6-13",
                            "text": "to",
                            "refs": {"nrefs": "6-9"}
                        },
                        {
                            "n": "6-14",
                            "text": "the",
                            "refs": {"nrefs": "6-11"}
                        },
                        {
                            "n": "6-15",
                            "text": "north",
                            "refs": {"nrefs": "6-11"}
                        },
                        {
                            "n": "6-16",
                            "text": ";"
                        },
                        {
                            "n": "6-17",
                            "text": ""
                        },
                        {
                            "n": "6-18",
                            "text": "The",
                            "refs": {"nrefs": "6-22"}
                        },
                        {
                            "n": "6-19",
                            "text": "wind",
                            "refs": {"nrefs": "6-22"}
                        },
                        {
                            "n": "6-20",
                            "text": "whirls",
                            "refs": {"nrefs": "6-13 6-14 6-15"}
                        },
                        {
                            "n": "6-21",
                            "text": "about",
                            "refs": {"nrefs": "6-13 6-14 6-15"}
                        },
                        {
                            "n": "6-22",
                            "text": "continually",
                            "refs": {"nrefs": "6-13 6-14 6-15"}
                        },
                        {
                            "n": "6-23",
                            "text": ","
                        },
                        {
                            "n": "6-24",
                            "text": ""
                        },
                        {
                            "n": "6-25",
                            "text": "And",
                            "refs": {"nrefs": "6-18"}
                        },
                        {
                            "n": "6-26",
                            "text": "comes",
                            "refs": {"nrefs": "6-21"}
                        },
                        {
                            "n": "6-27",
                            "text": "again",
                            "refs": {"nrefs": "6-21"}
                        },
                        {
                            "n": "6-28",
                            "text": "on",
                            "refs": {"nrefs": "6-18"}
                        },
                        {
                            "n": "6-29",
                            "text": "its",
                            "refs": {"nrefs": "6-20"}
                        },
                        {
                            "n": "6-30",
                            "text": "circuit",
                            "refs": {"nrefs": "6-20"}
                        },
                        {
                            "n": "6-31",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "7-1",
                            "text": "כָּל־הַנְּחָלִים֙",
                            "refs": {"nrefs": "7-1 7-2 7-3"}
                        },
                        {
                            "n": "7-2",
                            "text": "הֹלְכִ֣ים",
                            "refs": {"nrefs": "7-4"}
                        },
                        {
                            "n": "7-3",
                            "text": "אֶל־הַיָּ֔ם",
                            "refs": {"nrefs": "7-5 7-6 7-7"}
                        },
                        {
                            "n": "7-4",
                            "text": "וְהַיָּ֖ם",
                            "refs": {"nrefs": "7-10 7-11 7-12"}
                        },
                        {
                            "n": "7-5",
                            "text": "אֵינֶ֣נּוּ",
                            "refs": {"nrefs": "7-13 7-14"}
                        },
                        {
                            "n": "7-6",
                            "text": "מָלֵ֑א",
                            "refs": {"nrefs": "7-15"}
                        },
                        {
                            "n": "7-7",
                            "text": "אֶל־מְקֹ֗ום",
                            "refs": {"nrefs": "7-18 7-19 7-20"}
                        },
                        {
                            "n": "7-8",
                            "text": "שֶׁ֤הַנְּחָלִים֙",
                            "refs": {"nrefs": "7-21 7-22 7-23 7-24"}
                        },
                        {
                            "n": "7-9",
                            "text": "הֹֽלְכִ֔ים",
                            "refs": {"nrefs": "7-25"}
                        },
                        {
                            "n": "7-10",
                            "text": "שָׁ֛ם",
                            "refs": {"nrefs": "7-28"}
                        },
                        {
                            "n": "7-11",
                            "text": "הֵ֥ם",
                            "refs": {"nrefs": "7-29"}
                        },
                        {
                            "n": "7-12",
                            "text": "שָׁבִ֖ים",
                            "refs": {"nrefs": "7-30 7-31"}
                        },
                        {
                            "n": "7-13",
                            "text": "לָלָֽכֶת",
                            "refs": {"nrefs": "7-30 7-31"}
                        },
                        {
                            "n": "7-14",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "7-1",
                            "text": "All",
                            "refs": {"nrefs": "7-1"}
                        },
                        {
                            "n": "7-2",
                            "text": "the",
                            "refs": {"nrefs": "7-1"}
                        },
                        {
                            "n": "7-3",
                            "text": "rivers",
                            "refs": {"nrefs": "7-1"}
                        },
                        {
                            "n": "7-4",
                            "text": "run",
                            "refs": {"nrefs": "7-2"}
                        },
                        {
                            "n": "7-5",
                            "text": "into",
                            "refs": {"nrefs": "7-3"}
                        },
                        {
                            "n": "7-6",
                            "text": "the",
                            "refs": {"nrefs": "7-3"}
                        },
                        {
                            "n": "7-7",
                            "text": "sea",
                            "refs": {"nrefs": "7-3"}
                        },
                        {
                            "n": "7-8",
                            "text": ","
                        },
                        {
                            "n": "7-9",
                            "text": ""
                        },
                        {
                            "n": "7-10",
                            "text": "Yet",
                            "refs": {"nrefs": "7-4"}
                        },
                        {
                            "n": "7-11",
                            "text": "the",
                            "refs": {"nrefs": "7-4"}
                        },
                        {
                            "n": "7-12",
                            "text": "sea",
                            "refs": {"nrefs": "7-4"}
                        },
                        {
                            "n": "7-13",
                            "text": "is",
                            "refs": {"nrefs": "7-5"}
                        },
                        {
                            "n": "7-14",
                            "text": "not",
                            "refs": {"nrefs": "7-5"}
                        },
                        {
                            "n": "7-15",
                            "text": "full",
                            "refs": {"nrefs": "7-6"}
                        },
                        {
                            "n": "7-16",
                            "text": ";"
                        },
                        {
                            "n": "7-17",
                            "text": ""
                        },
                        {
                            "n": "7-18",
                            "text": "To",
                            "refs": {"nrefs": "7-7"}
                        },
                        {
                            "n": "7-19",
                            "text": "the",
                            "refs": {"nrefs": "7-7"}
                        },
                        {
                            "n": "7-20",
                            "text": "place",
                            "refs": {"nrefs": "7-7"}
                        },
                        {
                            "n": "7-21",
                            "text": "from",
                            "refs": {"nrefs": "7-8"}
                        },
                        {
                            "n": "7-22",
                            "text": "which",
                            "refs": {"nrefs": "7-8"}
                        },
                        {
                            "n": "7-23",
                            "text": "the",
                            "refs": {"nrefs": "7-8"}
                        },
                        {
                            "n": "7-24",
                            "text": "rivers",
                            "refs": {"nrefs": "7-8"}
                        },
                        {
                            "n": "7-25",
                            "text": "come",
                            "refs": {"nrefs": "7-9"}
                        },
                        {
                            "n": "7-26",
                            "text": ","
                        },
                        {
                            "n": "7-27",
                            "text": ""
                        },
                        {
                            "n": "7-28",
                            "text": "There",
                            "refs": {"nrefs": "7-10"}
                        },
                        {
                            "n": "7-29",
                            "text": "they",
                            "refs": {"nrefs": "7-11"}
                        },
                        {
                            "n": "7-30",
                            "text": "return",
                            "refs": {"nrefs": "7-12 7-13"}
                        },
                        {
                            "n": "7-31",
                            "text": "again",
                            "refs": {"nrefs": "7-12 7-13"}
                        },
                        {
                            "n": "7-32",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "8-1",
                            "text": "כָּל־הַדְּבָרִ֣ים",
                            "refs": {"nrefs": "8-1 8-2"}
                        },
                        {
                            "n": "8-2",
                            "text": "יְגֵעִ֔ים",
                            "refs": {"nrefs": "8-4 8-5 8-6"}
                        },
                        {
                            "n": "8-3",
                            "text": "לֹא־יוּכַ֥ל",
                            "refs": {"nrefs": "8-10 8-12"}
                        },
                        {
                            "n": "8-4",
                            "text": "אִ֖ישׁ",
                            "refs": {"nrefs": "8-9"}
                        },
                        {
                            "n": "8-5",
                            "text": "לְדַבֵּ֑ר",
                            "refs": {"nrefs": "8-11"}
                        },
                        {
                            "n": "8-6",
                            "text": "לֹא־תִשְׂבַּ֥ע",
                            "refs": {"nrefs": "8-18 8-19 8-20"}
                        },
                        {
                            "n": "8-7",
                            "text": "עַ֙יִן֙",
                            "refs": {"nrefs": "8-16"}
                        },
                        {
                            "n": "8-8",
                            "text": "לִרְאֹ֔ות",
                            "refs": {"nrefs": "8-21"}
                        },
                        {
                            "n": "8-9",
                            "text": "וְלֹא־תִמָּלֵ֥א",
                            "refs": {"nrefs": "8-24 8-27 8-28"}
                        },
                        {
                            "n": "8-10",
                            "text": "אֹ֖זֶן",
                            "refs": {"nrefs": "8-26"}
                        },
                        {
                            "n": "8-11",
                            "text": "מִשְּׁמֹֽעַ",
                            "refs": {"nrefs": "8-29"}
                        },
                        {
                            "n": "8-12",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "8-1",
                            "text": "All",
                            "refs": {"nrefs": "8-1"}
                        },
                        {
                            "n": "8-2",
                            "text": "things",
                            "refs": {"nrefs": "8-1"}
                        },
                        {
                            "n": "8-3",
                            "text": "are"
                        },
                        {
                            "n": "8-4",
                            "text": "full",
                            "refs": {"nrefs": "8-2"}
                        },
                        {
                            "n": "8-5",
                            "text": "of",
                            "refs": {"nrefs": "8-2"}
                        },
                        {
                            "n": "8-6",
                            "text": "labor",
                            "refs": {"nrefs": "8-2"}
                        },
                        {
                            "n": "8-7",
                            "text": ";"
                        },
                        {
                            "n": "8-8",
                            "text": ""
                        },
                        {
                            "n": "8-9",
                            "text": "Man",
                            "refs": {"nrefs": "8-4"}
                        },
                        {
                            "n": "8-10",
                            "text": "cannot",
                            "refs": {"nrefs": "8-3"}
                        },
                        {
                            "n": "8-11",
                            "text": "express",
                            "refs": {"nrefs": "8-5"}
                        },
                        {
                            "n": "8-12",
                            "text": "it",
                            "refs": {"nrefs": "8-3"}
                        },
                        {
                            "n": "8-13",
                            "text": "."
                        },
                        {
                            "n": "8-14",
                            "text": ""
                        },
                        {
                            "n": "8-15",
                            "text": "The"
                        },
                        {
                            "n": "8-16",
                            "text": "eye",
                            "refs": {"nrefs": "8-7"}
                        },
                        {
                            "n": "8-17",
                            "text": "is"
                        },
                        {
                            "n": "8-18",
                            "text": "not",
                            "refs": {"nrefs": "8-6"}
                        },
                        {
                            "n": "8-19",
                            "text": "satisfied",
                            "refs": {"nrefs": "8-6"}
                        },
                        {
                            "n": "8-20",
                            "text": "with",
                            "refs": {"nrefs": "8-6"}
                        },
                        {
                            "n": "8-21",
                            "text": "seeing",
                            "refs": {"nrefs": "8-8"}
                        },
                        {
                            "n": "8-22",
                            "text": ","
                        },
                        {
                            "n": "8-23",
                            "text": ""
                        },
                        {
                            "n": "8-24",
                            "text": "Nor",
                            "refs": {"nrefs": "8-9"}
                        },
                        {
                            "n": "8-25",
                            "text": "the"
                        },
                        {
                            "n": "8-26",
                            "text": "ear",
                            "refs": {"nrefs": "8-10"}
                        },
                        {
                            "n": "8-27",
                            "text": "filled",
                            "refs": {"nrefs": "8-9"}
                        },
                        {
                            "n": "8-28",
                            "text": "with",
                            "refs": {"nrefs": "8-9"}
                        },
                        {
                            "n": "8-29",
                            "text": "hearing",
                            "refs": {"nrefs": "8-11"}
                        },
                        {
                            "n": "8-30",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "9-1",
                            "text": "מַה־שֶּֽׁהָיָה֙",
                            "refs": {"nrefs": "9-2 9-3 9-4"}
                        },
                        {
                            "n": "9-2",
                            "text": "ה֣וּא",
                            "refs": {"nrefs": "9-1"}
                        },
                        {
                            "n": "9-3",
                            "text": "שֶׁיִּהְיֶ֔ה",
                            "refs": {"nrefs": "9-6 9-7 9-8"}
                        },
                        {
                            "n": "9-4",
                            "text": "וּמַה־שֶּׁנַּֽעֲשָׂ֔ה",
                            "refs": {"nrefs": "9-12 9-13 9-14"}
                        },
                        {
                            "n": "9-5",
                            "text": "ה֖וּא",
                            "refs": {"nrefs": "9-11"}
                        },
                        {
                            "n": "9-6",
                            "text": "שֶׁיֵּעָשֶׂ֑ה",
                            "refs": {"nrefs": "9-16 9-17 9-18 9-19"}
                        },
                        {
                            "n": "9-7",
                            "text": "וְאֵ֥ין",
                            "refs": {"nrefs": "9-22 9-23 9-24 9-25 9-26"}
                        },
                        {
                            "n": "9-8",
                            "text": "כָּל־חָדָ֖שׁ",
                            "refs": {"nrefs": "9-22 9-23 9-24 9-25 9-26"}
                        },
                        {
                            "n": "9-9",
                            "text": "תַּ֥חַת",
                            "refs": {"nrefs": "9-27"}
                        },
                        {
                            "n": "9-10",
                            "text": "הַשָּֽׁמֶשׁ",
                            "refs": {"nrefs": "9-28 9-29"}
                        },
                        {
                            "n": "9-11",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "9-1",
                            "text": "That",
                            "refs": {"nrefs": "9-2"}
                        },
                        {
                            "n": "9-2",
                            "text": "which",
                            "refs": {"nrefs": "9-1"}
                        },
                        {
                            "n": "9-3",
                            "text": "has",
                            "refs": {"nrefs": "9-1"}
                        },
                        {
                            "n": "9-4",
                            "text": "been",
                            "refs": {"nrefs": "9-1"}
                        },
                        {
                            "n": "9-5",
                            "text": "is"
                        },
                        {
                            "n": "9-6",
                            "text": "what",
                            "refs": {"nrefs": "9-3"}
                        },
                        {
                            "n": "9-7",
                            "text": "will",
                            "refs": {"nrefs": "9-3"}
                        },
                        {
                            "n": "9-8",
                            "text": "be",
                            "refs": {"nrefs": "9-3"}
                        },
                        {
                            "n": "9-9",
                            "text": ","
                        },
                        {
                            "n": "9-10",
                            "text": ""
                        },
                        {
                            "n": "9-11",
                            "text": "That",
                            "refs": {"nrefs": "9-5"}
                        },
                        {
                            "n": "9-12",
                            "text": "which",
                            "refs": {"nrefs": "9-4"}
                        },
                        {
                            "n": "9-13",
                            "text": "is",
                            "refs": {"nrefs": "9-4"}
                        },
                        {
                            "n": "9-14",
                            "text": "done",
                            "refs": {"nrefs": "9-4"}
                        },
                        {
                            "n": "9-15",
                            "text": "is"
                        },
                        {
                            "n": "9-16",
                            "text": "what",
                            "refs": {"nrefs": "9-6"}
                        },
                        {
                            "n": "9-17",
                            "text": "will",
                            "refs": {"nrefs": "9-6"}
                        },
                        {
                            "n": "9-18",
                            "text": "be",
                            "refs": {"nrefs": "9-6"}
                        },
                        {
                            "n": "9-19",
                            "text": "done",
                            "refs": {"nrefs": "9-6"}
                        },
                        {
                            "n": "9-20",
                            "text": ","
                        },
                        {
                            "n": "9-21",
                            "text": ""
                        },
                        {
                            "n": "9-22",
                            "text": "And",
                            "refs": {"nrefs": "9-7 9-8"}
                        },
                        {
                            "n": "9-23",
                            "text": "there",
                            "refs": {"nrefs": "9-7 9-8"}
                        },
                        {
                            "n": "9-24",
                            "text": "is",
                            "refs": {"nrefs": "9-7 9-8"}
                        },
                        {
                            "n": "9-25",
                            "text": "nothing",
                            "refs": {"nrefs": "9-7 9-8"}
                        },
                        {
                            "n": "9-26",
                            "text": "new",
                            "refs": {"nrefs": "9-7 9-8"}
                        },
                        {
                            "n": "9-27",
                            "text": "under",
                            "refs": {"nrefs": "9-9"}
                        },
                        {
                            "n": "9-28",
                            "text": "the",
                            "refs": {"nrefs": "9-10"}
                        },
                        {
                            "n": "9-29",
                            "text": "sun",
                            "refs": {"nrefs": "9-10"}
                        },
                        {
                            "n": "9-30",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "10-1",
                            "text": ""
                        },
                        {
                            "n": "10-2",
                            "text": "יֵ֥שׁ",
                            "refs": {"nrefs": "10-1 10-2"}
                        },
                        {
                            "n": "10-3",
                            "text": "דָּבָ֛ר",
                            "refs": {"nrefs": "10-3"}
                        },
                        {
                            "n": "10-4",
                            "text": "שֶׁיֹּאמַ֥ר",
                            "refs": {"nrefs": "10-4 10-5 10-6 10-7 10-8 10-9"}
                        },
                        {
                            "n": "10-5",
                            "text": "רְאֵה־זֶ֖ה",
                            "refs": {"nrefs": "10-12 10-14"}
                        },
                        {
                            "n": "10-6",
                            "text": "חָדָ֣שׁ",
                            "refs": {"nrefs": "10-16"}
                        },
                        {
                            "n": "10-7",
                            "text": "ה֑וּא",
                            "refs": {"nrefs": "10-17"}
                        },
                        {
                            "n": "10-8",
                            "text": "כְּבָר֙",
                            "refs": {"nrefs": "10-19"}
                        },
                        {
                            "n": "10-9",
                            "text": "הָיָ֣ה",
                            "refs": {"nrefs": "10-18"}
                        },
                        {
                            "n": "10-10",
                            "text": "לְעֹֽלָמִ֔ים",
                            "refs": {"nrefs": "10-21 10-22 10-23"}
                        },
                        {
                            "n": "10-11",
                            "text": "אֲשֶׁ֥ר",
                            "refs": {"nrefs": "10-24 10-25"}
                        },
                        {
                            "n": "10-12",
                            "text": "הָיָ֖ה",
                            "refs": {"nrefs": "10-20"}
                        },
                        {
                            "n": "10-13",
                            "text": "מִלְּפָנֵֽנוּ",
                            "refs": {"nrefs": "10-24 10-25"}
                        },
                        {
                            "n": "10-14",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "10-1",
                            "text": "Is",
                            "refs": {"nrefs": "10-2"}
                        },
                        {
                            "n": "10-2",
                            "text": "there",
                            "refs": {"nrefs": "10-2"}
                        },
                        {
                            "n": "10-3",
                            "text": "anything",
                            "refs": {"nrefs": "10-3"}
                        },
                        {
                            "n": "10-4",
                            "text": "of",
                            "refs": {"nrefs": "10-4"}
                        },
                        {
                            "n": "10-5",
                            "text": "which",
                            "refs": {"nrefs": "10-4"}
                        },
                        {
                            "n": "10-6",
                            "text": "it",
                            "refs": {"nrefs": "10-4"}
                        },
                        {
                            "n": "10-7",
                            "text": "may",
                            "refs": {"nrefs": "10-4"}
                        },
                        {
                            "n": "10-8",
                            "text": "be",
                            "refs": {"nrefs": "10-4"}
                        },
                        {
                            "n": "10-9",
                            "text": "said",
                            "refs": {"nrefs": "10-4"}
                        },
                        {
                            "n": "10-10",
                            "text": ","
                        },
                        {
                            "n": "10-11",
                            "text": ""
                        },
                        {
                            "n": "10-12",
                            "text": "\u201cSee",
                            "refs": {"nrefs": "10-5"}
                        },
                        {
                            "n": "10-13",
                            "text": ","
                        },
                        {
                            "n": "10-14",
                            "text": "this",
                            "refs": {"nrefs": "10-5"}
                        },
                        {
                            "n": "10-15",
                            "text": "is"
                        },
                        {
                            "n": "10-16",
                            "text": "new\u201d?",
                            "refs": {"nrefs": "10-6"}
                        },
                        {
                            "n": "10-17",
                            "text": "It",
                            "refs": {"nrefs": "10-7"}
                        },
                        {
                            "n": "10-18",
                            "text": "has",
                            "refs": {"nrefs": "10-9"}
                        },
                        {
                            "n": "10-19",
                            "text": "already",
                            "refs": {"nrefs": "10-8"}
                        },
                        {
                            "n": "10-20",
                            "text": "been",
                            "refs": {"nrefs": "10-12"}
                        },
                        {
                            "n": "10-21",
                            "text": "in",
                            "refs": {"nrefs": "10-10"}
                        },
                        {
                            "n": "10-22",
                            "text": "ancient",
                            "refs": {"nrefs": "10-10"}
                        },
                        {
                            "n": "10-23",
                            "text": "times",
                            "refs": {"nrefs": "10-10"}
                        },
                        {
                            "n": "10-24",
                            "text": "before",
                            "refs": {"nrefs": "10-11 10-13"}
                        },
                        {
                            "n": "10-25",
                            "text": "us",
                            "refs": {"nrefs": "10-11 10-13"}
                        },
                        {
                            "n": "10-26",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "11-1",
                            "text": ""
                        },
                        {
                            "n": "11-2",
                            "text": "אֵ֥ין",
                            "refs": {"nrefs": "11-1 11-2 11-3"}
                        },
                        {
                            "n": "11-3",
                            "text": "זִכְרֹ֖ון",
                            "refs": {"nrefs": "11-4"}
                        },
                        {
                            "n": "11-4",
                            "text": "לָרִאשֹׁנִ֑ים",
                            "refs": {"nrefs": "11-5 11-6 11-7"}
                        },
                        {
                            "n": "11-5",
                            "text": "וְגַ֨ם",
                            "refs": {"nrefs": "11-10 11-11 11-12 11-13 11-14"}
                        },
                        {
                            "n": "11-6",
                            "text": "לָאַחֲרֹנִ֜ים",
                            "refs": {"nrefs": "11-16 11-17 11-18 11-19 11-20 11-21"}
                        },
                        {
                            "n": "11-7",
                            "text": "שֶׁיִּהְי֗וּ",
                            "refs": {"nrefs": "11-16 11-17 11-18 11-19 11-20 11-21"}
                        },
                        {
                            "n": "11-8",
                            "text": "לֹֽא־יִהְיֶ֤ה",
                            "refs": {"nrefs": "11-10 11-11 11-12 11-13 11-14"}
                        },
                        {
                            "n": "11-9",
                            "text": "לָהֶם֙",
                            "refs": {"nrefs": "11-23 11-24 11-25 11-26"}
                        },
                        {
                            "n": "11-10",
                            "text": "זִכָּרֹ֔ון",
                            "refs": {"nrefs": "11-15"}
                        },
                        {
                            "n": "11-11",
                            "text": "עִ֥ם",
                            "refs": {"nrefs": "11-22"}
                        },
                        {
                            "n": "11-12",
                            "text": "שֶׁיִּהְי֖וּ",
                            "refs": {"nrefs": "11-23 11-24 11-25 11-26"}
                        },
                        {
                            "n": "11-13",
                            "text": "לָאַחֲרֹנָֽה",
                            "refs": {"nrefs": "11-27"}
                        },
                        {
                            "n": "11-14",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "11-1",
                            "text": "There",
                            "refs": {"nrefs": "11-2"}
                        },
                        {
                            "n": "11-2",
                            "text": "is",
                            "refs": {"nrefs": "11-2"}
                        },
                        {
                            "n": "11-3",
                            "text": "no",
                            "refs": {"nrefs": "11-2"}
                        },
                        {
                            "n": "11-4",
                            "text": "remembrance",
                            "refs": {"nrefs": "11-3"}
                        },
                        {
                            "n": "11-5",
                            "text": "of",
                            "refs": {"nrefs": "11-4"}
                        },
                        {
                            "n": "11-6",
                            "text": "former",
                            "refs": {"nrefs": "11-4"}
                        },
                        {
                            "n": "11-7",
                            "text": "things",
                            "refs": {"nrefs": "11-4"}
                        },
                        {
                            "n": "11-8",
                            "text": ","
                        },
                        {
                            "n": "11-9",
                            "text": ""
                        },
                        {
                            "n": "11-10",
                            "text": "Nor",
                            "refs": {"nrefs": "11-5 11-8"}
                        },
                        {
                            "n": "11-11",
                            "text": "will",
                            "refs": {"nrefs": "11-5 11-8"}
                        },
                        {
                            "n": "11-12",
                            "text": "there",
                            "refs": {"nrefs": "11-5 11-8"}
                        },
                        {
                            "n": "11-13",
                            "text": "be",
                            "refs": {"nrefs": "11-5 11-8"}
                        },
                        {
                            "n": "11-14",
                            "text": "any",
                            "refs": {"nrefs": "11-5 11-8"}
                        },
                        {
                            "n": "11-15",
                            "text": "remembrance",
                            "refs": {"nrefs": "11-10"}
                        },
                        {
                            "n": "11-16",
                            "text": "of",
                            "refs": {"nrefs": "11-6 11-7"}
                        },
                        {
                            "n": "11-17",
                            "text": "things",
                            "refs": {"nrefs": "11-6 11-7"}
                        },
                        {
                            "n": "11-18",
                            "text": "that",
                            "refs": {"nrefs": "11-6 11-7"}
                        },
                        {
                            "n": "11-19",
                            "text": "are",
                            "refs": {"nrefs": "11-6 11-7"}
                        },
                        {
                            "n": "11-20",
                            "text": "to",
                            "refs": {"nrefs": "11-6 11-7"}
                        },
                        {
                            "n": "11-21",
                            "text": "come",
                            "refs": {"nrefs": "11-6 11-7"}
                        },
                        {
                            "n": "11-22",
                            "text": "By",
                            "refs": {"nrefs": "11-11"}
                        },
                        {
                            "n": "11-23",
                            "text": "those",
                            "refs": {"nrefs": "11-9 11-12"}
                        },
                        {
                            "n": "11-24",
                            "text": "who",
                            "refs": {"nrefs": "11-9 11-12"}
                        },
                        {
                            "n": "11-25",
                            "text": "will",
                            "refs": {"nrefs": "11-9 11-12"}
                        },
                        {
                            "n": "11-26",
                            "text": "come",
                            "refs": {"nrefs": "11-9 11-12"}
                        },
                        {
                            "n": "11-27",
                            "text": "after",
                            "refs": {"nrefs": "11-13"}
                        },
                        {
                            "n": "11-28",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "12-1",
                            "text": "אֲנִ֣י",
                            "refs": {"nrefs": "12-1"}
                        },
                        {
                            "n": "12-2",
                            "text": "קֹהֶ֗לֶת",
                            "refs": {"nrefs": "12-3 12-4"}
                        },
                        {
                            "n": "12-3",
                            "text": "הָיִ֥יתִי",
                            "refs": {"nrefs": "12-6"}
                        },
                        {
                            "n": "12-4",
                            "text": "מֶ֛לֶךְ",
                            "refs": {"nrefs": "12-7"}
                        },
                        {
                            "n": "12-5",
                            "text": "עַל־יִשְׂרָאֵ֖ל",
                            "refs": {"nrefs": "12-8 12-9"}
                        },
                        {
                            "n": "12-6",
                            "text": "בִּירוּשָׁלִָֽם",
                            "refs": {"nrefs": "12-10 12-11"}
                        },
                        {
                            "n": "12-7",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "12-1",
                            "text": "I",
                            "refs": {"nrefs": "12-1"}
                        },
                        {
                            "n": "12-2",
                            "text": ","
                        },
                        {
                            "n": "12-3",
                            "text": "the",
                            "refs": {"nrefs": "12-2"}
                        },
                        {
                            "n": "12-4",
                            "text": "Preacher",
                            "refs": {"nrefs": "12-2"}
                        },
                        {
                            "n": "12-5",
                            "text": ","
                        },
                        {
                            "n": "12-6",
                            "text": "was",
                            "refs": {"nrefs": "12-3"}
                        },
                        {
                            "n": "12-7",
                            "text": "king",
                            "refs": {"nrefs": "12-4"}
                        },
                        {
                            "n": "12-8",
                            "text": "over",
                            "refs": {"nrefs": "12-5"}
                        },
                        {
                            "n": "12-9",
                            "text": "Israel",
                            "refs": {"nrefs": "12-5"}
                        },
                        {
                            "n": "12-10",
                            "text": "in",
                            "refs": {"nrefs": "12-6"}
                        },
                        {
                            "n": "12-11",
                            "text": "Jerusalem",
                            "refs": {"nrefs": "12-6"}
                        },
                        {
                            "n": "12-12",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "13-1",
                            "text": ""
                        },
                        {
                            "n": "13-2",
                            "text": "וְנָתַ֣תִּי",
                            "refs": {"nrefs": "13-1 13-2 13-3"}
                        },
                        {
                            "n": "13-3",
                            "text": "אֶת־לִבִּ֗י",
                            "refs": {"nrefs": "13-4 13-5"}
                        },
                        {
                            "n": "13-4",
                            "text": "לִדְרֹ֤ושׁ",
                            "refs": {"nrefs": "13-6 13-7"}
                        },
                        {
                            "n": "13-5",
                            "text": "וְלָתוּר֙",
                            "refs": {"nrefs": "13-8 13-9 13-10"}
                        },
                        {
                            "n": "13-6",
                            "text": "בַּֽחָכְמָ֔ה",
                            "refs": {"nrefs": "13-11 13-12"}
                        },
                        {
                            "n": "13-7",
                            "text": "עַ֛ל",
                            "refs": {"nrefs": "13-13"}
                        },
                        {
                            "n": "13-8",
                            "text": "כָּל־אֲשֶׁ֥ר",
                            "refs": {"nrefs": "13-14 13-15"}
                        },
                        {
                            "n": "13-9",
                            "text": "נַעֲשָׂ֖ה",
                            "refs": {"nrefs": "13-16 13-17"}
                        },
                        {
                            "n": "13-10",
                            "text": "תַּ֣חַת",
                            "refs": {"nrefs": "13-18"}
                        },
                        {
                            "n": "13-11",
                            "text": "הַשָּׁמָ֑יִם",
                            "refs": {"nrefs": "13-19"}
                        },
                        {
                            "n": "13-12",
                            "text": "ה֣וּא",
                            "refs": {"nrefs": "13-21"}
                        },
                        {
                            "n": "13-13",
                            "text": "׀"
                        },
                        {
                            "n": "13-14",
                            "text": "עִנְיַ֣ן",
                            "refs": {"nrefs": "13-23"}
                        },
                        {
                            "n": "13-15",
                            "text": "רָ֗ע",
                            "refs": {"nrefs": "13-22"}
                        },
                        {
                            "n": "13-16",
                            "text": "נָתַ֧ן",
                            "refs": {"nrefs": "13-25 13-26"}
                        },
                        {
                            "n": "13-17",
                            "text": "אֱלֹהִ֛ים",
                            "refs": {"nrefs": "13-24"}
                        },
                        {
                            "n": "13-18",
                            "text": "לִבְנֵ֥י",
                            "refs": {"nrefs": "13-27 13-28 13-29"}
                        },
                        {
                            "n": "13-19",
                            "text": "הָאָדָ֖ם",
                            "refs": {"nrefs": "13-30 13-31"}
                        },
                        {
                            "n": "13-20",
                            "text": "לַעֲנֹ֥ות",
                            "refs": {"nrefs": "13-36 13-37 13-38"}
                        },
                        {
                            "n": "13-21",
                            "text": "בֹּֽו",
                            "refs": {"nrefs": "13-33 13-34 13-35"}
                        },
                        {
                            "n": "13-22",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "13-1",
                            "text": "And",
                            "refs": {"nrefs": "13-2"}
                        },
                        {
                            "n": "13-2",
                            "text": "I",
                            "refs": {"nrefs": "13-2"}
                        },
                        {
                            "n": "13-3",
                            "text": "set",
                            "refs": {"nrefs": "13-2"}
                        },
                        {
                            "n": "13-4",
                            "text": "my",
                            "refs": {"nrefs": "13-3"}
                        },
                        {
                            "n": "13-5",
                            "text": "heart",
                            "refs": {"nrefs": "13-3"}
                        },
                        {
                            "n": "13-6",
                            "text": "to",
                            "refs": {"nrefs": "13-4"}
                        },
                        {
                            "n": "13-7",
                            "text": "seek",
                            "refs": {"nrefs": "13-4"}
                        },
                        {
                            "n": "13-8",
                            "text": "and",
                            "refs": {"nrefs": "13-5"}
                        },
                        {
                            "n": "13-9",
                            "text": "search",
                            "refs": {"nrefs": "13-5"}
                        },
                        {
                            "n": "13-10",
                            "text": "out",
                            "refs": {"nrefs": "13-5"}
                        },
                        {
                            "n": "13-11",
                            "text": "by",
                            "refs": {"nrefs": "13-6"}
                        },
                        {
                            "n": "13-12",
                            "text": "wisdom",
                            "refs": {"nrefs": "13-6"}
                        },
                        {
                            "n": "13-13",
                            "text": "concerning",
                            "refs": {"nrefs": "13-7"}
                        },
                        {
                            "n": "13-14",
                            "text": "all",
                            "refs": {"nrefs": "13-8"}
                        },
                        {
                            "n": "13-15",
                            "text": "that",
                            "refs": {"nrefs": "13-8"}
                        },
                        {
                            "n": "13-16",
                            "text": "is",
                            "refs": {"nrefs": "13-9"}
                        },
                        {
                            "n": "13-17",
                            "text": "done",
                            "refs": {"nrefs": "13-9"}
                        },
                        {
                            "n": "13-18",
                            "text": "under",
                            "refs": {"nrefs": "13-10"}
                        },
                        {
                            "n": "13-19",
                            "text": "heaven",
                            "refs": {"nrefs": "13-11"}
                        },
                        {
                            "n": "13-20",
                            "text": ";"
                        },
                        {
                            "n": "13-21",
                            "text": "this",
                            "refs": {"nrefs": "13-12"}
                        },
                        {
                            "n": "13-22",
                            "text": "burdensome",
                            "refs": {"nrefs": "13-15"}
                        },
                        {
                            "n": "13-23",
                            "text": "task",
                            "refs": {"nrefs": "13-14"}
                        },
                        {
                            "n": "13-24",
                            "text": "God",
                            "refs": {"nrefs": "13-17"}
                        },
                        {
                            "n": "13-25",
                            "text": "has",
                            "refs": {"nrefs": "13-16"}
                        },
                        {
                            "n": "13-26",
                            "text": "given",
                            "refs": {"nrefs": "13-16"}
                        },
                        {
                            "n": "13-27",
                            "text": "to",
                            "refs": {"nrefs": "13-18"}
                        },
                        {
                            "n": "13-28",
                            "text": "the",
                            "refs": {"nrefs": "13-18"}
                        },
                        {
                            "n": "13-29",
                            "text": "sons",
                            "refs": {"nrefs": "13-18"}
                        },
                        {
                            "n": "13-30",
                            "text": "of",
                            "refs": {"nrefs": "13-19"}
                        },
                        {
                            "n": "13-31",
                            "text": "man",
                            "refs": {"nrefs": "13-19"}
                        },
                        {
                            "n": "13-32",
                            "text": ","
                        },
                        {
                            "n": "13-33",
                            "text": "by",
                            "refs": {"nrefs": "13-21"}
                        },
                        {
                            "n": "13-34",
                            "text": "which",
                            "refs": {"nrefs": "13-21"}
                        },
                        {
                            "n": "13-35",
                            "text": "they",
                            "refs": {"nrefs": "13-21"}
                        },
                        {
                            "n": "13-36",
                            "text": "may",
                            "refs": {"nrefs": "13-20"}
                        },
                        {
                            "n": "13-37",
                            "text": "be",
                            "refs": {"nrefs": "13-20"}
                        },
                        {
                            "n": "13-38",
                            "text": "exercised",
                            "refs": {"nrefs": "13-20"}
                        },
                        {
                            "n": "13-39",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "14-1",
                            "text": "רָאִ֙יתִי֙",
                            "refs": {"nrefs": "14-1 14-2 14-3"}
                        },
                        {
                            "n": "14-2",
                            "text": "אֶת־כָּל־הַֽמַּעֲשִׂ֔ים",
                            "refs": {"nrefs": "14-4 14-5 14-6"}
                        },
                        {
                            "n": "14-3",
                            "text": "שֶֽׁנַּעֲשׂ֖וּ",
                            "refs": {"nrefs": "14-7 14-8 14-9"}
                        },
                        {
                            "n": "14-4",
                            "text": "תַּ֣חַת",
                            "refs": {"nrefs": "14-10"}
                        },
                        {
                            "n": "14-5",
                            "text": "הַשָּׁ֑מֶשׁ",
                            "refs": {"nrefs": "14-11 14-12"}
                        },
                        {
                            "n": "14-6",
                            "text": "וְהִנֵּ֥ה",
                            "refs": {"nrefs": "14-14 14-15"}
                        },
                        {
                            "n": "14-7",
                            "text": "הַכֹּ֛ל",
                            "refs": {"nrefs": "14-17"}
                        },
                        {
                            "n": "14-8",
                            "text": "הֶ֖בֶל",
                            "refs": {"nrefs": "14-19"}
                        },
                        {
                            "n": "14-9",
                            "text": "וּרְע֥וּת",
                            "refs": {"nrefs": "14-20 14-21 14-22"}
                        },
                        {
                            "n": "14-10",
                            "text": "רֽוּחַ",
                            "refs": {"nrefs": "14-24"}
                        },
                        {
                            "n": "14-11",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "14-1",
                            "text": "I",
                            "refs": {"nrefs": "14-1"}
                        },
                        {
                            "n": "14-2",
                            "text": "have",
                            "refs": {"nrefs": "14-1"}
                        },
                        {
                            "n": "14-3",
                            "text": "seen",
                            "refs": {"nrefs": "14-1"}
                        },
                        {
                            "n": "14-4",
                            "text": "all",
                            "refs": {"nrefs": "14-2"}
                        },
                        {
                            "n": "14-5",
                            "text": "the",
                            "refs": {"nrefs": "14-2"}
                        },
                        {
                            "n": "14-6",
                            "text": "works",
                            "refs": {"nrefs": "14-2"}
                        },
                        {
                            "n": "14-7",
                            "text": "that",
                            "refs": {"nrefs": "14-3"}
                        },
                        {
                            "n": "14-8",
                            "text": "are",
                            "refs": {"nrefs": "14-3"}
                        },
                        {
                            "n": "14-9",
                            "text": "done",
                            "refs": {"nrefs": "14-3"}
                        },
                        {
                            "n": "14-10",
                            "text": "under",
                            "refs": {"nrefs": "14-4"}
                        },
                        {
                            "n": "14-11",
                            "text": "the",
                            "refs": {"nrefs": "14-5"}
                        },
                        {
                            "n": "14-12",
                            "text": "sun",
                            "refs": {"nrefs": "14-5"}
                        },
                        {
                            "n": "14-13",
                            "text": ";"
                        },
                        {
                            "n": "14-14",
                            "text": "and",
                            "refs": {"nrefs": "14-6"}
                        },
                        {
                            "n": "14-15",
                            "text": "indeed",
                            "refs": {"nrefs": "14-6"}
                        },
                        {
                            "n": "14-16",
                            "text": ","
                        },
                        {
                            "n": "14-17",
                            "text": "all",
                            "refs": {"nrefs": "14-7"}
                        },
                        {
                            "n": "14-18",
                            "text": "is"
                        },
                        {
                            "n": "14-19",
                            "text": "vanity",
                            "refs": {"nrefs": "14-8"}
                        },
                        {
                            "n": "14-20",
                            "text": "and",
                            "refs": {"nrefs": "14-9"}
                        },
                        {
                            "n": "14-21",
                            "text": "grasping",
                            "refs": {"nrefs": "14-9"}
                        },
                        {
                            "n": "14-22",
                            "text": "for",
                            "refs": {"nrefs": "14-9"}
                        },
                        {
                            "n": "14-23",
                            "text": "the"
                        },
                        {
                            "n": "14-24",
                            "text": "wind",
                            "refs": {"nrefs": "14-10"}
                        },
                        {
                            "n": "14-25",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "15-1",
                            "text": "מְעֻוָּ֖ת",
                            "refs": {"nrefs": "15-1 15-2 15-3"}
                        },
                        {
                            "n": "15-2",
                            "text": "לֹא־יוּכַ֣ל",
                            "refs": {"nrefs": "15-4 15-5"}
                        },
                        {
                            "n": "15-3",
                            "text": "לִתְקֹ֑ן",
                            "refs": {"nrefs": "15-6 15-7"}
                        },
                        {
                            "n": "15-4",
                            "text": "וְחֶסְרֹ֖ון",
                            "refs": {"nrefs": "15-9 15-10 15-11 15-12"}
                        },
                        {
                            "n": "15-5",
                            "text": "לֹא־יוּכַ֥ל",
                            "refs": {"nrefs": "15-13 15-14"}
                        },
                        {
                            "n": "15-6",
                            "text": "לְהִמָּנֹֽות",
                            "refs": {"nrefs": "15-15"}
                        },
                        {
                            "n": "15-7",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "15-1",
                            "text": "What",
                            "refs": {"nrefs": "15-1"}
                        },
                        {
                            "n": "15-2",
                            "text": "is",
                            "refs": {"nrefs": "15-1"}
                        },
                        {
                            "n": "15-3",
                            "text": "crooked",
                            "refs": {"nrefs": "15-1"}
                        },
                        {
                            "n": "15-4",
                            "text": "cannot",
                            "refs": {"nrefs": "15-2"}
                        },
                        {
                            "n": "15-5",
                            "text": "be",
                            "refs": {"nrefs": "15-2"}
                        },
                        {
                            "n": "15-6",
                            "text": "made",
                            "refs": {"nrefs": "15-3"}
                        },
                        {
                            "n": "15-7",
                            "text": "straight",
                            "refs": {"nrefs": "15-3"}
                        },
                        {
                            "n": "15-8",
                            "text": ","
                        },
                        {
                            "n": "15-9",
                            "text": "And",
                            "refs": {"nrefs": "15-4"}
                        },
                        {
                            "n": "15-10",
                            "text": "what",
                            "refs": {"nrefs": "15-4"}
                        },
                        {
                            "n": "15-11",
                            "text": "is",
                            "refs": {"nrefs": "15-4"}
                        },
                        {
                            "n": "15-12",
                            "text": "lacking",
                            "refs": {"nrefs": "15-4"}
                        },
                        {
                            "n": "15-13",
                            "text": "cannot",
                            "refs": {"nrefs": "15-5"}
                        },
                        {
                            "n": "15-14",
                            "text": "be",
                            "refs": {"nrefs": "15-5"}
                        },
                        {
                            "n": "15-15",
                            "text": "numbered",
                            "refs": {"nrefs": "15-6"}
                        },
                        {
                            "n": "15-16",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "16-1",
                            "text": "דִּבַּ֨רְתִּי",
                            "refs": {"nrefs": "16-3"}
                        },
                        {
                            "n": "16-2",
                            "text": "אֲנִ֤י",
                            "refs": {"nrefs": "16-2"}
                        },
                        {
                            "n": "16-3",
                            "text": "עִם־לִבִּי֙",
                            "refs": {"nrefs": "16-4 16-5 16-6"}
                        },
                        {
                            "n": "16-4",
                            "text": "לֵאמֹ֔ר",
                            "refs": {"nrefs": "16-8"}
                        },
                        {
                            "n": "16-5",
                            "text": "אֲנִ֗י",
                            "refs": {"nrefs": "16-12"}
                        },
                        {
                            "n": "16-6",
                            "text": "הִנֵּ֨ה",
                            "refs": {"nrefs": "16-10"}
                        },
                        {
                            "n": "16-7",
                            "text": "הִגְדַּ֤לְתִּי",
                            "refs": {"nrefs": "16-13 16-14 16-15"}
                        },
                        {
                            "n": "16-8",
                            "text": "וְהֹוסַ֙פְתִּי֙",
                            "refs": {"nrefs": "16-17 16-18 16-19"}
                        },
                        {
                            "n": "16-9",
                            "text": "חָכְמָ֔ה",
                            "refs": {"nrefs": "16-21"}
                        },
                        {
                            "n": "16-10",
                            "text": "עַ֛ל",
                            "refs": {"nrefs": "16-20 16-22"}
                        },
                        {
                            "n": "16-11",
                            "text": "כָּל־אֲשֶׁר־הָיָ֥ה",
                            "refs": {"nrefs": "16-23 16-24 16-25"}
                        },
                        {
                            "n": "16-12",
                            "text": "לְפָנַ֖י",
                            "refs": {"nrefs": "16-26 16-27"}
                        },
                        {
                            "n": "16-13",
                            "text": "עַל־יְרוּשָׁלִָ֑ם",
                            "refs": {"nrefs": "16-28 16-29"}
                        },
                        {
                            "n": "16-14",
                            "text": "וְלִבִּ֛י",
                            "refs": {"nrefs": "16-31 16-32"}
                        },
                        {
                            "n": "16-15",
                            "text": "רָאָ֥ה",
                            "refs": {"nrefs": "16-33 16-34"}
                        },
                        {
                            "n": "16-16",
                            "text": "הַרְבֵּ֖ה",
                            "refs": {"nrefs": "16-35"}
                        },
                        {
                            "n": "16-17",
                            "text": "חָכְמָ֥ה",
                            "refs": {"nrefs": "16-36"}
                        },
                        {
                            "n": "16-18",
                            "text": "וָדָֽעַת",
                            "refs": {"nrefs": "16-37 16-38"}
                        },
                        {
                            "n": "16-19",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "16-1",
                            "text": ""
                        },
                        {
                            "n": "16-2",
                            "text": "I",
                            "refs": {"nrefs": "16-2"}
                        },
                        {
                            "n": "16-3",
                            "text": "communed",
                            "refs": {"nrefs": "16-1"}
                        },
                        {
                            "n": "16-4",
                            "text": "with",
                            "refs": {"nrefs": "16-3"}
                        },
                        {
                            "n": "16-5",
                            "text": "my",
                            "refs": {"nrefs": "16-3"}
                        },
                        {
                            "n": "16-6",
                            "text": "heart",
                            "refs": {"nrefs": "16-3"}
                        },
                        {
                            "n": "16-7",
                            "text": ","
                        },
                        {
                            "n": "16-8",
                            "text": "saying",
                            "refs": {"nrefs": "16-4"}
                        },
                        {
                            "n": "16-9",
                            "text": ","
                        },
                        {
                            "n": "16-10",
                            "text": "\u201cLook",
                            "refs": {"nrefs": "16-6"}
                        },
                        {
                            "n": "16-11",
                            "text": ","
                        },
                        {
                            "n": "16-12",
                            "text": "I",
                            "refs": {"nrefs": "16-5"}
                        },
                        {
                            "n": "16-13",
                            "text": "have",
                            "refs": {"nrefs": "16-7"}
                        },
                        {
                            "n": "16-14",
                            "text": "attained",
                            "refs": {"nrefs": "16-7"}
                        },
                        {
                            "n": "16-15",
                            "text": "greatness",
                            "refs": {"nrefs": "16-7"}
                        },
                        {
                            "n": "16-16",
                            "text": ","
                        },
                        {
                            "n": "16-17",
                            "text": "and",
                            "refs": {"nrefs": "16-8"}
                        },
                        {
                            "n": "16-18",
                            "text": "have",
                            "refs": {"nrefs": "16-8"}
                        },
                        {
                            "n": "16-19",
                            "text": "gained",
                            "refs": {"nrefs": "16-8"}
                        },
                        {
                            "n": "16-20",
                            "text": "more",
                            "refs": {"nrefs": "16-10"}
                        },
                        {
                            "n": "16-21",
                            "text": "wisdom",
                            "refs": {"nrefs": "16-9"}
                        },
                        {
                            "n": "16-22",
                            "text": "than",
                            "refs": {"nrefs": "16-10"}
                        },
                        {
                            "n": "16-23",
                            "text": "all",
                            "refs": {"nrefs": "16-11"}
                        },
                        {
                            "n": "16-24",
                            "text": "who",
                            "refs": {"nrefs": "16-11"}
                        },
                        {
                            "n": "16-25",
                            "text": "were",
                            "refs": {"nrefs": "16-11"}
                        },
                        {
                            "n": "16-26",
                            "text": "before",
                            "refs": {"nrefs": "16-12"}
                        },
                        {
                            "n": "16-27",
                            "text": "me",
                            "refs": {"nrefs": "16-12"}
                        },
                        {
                            "n": "16-28",
                            "text": "in",
                            "refs": {"nrefs": "16-13"}
                        },
                        {
                            "n": "16-29",
                            "text": "Jerusalem",
                            "refs": {"nrefs": "16-13"}
                        },
                        {
                            "n": "16-30",
                            "text": "."
                        },
                        {
                            "n": "16-31",
                            "text": "My",
                            "refs": {"nrefs": "16-14"}
                        },
                        {
                            "n": "16-32",
                            "text": "heart",
                            "refs": {"nrefs": "16-14"}
                        },
                        {
                            "n": "16-33",
                            "text": "has",
                            "refs": {"nrefs": "16-15"}
                        },
                        {
                            "n": "16-34",
                            "text": "understood",
                            "refs": {"nrefs": "16-15"}
                        },
                        {
                            "n": "16-35",
                            "text": "great",
                            "refs": {"nrefs": "16-16"}
                        },
                        {
                            "n": "16-36",
                            "text": "wisdom",
                            "refs": {"nrefs": "16-17"}
                        },
                        {
                            "n": "16-37",
                            "text": "and",
                            "refs": {"nrefs": "16-18"}
                        },
                        {
                            "n": "16-38",
                            "text": "knowledge",
                            "refs": {"nrefs": "16-18"}
                        },
                        {
                            "n": "16-39",
                            "text": "."
                        },
                        {
                            "n": "16-40",
                            "text": "\u201d"
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "17-1",
                            "text": ""
                        },
                        {
                            "n": "17-2",
                            "text": "וָאֶתְּנָ֤ה",
                            "refs": {"nrefs": "17-1 17-2 17-3"}
                        },
                        {
                            "n": "17-3",
                            "text": "לִבִּי֙",
                            "refs": {"nrefs": "17-4 17-5"}
                        },
                        {
                            "n": "17-4",
                            "text": "לָדַ֣עַת",
                            "refs": {"nrefs": "17-6 17-7"}
                        },
                        {
                            "n": "17-5",
                            "text": "חָכְמָ֔ה",
                            "refs": {"nrefs": "17-8"}
                        },
                        {
                            "n": "17-6",
                            "text": "וְדַ֥עַת",
                            "refs": {"nrefs": "17-9 17-10 17-11"}
                        },
                        {
                            "n": "17-7",
                            "text": "הֹולֵלֹ֖ות",
                            "refs": {"nrefs": "17-12"}
                        },
                        {
                            "n": "17-8",
                            "text": "וְשִׂכְל֑וּת",
                            "refs": {"nrefs": "17-13 17-14"}
                        },
                        {
                            "n": "17-9",
                            "text": "יָדַ֕עְתִּי",
                            "refs": {"nrefs": "17-16 17-17"}
                        },
                        {
                            "n": "17-10",
                            "text": "שֶׁגַּם־זֶ֥ה",
                            "refs": {"nrefs": "17-18 17-19"}
                        },
                        {
                            "n": "17-11",
                            "text": "ה֖וּא",
                            "refs": {"nrefs": "17-18 17-19"}
                        },
                        {
                            "n": "17-12",
                            "text": "רַעְיֹ֥ון",
                            "refs": {"nrefs": "17-21 17-22 17-23"}
                        },
                        {
                            "n": "17-13",
                            "text": "רֽוּחַ",
                            "refs": {"nrefs": "17-24 17-25"}
                        },
                        {
                            "n": "17-14",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "17-1",
                            "text": "And",
                            "refs": {"nrefs": "17-2"}
                        },
                        {
                            "n": "17-2",
                            "text": "I",
                            "refs": {"nrefs": "17-2"}
                        },
                        {
                            "n": "17-3",
                            "text": "set",
                            "refs": {"nrefs": "17-2"}
                        },
                        {
                            "n": "17-4",
                            "text": "my",
                            "refs": {"nrefs": "17-3"}
                        },
                        {
                            "n": "17-5",
                            "text": "heart",
                            "refs": {"nrefs": "17-3"}
                        },
                        {
                            "n": "17-6",
                            "text": "to",
                            "refs": {"nrefs": "17-4"}
                        },
                        {
                            "n": "17-7",
                            "text": "know",
                            "refs": {"nrefs": "17-4"}
                        },
                        {
                            "n": "17-8",
                            "text": "wisdom",
                            "refs": {"nrefs": "17-5"}
                        },
                        {
                            "n": "17-9",
                            "text": "and",
                            "refs": {"nrefs": "17-6"}
                        },
                        {
                            "n": "17-10",
                            "text": "to",
                            "refs": {"nrefs": "17-6"}
                        },
                        {
                            "n": "17-11",
                            "text": "know",
                            "refs": {"nrefs": "17-6"}
                        },
                        {
                            "n": "17-12",
                            "text": "madness",
                            "refs": {"nrefs": "17-7"}
                        },
                        {
                            "n": "17-13",
                            "text": "and",
                            "refs": {"nrefs": "17-8"}
                        },
                        {
                            "n": "17-14",
                            "text": "folly",
                            "refs": {"nrefs": "17-8"}
                        },
                        {
                            "n": "17-15",
                            "text": "."
                        },
                        {
                            "n": "17-16",
                            "text": "I",
                            "refs": {"nrefs": "17-9"}
                        },
                        {
                            "n": "17-17",
                            "text": "perceived",
                            "refs": {"nrefs": "17-9"}
                        },
                        {
                            "n": "17-18",
                            "text": "that",
                            "refs": {"nrefs": "17-10 17-11"}
                        },
                        {
                            "n": "17-19",
                            "text": "this",
                            "refs": {"nrefs": "17-10 17-11"}
                        },
                        {
                            "n": "17-20",
                            "text": "also"
                        },
                        {
                            "n": "17-21",
                            "text": "is",
                            "refs": {"nrefs": "17-12"}
                        },
                        {
                            "n": "17-22",
                            "text": "grasping",
                            "refs": {"nrefs": "17-12"}
                        },
                        {
                            "n": "17-23",
                            "text": "for",
                            "refs": {"nrefs": "17-12"}
                        },
                        {
                            "n": "17-24",
                            "text": "the",
                            "refs": {"nrefs": "17-13"}
                        },
                        {
                            "n": "17-25",
                            "text": "wind",
                            "refs": {"nrefs": "17-13"}
                        },
                        {
                            "n": "17-26",
                            "text": "."
                        }
                    ]
                }
            ]
        },
        {
            "n": 1,
            "wds": [
                {
                    "lnum": "L1",
                    "w": [
                        {
                            "n": "18-1",
                            "text": ""
                        },
                        {
                            "n": "18-2",
                            "text": "כִּ֛י",
                            "refs": {"nrefs": "18-1"}
                        },
                        {
                            "n": "18-3",
                            "text": "בְּרֹ֥ב",
                            "refs": {"nrefs": "18-2 18-3"}
                        },
                        {
                            "n": "18-4",
                            "text": "חָכְמָ֖ה",
                            "refs": {"nrefs": "18-4"}
                        },
                        {
                            "n": "18-5",
                            "text": "רָב־כָּ֑עַס",
                            "refs": {"nrefs": "18-5 18-6 18-7"}
                        },
                        {
                            "n": "18-6",
                            "text": "וְיֹוסִ֥יף",
                            "refs": {"nrefs": "18-9 18-10 18-11 18-12"}
                        },
                        {
                            "n": "18-7",
                            "text": "דַּ֖עַת",
                            "refs": {"nrefs": "18-13"}
                        },
                        {
                            "n": "18-8",
                            "text": "יֹוסִ֥יף",
                            "refs": {"nrefs": "18-14"}
                        },
                        {
                            "n": "18-9",
                            "text": "מַכְאֹֽוב",
                            "refs": {"nrefs": "18-15"}
                        },
                        {
                            "n": "18-10",
                            "text": "׃"
                        }
                    ]
                },
                {
                    "lnum": "L2",
                    "w": [
                        {
                            "n": "18-1",
                            "text": "For",
                            "refs": {"nrefs": "18-2"}
                        },
                        {
                            "n": "18-2",
                            "text": "in",
                            "refs": {"nrefs": "18-3"}
                        },
                        {
                            "n": "18-3",
                            "text": "much",
                            "refs": {"nrefs": "18-3"}
                        },
                        {
                            "n": "18-4",
                            "text": "wisdom",
                            "refs": {"nrefs": "18-4"}
                        },
                        {
                            "n": "18-5",
                            "text": "is",
                            "refs": {"nrefs": "18-5"}
                        },
                        {
                            "n": "18-6",
                            "text": "much",
                            "refs": {"nrefs": "18-5"}
                        },
                        {
                            "n": "18-7",
                            "text": "grief",
                            "refs": {"nrefs": "18-5"}
                        },
                        {
                            "n": "18-8",
                            "text": ","
                        },
                        {
                            "n": "18-9",
                            "text": "And",
                            "refs": {"nrefs": "18-6"}
                        },
                        {
                            "n": "18-10",
                            "text": "he",
                            "refs": {"nrefs": "18-6"}
                        },
                        {
                            "n": "18-11",
                            "text": "who",
                            "refs": {"nrefs": "18-6"}
                        },
                        {
                            "n": "18-12",
                            "text": "increases",
                            "refs": {"nrefs": "18-6"}
                        },
                        {
                            "n": "18-13",
                            "text": "knowledge",
                            "refs": {"nrefs": "18-7"}
                        },
                        {
                            "n": "18-14",
                            "text": "increases",
                            "refs": {"nrefs": "18-8"}
                        },
                        {
                            "n": "18-15",
                            "text": "sorrow",
                            "refs": {"nrefs": "18-9"}
                        },
                        {
                            "n": "18-16",
                            "text": "."
                        }
                    ]
                }
            ]
        }
    ]
}}




    $scope.newPlace = null;
    $scope.addNew = function(){
    	if ($scope.newPlace != null && $scope.newPlace != ""){
    		$scope.places.push({
    			uri:$scope.places.length,
    			source:"",
    			label: $scope.newPlace,
    			altLabels: [],
    			comment:""
    			
    		});
    	}
    }

    $scope.getLangList = function(alignmentData) {
    var langData = alignmentData.alignment.language;
    var langList = [];

    for (i = 0; i < langData.length; i++) {
        langList.push(langData[i].xmlLang);
    }
    return langList;
}

$scope.getDirList = function(alignmentData) {
    var langData = alignmentData.alignment.language;
    var dirList = [];

    for (i = 0; i < langData.length; i++) {
        dirList.push(langData[i].dir);
    }
    return dirList;
}

$scope.getSentenceList = function(alignmentData) {
    return alignmentData.alignment.sentence;
}

//this should be replaced by URI functionality

$scope.getWordsBySentenceNumber = function(alignmentData, sentenceNumber) {
    var num = sentenceNumber - 1;

    return alignmentData.alignment.sentence[num].wds;

}

$scope.getLNumWordDataBySentenceNumber = function(alignmentData, sentenceNumber, lNum) {
    var num = sentenceNumber - 1;
    var lN = lNum - 1;
    return alignmentData.alignment.sentence[num].wds[lN].w;

}

$scope.getLNumWordNumsBySentenceNumber = function(alignmentData, sentenceNumber, lNum) {
    var num = sentenceNumber - 1;
    var lN = lNum - 1;
    var wordList = alignmentData.alignment.sentence[num].wds[lN].w;
    var numList = [];

    for (i = 0; i < wordList.length; i++) {
        numList.push(wordList[i].n);
    }
    return numList;
}

$scope.getLNumWordRefListsBySentenceNumber = function(alignmentData, sentenceNumber, lNum) {
    var num = sentenceNumber - 1;
    var lN = lNum - 1;
    var wordList = alignmentData.alignment.sentence[num].wds[lN].w;
    var refList = [];

    for (i = 0; i < wordList.length; i++) {
        refList.push(wordList[i].refs.nrefs.split(" "));
    }
    return refList;
}

$scope.getLNumWordTextBySentenceNumber = function(alignmentData, sentenceNumber, lNum) {
    var num = sentenceNumber - 1;
    var lN = lNum - 1;
    var wordList = alignmentData.alignment.sentence[num].wds[lN].w;

    var textList = [];

    for (i = 0; i < wordList.length; i++) {
        textList.push(wordList[i].text);
    }
    return textList;
}

$scope.getFullTextbyLNum = function(alignmentData, lNum) {
    var lN = lNum - 1;
    var textList = [];
    var sentenceList = alignmentData.alignment.sentence;

    for (i = 0; i < sentenceList.length; i++) {
        var wordList = alignmentData.alignment.sentence[i].wds[lN].w;
        var wordTextList = [];

        for (x = 0; x < wordList.length; x++) {

            wordTextList.push(wordList[x].text);

        }

        textList.push(wordTextList.join(" "));

    }
    return textList.join(" ");
}


});