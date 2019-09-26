(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pbi = {
        id: 'pbi',
        name: 'Podoko',
        trigrams: { ' nd': 0,
            'a. ': 1,
            'da ': 2,
            ' mə': 3,
            'ba ': 4,
            ' ba': 5,
            'kə ': 6,
            'ə m': 7,
            ' la': 8,
            'də ': 9,
            'a m': 10,
            'nə ': 11,
            ' da': 12,
            aki: 13,
            ' a ': 14,
            'ŋa ': 15,
            'mən': 16,
            ' ma': 17,
            'a n': 18,
            'ə n': 19,
            'i, ': 20,
            'rə ': 21,
            lak: 22,
            ' me': 23,
            'ki,': 24,
            ' kə': 25,
            'akə': 26,
            'à ': 27,
            ' à': 28,
            'la ': 29,
            'a d': 30,
            'arə': 31,
            ' ak': 32,
            ', a': 33,
            'ta ': 34,
            'ekə': 35,
            ' na': 36,
            'a a': 37,
            ' ŋə': 38,
            'a t': 39,
            'ə t': 40,
            'a k': 41,
            'ə d': 42,
            'ŋə́': 43,
            'ə́ ': 44,
            'ə k': 45,
            'lə ': 46,
            'enə': 47,
            ' ŋg': 48,
            'dá ': 49,
            'ə a': 50,
            'ənd': 51,
            ' də': 52,
            'a, ': 53,
            'tə ': 54,
            ' sa': 55,
            men: 56,
            'ndá': 57,
            ' ŋa': 58,
            'ka ': 59,
            gwa: 60,
            'ətə': 61,
            'a s': 62,
            'ku ': 63,
            'wə ': 64,
            'əla': 65,
            'a l': 66,
            nda: 67,
            ' wa': 68,
            'a ŋ': 69,
            ' zə': 70,
            'əna': 71,
            'zət': 72,
            'ndə': 73,
            'ayə': 74,
            'yə ': 75,
            'əŋa': 76,
            'na ': 77,
            ' ta': 78,
            'ə ŋ': 79,
            'sa ': 80,
            'ə b': 81,
            'a b': 82,
            'ə l': 83,
            'əta': 84,
            'ə s': 85,
            'á m': 86,
            'ə z': 87,
            kwa: 88,
            'a z': 89,
            ' ka': 90,
            ' zl': 91,
            ' ku': 92,
            'və ': 93,
            ' gw': 94,
            'mə ': 95,
            ala: 96,
            '. a': 97,
            ata: 98,
            zla: 99,
            nde: 100,
            'kəŋ': 101,
            'hə ': 102,
            'mət': 103,
            aka: 104,
            'ɗi ': 105,
            'amə': 106,
            ' sə': 107,
            dek: 108,
            ' ts': 109,
            ' ha': 110,
            tsa: 111,
            'kən': 112,
            'wa ': 113,
            'tá ': 114,
            'əwə': 115,
            ama: 116,
            ' tá': 117,
            'waɗ': 118,
            'a w': 119,
            aku: 120,
            'ə g': 121,
            'ɗə ': 122,
            ete: 123,
            ' te': 124,
            'tsə': 125,
            'aɗi': 126,
            '. n': 127,
            'sə ': 128,
            ndz: 129,
            'a h': 130,
            ndi: 131,
            'səw': 132,
            'ki ': 133,
            ' va': 134,
            'a ɗ': 135,
            'alə': 136,
            'ma ': 137,
            '́ k': 138,
            ' ɗa': 139,
            'shə': 140,
            'dzə': 141,
            'ya ': 142,
            aba: 143,
            'a g': 144,
            'esə': 145,
            'la.': 146,
            ' kw': 147,
            'slə': 148,
            yes: 149,
            ita: 150,
            '» ŋ': 151,
            'i d': 152,
            ' ye': 153,
            'ənə': 154,
            'di ': 155,
            ' ɓe': 156,
            ' mb': 157,
            'ə h': 158,
            'elə': 159,
            tek: 160,
            ara: 161,
            'ɗab': 162,
            'ta.': 163,
            ' we': 164,
            'aɗa': 165,
            'ə w': 166,
            'na.': 167,
            may: 168,
            'ərə': 169,
            wel: 170,
            ' sl': 171,
            'i m': 172,
            wal: 173,
            'ə y': 174,
            kwe: 175,
            'ɓek': 176,
            'awə': 177,
            'əwa': 178,
            'avə': 179,
            ',» ': 180,
            'a ɓ': 181,
            ada: 182,
            and: 183,
            'ɗa ': 184,
            'la,': 185,
            wak: 186,
            'ra ': 187,
            ats: 188,
            ' ɓa': 189,
            'ə v': 190,
            mak: 191,
            'ɨɗə': 192,
            'əra': 193,
            esh: 194,
            'a,»': 195,
            iya: 196,
            ' sh': 197,
            'fə ': 198,
            ava: 199,
            'əka': 200,
            dza: 201,
            'anə': 202,
            ' zh': 203,
            ' dz': 204,
            '́ ŋ': 205,
            ina: 206,
            'əda': 207,
            ana: 208,
            'ha ': 209,
            nar: 210,
            war: 211,
            '. m': 212,
            '. b': 213,
            'kəl': 214,
            aha: 215,
            'sək': 216,
            'ŋgw': 217,
            wes: 218,
            mek: 219,
            nan: 220,
            ' ya': 221,
            'wa.': 222,
            'ə ɓ': 223,
            'ŋgɨ': 224,
            sar: 225,
            'ri ': 226,
            ekw: 227,
            'gɨɗ': 228,
            ' hə': 229,
            ' pa': 230,
            'ŋgi': 231,
            'a p': 232,
            sam: 233,
            bat: 234,
            ' am': 235,
            aya: 236,
            'ə p': 237,
            'kaɗ': 238,
            eki: 239,
            'va ': 240,
            akw: 241,
            'te ': 242,
            har: 243,
            git: 244,
            'ɓak': 245,
            'i a': 246,
            ', b': 247,
            '̀ d': 248,
            'a v': 249,
            ' gu': 250,
            'u m': 251,
            'i k': 252,
            'a y': 253,
            ' be': 254,
            wat: 255,
            ' à ': 256,
            ' fə': 257,
            'lu ': 258,
            tet: 259,
            'əri': 260,
            bet: 261,
            'a j': 262,
            tak: 263,
            'ŋa.': 264,
            ele: 265,
            'ɨrə': 266,
            asl: 267,
            nas: 268,
            'i n': 269,
            'asə': 270,
            ' ud': 271,
            'e. ': 272,
            ' tɨ': 273,
            'əkw': 274,
            'ɨlə': 275,
            'atə': 276,
            'i t': 277,
            'ədə': 278,
            'le ': 279,
            mba: 280,
            '. à': 281,
            man: 282,
            'əfə': 283,
            way: 284,
            'ə u': 285,
            aga: 286,
            ', m': 287,
            'a: ': 288,
            'rəv': 289,
            dzi: 290,
            'ɨsh': 291,
            ' má': 292,
            'na?': 293,
            'əts': 294,
            'i z': 295,
            'əni': 296,
            'ə f': 297,
            'zlə': 298,
            ' in': 299,
            'əvə': 300
        }
    };
    exports.default = pbi;
});
//# sourceMappingURL=pbi.js.map