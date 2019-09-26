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
    const wob = {
        id: 'wob',
        name: 'We, Northern',
        trigrams: { ' \"': 0,
            ' \'d': 1,
            'a \'': 2,
            'a ‑': 3,
            ' ‑t': 4,
            '\'de': 5,
            'de ': 6,
            '\" ': 7,
            ' ‑w': 8,
            'a\' ': 9,
            'ʋn ': 10,
            ' ʋʋ': 11,
            ' ny': 12,
            ' ke': 13,
            ' \'a': 14,
            '\'a ': 15,
            '\' \'': 16,
            ' ɔ ': 17,
            ' \'j': 18,
            'ea ': 19,
            ' ao': 20,
            'ɛ, ': 21,
            'ɛe ': 22,
            ' se': 23,
            'je ': 24,
            '\'je': 25,
            '\' ‑': 26,
            '‑wɛ': 27,
            'wɛe': 28,
            'e \'': 29,
            ' \'b': 30,
            'n \'': 31,
            ' ɛ,': 32,
            'bo ': 33,
            'ɛ ‑': 34,
            'ɛ \'': 35,
            ' \'k': 36,
            ' \'m': 37,
            ' ɛ ': 38,
            'ɔ \'': 39,
            'ʋ \'': 40,
            'e ‑': 41,
            ' ‑n': 42,
            'ɩn ': 43,
            ' \'ʋ': 44,
            '\'ʋn': 45,
            ', ‑': 46,
            'ʋʋ ': 47,
            ' ‑k': 48,
            'ɛ\' ': 49,
            ' \'s': 50,
            '\"j': 51,
            ' nɩ': 52,
            'n ‑': 53,
            'ʋ ‑': 54,
            'ɔ\' ': 55,
            'mɛ ': 56,
            ' \'n': 57,
            kea: 58,
            ' ‑s': 59,
            ' dɛ': 60,
            'ɔ ‑': 61,
            'i \'': 62,
            '‑tɩ': 63,
            ' ‑m': 64,
            ' ka': 65,
            'nyʋ': 66,
            'aa ': 67,
            'yʋ ': 68,
            '\"k': 69,
            '. \'': 70,
            ' ‑a': 71,
            'ao ': 72,
            'ɩ \'': 73,
            'mɔ ': 74,
            'nɩ ': 75,
            ', \'': 76,
            'ʋa ': 77,
            'e ɛ': 78,
            'ma ': 79,
            'o \'': 80,
            'e\' ': 81,
            'e ɔ': 82,
            ' nʋ': 83,
            'i ‑': 84,
            'pʋ ': 85,
            'a \\': 86,
            ' ‑j': 87,
            ' ‑p': 88,
            'se ': 89,
            'ʋʋa': 90,
            'ke ': 91,
            'i\"': 92,
            wlu: 93,
            '\'di': 94,
            '‑nɩ': 95,
            '\'sʋ': 96,
            ' ɔɔ': 97,
            'a k': 98,
            ' mu': 99,
            '\'bo': 100,
            'dɛ ': 101,
            'o ‑': 102,
            'a n': 103,
            'na ': 104,
            ' wl': 105,
            '\'na': 106,
            'sʋ ': 107,
            nyn: 108,
            'ɩ ‑': 109,
            'nɩa': 110,
            ' ‑b': 111,
            'lu ': 112,
            '" \'': 113,
            'ka ': 114,
            'e k': 115,
            'ɩa ': 116,
            ' : ': 117,
            'e ʋ': 118,
            'ɩ\' ': 119,
            ' \'w': 120,
            '"jr': 121,
            ' \'e': 122,
            '\'ma': 123,
            'tɩ\'': 124,
            '\'ɩn': 125,
            'u \'': 126,
            'n\' ': 127,
            'a :': 128,
            ' \'ɩ': 129,
            '‑a ': 130,
            'ɔn ': 131,
            '\' \\': 132,
            'e n': 133,
            ' ɛɛ': 134,
            ses: 135,
            '‑te': 136,
            '‑je': 137,
            '\'ka': 138,
            '\"i': 139,
            'si ': 140,
            '‑mɛ': 141,
            '\'e ': 142,
            '‑gb': 143,
            esi: 144,
            'ɔɔ\'': 145,
            'ɛɛ\'': 146,
            ', ɛ': 147,
            ' i ': 148,
            '\' k': 149,
            'di ': 150,
            ' ‑ɩ': 151,
            'a, ': 152,
            ' po': 153,
            '‑kw': 154,
            'e a': 155,
            ' ‑g': 156,
            '‑bo': 157,
            'dɩ ': 158,
            '" ‑': 159,
            kwl: 160,
            'u ‑': 161,
            ' ‑c': 162,
            'ʋa\'': 163,
            '. ‑': 164,
            kpa: 165,
            ' a ': 166,
            'ee\'': 167,
            'n\"': 168,
            'a d': 169,
            ' kl': 170,
            '"kp': 171,
            'an ': 172,
            '‑. ': 173,
            'ɛ‑ ': 174,
            kaa: 175,
            'tɩ ': 176,
            '"ju': 177,
            ' kp': 178,
            '\'bl': 179,
            'e. ': 180,
            ' dɩ': 181,
            jri: 182,
            '‑ta': 183,
            'i. ': 184,
            'ee ': 185,
            '‑ɩn': 186,
            ' tɔ': 187,
            'aʋn': 188,
            pee: 189,
            'ei ': 190,
            'ɛ \\': 191,
            kpe: 192,
            'ɛ n': 193,
            'nyɔ': 194,
            'o, ': 195,
            'ɔɔ ': 196,
            pei: 197,
            '\'mɛ': 198,
            ' \'t': 199,
            'yɔ ': 200,
            'an\'': 201,
            '‑sa': 202,
            kle: 203,
            'wlʋ': 204,
            ', ɔ': 205,
            'tmʋ': 206,
            'i, ': 207,
            wee: 208,
            '‑we': 209,
            aoa: 210,
            '\"b': 211,
            '"kl': 212,
            'ʋpʋ': 213,
            'ʋʋp': 214,
            '\' n': 215,
            '‑nʋ': 216,
            'i ɛ': 217,
            'ea\'': 218,
            'a m': 219,
            'tɔ\'': 220,
            due: 221,
            'nʋ ': 222,
            ' ‑ɔ': 223,
            ' ‑ʋ': 224,
            'nʋɛ': 225,
            'ʋ \\': 226,
            'opʋ': 227,
            aop: 228,
            'e, ': 229,
            ' \'o': 230,
            ' jr': 231,
            'a s': 232,
            '\'wl': 233,
            '‑tu': 234,
            ', d': 235,
            'oa\'': 236,
            jea: 237,
            'in ': 238,
            ' o ': 239,
            ', ʋ': 240,
            'a a': 241,
            'wɔn': 242,
            '\'tm': 243,
            '‑cɛ': 244,
            '\"n': 245,
            '\'ny': 246,
            'sɩ ': 247,
            'ta ': 248,
            '\'o ': 249,
            'tu ': 250,
            '‑pe': 251,
            'uɛ ': 252,
            'e d': 253,
            ble: 254,
            'ɛmɛ': 255,
            ' ɛm': 256,
            lei: 257,
            'mʋ ': 258,
            'lʋa': 259,
            'ɩɛ ': 260,
            'n n': 261,
            'n. ': 262,
            '‑ke': 263,
            'o n': 264,
            '‑, ': 265,
            'nɩɛ': 266,
            'n ɛ': 267,
            'e \\': 268,
            ' tu': 269,
            ein: 270,
            'uu ': 271,
            ' ‑ɛ': 272,
            'ɛ k': 273,
            'u\"': 274,
            '"bo': 275,
            '"i ': 276,
            ' de': 277,
            'ɛ\"': 278,
            'ɔ \\': 279,
            ' du': 280,
            'n \\': 281,
            'a‑ ': 282,
            'ʋɛ\'': 283,
            '\' d': 284,
            'ɛɛ ': 285,
            '‑wi': 286,
            'wi\\': 287,
            'n, ': 288,
            'mʋa': 289,
            'pa ': 290,
            'o ɛ': 291,
            sea: 292,
            'ɩa\'': 293,
            'muɛ': 294,
            'i k': 295,
            kla: 296,
            ' o,': 297,
            'ɔ n': 298,
            ' ? ': 299,
            '‑ \'': 300
        }
    };
    exports.default = wob;
});
//# sourceMappingURL=wob.js.map