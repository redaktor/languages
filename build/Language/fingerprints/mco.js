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
    const mco = {
        id: 'mco',
        name: 'Mixe, Coatlan',
        trigrams: { 'xy ': 0,
            ' je': 1,
            cxy: 2,
            ajc: 3,
            ' aj': 4,
            jcx: 5,
            ajt: 6,
            'ch ': 7,
            ' hu': 8,
            'huɨ': 9,
            ' ja': 10,
            'je ': 11,
            ' mɨ': 12,
            ' co': 13,
            'ɨch': 14,
            'ty ': 15,
            hui: 16,
            'bɨ ': 17,
            ' ma': 18,
            'y m': 19,
            jad: 20,
            'y y': 21,
            ' ca': 22,
            'y j': 23,
            'co ': 24,
            yaj: 25,
            'uɨd': 26,
            'y\'a': 27,
            'ɨdi': 28,
            ' tɨ': 29,
            'jäy': 30,
            uin: 31,
            dio: 32,
            'ɨɨd': 33,
            ios: 34,
            'mɨɨ': 35,
            ' di': 36,
            ' ch': 37,
            'ma ': 38,
            'os ': 39,
            'ca\'': 40,
            'ɨxy': 41,
            jty: 42,
            '\'aj': 43,
            naj: 44,
            'y, ': 45,
            'y a': 46,
            'ɨjc': 47,
            'a\' ': 48,
            ' an': 49,
            'ibɨ': 50,
            ' ya': 51,
            adu: 52,
            'du\'': 53,
            dib: 54,
            'äy ': 55,
            ana: 56,
            'y. ': 57,
            '\'n ': 58,
            ' yɨ': 59,
            'u\'n': 60,
            'gɨx': 61,
            'cɨx': 62,
            'tɨ ': 63,
            chi: 64,
            ' y\'': 65,
            nej: 66,
            mii: 67,
            'ɨd ': 68,
            'y c': 69,
            'hi ': 70,
            'h a': 71,
            ' mi': 72,
            '. c': 73,
            ' e ': 74,
            's y': 75,
            iic: 76,
            ich: 77,
            'y n': 78,
            'ɨm ': 79,
            ', c': 80,
            ' ne': 81,
            ' yt': 82,
            jes: 83,
            'ɨɨc': 84,
            ' na': 85,
            'y t': 86,
            ' jɨ': 87,
            'ej ': 88,
            'ɨpy': 89,
            'ɨn ': 90,
            'py ': 91,
            etz: 92,
            'jt ': 93,
            ' ym': 94,
            ', e': 95,
            'tz ': 96,
            'e\' ': 97,
            ' ɨɨ': 98,
            ' ni': 99,
            ' jä': 100,
            'a\'ñ': 101,
            ' yc': 102,
            'ymɨ': 103,
            jot: 104,
            ' xy': 105,
            'oy ': 106,
            'y h': 107,
            'ɨ m': 108,
            'yɨ ': 109,
            'ɨɨy': 110,
            'ɨna': 111,
            ooy: 112,
            ' et': 113,
            'esú': 114,
            'sús': 115,
            ' tü': 116,
            'ɨgɨ': 117,
            'tüg': 118,
            'ɨ j': 119,
            'ɨbɨ': 120,
            'je\'': 121,
            aad: 122,
            'yɨc': 123,
            ' tz': 124,
            'ɨ y': 125,
            'jc ': 126,
            may: 127,
            'mɨn': 128,
            naa: 129,
            '\' y': 130,
            'n n': 131,
            'mɨj': 132,
            'ús ': 133,
            ', j': 134,
            'yɨ\'': 135,
            'ɨty': 136,
            ady: 137,
            'dzɨ': 138,
            'e j': 139,
            ' yj': 140,
            'ɨ\' ': 141,
            'ɨy ': 142,
            '. j': 143,
            apx: 144,
            'ytɨ': 145,
            'nañ': 146,
            ada: 147,
            'cy ': 148,
            'tɨy': 149,
            ajp: 150,
            'i j': 151,
            '\' a': 152,
            'ɨ a': 153,
            'üg ': 154,
            ujc: 155,
            'pɨ ': 156,
            'dy ': 157,
            ayu: 158,
            'xpɨ': 159,
            yuc: 160,
            ' pa': 161,
            'e c': 162,
            'jtɨ': 163,
            '\'ñ ': 164,
            ung: 165,
            'e m': 166,
            paa: 167,
            'a j': 168,
            'ɨ c': 169,
            ' oy': 170,
            inm: 171,
            'yjä': 172,
            'ycɨ': 173,
            'h m': 174,
            'ɨy\'': 175,
            'ɨ n': 176,
            aay: 177,
            'ygɨ': 178,
            'o j': 179,
            'ɨhu': 180,
            'ma\'': 181,
            yhu: 182,
            ris: 183,
            'pɨd': 184,
            aty: 185,
            nma: 186,
            sto: 187,
            hua: 188,
            'o y': 189,
            'xy.': 190,
            'xɨɨ': 191,
            'bɨc': 192,
            hue: 193,
            ' pɨ': 194,
            cri: 195,
            ind: 196,
            ist: 197,
            ': ―': 198,
            'jcɨ': 199,
            ndz: 200,
            'üg\'': 201,
            'ɨ̈y': 202,
            'ɨ t': 203,
            yii: 204,
            'ɨcx': 205,
            'xy,': 206,
            ' nɨ': 207,
            'jɨm': 208,
            tun: 209,
            'ybɨ': 210,
            'n j': 211,
            'zɨn': 212,
            'ngɨ': 213,
            ' pe': 214,
            'nɨm': 215,
            aax: 216,
            'jɨh': 217,
            'tɨg': 218,
            jhu: 219,
            'n y': 220,
            'bɨj': 221,
            '\' j': 222,
            'añ ': 223,
            '\'ay': 224,
            'en ': 225,
            'ɨxp': 226,
            'm j': 227,
            'ñ j': 228,
            ' tu': 229,
            'to ': 230,
            'mɨb': 231,
            tza: 232,
            'ɨdɨ': 233,
            'n m': 234,
            '\'ix': 235,
            'ɨgo': 236,
            xhu: 237,
            'n\'i': 238,
            ach: 239,
            ajn: 240,
            ' oo': 241,
            cap: 242,
            'e t': 243,
            'om ': 244,
            'cɨy': 245,
            'ɨ. ': 246,
            ' yh': 247,
            'tɨj': 248,
            'yb ': 249,
            jac: 250,
            jat: 251,
            'mɨd': 252,
            '. e': 253,
            'pɨn': 254,
            'uc ': 255,
            'ayɨ': 256,
            ' ju': 257,
            tzo: 258,
            'ɨjp': 259,
            'c\'a': 260,
            'in\'': 261,
            ' nm': 262,
            'däg': 263,
            'ypɨ': 264,
            ' ti': 265,
            'düg': 266,
            'h n': 267,
            'dɨj': 268,
            'cɨn': 269,
            '\'ad': 270,
            'h j': 271,
            'ɨma': 272,
            'a y': 273,
            'ay ': 274,
            com: 275,
            'i a': 276,
            ocy: 277,
            'ɨp ': 278,
            'ócɨ': 279,
            '\'óc': 280,
            'it ': 281,
            'g\'ó': 282,
            'ccɨ': 283,
            'ɨ, ': 284,
            'ɨx ': 285,
            aac: 286,
            nay: 287,
            ytu: 288,
            ' jë': 289,
            'mɨc': 290,
            'aj\'': 291,
            aan: 292,
            ' nd': 293,
            '\'it': 294,
            't n': 295,
            'gy ': 296,
            'nmɨ': 297,
            'uɨɨ': 298,
            ijx: 299,
            '\' m': 300
        }
    };
    exports.default = mco;
});
//# sourceMappingURL=mco.js.map