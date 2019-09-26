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
    const mtj = {
        id: 'mtj',
        name: 'Moskona',
        trigrams: { ' no': 0,
            ' er': 1,
            'ga ': 2,
            oga: 3,
            'a e': 4,
            nog: 5,
            'ot ': 6,
            'a o': 7,
            ' ro': 8,
            rot: 9,
            ' of': 10,
            ' ma': 11,
            nom: 12,
            era: 13,
            ' es': 14,
            mar: 15,
            omi: 16,
            'ig ': 17,
            'ok ': 18,
            'ra ': 19,
            jig: 20,
            'ar ': 21,
            ' ed': 22,
            sno: 23,
            nok: 24,
            ' ji': 25,
            eda: 26,
            'a n': 27,
            'ha ': 28,
            'un ': 29,
            ' yu': 30,
            'ui ': 31,
            oku: 32,
            'i e': 33,
            sha: 34,
            esh: 35,
            ' is': 36,
            'a y': 37,
            ' ti': 38,
            'fa ': 39,
            ofa: 40,
            ' mo': 41,
            tin: 42,
            eri: 43,
            ' do': 44,
            kun: 45,
            'r n': 46,
            'if ': 47,
            dok: 48,
            'ah ': 49,
            ', e': 50,
            isi: 51,
            isn: 52,
            'ak ': 53,
            'na ': 54,
            'a. ': 55,
            ' gu': 56,
            'da ': 57,
            ' di': 58,
            'ug ': 59,
            'en ': 60,
            ' ka': 61,
            'g m': 62,
            kak: 63,
            'ri ': 64,
            'in ': 65,
            ' mi': 66,
            erg: 67,
            'us ': 68,
            'es ': 69,
            yuw: 70,
            dui: 71,
            'a m': 72,
            '. e': 73,
            'mi ': 74,
            mis: 75,
            ' os': 76,
            uwa: 77,
            gug: 78,
            udu: 79,
            ofo: 80,
            ' ef': 81,
            'wa ': 82,
            'a, ': 83,
            rge: 84,
            'n m': 85,
            'n e': 86,
            'ta ': 87,
            ' oh': 88,
            jog: 89,
            fen: 90,
            sus: 91,
            'si ': 92,
            ' jo': 93,
            't m': 94,
            dif: 95,
            'on ': 96,
            ' ye': 97,
            oho: 98,
            hot: 99,
            fon: 100,
            lah: 101,
            lla: 102,
            all: 103,
            ' al': 104,
            'ni ': 105,
            ' ni': 106,
            'i o': 107,
            'k n': 108,
            ges: 109,
            odu: 110,
            'a i': 111,
            efe: 112,
            ijg: 113,
            'er ': 114,
            '. d': 115,
            yes: 116,
            's e': 117,
            jga: 118,
            'n o': 119,
            ' od': 120,
            esu: 121,
            ita: 122,
            'eg ': 123,
            's n': 124,
            'a d': 125,
            ' gi': 126,
            gij: 127,
            omo: 128,
            'a a': 129,
            'ka ': 130,
            'i n': 131,
            'ra.': 132,
            mif: 133,
            oke: 134,
            'a j': 135,
            'g e': 136,
            oro: 137,
            'du ': 138,
            'k e': 139,
            eci: 140,
            ete: 141,
            't o': 142,
            ' fe': 143,
            'um ': 144,
            'sa ': 145,
            ina: 146,
            'f d': 147,
            reg: 148,
            'a u': 149,
            ker: 150,
            'i i': 151,
            'ga.': 152,
            't, ': 153,
            'ef ': 154,
            ere: 155,
            ' me': 156,
            's o': 157,
            mon: 158,
            ' bu': 159,
            'ot,': 160,
            'it ': 161,
            rom: 162,
            'is ': 163,
            ' et': 164,
            ' yi': 165,
            ona: 166,
            ebr: 167,
            'i u': 168,
            ese: 169,
            ' em': 170,
            'og ': 171,
            ' or': 172,
            'a k': 173,
            'da,': 174,
            'g. ': 175,
            's j': 176,
            sis: 177,
            ' ek': 178,
            'a r': 179,
            ' ah': 180,
            ' du': 181,
            'ou ': 182,
            ' ud': 183,
            oso: 184,
            'ir ': 185,
            'og.': 186,
            omr: 187,
            'os ': 188,
            mre: 189,
            eke: 190,
            'r e': 191,
            osk: 192,
            eme: 193,
            'ej ': 194,
            'h o': 195,
            teu: 196,
            ' og': 197,
            'ja ': 198,
            'od ': 199,
            'g y': 200,
            ' \"': 201,
            'g n': 202,
            'g o': 203,
            'as ': 204,
            kef: 205,
            '\" ': 206,
            'ur ': 207,
            ', \\': 208,
            'eu ': 209,
            ' ok': 210,
            ' ow': 211,
            'f e': 212,
            ngg: 213,
            ' ei': 214,
            mou: 215,
            't e': 216,
            mof: 217,
            ime: 218,
            'i t': 219,
            'r j': 220,
            'a b': 221,
            isa: 222,
            ' en': 223,
            ris: 224,
            ' ke': 225,
            umo: 226,
            kur: 227,
            gur: 228,
            ggi: 229,
            git: 230,
            '. t': 231,
            'r o': 232,
            'g i': 233,
            sku: 234,
            aha: 235,
            bra: 236,
            'k o': 237,
            ' mu': 238,
            ' oi': 239,
            'a g': 240,
            'n i': 241,
            ' om': 242,
            bua: 243,
            rog: 244,
            'k m': 245,
            'of ': 246,
            's r': 247,
            ' ku': 248,
            cir: 249,
            'f m': 250,
            'a t': 251,
            eit: 252,
            kec: 253,
            'n y': 254,
            't d': 255,
            'ua ': 256,
            kri: 257,
            'a s': 258,
            oif: 259,
            'h e': 260,
            'ic ': 261,
            ren: 262,
            wok: 263,
            kus: 264,
            cic: 265,
            ' im': 266,
            mor: 267,
            uro: 268,
            usn: 269,
            ' je': 270,
            '. k': 271,
            ero: 272,
            esi: 273,
            oka: 274,
            ' ta': 275,
            'k i': 276,
            fom: 277,
            't y': 278,
            mod: 279,
            '.\"': 280,
            'i r': 281,
            ' ur': 282,
            ' eb': 283,
            ', d': 284,
            'n r': 285,
            osn: 286,
            ' ej': 287,
            ' se': 288,
            dec: 289,
            ifo: 290,
            'g, ': 291,
            'u g': 292,
            ' de': 293,
            'n. ': 294,
            tas: 295,
            ' ug': 296,
            owo: 297,
            yud: 298,
            mit: 299,
            ege: 300
        }
    };
    exports.default = mtj;
});
//# sourceMappingURL=mtj.js.map