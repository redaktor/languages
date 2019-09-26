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
    const kbp = {
        id: 'kbp',
        name: 'Kabiyé',
        trigrams: { ' pa': 0,
            'aa ': 1,
            ' se': 2,
            'se ': 3,
            'nɛ ': 4,
            'na ': 5,
            ' nɛ': 6,
            'aɣ ': 7,
            ' wa': 8,
            ' ɛy': 9,
            'yʊ ': 10,
            ' yɔ': 11,
            'ɖɛ ': 12,
            'aɖɛ': 13,
            'ɛwɛ': 14,
            ala: 15,
            ', ɛ': 16,
            'a w': 17,
            'ɛna': 18,
            'yɔɔ': 19,
            'ɛ p': 20,
            'ɛ s': 21,
            paa: 22,
            'ɛyʊ': 23,
            'ɔɔl': 24,
            ' pɩ': 25,
            'e ɛ': 26,
            ' ɛw': 27,
            ' ɛ-': 28,
            'waɖ': 29,
            'e p': 30,
            'a ɛ': 31,
            'a n': 32,
            'ʊʊ ': 33,
            ', p': 34,
            'ɔla': 35,
            yaa: 36,
            'yɛ ': 37,
            'wɛn': 38,
            'ɛ ɛ': 39,
            ' hɔ': 40,
            'laɣ': 41,
            'hɔɔ': 42,
            '. h': 43,
            'ɔɔ ': 44,
            taa: 45,
            'ʊ w': 46,
            'la ': 47,
            'ɛya': 48,
            'yɩ ': 49,
            'a a': 50,
            ' kɩ': 51,
            'ɩyɛ': 52,
            'wɛɛ': 53,
            'tɔm': 54,
            wal: 55,
            ' ta': 56,
            'ʊ n': 57,
            'a k': 58,
            kpe: 59,
            ' tɔ': 60,
            'a p': 61,
            'ɔm ': 62,
            'ʊ ɛ': 63,
            'maɣ': 64,
            'ɩ ɛ': 65,
            ' ŋg': 66,
            '. p': 67,
            'ɔ, ': 68,
            'ɛ ɖ': 69,
            ' pʊ': 70,
            ' an': 71,
            'ɩ, ': 72,
            'ɛ k': 73,
            'ɛyɩ': 74,
            '-ɩ ': 75,
            'anɩ': 76,
            ' tʊ': 77,
            ' pɔ': 78,
            'nɔɔ': 79,
            ' wɛ': 80,
            'gbɛ': 81,
            daa: 82,
            'wɛ ': 83,
            'a t': 84,
            ama: 85,
            ' pɛ': 86,
            'a s': 87,
            kpa: 88,
            'ɛ n': 89,
            'ɩna': 90,
            pal: 91,
            'yɔ,': 92,
            'mɩy': 93,
            'a, ': 94,
            'ɔ. ': 95,
            'zɩ ': 96,
            ' we': 97,
            'ayɩ': 98,
            ' mb': 99,
            ' ɛl': 100,
            'ŋgb': 101,
            ' nɔ': 102,
            ' kp': 103,
            'ɔ s': 104,
            'ɔɖɔ': 105,
            'ɩɣ ': 106,
            'ɩma': 107,
            'ɛja': 108,
            ' kʊ': 109,
            ' ɖɩ': 110,
            ' ke': 111,
            '-tɩ': 112,
            'ɛɛ ': 113,
            'ʊ t': 114,
            'ɩ y': 115,
            'ɩ n': 116,
            ' ɛk': 117,
            'mbʊ': 118,
            'nɩ,': 119,
            'ɩ s': 120,
            nda: 121,
            'fɛy': 122,
            'a. ': 123,
            'ɖɔ ': 124,
            ' ɛs': 125,
            'ɛ. ': 126,
            'tʊm': 127,
            pee: 128,
            'jaɖ': 129,
            ' ɖɔ': 130,
            'paɣ': 131,
            '-yɔ': 132,
            'ɛyɛ': 133,
            'ya ': 134,
            'ɔɔy': 135,
            'a y': 136,
            'bʊ ': 137,
            ' ye': 138,
            'ɛ y': 139,
            'alɩ': 140,
            'ɖɔɖ': 141,
            'tʊ ': 142,
            ' ya': 143,
            'ɛla': 144,
            ekp: 145,
            'bɛy': 146,
            ' na': 147,
            'ɛ-t': 148,
            'ɣ ɛ': 149,
            'kɩm': 150,
            'pa-': 151,
            'ɩ ɖ': 152,
            'ʊ k': 153,
            'jɛy': 154,
            eyi: 155,
            'sɔɔ': 156,
            ' fa': 157,
            'ɩ-ɩ': 158,
            'ʊ y': 159,
            'ʊma': 160,
            'ɣ 2': 161,
            'ʊyʊ': 162,
            'kɛ ': 163,
            'ɔyʊ': 164,
            'ɛzɩ': 165,
            'ɣ 1': 166,
            'tɩ ': 167,
            'ɩzɩ': 168,
            'ʊmɩ': 169,
            lab: 170,
            ' ɛj': 171,
            'ɩ. ': 172,
            iya: 173,
            'ɛ t': 174,
            'ɩ-t': 175,
            ' sa': 176,
            'aa.': 177,
            and: 178,
            ' ɛt': 179,
            'i, ': 180,
            ' lɛ': 181,
            kan: 182,
            'ʊ s': 183,
            'ɔ ɛ': 184,
            'pe ': 185,
            'lɩ ': 186,
            'ʊ, ': 187,
            'ɛ, ': 188,
            laa: 189,
            'ɣtʊ': 190,
            'ʊ ŋ': 191,
            eek: 192,
            wey: 193,
            'ʊ p': 194,
            'a l': 195,
            'aʊ ': 196,
            'ajɛ': 197,
            pak: 198,
            'yɔ ': 199,
            day: 200,
            'ɩsɩ': 201,
            'a-ɩ': 202,
            'ɩfɛ': 203,
            '-ta': 204,
            'ɔyɔ': 205,
            akp: 206,
            sam: 207,
            kul: 208,
            'a-t': 209,
            'aɣt': 210,
            '. ɛ': 211,
            'ɩ k': 212,
            naa: 213,
            'ɩ p': 214,
            'ŋga': 215,
            'ndʊ': 216,
            ' kɔ': 217,
            ' sɔ': 218,
            'yi,': 219,
            uli: 220,
            '-tɔ': 221,
            'pɩf': 222,
            'sɩn': 223,
            ' pe': 224,
            ' aj': 225,
            'akɩ': 226,
            ' ha': 227,
            'ee ': 228,
            'm t': 229,
            'abɩ': 230,
            'li ': 231,
            ' tɩ': 232,
            ' ɖo': 233,
            'maʊ': 234,
            'e e': 235,
            'ɣ p': 236,
            'aa,': 237,
            'yɔ.': 238,
            'yaɣ': 239,
            'ŋgʊ': 240,
            'pɩz': 241,
            eki: 242,
            ' la': 243,
            yee: 244,
            'ɣ s': 245,
            'kɩ ': 246,
            'aŋ ': 247,
            ked: 248,
            'ɣna': 249,
            'maŋ': 250,
            'ɩ t': 251,
            'ɔɔ.': 252,
            'ga ': 253,
            'a; ': 254,
            'e y': 255,
            'ma ': 256,
            'ɛpɩ': 257,
            ' le': 258,
            'ñɩn': 259,
            'na-': 260,
            ' kɛ': 261,
            'ʊ ɖ': 262,
            'ɛɛn': 263,
            'pʊ-': 264,
            'ñɩm': 265,
            'pɩs': 266,
            ' ca': 267,
            hal: 268,
            ada: 269,
            'ɛhɛ': 270,
            ina: 271,
            'm, ': 272,
            'ɖɩ-': 273,
            'sɩ ': 274,
            'ɛsɩ': 275,
            'nʊm': 276,
            'e, ': 277,
            'ba ': 278,
            'asɩ': 279,
            ' ɖa': 280,
            'ɔŋ ': 281,
            ' ɛɖ': 282,
            aka: 283,
            ' a-': 284,
            ' ɛd': 285,
            'ɔ p': 286,
            pad: 287,
            'zɩɣ': 288,
            ana: 289,
            'tɩŋ': 290,
            'dʊʊ': 291,
            lak: 292,
            ' ñɩ': 293,
            'ŋ. ': 294,
            'ɩwɛ': 295,
            'ɛda': 296,
            'ɛ-ɛ': 297,
            'nɖɩ': 298,
            aaa: 299,
            'pɩw': 300
        }
    };
    exports.default = kbp;
});
//# sourceMappingURL=kbp.js.map