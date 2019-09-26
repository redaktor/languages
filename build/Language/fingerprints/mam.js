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
    const mam = {
        id: 'mam',
        name: 'Mam, Northern',
        trigrams: { ' tu': 0,
            ' ky': 1,
            'n t': 2,
            'b\'i': 3,
            '\'n ': 4,
            'il ': 5,
            'u\'n': 6,
            '\'il': 7,
            'tu\'': 8,
            'l t': 9,
            ' ti': 10,
            aal: 11,
            'al ': 12,
            ' b\'': 13,
            tuj: 14,
            'uj ': 15,
            jaa: 16,
            'ti\'': 17,
            kya: 18,
            'an ': 19,
            iil: 20,
            xja: 21,
            ' xj': 22,
            'j t': 23,
            '\'ix': 24,
            aqi: 25,
            'ix ': 26,
            ' ju': 27,
            '\'j ': 28,
            qii: 29,
            yaq: 30,
            'i\'j': 31,
            een: 32,
            'b\'a': 33,
            tii: 34,
            'x t': 35,
            'en ': 36,
            tza: 37,
            'j k': 38,
            ' mi': 39,
            'un ': 40,
            lee: 41,
            'aj ': 42,
            ' tk': 43,
            'ib\'': 44,
            jun: 45,
            ipa: 46,
            nam: 47,
            'l x': 48,
            iip: 49,
            tna: 50,
            'ky\'': 51,
            'l k': 52,
            ' tw': 53,
            ' te': 54,
            'at ': 55,
            'i\' ': 56,
            'ok ': 57,
            ' to': 58,
            'l b': 59,
            kle: 60,
            ' tn': 61,
            'i\'n': 62,
            okl: 63,
            'l, ': 64,
            'n k': 65,
            '. t': 66,
            'qa ': 67,
            'ax ': 68,
            '\' t': 69,
            'y\' ': 70,
            eet: 71,
            pak: 72,
            aky: 73,
            tee: 74,
            't t': 75,
            'n x': 76,
            ' at': 77,
            uun: 78,
            twi: 79,
            naq: 80,
            aan: 81,
            '\' (': 82,
            kyo: 83,
            'a\'n': 84,
            ool: 85,
            laa: 86,
            ' ta': 87,
            juu: 88,
            ' tz': 89,
            'l. ': 90,
            'ab\'': 91,
            'q\'i': 92,
            'qe ': 93,
            zan: 94,
            yok: 95,
            chi: 96,
            ', t': 97,
            ') k': 98,
            ' qa': 99,
            'a t': 100,
            kyx: 101,
            ' ch': 102,
            ' aj': 103,
            anq: 104,
            'l a': 105,
            'x k': 106,
            iin: 107,
            itz: 108,
            'ol ': 109,
            'b\' ': 110,
            'nq\'': 111,
            'tz ': 112,
            'aq\'': 113,
            '\'an': 114,
            kye: 115,
            tok: 116,
            taa: 117,
            ' tx': 118,
            ' ma': 119,
            '\'ya': 120,
            mit: 121,
            ' tb': 122,
            'et ': 123,
            iti: 124,
            'tb\'': 125,
            'tz\'': 126,
            ala: 127,
            ' ii': 128,
            'ma ': 129,
            'j j': 130,
            wit: 131,
            '\'ib': 132,
            'ya\'': 133,
            'k t': 134,
            laj: 135,
            ' no': 136,
            'wi\'': 137,
            ana: 138,
            ' ni': 139,
            'ob\'': 140,
            'al,': 141,
            'e x': 142,
            noq: 143,
            kyt: 144,
            'nx ': 145,
            'n b': 146,
            ' ja': 147,
            kyi: 148,
            ook: 149,
            mal: 150,
            't k': 151,
            kub: 152,
            'nb\'': 153,
            'il.': 154,
            'q\'u': 155,
            'a\'w': 156,
            yoo: 157,
            'ub\'': 158,
            ' tj': 159,
            'oq ': 160,
            'am ': 161,
            '\'ee': 162,
            ' ko': 163,
            '\'tz': 164,
            'i\'y': 165,
            'l j': 166,
            iky: 167,
            'x m': 168,
            'ik\'': 169,
            'il,': 170,
            'ji\'': 171,
            'b\'e': 172,
            'qi\'': 173,
            aay: 174,
            'a\' ': 175,
            '\'aa': 176,
            aji: 177,
            yee: 178,
            'k\'u': 179,
            xii: 180,
            '\' k': 181,
            tky: 182,
            'j x': 183,
            anm: 184,
            txi: 185,
            kyj: 186,
            aaw: 187,
            ila: 188,
            ' wi': 189,
            '\'a\'': 190,
            'te ': 191,
            ina: 192,
            nma: 193,
            'am.': 194,
            iib: 195,
            'j a': 196,
            yax: 197,
            '\'aj': 198,
            'tx\'': 199,
            too: 200,
            'u\'j': 201,
            'o\'n': 202,
            ' aa': 203,
            lqe: 204,
            iya: 205,
            etz: 206,
            aaj: 207,
            unx: 208,
            'e t': 209,
            '\'b\'': 210,
            ' (2': 211,
            '. k': 212,
            'm. ': 213,
            tja: 214,
            ' (1': 215,
            '\' b': 216,
            'jb\'': 217,
            yja: 218,
            yan: 219,
            ' q\'': 220,
            ntl: 221,
            '\'wn': 222,
            'tl ': 223,
            'm t': 224,
            pib: 225,
            'za\'': 226,
            '\'ma': 227,
            naa: 228,
            imo: 229,
            'n a': 230,
            him: 231,
            wna: 232,
            yii: 233,
            yxo: 234,
            ilq: 235,
            tku: 236,
            'xi\'': 237,
            'ja\'': 238,
            ixq: 239,
            inb: 240,
            mil: 241,
            xoo: 242,
            tan: 243,
            'l q': 244,
            xan: 245,
            maa: 246,
            'n m': 247,
            sla: 248,
            xqa: 249,
            'el ': 250,
            ', a': 251,
            kaa: 252,
            'm, ': 253,
            'z t': 254,
            'am,': 255,
            una: 256,
            'n j': 257,
            ' ok': 258,
            nan: 259,
            yal: 260,
            ' t-': 261,
            ama: 262,
            unt: 263,
            'l n': 264,
            'ex ': 265,
            '\'xa': 266,
            yaa: 267,
            uma: 268,
            'ay ': 269,
            ', q': 270,
            kop: 271,
            'k\'b': 272,
            lab: 273,
            ' qe': 274,
            opi: 275,
            pan: 276,
            'al.': 277,
            'q\'t': 278,
            ntz: 279,
            'n. ': 280,
            'on ': 281,
            'aq ': 282,
            'ee ': 283,
            'q t': 284,
            'n n': 285,
            '\'un': 286,
            'e k': 287,
            eex: 288,
            'i\'x': 289,
            ' an': 290,
            xna: 291,
            ntn: 292,
            'n, ': 293,
            tko: 294,
            ant: 295,
            yta: 296,
            'u\'m': 297,
            aax: 298,
            nii: 299,
            int: 300
        }
    };
    exports.default = mam;
});
//# sourceMappingURL=mam.js.map