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
    const mhm = {
        id: 'mhm',
        name: 'Moore',
        trigrams: { ' n ': 0,
            ' a ': 1,
            'ẽn ': 2,
            ' sẽ': 3,
            'sẽn': 4,
            'la ': 5,
            ' la': 6,
            ' ne': 7,
            'ãmb': 8,
            'mb ': 9,
            ' ye': 10,
            'a n': 11,
            ' tɩ': 12,
            'am ': 13,
            ' ma': 14,
            'tɩ ': 15,
            ' ya': 16,
            'a y': 17,
            ' b ': 18,
            'ng ': 19,
            'n y': 20,
            ' ka': 21,
            'a b': 22,
            'a, ': 23,
            ' yã': 24,
            aam: 25,
            ' na': 26,
            'ne ': 27,
            'n k': 28,
            ' ni': 29,
            'ka ': 30,
            'b n': 31,
            nin: 32,
            ' ba': 33,
            'a t': 34,
            ' bã': 35,
            'yãm': 36,
            'a z': 37,
            ' wa': 38,
            yaa: 39,
            'g n': 40,
            'na ': 41,
            'e. ': 42,
            ', l': 43,
            'aa ': 44,
            'ã n': 45,
            'a a': 46,
            'a s': 47,
            'wẽn': 48,
            'e, ': 49,
            ' da': 50,
            'bãm': 51,
            maa: 52,
            'a w': 53,
            ' tõ': 54,
            ' wẽ': 55,
            ' ta': 56,
            'nd ': 57,
            mam: 58,
            'b s': 59,
            'da ': 60,
            'bã ': 61,
            ' ze': 62,
            nga: 63,
            'a. ': 64,
            'me ': 65,
            naa: 66,
            'n t': 67,
            'gã ': 68,
            ame: 69,
            'sã ': 70,
            'a m': 71,
            'ã, ': 72,
            '. l': 73,
            nna: 74,
            ' wã': 75,
            neb: 76,
            'e n': 77,
            ' pʋ': 78,
            ' yĩ': 79,
            'n d': 80,
            'yĩn': 81,
            'ẽnn': 82,
            ezi: 83,
            'ã y': 84,
            'ĩng': 85,
            'a k': 86,
            zez: 87,
            ' be': 88,
            'fãa': 89,
            ' fã': 90,
            ', b': 91,
            'n b': 92,
            'ɩ b': 93,
            aan: 94,
            aoo: 95,
            eel: 96,
            'zi ': 97,
            ing: 98,
            oog: 99,
            yee: 100,
            'eb ': 101,
            ' pa': 102,
            'ãng': 103,
            ' so': 104,
            'ye.': 105,
            'n n': 106,
            ' zu': 107,
            'b y': 108,
            'a p': 109,
            eng: 110,
            'õnd': 111,
            'tõn': 112,
            ' ko': 113,
            '. b': 114,
            'e t': 115,
            'd n': 116,
            'b k': 117,
            'ãa ': 118,
            'm n': 119,
            'ã s': 120,
            ' tẽ': 121,
            ' sã': 122,
            'ga ': 123,
            ' sɩ': 124,
            'n w': 125,
            ' me': 126,
            ', t': 127,
            'ã. ': 128,
            'ngã': 129,
            'wa ': 130,
            'ed ': 131,
            'ɩ y': 132,
            ', n': 133,
            'ns ': 134,
            'm s': 135,
            ' yi': 136,
            ' ra': 137,
            'n s': 138,
            'ag ': 139,
            ned: 140,
            ' le': 141,
            ' yɩ': 142,
            ' to': 143,
            'n p': 144,
            ' kẽ': 145,
            oab: 146,
            soa: 147,
            'g s': 148,
            ins: 149,
            'pʋg': 150,
            'ga,': 151,
            'm y': 152,
            'b t': 153,
            bal: 154,
            paa: 155,
            'wã ': 156,
            'em ': 157,
            'n m': 158,
            'ba ': 159,
            'og ': 160,
            mba: 161,
            ala: 162,
            ' y ': 163,
            ' tʋ': 164,
            ' yẽ': 165,
            'ẽng': 166,
            '-a ': 167,
            'be ': 168,
            'ẽ, ': 169,
            iis: 170,
            'e y': 171,
            ' kõ': 172,
            '-kã': 173,
            ', a': 174,
            'gẽ ': 175,
            'ũmb': 176,
            'bũm': 177,
            'g y': 178,
            ' bũ': 179,
            ' bõ': 180,
            ' go': 181,
            'at ': 182,
            bii: 183,
            ' ki': 184,
            'll ': 185,
            oor: 186,
            ', y': 187,
            'a l': 188,
            ' zĩ': 189,
            '\'a ': 190,
            't\'a': 191,
            ' t\'': 192,
            'mbã': 193,
            '. a': 194,
            'o, ': 195,
            ' bi': 196,
            'ya ': 197,
            ' no': 198,
            'ma ': 199,
            ' wʋ': 200,
            'ʋgẽ': 201,
            'ẽ w': 202,
            'a: ': 203,
            ' kɩ': 204,
            'ab ': 205,
            ' sa': 206,
            'ẽnd': 207,
            'a r': 208,
            'la,': 209,
            'd s': 210,
            'ba,': 211,
            'tʋm': 212,
            ' m ': 213,
            '-bi': 214,
            's s': 215,
            'ga.': 216,
            'd b': 217,
            nda: 218,
            yel: 219,
            dag: 220,
            'kãn': 221,
            'e b': 222,
            'a f': 223,
            'd t': 224,
            'n z': 225,
            ' kã': 226,
            'm b': 227,
            leb: 228,
            ' wo': 229,
            ', m': 230,
            'l n': 231,
            'r n': 232,
            'm t': 233,
            ool: 234,
            'ã t': 235,
            tar: 236,
            'n g': 237,
            'ar ': 238,
            ong: 239,
            't n': 240,
            'b b': 241,
            ' fo': 242,
            'aa:': 243,
            'd y': 244,
            'g b': 245,
            '-so': 246,
            'ɩ n': 247,
            lem: 248,
            aab: 249,
            'ã p': 250,
            '. y': 251,
            men: 252,
            'm k': 253,
            'an ': 254,
            are: 255,
            gom: 256,
            ' bɩ': 257,
            'g t': 258,
            'yẽ ': 259,
            'n l': 260,
            'ã k': 261,
            'rã ': 262,
            'sɩd': 263,
            'n-k': 264,
            'el-': 265,
            's n': 266,
            'mã ': 267,
            oto: 268,
            'ra ': 269,
            wot: 270,
            ' sũ': 271,
            'tẽe': 272,
            'bɩ ': 273,
            'sa ': 274,
            '-b ': 275,
            'zu-': 276,
            taa: 277,
            'u-s': 278,
            'ta ': 279,
            aka: 280,
            ren: 281,
            aas: 282,
            yii: 283,
            'tẽn': 284,
            'gr ': 285,
            'to ': 286,
            ' zã': 287,
            iri: 288,
            '-y ': 289,
            'abã': 290,
            ama: 291,
            'ebã': 292,
            'dãm': 293,
            'md ': 294,
            lam: 295,
            noo: 296,
            'õe ': 297,
            kar: 298,
            saa: 299,
            'sg ': 300
        }
    };
    exports.default = mhm;
});
//# sourceMappingURL=mhm.js.map