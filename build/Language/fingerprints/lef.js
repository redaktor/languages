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
    const lef = {
        id: 'lef',
        name: 'Lelemi',
        trigrams: { 'na ': 0,
            ' na': 1,
            ' ka': 2,
            'ni ': 3,
            ' lɛ': 4,
            ' ba': 5,
            'a b': 6,
            'i n': 7,
            'di ': 8,
            'i b': 9,
            'la ': 10,
            'i k': 11,
            'i, ': 12,
            'i ɔ': 13,
            'a k': 14,
            'a ɔ': 15,
            ' be': 16,
            'ni,': 17,
            'ti ': 18,
            'su ': 19,
            ani: 20,
            nwu: 21,
            'ku ': 22,
            'a l': 23,
            'lɛl': 24,
            'ɔni': 25,
            ' ɔn': 26,
            'ka ': 27,
            'ɛni': 28,
            'a a': 29,
            'i l': 30,
            ' ni': 31,
            ' ke': 32,
            'u k': 33,
            ' ku': 34,
            '. n': 35,
            'mmɔ': 36,
            'a n': 37,
            'li ': 38,
            ' ɔ́': 39,
            ' bɔ': 40,
            'lɔ ': 41,
            uli: 42,
            'ɔti': 43,
            'mɔ ': 44,
            'u n': 45,
            'ɛlɔ': 46,
            'a u': 47,
            ' ú': 48,
            yul: 49,
            kyu: 50,
            'ii ': 51,
            ala: 52,
            ' li': 53,
            'u b': 54,
            ban: 55,
            ' bu': 56,
            'atɔ': 57,
            kat: 58,
            'lɛn': 59,
            'u ɔ': 60,
            ' bi': 61,
            ' an': 62,
            'ɔ k': 63,
            'ɔ n': 64,
            ' ɔd': 65,
            'wu ': 66,
            'ɔdi': 67,
            ' ɔm': 68,
            adi: 69,
            'mi ': 70,
            bla: 71,
            'i. ': 72,
            'ne ': 73,
            'tɔt': 74,
            'ɔ b': 75,
            'mɛn': 76,
            'i u': 77,
            ' kɔ': 78,
            ' am': 79,
            'ma ': 80,
            '-nw': 81,
            'bá': 82,
            kal: 83,
            '-mi': 84,
            ana: 85,
            'ya ': 86,
            'bo ': 87,
            bek: 88,
            emo: 89,
            'ɔ. ': 90,
            'wi ': 91,
            ina: 92,
            kem: 93,
            'i a': 94,
            dub: 95,
            ' ɔs': 96,
            'nu ': 97,
            'ie ': 98,
            'ye ': 99,
            'ɔsu': 100,
            'u l': 101,
            ' bɛ': 102,
            'bé': 103,
            'e b': 104,
            'e k': 105,
            eky: 106,
            ' ƒu': 107,
            ini: 108,
            mii: 109,
            'lɛ ': 110,
            ' ye': 111,
            nye: 112,
            ', n': 113,
            'ɔmm': 114,
            'ɔ́s': 115,
            'i m': 116,
            una: 117,
            ' al': 118,
            yes: 119,
            'si ': 120,
            ' uk': 121,
            'ƒui': 122,
            esu: 123,
            'ɔ ɔ': 124,
            'yi ': 125,
            'alɛ': 126,
            '-ma': 127,
            'mo ': 128,
            'mu ': 129,
            ' mm': 130,
            kan: 131,
            kpi: 132,
            'ɛ n': 133,
            ' nd': 134,
            'út': 135,
            uky: 136,
            ubo: 137,
            kya: 138,
            ' nw': 139,
            taa: 140,
            wun: 141,
            'ɔ l': 142,
            nii: 143,
            '́su': 144,
            'u u': 145,
            nin: 146,
            ' ɔk': 147,
            'ia ': 148,
            ula: 149,
            ' ns': 150,
            ', b': 151,
            '́si': 152,
            'a. ': 153,
            anw: 154,
            'ui ': 155,
            kpa: 156,
            'u-m': 157,
            ' si': 158,
            'bi ': 159,
            'e ɔ': 160,
            'ɔsi': 161,
            ', “': 162,
            '́ta': 163,
            'alɔ': 164,
            bad: 165,
            'u. ': 166,
            'ɔmɛ': 167,
            ' ɔɔ': 168,
            ' aa': 169,
            ite: 170,
            ane: 171,
            sik: 172,
            uwi: 173,
            emi: 174,
            '. a': 175,
            die: 176,
            ', ɔ': 177,
            ' ul': 178,
            '́ti': 179,
            'u a': 180,
            tem: 181,
            'mɔɔ': 182,
            '́te': 183,
            abl: 184,
            '. ɔ': 185,
            ' uw': 186,
            'da ': 187,
            'ubɔ': 188,
            'ɛnɔ': 189,
            aan: 190,
            amu: 191,
            eny: 192,
            'kɔ ': 193,
            'ɛla': 194,
            ' mɔ': 195,
            adu: 196,
            bun: 197,
            ndi: 198,
            'a m': 199,
            nsu: 200,
            sia: 201,
            'o n': 202,
            anu: 203,
            nku: 204,
            lit: 205,
            bam: 206,
            'e n': 207,
            gyi: 208,
            'lɔ.': 209,
            'se ': 210,
            'ɔ u': 211,
            'o b': 212,
            'o k': 213,
            'nɔ ': 214,
            'te ': 215,
            'su-': 216,
            ama: 217,
            ika: 218,
            kam: 219,
            kud: 220,
            'ɔdu': 221,
            amm: 222,
            'ku-': 223,
            'o ɔ': 224,
            ken: 225,
            sie: 226,
            'bu ': 227,
            'a y': 228,
            idi: 229,
            nwi: 230,
            'o. ': 231,
            'a e': 232,
            ' ak': 233,
            aad: 234,
            'ɛdi': 235,
            ekp: 236,
            ' ɔt': 237,
            aku: 238,
            'u-n': 239,
            'ɔlɔ': 240,
            baa: 241,
            '. b': 242,
            bat: 243,
            'akɔ': 244,
            kad: 245,
            ine: 246,
            udi: 247,
            'ba ': 248,
            'sɔ ': 249,
            '́nu': 250,
            'lɛk': 251,
            tin: 252,
            'lɛm': 253,
            bin: 254,
            ami: 255,
            'ás': 256,
            'du ': 257,
            ati: 258,
            'a-m': 259,
            'ɔbl': 260,
            ' un': 261,
            ' ub': 262,
            kun: 263,
            iku: 264,
            akp: 265,
            '́di': 266,
            'tu ': 267,
            'lɛd': 268,
            ila: 269,
            'e l': 270,
            ete: 271,
            'ƒɔ ': 272,
            unw: 273,
            een: 274,
            'lɛ́': 275,
            'át': 276,
            'ɛ k': 277,
            'yu ': 278,
            'i ƒ': 279,
            ' mu': 280,
            bia: 281,
            ial: 282,
            '.” ': 283,
            '́bo': 284,
            'tɔ ': 285,
            ' ɔl': 286,
            gba: 287,
            'ét': 288,
            'ná': 289,
            'ɔda': 290,
            'amɛ': 291,
            kay: 292,
            bul: 293,
            bit: 294,
            'mo.': 295,
            'kɛ ': 296,
            ' ad': 297,
            'di.': 298,
            ' ab': 299,
            'bɔd': 300
        }
    };
    exports.default = lef;
});
//# sourceMappingURL=lef.js.map