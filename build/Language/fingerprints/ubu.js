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
    const ubu = {
        id: 'ubu',
        name: 'Umbu Ungu',
        trigrams: { ' ni': 0,
            ili: 1,
            ' se': 2,
            nga: 3,
            'ga ': 4,
            ' ko': 5,
            ndo: 6,
            olo: 7,
            ' ye': 8,
            ' mo': 9,
            omb: 10,
            ele: 11,
            emo: 12,
            'pa ': 13,
            ono: 14,
            ulu: 15,
            mol: 16,
            ini: 17,
            'a k': 18,
            ing: 19,
            'li ': 20,
            'ne ': 21,
            mbo: 22,
            'ma ': 23,
            ngi: 24,
            kin: 25,
            'a p': 26,
            'a m': 27,
            ' na': 28,
            ' si': 29,
            ' ka': 30,
            lem: 31,
            'mu ': 32,
            'le ': 33,
            'ku ': 34,
            ' ki': 35,
            ang: 36,
            imu: 37,
            imb: 38,
            man: 39,
            ung: 40,
            nia: 41,
            ngu: 42,
            umu: 43,
            mba: 44,
            ' pu': 45,
            kol: 46,
            'ia ': 47,
            'na ': 48,
            ong: 49,
            ole: 50,
            pil: 51,
            'u s': 52,
            ond: 53,
            'u y': 54,
            yom: 55,
            mon: 56,
            'a s': 57,
            nim: 58,
            aku: 59,
            kan: 60,
            mel: 61,
            'aa ': 62,
            'a n': 63,
            yem: 64,
            pul: 65,
            ' yo': 66,
            'lu ': 67,
            'u k': 68,
            'mo ': 69,
            ' ak': 70,
            kon: 71,
            ' to': 72,
            ' yu': 73,
            iri: 74,
            'o k': 75,
            'u m': 76,
            ' on': 77,
            'ko ': 78,
            oko: 79,
            rim: 80,
            oma: 81,
            ' ma': 82,
            'o m': 83,
            ' pi': 84,
            ' li': 85,
            mun: 86,
            bom: 87,
            ipa: 88,
            rin: 89,
            'ba ': 90,
            'no ': 91,
            'a y': 92,
            naa: 93,
            oli: 94,
            opa: 95,
            ' pe': 96,
            '.’ ': 97,
            '’ n': 98,
            lim: 99,
            'lo ': 100,
            ' pa': 101,
            'gu ': 102,
            ane: 103,
            ' me': 104,
            and: 105,
            ' un': 106,
            'e n': 107,
            ndu: 108,
            one: 109,
            'ni ': 110,
            'u p': 111,
            'pu ': 112,
            ale: 113,
            'e k': 114,
            'u n': 115,
            '” n': 116,
            'u. ': 117,
            'i k': 118,
            'do ': 119,
            und: 120,
            nin: 121,
            'e s': 122,
            ' no': 123,
            'a o': 124,
            ' ke': 125,
            lip: 126,
            rum: 127,
            'mu.': 128,
            sik: 129,
            '.” ': 130,
            ema: 131,
            'o p': 132,
            'gi ': 133,
            ' ol': 134,
            nop: 135,
            ' ul': 136,
            'yu ': 137,
            non: 138,
            nir: 139,
            sip: 140,
            'gi.': 141,
            eme: 142,
            lie: 143,
            'i y': 144,
            iku: 145,
            'e y': 146,
            'e m': 147,
            eri: 148,
            'a u': 149,
            oru: 150,
            'o s': 151,
            'ye ': 152,
            ' ta': 153,
            mbu: 154,
            ola: 155,
            'e p': 156,
            opu: 157,
            'a t': 158,
            ngo: 159,
            'i s': 160,
            'a l': 161,
            end: 162,
            yun: 163,
            'i. ': 164,
            lio: 165,
            'se ': 166,
            'o n': 167,
            ind: 168,
            anu: 169,
            uni: 170,
            'bo ': 171,
            pal: 172,
            dol: 173,
            omo: 174,
            min: 175,
            uma: 176,
            ' we': 177,
            mbi: 178,
            nok: 179,
            'po ': 180,
            ' mu': 181,
            'nu ': 182,
            amb: 183,
            umb: 184,
            nge: 185,
            'i n': 186,
            ' mi': 187,
            'a a': 188,
            'u t': 189,
            sen: 190,
            'o o': 191,
            'u l': 192,
            'ka ': 193,
            '. a': 194,
            'a, ': 195,
            'i.’': 196,
            awi: 197,
            'i p': 198,
            ano: 199,
            sin: 200,
            'o y': 201,
            'du ': 202,
            sel: 203,
            opo: 204,
            lan: 205,
            lop: 206,
            uli: 207,
            epa: 208,
            ndi: 209,
            '-ki': 210,
            '-ko': 211,
            'pe ': 212,
            nan: 213,
            'i m': 214,
            'li.': 215,
            'lu-': 216,
            'e o': 217,
            ilk: 218,
            ana: 219,
            'u-k': 220,
            pea: 221,
            lom: 222,
            eng: 223,
            kir: 224,
            'a-k': 225,
            ali: 226,
            'bu ': 227,
            ton: 228,
            ori: 229,
            ima: 230,
            lor: 231,
            lea: 232,
            sep: 233,
            usi: 234,
            nda: 235,
            ene: 236,
            nde: 237,
            eko: 238,
            ': “': 239,
            kum: 240,
            una: 241,
            ' an': 242,
            paa: 243,
            lka: 244,
            sus: 245,
            lku: 246,
            'e a': 247,
            isi: 248,
            esu: 249,
            yes: 250,
            'o t': 251,
            ean: 252,
            lko: 253,
            'si ': 254,
            uru: 255,
            top: 256,
            lum: 257,
            ' wa': 258,
            bal: 259,
            ipu: 260,
            '. y': 261,
            'u u': 262,
            mil: 263,
            'o. ': 264,
            'na-': 265,
            'u a': 266,
            ' om': 267,
            sek: 268,
            'da ': 269,
            amo: 270,
            sir: 271,
            dop: 272,
            emb: 273,
            'mbá': 274,
            sil: 275,
            wil: 276,
            '. k': 277,
            'io ': 278,
            asi: 279,
            ika: 280,
            olk: 281,
            tok: 282,
            ' ku': 283,
            wen: 284,
            ulk: 285,
            'ea ': 286,
            'o l': 287,
            ' le': 288,
            uku: 289,
            eli: 290,
            ' po': 291,
            'a w': 292,
            ara: 293,
            gil: 294,
            'mél': 295,
            ' aw': 296,
            'i a': 297,
            'o a': 298,
            mul: 299,
            iki: 300
        }
    };
    exports.default = ubu;
});
//# sourceMappingURL=ubu.js.map