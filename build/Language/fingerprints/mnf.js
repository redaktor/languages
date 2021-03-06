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
    const mnf = {
        id: 'mnf',
        name: 'Mundani',
        trigrams: { ' mb': 0,
            ' la': 1,
            ' bɔ': 2,
            ' a ': 3,
            ' wu': 4,
            'a n': 5,
            'ɨ̀ ': 6,
            'mbɔ': 7,
            'wu ': 8,
            ' ng': 9,
            'òt ': 10,
            ' nê': 11,
            'me ': 12,
            'ghɨ': 13,
            'a m': 14,
            ' tà': 15,
            ' nd': 16,
            'tà ': 17,
            ' mè': 18,
            'bɔ̧': 19,
            'ua ': 20,
            'ne ': 21,
            'aa ': 22,
            ' ye': 23,
            ' e ': 24,
            'bɨ̀': 25,
            '̧ɔ̧': 26,
            'ɔ̧ɔ': 27,
            'ɔ̧m': 28,
            '̧mà': 29,
            'ɨ̀ˈ': 30,
            'ka ': 31,
            'la.': 32,
            'a. ': 33,
            ' nt': 34,
            ' me': 35,
            ' nk': 36,
            'li ': 37,
            'ɨ̧ ': 38,
            'bɔ ': 39,
            'a, ': 40,
            ' gh': 41,
            ' li': 42,
            ' an': 43,
            ' bɨ': 44,
            'bòt': 45,
            ' bò': 46,
            'te ': 47,
            ' ka': 48,
            'ˈa ': 49,
            'mà ': 50,
            'a b': 51,
            ane: 52,
            'a è': 53,
            'a a': 54,
            'tò ': 55,
            'mbɨ': 56,
            'nê ': 57,
            'e a': 58,
            nts: 59,
            'àa ': 60,
            'la,': 61,
            'à n': 62,
            'ko ': 63,
            'à l': 64,
            ' ba': 65,
            ' ts': 66,
            'a t': 67,
            'bɔ̀': 68,
            'i n': 69,
            'a l': 70,
            'e n': 71,
            ' ab': 72,
            'è n': 73,
            'u a': 74,
            'a w': 75,
            ' sh': 76,
            'ê, ': 77,
            'la ': 78,
            ' ko': 79,
            '̀ˈɨ': 80,
            'ˈɨ̀': 81,
            'nê,': 82,
            yes: 83,
            'esò': 84,
            ' èg': 85,
            ' è ': 86,
            'nè ': 87,
            shu: 88,
            bua: 89,
            'wòt': 90,
            ' tò': 91,
            abu: 92,
            ' kà': 93,
            'tè ': 94,
            ' wa': 95,
            'sò ': 96,
            ' wò': 97,
            'a k': 98,
            'e m': 99,
            ', b': 100,
            'u b': 101,
            ' àg': 102,
            '. b': 103,
            ', m': 104,
            'ɨa ': 105,
            ' nè': 106,
            'kà ': 107,
            ngu: 108,
            ', n': 109,
            'ɔ̀ŋ': 110,
            'à w': 111,
            'hɨ ': 112,
            'ɔb ': 113,
            'mèn': 114,
            ' al': 115,
            'e b': 116,
            'àgh': 117,
            'bu ': 118,
            ' tè': 119,
            ' ny': 120,
            'à k': 121,
            ale: 122,
            ' èn': 123,
            ' bè': 124,
            '̧̀ ': 125,
            'a à': 126,
            'mè ': 127,
            'ngɨ': 128,
            ' bu': 129,
            'e l': 130,
            'ème': 131,
            tsi: 132,
            '̀ m': 133,
            '̧ m': 134,
            'a y': 135,
            'e, ': 136,
            ' nɨ': 137,
            'ndɨ': 138,
            't b': 139,
            'e t': 140,
            '̧ɨ̧': 141,
            'ɨ̧ɨ': 142,
            'tɨ̧': 143,
            'tsə': 144,
            'hu ': 145,
            'le ': 146,
            ' èb': 147,
            'əa ': 148,
            ' àf': 149,
            ndz: 150,
            'à b': 151,
            'à m': 152,
            'àà ': 153,
            'e k': 154,
            'ɔ̧̀': 155,
            'gèm': 156,
            'gɨ̀': 157,
            'ɔŋ ': 158,
            'e à': 159,
            ', “': 160,
            'u n': 161,
            'a̧ ': 162,
            ' at': 163,
            ', k': 164,
            ' àn': 165,
            'ɨ b': 166,
            'a s': 167,
            'ɔ̂ ': 168,
            '̀ˈ ': 169,
            'bɔ̂': 170,
            '̀ b': 171,
            'tsɔ': 172,
            'nyɨ': 173,
            'hɨ̀': 174,
            'atò': 175,
            ' yu': 176,
            'ènt': 177,
            'ba ': 178,
            'ntɨ': 179,
            ' aw': 180,
            '̧ a': 181,
            ' am': 182,
            ', t': 183,
            'u̧ ': 184,
            'bɨ ': 185,
            'ègh': 186,
            'ə̀ ': 187,
            'gu ': 188,
            'àfɨ': 189,
            'bɔŋ': 190,
            '.” ': 191,
            'è m': 192,
            'ɔ̀ ': 193,
            'e è': 194,
            'ye ': 195,
            '̧ n': 196,
            ' ya': 197,
            'hɨa': 198,
            'bɨ̧': 199,
            'em ': 200,
            'le,': 201,
            '̀ŋ ': 202,
            'e g': 203,
            'ɔ̀ɔ': 204,
            'e w': 205,
            'siˈ': 206,
            'ɨ̧̀': 207,
            '̀ w': 208,
            'ò l': 209,
            'è b': 210,
            'e y': 211,
            ' bà': 212,
            'ɔ n': 213,
            'nkɨ': 214,
            'wɨ̧': 215,
            'ànə': 216,
            '̀ k': 217,
            ' àl': 218,
            'wɔb': 219,
            ' kɨ': 220,
            'nkà': 221,
            'èbe': 222,
            '. e': 223,
            ' à ': 224,
            'aˈa': 225,
            'a e': 226,
            'u t': 227,
            ' àt': 228,
            'u à': 229,
            ' nà': 230,
            'i m': 231,
            'ˈte': 232,
            '. m': 233,
            yaa: 234,
            'ê b': 235,
            'à t': 236,
            't k': 237,
            'vi ': 238,
            'ò n': 239,
            'à a': 240,
            'è à': 241,
            'ta ': 242,
            'yu ': 243,
            'pfə': 244,
            'u m': 245,
            ' wû': 246,
            'ˈà ': 247,
            'wû ': 248,
            'à à': 249,
            ' mà': 250,
            '̀ɔ ': 251,
            'ènə': 252,
            'fɨ̀': 253,
            'i a': 254,
            'ke ': 255,
            'èng': 256,
            'ɔ̀ˈ': 257,
            'kàb': 258,
            'dɨ ': 259,
            ' si': 260,
            'nə̀': 261,
            ' è': 262,
            '. t': 263,
            bem: 264,
            'àˈ ': 265,
            'si ': 266,
            'àbɔ': 267,
            '̀ n': 268,
            'sɔ̧': 269,
            'am ': 270,
            'è w': 271,
            '̧ w': 272,
            ' ta': 273,
            'ˈ a': 274,
            'mbì': 275,
            'ɨˈɨ': 276,
            ' àw': 277,
            'ngà': 278,
            'u w': 279,
            ' èl': 280,
            ' àa': 281,
            'àˈà': 282,
            wet: 283,
            'nəa': 284,
            ' na': 285,
            ', è': 286,
            'ŋa ': 287,
            'ɨ a': 288,
            ' le': 289,
            ' be': 290,
            'tsè': 291,
            'ɨˈa': 292,
            '̀ a': 293,
            '̀ l': 294,
            ' mɨ': 295,
            'tsì': 296,
            '̀ t': 297,
            'tàa': 298,
            ' kè': 299,
            '̀ à': 300
        }
    };
    exports.default = mnf;
});
//# sourceMappingURL=mnf.js.map