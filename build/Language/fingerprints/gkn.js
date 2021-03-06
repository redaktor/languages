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
    const gkn = {
        id: 'gkn',
        name: 'Gokana',
        trigrams: { 'á ': 0,
            'à ': 1,
            'è ': 2,
            ' e ': 3,
            ' be': 4,
            'ó ': 5,
            ' ba': 6,
            'é ': 7,
            ' ko': 8,
            ' gb': 9,
            'ò ': 10,
            'kọ': 11,
            ' ne': 12,
            ' lo': 13,
            'bà': 14,
            ' a ': 15,
            '́ n': 16,
            '̀ n': 17,
            '́ b': 18,
            boo: 19,
            gbo: 20,
            '́ k': 21,
            '̀ g': 22,
            'ló': 23,
            '́ e': 24,
            ' bo': 25,
            'í ': 26,
            'ọ ': 27,
            '̀ b': 28,
            'e a': 29,
            ' to': 30,
            'nè': 31,
            ' ge': 32,
            ' na': 33,
            'ọ̀': 34,
            'áa': 35,
            'ọ́': 36,
            bee: 37,
            'e b': 38,
            'eè': 39,
            ' é': 40,
            ' va': 41,
            '̀ k': 42,
            '̀ e': 43,
            'là': 44,
            '́á': 45,
            'aá': 46,
            '́ g': 47,
            '́e ': 48,
            'ì ': 49,
            '́ l': 50,
            'bò': 51,
            vaa: 52,
            ' ka': 53,
            ' à': 54,
            ' de': 55,
            'ẹ̀': 56,
            '́ d': 57,
            'ú ': 58,
            'ná': 59,
            '̀ d': 60,
            '́ t': 61,
            'ée': 62,
            ' du': 63,
            nen: 64,
            'oo ': 65,
            'bé': 66,
            ' di': 67,
            'ní': 68,
            'gé': 69,
            ' ni': 70,
            '́, ': 71,
            'tõ': 72,
            '̀ t': 73,
            ' ny': 74,
            'rì': 75,
            ' kp': 76,
            'lá': 77,
            bel: 78,
            'en ': 79,
            'àr': 80,
            '́ì': 81,
            '̀ri': 82,
            ' si': 83,
            'e k': 84,
            'oó': 85,
            'a b': 86,
            '̣́ ': 87,
            'a k': 88,
            'bá': 89,
            'má': 90,
            ' nu': 91,
            'íi': 92,
            'a e': 93,
            'pá': 94,
            '̃́ ': 95,
            'õo': 96,
            'kà': 97,
            '́ a': 98,
            naa: 99,
            '̀la': 100,
            'dú': 101,
            '̣ b': 102,
            ' ke': 103,
            '́ó': 104,
            '́. ': 105,
            'nu ': 106,
            '̣̀ ': 107,
            'ṍ': 108,
            'aa ': 109,
            ' te': 110,
            'a d': 111,
            ' è': 112,
            ' le': 113,
            ' pa': 114,
            'íe': 115,
            ' do': 116,
            '̀ a': 117,
            '́a ': 118,
            ' á': 119,
            '̀à': 120,
            'e n': 121,
            ' tu': 122,
            'o b': 123,
            '́í': 124,
            '̣̀l': 125,
            ' m ': 126,
            '̣, ': 127,
            '́lo': 128,
            '̀, ': 129,
            '̃ò': 130,
            'a g': 131,
            '̃́o': 132,
            ' nv': 133,
            'ái': 134,
            'àa': 135,
            'óm': 136,
            '̣la': 137,
            'a n': 138,
            nyi: 139,
            'ól': 140,
            'mà': 141,
            'lè': 142,
            'én': 143,
            '́ m': 144,
            '̀ l': 145,
            '̣̀s': 146,
            'ẹl': 147,
            'zò': 148,
            'tú': 149,
            'di ': 150,
            'ọ,': 151,
            'lẹ': 152,
            '̣ n': 153,
            'ĩ́': 154,
            'nà': 155,
            'ge ': 156,
            'ẹ ': 157,
            ' ó': 158,
            'ẹ́': 159,
            'lí': 160,
            'ã́': 161,
            'lò': 162,
            ' ta': 163,
            '́la': 164,
            '̣le': 165,
            ' ki': 166,
            'gè': 167,
            ' ò': 168,
            'ìz': 169,
            ' í': 170,
            '̀zo': 171,
            'jí': 172,
            'lọ': 173,
            'n e': 174,
            ' ji': 175,
            '́ma': 176,
            'u e': 177,
            '̀ s': 178,
            ' mo': 179,
            'àl': 180,
            ', e': 181,
            '. b': 182,
            gba: 183,
            'yí': 184,
            '́ v': 185,
            'tọ': 186,
            '́ s': 187,
            '́ne': 188,
            '̣s ': 189,
            '̀è': 190,
            ', b': 191,
            '̀. ': 192,
            'a l': 193,
            '̀ o': 194,
            ', v': 195,
            'el ': 196,
            ' ga': 197,
            'dì': 198,
            ' so': 199,
            '̣́o': 200,
            '̀ò': 201,
            '́ò': 202,
            'gà': 203,
            'dé': 204,
            'èe': 205,
            'ãa': 206,
            ala: 207,
            ', “': 208,
            'àn': 209,
            nve: 210,
            'ká': 211,
            'bè': 212,
            '̀na': 213,
            'ál': 214,
            ', n': 215,
            'na ': 216,
            ' po': 217,
            ' aa': 218,
            'sõ': 219,
            'kẽ': 220,
            dee: 221,
            '̀ p': 222,
            'ba ': 223,
            'pọ': 224,
            'sĩ': 225,
            '̀ m': 226,
            'va ': 227,
            '́ o': 228,
            'i k': 229,
            'óo': 230,
            ' vo': 231,
            kpa: 232,
            ' o ': 233,
            'gá': 234,
            'ví': 235,
            'ee ': 236,
            'ẹe': 237,
            'e e': 238,
            'vó': 239,
            ' no': 240,
            'ín': 241,
            'e t': 242,
            'le ': 243,
            nyo: 244,
            ' bi': 245,
            '̣è': 246,
            ' me': 247,
            'tó': 248,
            'e g': 249,
            ' bu': 250,
            '̀ v': 251,
            'e m': 252,
            ' sa': 253,
            'ẽe': 254,
            kpo: 255,
            'dù': 256,
            'ọl': 257,
            '̣ẹ': 258,
            '̣̀e': 259,
            'e o': 260,
            '́ p': 261,
            'kò': 262,
            ' la': 263,
            eli: 264,
            '́m ': 265,
            'òn': 266,
            'i b': 267,
            ele: 268,
            'ii ': 269,
            '̣ a': 270,
            'ni ': 271,
            'a, ': 272,
            'õ̀': 273,
            'á,': 274,
            'ó,': 275,
            '̀ga': 276,
            '̣́l': 277,
            'dõ': 278,
            'bẹ': 279,
            olo: 280,
            mon: 281,
            'm̄ ': 282,
            '̀n ': 283,
            '̃̀o': 284,
            'e d': 285,
            '̣l ': 286,
            ' ku': 287,
            'úu': 288,
            'ne ': 289,
            'ím': 290,
            'm̀ ': 291,
            'lé': 292,
            'la ': 293,
            'né': 294,
            ' da': 295,
            '́i ': 296,
            ene: 297,
            ', a': 298,
            'tã': 299,
            'e l': 300
        }
    };
    exports.default = gkn;
});
//# sourceMappingURL=gkn.js.map