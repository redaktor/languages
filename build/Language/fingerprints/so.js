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
    const so = {
        id: 'so',
        name: 'Somali',
        trigrams: { ' ka': 0,
            'ay ': 1,
            'ka ': 2,
            ' qo': 3,
            'oo ': 4,
            'uu ': 5,
            aha: 6,
            'yo ': 7,
            ' iy': 8,
            ada: 9,
            'an ': 10,
            'da ': 11,
            aan: 12,
            iyo: 13,
            ' in': 14,
            ' wa': 15,
            ' ah': 16,
            sha: 17,
            ' u ': 18,
            ama: 19,
            ' la': 20,
            'a i': 21,
            aad: 22,
            hay: 23,
            'a a': 24,
            'ma ': 25,
            ' dh': 26,
            'ga ': 27,
            ' xa': 28,
            qof: 29,
            ' da': 30,
            iya: 31,
            'in ': 32,
            'aa ': 33,
            'a d': 34,
            'a s': 35,
            ' si': 36,
            ' oo': 37,
            yah: 38,
            eey: 39,
            isa: 40,
            xaq: 41,
            ' le': 42,
            '. q': 43,
            'ku ': 44,
            'a w': 45,
            lee: 46,
            'u l': 47,
            ' ku': 48,
            taa: 49,
            dha: 50,
            ' ma': 51,
            'aq ': 52,
            'of ': 53,
            eya: 54,
            'ah ': 55,
            'q u': 56,
            ast: 57,
            sta: 58,
            ara: 59,
            'a k': 60,
            'y i': 61,
            'u x': 62,
            wux: 63,
            ' wu': 64,
            ala: 65,
            wax: 66,
            kas: 67,
            'ha ': 68,
            uxu: 69,
            ' am': 70,
            xuu: 71,
            doo: 72,
            'la ': 73,
            iis: 74,
            nuu: 75,
            inu: 76,
            maa: 77,
            'a x': 78,
            'ta ': 79,
            'od ': 80,
            ' qa': 81,
            'a, ': 82,
            nay: 83,
            ' sh': 84,
            'o a': 85,
            kal: 86,
            qod: 87,
            loo: 88,
            ' xu': 89,
            'o i': 90,
            ana: 91,
            ' lo': 92,
            'o x': 93,
            iga: 94,
            ' xo': 95,
            'f k': 96,
            yad: 97,
            ' ba': 98,
            ' uu': 99,
            'a u': 100,
            dii: 101,
            yaa: 102,
            'o d': 103,
            'ro ': 104,
            'si ': 105,
            ima: 106,
            'gu ': 107,
            ale: 108,
            ash: 109,
            'le ': 110,
            ' aa': 111,
            ' ca': 112,
            adk: 113,
            'u d': 114,
            'a l': 115,
            aas: 116,
            aqa: 117,
            'a m': 118,
            lag: 119,
            'na ': 120,
            ' fa': 121,
            add: 122,
            ' is': 123,
            'a q': 124,
            san: 125,
            dka: 126,
            baa: 127,
            xor: 128,
            ' mi': 129,
            adi: 130,
            'ii ': 131,
            'o k': 132,
            kar: 133,
            ' so': 134,
            dad: 135,
            iin: 136,
            'd x': 137,
            aar: 138,
            'sa ': 139,
            rka: 140,
            had: 141,
            soo: 142,
            'a o': 143,
            ado: 144,
            ' he': 145,
            mid: 146,
            aro: 147,
            'a. ': 148,
            ' ha': 149,
            nta: 150,
            'o m': 151,
            qaa: 152,
            dda: 153,
            ' sa': 154,
            quu: 155,
            har: 156,
            axa: 157,
            'u s': 158,
            'n k': 159,
            aga: 160,
            'u k': 161,
            hii: 162,
            xuq: 163,
            ' ay': 164,
            aal: 165,
            mad: 166,
            eed: 167,
            ' ho': 168,
            uqu: 169,
            daa: 170,
            'do ': 171,
            'n l': 172,
            ' ee': 173,
            haa: 174,
            'o h': 175,
            'lo ': 176,
            'o s': 177,
            nka: 178,
            dan: 179,
            ' ga': 180,
            aya: 181,
            uuq: 182,
            ' xi': 183,
            'i q': 184,
            'i k': 185,
            hel: 186,
            'ee ': 187,
            ina: 188,
            waa: 189,
            ihi: 190,
            agu: 191,
            qda: 192,
            nim: 193,
            elo: 194,
            rri: 195,
            ark: 196,
            ays: 197,
            ank: 198,
            gga: 199,
            uqd: 200,
            naa: 201,
            riy: 202,
            ' bu': 203,
            'id ': 204,
            mar: 205,
            saa: 206,
            ', i': 207,
            oon: 208,
            'u h': 209,
            ' no': 210,
            'n s': 211,
            lad: 212,
            uur: 213,
            ida: 214,
            lka: 215,
            'o w': 216,
            'n a': 217,
            laa: 218,
            haq: 219,
            'o. ': 220,
            'a h': 221,
            'ax ': 222,
            iri: 223,
            int: 224,
            arc: 225,
            ool: 226,
            ysa: 227,
            ami: 228,
            yih: 229,
            ofk: 230,
            'u a': 231,
            'ah.': 232,
            orr: 233,
            rci: 234,
            ood: 235,
            'ad ': 236,
            dah: 237,
            'h. ': 238,
            dhi: 239,
            eli: 240,
            'i a': 241,
            'o, ': 242,
            'al ': 243,
            'n, ': 244,
            aam: 245,
            'n i': 246,
            'o l': 247,
            ' ug': 248,
            gel: 249,
            siy: 250,
            'to ': 251,
            sag: 252,
            ' gu': 253,
            sho: 254,
            'ab ': 255,
            jee: 256,
            aaq: 257,
            'e u': 258,
            ' di': 259,
            hoo: 260,
            agg: 261,
            alk: 262,
            'n x': 263,
            asa: 264,
            uma: 265,
            ido: 266,
            'ya ': 267,
            ' xx': 268,
            goo: 269,
            'o q': 270,
            ayn: 271,
            'o u': 272,
            ' ji': 273,
            kii: 274,
            caa: 275,
            'a f': 276,
            bar: 277,
            iir: 278,
            'a c': 279,
            ' ci': 280,
            sig: 281,
            ago: 282,
            ooc: 283,
            'a b': 284,
            aba: 285,
            oba: 286,
            aqo: 287,
            ' mu': 288,
            xir: 289,
            hor: 290,
            'u q': 291,
            'a g': 292,
            oob: 293,
            dal: 294,
            ' ta': 295,
            ita: 296,
            'ar ': 297,
            ayo: 298,
            cad: 299,
            'a j': 300
        }
    };
    exports.default = so;
});
//# sourceMappingURL=so.js.map