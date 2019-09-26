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
    const xtd = {
        id: 'xtd',
        name: 'Mixtec, Diuxi-Tilantongo',
        trigrams: { ' xa': 0,
            'a\'a': 1,
            'xa ': 2,
            ' n‑': 3,
            'a k': 4,
            ' ku': 5,
            ' ña': 6,
            'ka ': 7,
            'a n': 8,
            ' ka': 9,
            'uu ': 10,
            'a x': 11,
            'ni ': 12,
            ' nu': 13,
            'n‑k': 14,
            '\'a ': 15,
            ' xi': 16,
            nuu: 17,
            jan: 18,
            '‑ia': 19,
            'ñay': 20,
            'da ': 21,
            ' te': 22,
            'te ': 23,
            'an ': 24,
            ayi: 25,
            yiu: 26,
            ini: 27,
            kuu: 28,
            ' na': 29,
            '\'an': 30,
            'iu ': 31,
            ' da': 32,
            ' ko': 33,
            '‑n ': 34,
            'u\'u': 35,
            ' nd': 36,
            ' ja': 37,
            '‑ka': 38,
            '. n': 39,
            '‑s ': 40,
            'a j': 41,
            'u k': 42,
            '\'u ': 43,
            chi: 44,
            'u n': 45,
            'ia ': 46,
            '‑da': 47,
            ' ia': 48,
            '\'a‑': 49,
            'uu‑': 50,
            ' tn': 51,
            tnu: 52,
            nda: 53,
            'e\'e': 54,
            'e n': 55,
            'ja\'': 56,
            'ni‑': 57,
            ian: 58,
            'u i': 59,
            'a. ': 60,
            ', t': 61,
            yuu: 62,
            any: 63,
            nyu: 64,
            uux: 65,
            'u x': 66,
            'a ñ': 67,
            'na ': 68,
            and: 69,
            'i\'i': 70,
            'xi\'': 71,
            ' se': 72,
            'a t': 73,
            'a‑i': 74,
            'ña\'': 75,
            'u ñ': 76,
            '‑ro': 77,
            'n x': 78,
            oio: 79,
            koi: 80,
            'ee‑': 81,
            '‑i ': 82,
            '\'in': 83,
            ada: 84,
            'ux ': 85,
            ida: 86,
            ija: 87,
            'se ': 88,
            'n n': 89,
            'an‑': 90,
            kid: 91,
            ' me': 92,
            'a, ': 93,
            'i n': 94,
            ' ju': 95,
            kue: 96,
            'aa ': 97,
            '\'e ': 98,
            daa: 99,
            ' in': 100,
            mee: 101,
            ani: 102,
            'hi ': 103,
            nde: 104,
            'nu\'': 105,
            uni: 106,
            ' ta': 107,
            'in ': 108,
            'e k': 109,
            ' ki': 110,
            'n. ': 111,
            'ɨn ': 112,
            'u‑i': 113,
            'io‑': 114,
            'ɨɨn': 115,
            'da\'': 116,
            'tu ': 117,
            'io ': 118,
            'i k': 119,
            ' ɨɨ': 120,
            'n‑x': 121,
            'a d': 122,
            ' je': 123,
            'va\'': 124,
            'ro ': 125,
            'i x': 126,
            'ña ': 127,
            'da‑': 128,
            'ku ': 129,
            'u. ': 130,
            'a‑n': 131,
            ' ma': 132,
            ndi: 133,
            nun: 134,
            'e x': 135,
            jes: 136,
            'nu ': 137,
            'o x': 138,
            'n, ': 139,
            'u‑s': 140,
            ', n': 141,
            'a i': 142,
            'ko ': 143,
            'a‑s': 144,
            '\'u‑': 145,
            'u t': 146,
            'u, ': 147,
            ' ch': 148,
            kad: 149,
            's. ': 150,
            '. k': 151,
            ' nt': 152,
            'o n': 153,
            'xe\'': 154,
            'a\'u': 155,
            und: 156,
            'n t': 157,
            'u j': 158,
            'n‑j': 159,
            'i i': 160,
            dan: 161,
            'n k': 162,
            xax: 163,
            ' ij': 164,
            's x': 165,
            ava: 166,
            ' va': 167,
            ' ñu': 168,
            kun: 169,
            '‑ja': 170,
            ' ya': 171,
            'i‑i': 172,
            tna: 173,
            aku: 174,
            'a‑r': 175,
            ', k': 176,
            ndu: 177,
            'o‑n': 178,
            'ia.': 179,
            'ua\'': 180,
            tuu: 181,
            ntd: 182,
            tda: 183,
            'n‑i': 184,
            '. x': 185,
            'ya\'': 186,
            'i. ': 187,
            axe: 188,
            'i ñ': 189,
            ' io': 190,
            ', x': 191,
            'ee ': 192,
            'na\'': 193,
            xin: 194,
            '‑s.': 195,
            'esú': 196,
            'sús': 197,
            atu: 198,
            ' tu': 199,
            'o k': 200,
            'u\'a': 201,
            '‑n.': 202,
            ist: 203,
            ech: 204,
            'u‑n': 205,
            'n‑s': 206,
            kan: 207,
            's, ': 208,
            ' xe': 209,
            uec: 210,
            ris: 211,
            ' ni': 212,
            's n': 213,
            'n‑n': 214,
            'n ñ': 215,
            dix: 216,
            tax: 217,
            'a y': 218,
            'a m': 219,
            '‑r ': 220,
            ': —': 221,
            '. t': 222,
            anu: 223,
            stu: 224,
            cri: 225,
            jui: 226,
            xij: 227,
            ' kɨ': 228,
            kua: 229,
            xia: 230,
            axi: 231,
            'ɨu ': 232,
            nan: 233,
            'n s': 234,
            dak: 235,
            dad: 236,
            ' du': 237,
            '‑ki': 238,
            ndo: 239,
            '. d': 240,
            'i‑s': 241,
            'kɨu': 242,
            '‑xi': 243,
            'i‑n': 244,
            'u‑r': 245,
            'aa‑': 246,
            'e‑n': 247,
            'n‑t': 248,
            dav: 249,
            tni: 250,
            'ɨ\'ɨ': 251,
            'ta\'': 252,
            '‑n,': 253,
            kut: 254,
            uku: 255,
            'ka‑': 256,
            'a\'n': 257,
            'ma ': 258,
            'i, ': 259,
            ixa: 260,
            'ñu\'': 261,
            'o ñ': 262,
            'o. ': 263,
            'ia\'': 264,
            uin: 265,
            'u d': 266,
            '‑i.': 267,
            xee: 268,
            'ná ': 269,
            ' an': 270,
            ' ná': 271,
            'ñat': 272,
            'a‑d': 273,
            'dɨu': 274,
            'o, ': 275,
            'u s': 276,
            '‑ku': 277,
            kui: 278,
            'du\'': 279,
            niu: 280,
            'uña': 281,
            'x n': 282,
            ' dɨ': 283,
            'a v': 284,
            nux: 285,
            'xi ': 286,
            axk: 287,
            'e‑i': 288,
            'n‑d': 289,
            ' vi': 290,
            'u‑d': 291,
            'ndɨ': 292,
            'an.': 293,
            '‑s,': 294,
            'ia,': 295,
            'u m': 296,
            aka: 297,
            'e ñ': 298,
            'o‑i': 299,
            'n d': 300
        }
    };
    exports.default = xtd;
});
//# sourceMappingURL=xtd.js.map