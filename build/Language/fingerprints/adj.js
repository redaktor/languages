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
    const adj = {
        id: 'adj',
        name: 'Adioukrou',
        trigrams: { 'ke ': 0,
            ' ek': 1,
            ' a ': 2,
            'ow ': 3,
            eke: 4,
            'am ': 5,
            'gŋ ': 6,
            ' ɛm': 7,
            ' ec': 8,
            'ɛl ': 9,
            'ec’': 10,
            ' ab': 11,
            'ny ': 12,
            'ɛm ': 13,
            ' ny': 14,
            'a e': 15,
            nya: 16,
            'ŋ a': 17,
            'a, ': 18,
            yam: 19,
            'm a': 20,
            'ɔny': 21,
            ' ɛs': 22,
            'tŋ ': 23,
            ' e ': 24,
            'ɛtŋ': 25,
            'm e': 26,
            'ab ': 27,
            ' ow': 28,
            ' b’': 29,
            ' a,': 30,
            dad: 31,
            ' ɛt': 32,
            'ɛgŋ': 33,
            'm ɛ': 34,
            'l a': 35,
            ' an': 36,
            ' ɔn': 37,
            'el ': 38,
            'ŋ e': 39,
            ' es': 40,
            'ad ': 41,
            'e l': 42,
            ' da': 43,
            ' af': 44,
            ' li': 45,
            'agŋ': 46,
            '’ow': 47,
            'ek’': 48,
            'su ': 49,
            ' k’': 50,
            'in ': 51,
            'ɛsɛ': 52,
            'li ': 53,
            'es ': 54,
            'c’a': 55,
            ' lo': 56,
            'b a': 57,
            'n e': 58,
            low: 59,
            'l e': 60,
            ' am': 61,
            ' ɛl': 62,
            ' ke': 63,
            'kɔ ': 64,
            'w a': 65,
            'ŋ ɛ': 66,
            'ok ': 67,
            ' ag': 68,
            ' so': 69,
            ' in': 70,
            ' m’': 71,
            ' l’': 72,
            ' -l': 73,
            any: 74,
            ', ɛ': 75,
            'n a': 76,
            lel: 77,
            'b’o': 78,
            'w e': 79,
            'y a': 80,
            'mn ': 81,
            ' wɛ': 82,
            ' si': 83,
            'i k': 84,
            'anŋ': 85,
            ' gb': 86,
            ', k': 87,
            'wɛl': 88,
            sos: 89,
            ' ko': 90,
            ' na': 91,
            kok: 92,
            'ŋn ': 93,
            eci: 94,
            ' el': 95,
            ' le': 96,
            ' ɛg': 97,
            'y e': 98,
            'nŋ ': 99,
            ' fɛ': 100,
            '’am': 101,
            'fɛŋ': 102,
            'ɛy ': 103,
            ' ɛy': 104,
            'ɛ: ': 105,
            ' kɔ': 106,
            ' je': 107,
            's a': 108,
            ' yɛ': 109,
            ' lɛ': 110,
            ele: 111,
            'm, ': 112,
            'r a': 113,
            'b ɛ': 114,
            '’an': 115,
            'ɛŋ ': 116,
            'l ɛ': 117,
            ' ni': 118,
            'ɛny': 119,
            'rm ': 120,
            'ŋ n': 121,
            jes: 122,
            esu: 123,
            'ɛs ': 124,
            'gbɛ': 125,
            ' mi': 126,
            ' \"': 127,
            'e s': 128,
            'e n': 129,
            'ŋ l': 130,
            '\" ': 131,
            'w ɛ': 132,
            'a. ': 133,
            'ci ': 134,
            'i b': 135,
            ': \\': 136,
            nin: 137,
            'r ɛ': 138,
            'e m': 139,
            ' a.': 140,
            'e k': 141,
            'n ɛ': 142,
            'a a': 143,
            'af ': 144,
            '-l’': 145,
            'm i': 146,
            'u a': 147,
            'le ': 148,
            'm. ': 149,
            '. ɛ': 150,
            'na ': 151,
            'im ': 152,
            'si ': 153,
            'e b': 154,
            'sɛl': 155,
            'bi ': 156,
            's ɛ': 157,
            'b e': 158,
            'ɛm,': 159,
            'ŋ k': 160,
            usu: 161,
            ' n’': 162,
            'ij ': 163,
            'm o': 164,
            'inɛ': 165,
            'ogŋ': 166,
            ' s’': 167,
            'nɛ:': 168,
            'r e': 169,
            'ɛrm': 170,
            'os ': 171,
            'y ɛ': 172,
            abu: 173,
            'c’ɛ': 174,
            'u e': 175,
            'uŋ ': 176,
            'us ': 177,
            'e w': 178,
            'kŋ ': 179,
            'm ɔ': 180,
            'l’ɛ': 181,
            'k’a': 182,
            'e ɛ': 183,
            'a ɛ': 184,
            'l n': 185,
            'm l': 186,
            'yɛj': 187,
            '’el': 188,
            'i d': 189,
            ', a': 190,
            'ob ': 191,
            ' ob': 192,
            ' ok': 193,
            'm n': 194,
            'c’e': 195,
            ' ɛb': 196,
            's e': 197,
            eru: 198,
            'n’a': 199,
            'ɔŋ ': 200,
            'ɛji': 201,
            'ɛm.': 202,
            'ɛlu': 203,
            ', l': 204,
            ' ee': 205,
            ' ɛr': 206,
            'i a': 207,
            'mi ': 208,
            '’ɔn': 209,
            ' ɛw': 210,
            osi: 211,
            rur: 212,
            'siɛ': 213,
            'e j': 214,
            '.\"': 215,
            ' yo': 216,
            'ów ': 217,
            'ur ': 218,
            nym: 219,
            '-li': 220,
            oda: 221,
            ' ja': 222,
            'k’ɛ': 223,
            'e a': 224,
            'm d': 225,
            'ee?': 226,
            'wr ': 227,
            ' ij': 228,
            ' ye': 229,
            'uw ': 230,
            'sɛ ': 231,
            'k’ɔ': 232,
            'um ': 233,
            'ŋ o': 234,
            'w n': 235,
            'lɛg': 236,
            'gb ': 237,
            ' aŋ': 238,
            ' -n': 239,
            'ɛw ': 240,
            '-n’': 241,
            'lm ': 242,
            'u ɛ': 243,
            'iɛm': 244,
            'ym ': 245,
            'bɛl': 246,
            ' wu': 247,
            'aŋk': 248,
            'an ': 249,
            ' ta': 250,
            ' us': 251,
            'k’o': 252,
            'ɛb ': 253,
            'a f': 254,
            wus: 255,
            yec: 256,
            asi: 257,
            'i ɛ': 258,
            tas: 259,
            ' eb': 260,
            ' la': 261,
            'kr ': 262,
            '. e': 263,
            ana: 264,
            ' ki': 265,
            '’r ': 266,
            ' nɛ': 267,
            'nɛn': 268,
            ' og': 269,
            ' bi': 270,
            'km ': 271,
            'm’a': 272,
            ' ów': 273,
            amn: 274,
            'l’o': 275,
            'k’i': 276,
            'ri ': 277,
            'a s': 278,
            ' nɔ': 279,
            '. k': 280,
            jam: 281,
            'e -': 282,
            ' ma': 283,
            'ŋ i': 284,
            'br ': 285,
            ' ɔŋ': 286,
            'c’o': 287,
            aka: 288,
            ' ak': 289,
            's k': 290,
            ' uw': 291,
            'ɔtu': 292,
            'af.': 293,
            'ɛkn': 294,
            'l l': 295,
            'ŋ ɔ': 296,
            'nuŋ': 297,
            ' sɛ': 298,
            ' nu': 299,
            'ji ': 300
        }
    };
    exports.default = adj;
});
//# sourceMappingURL=adj.js.map