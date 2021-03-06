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
    const lv = {
        id: 'lv',
        name: 'Latvian',
        trigrams: { 'as ': 0,
            'ība': 1,
            ' un': 2,
            'un ': 3,
            tie: 4,
            ies: 5,
            bas: 6,
            ' ti': 7,
            ' pa': 8,
            'ai ': 9,
            'esī': 10,
            'sīb': 11,
            ' vi': 12,
            ien: 13,
            vie: 14,
            ' ir': 15,
            'ību': 16,
            'ir ': 17,
            iem: 18,
            ' va': 19,
            ' ne': 20,
            's u': 21,
            'ts ': 22,
            'am ': 23,
            'šan': 24,
            ant: 25,
            'm i': 26,
            ' ci': 27,
            pie: 28,
            'r t': 29,
            'bu ': 30,
            ' sa': 31,
            vai: 32,
            ' uz': 33,
            ' pi': 34,
            ' ka': 35,
            's i': 36,
            'em ': 37,
            ' iz': 38,
            'brī': 39,
            ', k': 40,
            'u u': 41,
            cij: 42,
            ' br': 43,
            'rīv': 44,
            '. p': 45,
            pan: 46,
            ena: 47,
            'uz ': 48,
            's, ': 49,
            'ās ': 50,
            'dzī': 51,
            nts: 52,
            'ar ': 53,
            ' ar': 54,
            'u, ': 55,
            isk: 56,
            'āci': 57,
            ' ap': 58,
            nam: 59,
            ' at': 60,
            's p': 61,
            'viņ': 62,
            'inā': 63,
            'pār': 64,
            vis: 65,
            ikv: 66,
            'es ': 67,
            ' pr': 68,
            ' ie': 69,
            ' ik': 70,
            kvi: 71,
            ' no': 72,
            's v': 73,
            'vīb': 74,
            edr: 75,
            'lvē': 76,
            cil: 77,
            iju: 78,
            'īvī': 79,
            ilv: 80,
            'drī': 81,
            ' st': 82,
            'u a': 83,
            dar: 84,
            ' la': 85,
            'nu ': 86,
            ija: 87,
            ana: 88,
            'ot ': 89,
            'iņa': 90,
            'īdz': 91,
            's t': 92,
            'vēk': 93,
            'tīb': 94,
            'as,': 95,
            'i a': 96,
            'u. ': 97,
            'ka ': 98,
            's n': 99,
            'līd': 100,
            'm, ': 101,
            'ju ': 102,
            'īgi': 103,
            ied: 104,
            bai: 105,
            'īgu': 106,
            jas: 107,
            'ībā': 108,
            cie: 109,
            val: 110,
            arb: 111,
            'n i': 112,
            iec: 113,
            ', u': 114,
            aiz: 115,
            'u p': 116,
            'tu ': 117,
            's b': 118,
            'zīb': 119,
            'i i': 120,
            lst: 121,
            'kā ': 122,
            umu: 123,
            ' jā': 124,
            kum: 125,
            ska: 126,
            als: 127,
            'n p': 128,
            'i, ': 129,
            'vēr': 130,
            'n v': 131,
            'st ': 132,
            'gu ': 133,
            aut: 134,
            ' tā': 135,
            ama: 136,
            's s': 137,
            'arī': 138,
            jot: 139,
            'stā': 140,
            'nīg': 141,
            'ņa ': 142,
            ' ai': 143,
            anu: 144,
            sta: 145,
            kas: 146,
            izs: 147,
            't p': 148,
            'gi ': 149,
            ' ta': 150,
            ojo: 151,
            ' da': 152,
            'u t': 153,
            jum: 154,
            ' so': 155,
            mat: 156,
            ' kā': 157,
            'ā a': 158,
            'a p': 159,
            'cīb': 160,
            'u v': 161,
            iev: 162,
            'u d': 163,
            's a': 164,
            sav: 165,
            't, ': 166,
            'stī': 167,
            son: 168,
            not: 169,
            's l': 170,
            ', p': 171,
            'mu ': 172,
            'bu.': 173,
            'ajā': 174,
            pil: 175,
            per: 176,
            'rīk': 177,
            't v': 178,
            'īks': 179,
            'ēro': 180,
            pam: 181,
            'm u': 182,
            'līb': 183,
            rdz: 184,
            kst: 185,
            ned: 186,
            'nāc': 187,
            ' dz': 188,
            kat: 189,
            'nāt': 190,
            'nīb': 191,
            ekl: 192,
            'jā ': 193,
            uma: 194,
            ers: 195,
            'līt': 196,
            ' pe': 197,
            cit: 198,
            ' re': 199,
            'rīb': 200,
            ', i': 201,
            'a u': 202,
            kur: 203,
            pre: 204,
            bie: 205,
            '. 2': 206,
            'evē': 207,
            'ā, ': 208,
            tis: 209,
            tau: 210,
            '. 1': 211,
            'u n': 212,
            's. ': 213,
            'a s': 214,
            'i u': 215,
            ' pā': 216,
            evi: 217,
            ras: 218,
            'bu,': 219,
            's d': 220,
            ' de': 221,
            ' li': 222,
            ' ve': 223,
            'i p': 224,
            ais: 225,
            'roš': 226,
            bez: 227,
            sar: 228,
            lik: 229,
            'ieš': 230,
            'būt': 231,
            isp: 232,
            oci: 233,
            zsa: 234,
            'āda': 235,
            soc: 236,
            'spā': 237,
            'skā': 238,
            'a t': 239,
            ' je': 240,
            mie: 241,
            'ā v': 242,
            abi: 243,
            ebk: 244,
            iku: 245,
            roj: 246,
            'ciā': 247,
            'ba ': 248,
            ' lī': 249,
            ' be': 250,
            'ām ': 251,
            'a, ': 252,
            rso: 253,
            'n b': 254,
            'a a': 255,
            ion: 256,
            'oša': 257,
            'a v': 258,
            eci: 259,
            'i v': 260,
            'enā': 261,
            jeb: 262,
            atr: 263,
            nev: 264,
            'īša': 265,
            'kād': 266,
            nas: 267,
            kla: 268,
            eja: 269,
            'ma ': 270,
            iet: 271,
            ikt: 272,
            'na ': 273,
            'paš': 274,
            tot: 275,
            eno: 276,
            'u s': 277,
            lar: 278,
            zgl: 279,
            'du ': 280,
            'īga': 281,
            ard: 282,
            ' ku': 283,
            'ecī': 284,
            nod: 285,
            'iāl': 286,
            arp: 287,
            'tās': 288,
            'r j': 289,
            tar: 290,
            aul: 291,
            'i n': 292,
            tra: 293,
            'tīt': 294,
            'glī': 295,
            sab: 296,
            atv: 297,
            ier: 298,
            'arā': 299,
            'ārē': 300
        }
    };
    exports.default = lv;
});
//# sourceMappingURL=lv.js.map