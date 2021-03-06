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
    const quc = {
        id: 'quc',
        name: 'K\'iche\', Central',
        trigrams: { ' ri': 0,
            'ri ': 1,
            ' ch': 2,
            ' ka': 3,
            'al ': 4,
            'ik ': 5,
            'b\'a': 6,
            ' ta': 7,
            'aq ': 8,
            'aj ': 9,
            ach: 10,
            '\'al': 11,
            ina: 12,
            'pa ': 13,
            nik: 14,
            ' pa': 15,
            'ch ': 16,
            che: 17,
            ani: 18,
            ech: 19,
            ' wi': 20,
            tal: 21,
            taq: 22,
            'ab\'': 23,
            'ya\'': 24,
            ' ku': 25,
            ' we': 26,
            'we ': 27,
            jel: 28,
            ' ya': 29,
            oje: 30,
            'el ': 31,
            noj: 32,
            ono: 33,
            '\'ta': 34,
            'a\'t': 35,
            naq: 36,
            'i u': 37,
            chi: 38,
            ' ro': 39,
            'k\'a': 40,
            jun: 41,
            'a r': 42,
            ' ju': 43,
            laj: 44,
            '\'an': 45,
            'an ': 46,
            win: 47,
            ' k\'': 48,
            xik: 49,
            ron: 50,
            'l c': 51,
            mal: 52,
            ' xu': 53,
            'q\'a': 54,
            nam: 55,
            xuq: 56,
            kak: 57,
            hec: 58,
            ' ut': 59,
            wac: 60,
            'ta ': 61,
            ' uw': 62,
            'uk\'': 63,
            'i k': 64,
            'k, ': 65,
            'ik,': 66,
            aji: 67,
            man: 68,
            aqa: 69,
            are: 70,
            ' ja': 71,
            ala: 72,
            ', k': 73,
            uwa: 74,
            ' ar': 75,
            're ': 76,
            uch: 77,
            cho: 78,
            ' ma': 79,
            'l w': 80,
            'ib\'': 81,
            ' ru': 82,
            'k\'u': 83,
            'e\' ': 84,
            axi: 85,
            'am ': 86,
            qan: 87,
            'h k': 88,
            cha: 89,
            'e k': 90,
            'e r': 91,
            ' uk': 92,
            ' uc': 93,
            uma: 94,
            'hi ': 95,
            tzi: 96,
            '\' k': 97,
            ', x': 98,
            'e u': 99,
            '\'at': 100,
            utz: 101,
            'a j': 102,
            una: 103,
            'k k': 104,
            'uq ': 105,
            'un ': 106,
            'he ': 107,
            ' ki': 108,
            'b\'e': 109,
            'ub\'': 110,
            'l t': 111,
            kab: 112,
            tin: 113,
            taj: 114,
            'j, ': 115,
            'k (': 116,
            'q y': 117,
            ' q\'': 118,
            ami: 119,
            mit: 120,
            zij: 121,
            'l r': 122,
            chk: 123,
            ' xa': 124,
            'j t': 125,
            ' ke': 126,
            'k\'o': 127,
            maj: 128,
            'ak\'': 129,
            'e t': 130,
            'a t': 131,
            '. r': 132,
            'ij ': 133,
            'ob\'': 134,
            'i\' ': 135,
            'q k': 136,
            ' ni': 137,
            'l, ': 138,
            'b\' ': 139,
            'q r': 140,
            uqe: 141,
            ') r': 142,
            ata: 143,
            aki: 144,
            'wa\'': 145,
            'l u': 146,
            'i q': 147,
            jac: 148,
            'a k': 149,
            ' e ': 150,
            hke: 151,
            ' ne': 152,
            '\' r': 153,
            'j r': 154,
            '. u': 155,
            'uq\'': 156,
            'tb\'': 157,
            ali: 158,
            awa: 159,
            '\'ma': 160,
            ' je': 161,
            raj: 162,
            'i r': 163,
            'a\' ': 164,
            'l k': 165,
            'j k': 166,
            nim: 167,
            'il ': 168,
            lik: 169,
            'b\'i': 170,
            alt: 171,
            ltz: 172,
            chu: 173,
            rum: 174,
            'ya ': 175,
            'uj ': 176,
            hom: 177,
            isa: 178,
            sax: 179,
            'j j': 180,
            kay: 181,
            atb: 182,
            'a\'m': 183,
            'xa ': 184,
            ' na': 185,
            ama: 186,
            oma: 187,
            lew: 188,
            'ri\'': 189,
            ule: 190,
            ', r': 191,
            ' ti': 192,
            ima: 193,
            kaj: 194,
            '\'ut': 195,
            '\'as': 196,
            ' ra': 197,
            jis: 198,
            ema: 199,
            asl: 200,
            lem: 201,
            '\'u ': 202,
            sle: 203,
            uka: 204,
            ' wa': 205,
            ruk: 206,
            kar: 207,
            '\'o ': 208,
            'al,': 209,
            aja: 210,
            'a w': 211,
            'ax ': 212,
            'i w': 213,
            jaw: 214,
            uti: 215,
            'j c': 216,
            'a n': 217,
            hul: 218,
            'ik\'': 219,
            'a c': 220,
            ' ub': 221,
            'q t': 222,
            'l. ': 223,
            '\' w': 224,
            'h r': 225,
            'n k': 226,
            aya: 227,
            kat: 228,
            wax: 229,
            'e n': 230,
            eta: 231,
            'ta\'': 232,
            'n r': 233,
            '\'il': 234,
            'na ': 235,
            ' tz': 236,
            'n w': 237,
            'ke ': 238,
            'e c': 239,
            'l p': 240,
            'ne ': 241,
            'it ': 242,
            'k\' ': 243,
            awi: 244,
            'j w': 245,
            'ij,': 246,
            chw: 247,
            kub: 248,
            apa: 249,
            'n c': 250,
            riq: 251,
            'k p': 252,
            'j u': 253,
            'i j': 254,
            kac: 255,
            'k r': 256,
            hik: 257,
            ich: 258,
            'i e': 259,
            'je\'': 260,
            'i n': 261,
            hak: 262,
            'k x': 263,
            'ch\'': 264,
            eri: 265,
            'e j': 266,
            ', c': 267,
            ' re': 268,
            ela: 269,
            'a\'i': 270,
            kib: 271,
            saj: 272,
            uto: 273,
            kec: 274,
            'n t': 275,
            tob: 276,
            juj: 277,
            '\'ik': 278,
            ari: 279,
            'qe\'': 280,
            ' uq': 281,
            'tz ': 282,
            xaq: 283,
            ' qa': 284,
            jas: 285,
            hwa: 286,
            aju: 287,
            ', u': 288,
            '\'am': 289,
            ' ko': 290,
            ita: 291,
            '; x': 292,
            ' ap': 293,
            'a u': 294,
            'wi ': 295,
            jer: 296,
            'aj,': 297,
            'q w': 298,
            '\', ': 299,
            'm r': 300
        }
    };
    exports.default = quc;
});
//# sourceMappingURL=quc.js.map