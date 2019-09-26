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
    const sey = {
        id: 'sey',
        name: 'Secoya',
        trigrams: { ' pa': 0,
            'ye ': 1,
            'e p': 2,
            'a\'i': 3,
            ' ku': 4,
            pai: 5,
            'pa\'': 6,
            ' ka': 7,
            'e k': 8,
            kua: 9,
            iye: 10,
            aye: 11,
            ' si': 12,
            'ai ': 13,
            'je ': 14,
            'i k': 15,
            ' ja': 16,
            '\'ye': 17,
            'e, ': 18,
            'i\'n': 19,
            '\'ne': 20,
            kui: 21,
            'i p': 22,
            'ui\'': 23,
            'ji ': 24,
            'ne ': 25,
            'si\'': 26,
            'a\'y': 27,
            'se\'': 28,
            oye: 29,
            pay: 30,
            'i\'a': 31,
            'a p': 32,
            iji: 33,
            'ua\'': 34,
            'yë ': 35,
            ' ye': 36,
            'ayë': 37,
            'e. ': 38,
            'e\'o': 39,
            uas: 40,
            '\'ij': 41,
            're ': 42,
            'e\'e': 43,
            epa: 44,
            ' ma': 45,
            kay: 46,
            'ja\'': 47,
            'ë k': 48,
            'ajë': 49,
            aiy: 50,
            '\'iy': 51,
            sia: 52,
            'jë ': 53,
            'ye,': 54,
            '\'a ': 55,
            aje: 56,
            aij: 57,
            kat: 58,
            'a k': 59,
            'ia\'': 60,
            rep: 61,
            'pi ': 62,
            ' jë': 63,
            ' kë': 64,
            peo: 65,
            'ñe ': 66,
            'na ': 67,
            ' ne': 68,
            'de\'': 69,
            'ña ': 70,
            'to ': 71,
            'wa\'': 72,
            ' de': 73,
            mai: 74,
            ' pe': 75,
            ato: 76,
            tut: 77,
            ' tu': 78,
            '\'ña': 79,
            asa: 80,
            'e s': 81,
            utu: 82,
            ', j': 83,
            'we\'': 84,
            '\'i ': 85,
            'e\'ñ': 86,
            'i, ': 87,
            '\'oy': 88,
            '\'e ': 89,
            'ye.': 90,
            ', i': 91,
            'e t': 92,
            ere: 93,
            ' ts': 94,
            yek: 95,
            'i t': 96,
            ' ko': 97,
            jaj: 98,
            iwa: 99,
            eje: 100,
            ' iy': 101,
            'ë p': 102,
            'o k': 103,
            ire: 104,
            ' ak': 105,
            'ko ': 106,
            '. j': 107,
            ' te': 108,
            kaj: 109,
            'ëka': 110,
            oji: 111,
            eoj: 112,
            ako: 113,
            'këa': 114,
            'a\'ñ': 115,
            ', k': 116,
            '\'ñe': 117,
            epi: 118,
            'tu ': 119,
            'a j': 120,
            '\'ë ': 121,
            'a\'ë': 122,
            'te\'': 123,
            'kë ': 124,
            'jëñ': 125,
            ' sa': 126,
            ese: 127,
            yer: 128,
            ina: 129,
            yep: 130,
            are: 131,
            'ëña': 132,
            aya: 133,
            ija: 134,
            'e j': 135,
            ije: 136,
            asi: 137,
            'ni ': 138,
            ' ai': 139,
            'añe': 140,
            ani: 141,
            'ekë': 142,
            'e y': 143,
            eja: 144,
            yej: 145,
            ' to': 146,
            '\'o ': 147,
            'ëay': 148,
            mak: 149,
            wes: 150,
            'ë t': 151,
            iti: 152,
            aka: 153,
            'a\'a': 154,
            ' it': 155,
            'e i': 156,
            '. s': 157,
            'ti ': 158,
            'añu': 159,
            '. k': 160,
            'a\'w': 161,
            'e n': 162,
            'i d': 163,
            '\'ay': 164,
            kok: 165,
            ase: 166,
            oka: 167,
            'ka ': 168,
            ' ña': 169,
            '\'we': 170,
            'ë, ': 171,
            'pa ': 172,
            'a s': 173,
            ise: 174,
            'ua ': 175,
            'ë s': 176,
            ' iw': 177,
            oya: 178,
            jai: 179,
            'akë': 180,
            say: 181,
            toy: 182,
            'kañ': 183,
            kai: 184,
            'i y': 185,
            owa: 186,
            'eñe': 187,
            'i i': 188,
            'ji,': 189,
            'jët': 190,
            sik: 191,
            'pë ': 192,
            'pëa': 193,
            'neñ': 194,
            awe: 195,
            eso: 196,
            'a, ': 197,
            'ëtë': 198,
            eoy: 199,
            'ipë': 200,
            'apë': 201,
            '\'re': 202,
            'ëna': 203,
            saj: 204,
            'kë\'': 205,
            're,': 206,
            'a t': 207,
            'ai̱': 208,
            ama: 209,
            'nëk': 210,
            'ya ': 211,
            'a y': 212,
            '\'in': 213,
            'ta\'': 214,
            'o p': 215,
            'u p': 216,
            'i s': 217,
            'e m': 218,
            'a\'m': 219,
            'uañ': 220,
            'e a': 221,
            'i m': 222,
            ari: 223,
            aja: 224,
            '. t': 225,
            rip: 226,
            dar: 227,
            iku: 228,
            '-në': 229,
            kaw: 230,
            'a-n': 231,
            iwe: 232,
            oni: 233,
            air: 234,
            'ñua': 235,
            ore: 236,
            'ñes': 237,
            ', s': 238,
            iko: 239,
            nej: 240,
            'o s': 241,
            yay: 242,
            'ea\'': 243,
            'o a': 244,
            'i. ': 245,
            tsi: 246,
            'e d': 247,
            ose: 248,
            yaj: 249,
            'ñej': 250,
            'i̱ ': 251,
            'aña': 252,
            'ña-': 253,
            pan: 254,
            '\'ir': 255,
            ', p': 256,
            nij: 257,
            'se ': 258,
            'ñaj': 259,
            'ye\'': 260,
            'e\'r': 261,
            sos: 262,
            '\'me': 263,
            'jë,': 264,
            ' ñe': 265,
            kas: 266,
            ain: 267,
            'ë. ': 268,
            'a\'o': 269,
            aiw: 270,
            aip: 271,
            '. i': 272,
            sai: 273,
            ais: 274,
            'o\'i': 275,
            'e\'y': 276,
            'a. ': 277,
            'ëa ': 278,
            kor: 279,
            ' se': 280,
            'a ñ': 281,
            par: 282,
            waj: 283,
            'ë m': 284,
            'ë d': 285,
            kon: 286,
            apa: 287,
            'ja ': 288,
            'ma\'': 289,
            'ë y': 290,
            'ë j': 291,
            'a a': 292,
            oja: 293,
            jam: 294,
            're.': 295,
            'pi,': 296,
            'i j': 297,
            aku: 298,
            ' ti': 299,
            'tsë': 300
        }
    };
    exports.default = sey;
});
//# sourceMappingURL=sey.js.map