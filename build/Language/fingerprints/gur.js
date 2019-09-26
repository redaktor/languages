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
    const gur = {
        id: 'gur',
        name: 'Frafra',
        trigrams: { ' la': 0,
            'la ': 1,
            ' te': 2,
            'te ': 3,
            ' ba': 4,
            ' ye': 5,
            ' n ': 6,
            'ba ': 7,
            'an ': 8,
            'a l': 9,
            'a t': 10,
            'a n': 11,
            'a y': 12,
            ' da': 13,
            ' wa': 14,
            ' a ': 15,
            ' ya': 16,
            'na ': 17,
            'a b': 18,
            'a. ': 19,
            'ya ': 20,
            'ge ': 21,
            ' ge': 22,
            ' de': 23,
            'e y': 24,
            'a d': 25,
            'a\'a': 26,
            'a w': 27,
            ' to': 28,
            'e\'e': 29,
            'e b': 30,
            ' bo': 31,
            daa: 32,
            'e n': 33,
            'a, ': 34,
            'a s': 35,
            ' na': 36,
            're ': 37,
            'ra ': 38,
            ' ta': 39,
            'a p': 40,
            ' se': 41,
            ' po': 42,
            'e t': 43,
            ' ka': 44,
            'a k': 45,
            ele: 46,
            'se\'': 47,
            ' ma': 48,
            'am ': 49,
            'a m': 50,
            'ŋa ': 51,
            'le ': 52,
            'om ': 53,
            'e l': 54,
            'aa ': 55,
            yen: 56,
            'n d': 57,
            'enɛ': 58,
            'nɛ ': 59,
            'n t': 60,
            yel: 61,
            ' nɛ': 62,
            'e a': 63,
            'a z': 64,
            'ka ': 65,
            'hɛ ': 66,
            'he ': 67,
            'ma ': 68,
            wan: 69,
            ana: 70,
            '\'em': 71,
            mam: 72,
            '\'an': 73,
            'la,': 74,
            oan: 75,
            poa: 76,
            'ŋɛ ': 77,
            'em ': 78,
            'nɛr': 79,
            ' so': 80,
            ' wo': 81,
            ' sɛ': 82,
            'ta ': 83,
            'en ': 84,
            ' ny': 85,
            ' pa': 86,
            'e s': 87,
            ' me': 88,
            'la.': 89,
            ' en': 90,
            'n b': 91,
            'ɛ t': 92,
            yet: 93,
            'to ': 94,
            ala: 95,
            'ɛ y': 96,
            'ɛ l': 97,
            'bo ': 98,
            'ahɛ': 99,
            'rɛ ': 100,
            ' mɛ': 101,
            oma: 102,
            'ɛre': 103,
            '. g': 104,
            ' ho': 105,
            'eŋɛ': 106,
            'wa ': 107,
            '. b': 108,
            '. t': 109,
            'ne ': 110,
            esu: 111,
            'n n': 112,
            yes: 113,
            ' bɔ': 114,
            eba: 115,
            tar: 116,
            'me ': 117,
            ehe: 118,
            'n s': 119,
            eti: 120,
            'su ': 121,
            'e d': 122,
            ere: 123,
            aye: 124,
            ' ze': 125,
            'n y': 126,
            'ɛ b': 127,
            'm l': 128,
            'a a': 129,
            'e m': 130,
            'a g': 131,
            zuo: 132,
            bal: 133,
            'ɛla': 134,
            bah: 135,
            ' sɔ': 136,
            'kɛ ': 137,
            ' ke': 138,
            'n. ': 139,
            'n l': 140,
            'teŋ': 141,
            'eŋa': 142,
            'n k': 143,
            reb: 144,
            'na\'': 145,
            'ho ': 146,
            ' ha': 147,
            'm n': 148,
            ' zu': 149,
            'sɛb': 150,
            'ɛba': 151,
            'i, ': 152,
            ' sa': 153,
            ' bi': 154,
            aan: 155,
            ' le': 156,
            'sɛl': 157,
            'ɛ. ': 158,
            ela: 159,
            'soŋ': 160,
            'ti,': 161,
            'e k': 162,
            'o n': 163,
            del: 164,
            'e p': 165,
            ', t': 166,
            are: 167,
            'o t': 168,
            '\'ay': 169,
            woo: 170,
            'm t': 171,
            'ɛ n': 172,
            'on ': 173,
            'ɛ s': 174,
            dom: 175,
            'a e': 176,
            han: 177,
            ' eŋ': 178,
            'n\'a': 179,
            ' yu': 180,
            'nyɛ': 181,
            'yɛ\'': 182,
            'de ': 183,
            'an\'': 184,
            'ɛ\' ': 185,
            lom: 186,
            'n w': 187,
            ' be': 188,
            'gɛ ': 189,
            'a h': 190,
            'oo ': 191,
            era: 192,
            ', b': 193,
            'tɔg': 194,
            zen: 195,
            'ha ': 196,
            beh: 197,
            'i\' ': 198,
            'en\'': 199,
            '\'er': 200,
            'ɔ l': 201,
            'ɔ\'ɔ': 202,
            'pa\'': 203,
            ton: 204,
            'ɔgɔ': 205,
            ' za': 206,
            nya: 207,
            ' tɔ': 208,
            ', n': 209,
            ' yɛ': 210,
            'uo ': 211,
            kan: 212,
            'ɛra': 213,
            'e e': 214,
            'an.': 215,
            '. y': 216,
            ' yi': 217,
            'e, ': 218,
            ena: 219,
            'oe ': 220,
            ' ko': 221,
            ore: 222,
            '\'a ': 223,
            ara: 224,
            her: 225,
            'ɛhe': 226,
            'ɛn\'': 227,
            ebe: 228,
            'ɔna': 229,
            ' an': 230,
            ale: 231,
            '\'al': 232,
            'ŋɔ ': 233,
            'egɔ': 234,
            ' nɔ': 235,
            ', y': 236,
            'oŋa': 237,
            ema: 238,
            den: 239,
            'ɛ d': 240,
            '. s': 241,
            dek: 242,
            'e h': 243,
            '\'ah': 244,
            'ekɛ': 245,
            'gɔ ': 246,
            'o y': 247,
            gom: 248,
            'mɛ ': 249,
            '\'en': 250,
            'e\'a': 251,
            leb: 252,
            'bɔn': 253,
            'o b': 254,
            'm b': 255,
            'e w': 256,
            'ɔra': 257,
            ', a': 258,
            'ɔe ': 259,
            'ea ': 260,
            'wo ': 261,
            'o\'o': 262,
            ', g': 263,
            ' di': 264,
            'e z': 265,
            '. n': 266,
            boe: 267,
            'o d': 268,
            'o\'e': 269,
            ', l': 270,
            ahe: 271,
            ane: 272,
            'n p': 273,
            ' dɛ': 274,
            'n, ': 275,
            'ma\'': 276,
            'o l': 277,
            ole: 278,
            lem: 279,
            'n\'e': 280,
            'keŋ': 281,
            heg: 282,
            '\'e ': 283,
            'n m': 284,
            'sɔe': 285,
            'm m': 286,
            ' mi': 287,
            ' pɔ': 288,
            'o s': 289,
            'n g': 290,
            aga: 291,
            nan: 292,
            tom: 293,
            ' dɔ': 294,
            '. a': 295,
            ban: 296,
            ora: 297,
            'ehɛ': 298,
            'm y': 299,
            yam: 300
        }
    };
    exports.default = gur;
});
//# sourceMappingURL=gur.js.map