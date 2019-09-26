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
    const qvn = {
        id: 'qvn',
        name: 'Quechua, North Junín',
        trigrams: { una: 0,
            man: 1,
            kun: 2,
            aku: 3,
            'an ': 4,
            ' ka': 5,
            ' ma': 6,
            ana: 7,
            apa: 8,
            nma: 9,
            ' ru': 10,
            ata: 11,
            nan: 12,
            'na ': 13,
            ach: 14,
            'si ': 15,
            chr: 16,
            sha: 17,
            'ta ': 18,
            aak: 19,
            run: 20,
            ima: 21,
            paa: 22,
            ' na': 23,
            cha: 24,
            anm: 25,
            tan: 26,
            paq: 27,
            nas: 28,
            ' ch': 29,
            'am ': 30,
            anp: 31,
            ' pi': 32,
            nak: 33,
            may: 34,
            tas: 35,
            ash: 36,
            npa: 37,
            hru: 38,
            'as ': 39,
            'ay ': 40,
            ' im': 41,
            nch: 42,
            ant: 43,
            ' wa': 44,
            pan: 45,
            'a k': 46,
            unm: 47,
            chu: 48,
            ama: 49,
            ita: 50,
            ipa: 51,
            hay: 52,
            kan: 53,
            nta: 54,
            ' ri': 55,
            nsi: 56,
            yun: 57,
            nqa: 58,
            'a r': 59,
            ' ju': 60,
            pit: 61,
            nat: 62,
            nam: 63,
            chi: 64,
            ' ya': 65,
            kur: 66,
            'i m': 67,
            wan: 68,
            ' la': 69,
            kap: 70,
            'mi ': 71,
            'n r': 72,
            lap: 73,
            nuy: 74,
            ' al': 75,
            ura: 76,
            asy: 77,
            ali: 78,
            'pa ': 79,
            syu: 80,
            nin: 81,
            'i. ': 82,
            ' u ': 83,
            'n m': 84,
            awa: 85,
            rur: 86,
            'a m': 87,
            naa: 88,
            ' mu': 89,
            'qa ': 90,
            ans: 91,
            juk: 92,
            qan: 93,
            'ru ': 94,
            '. a': 95,
            anc: 96,
            ina: 97,
            nap: 98,
            isk: 99,
            'ha ': 100,
            mun: 101,
            'i, ': 102,
            irb: 103,
            art: 104,
            rka: 105,
            rbi: 106,
            'a, ': 107,
            aat: 108,
            cul: 109,
            icu: 110,
            'si.': 111,
            nmi: 112,
            tic: 113,
            rti: 114,
            ' ar': 115,
            'lo ': 116,
            ulo: 117,
            kay: 118,
            ' is': 119,
            ski: 120,
            '. n': 121,
            ish: 122,
            nku: 123,
            'hu ': 124,
            hra: 125,
            'aq ': 126,
            urk: 127,
            'q. ': 128,
            tin: 129,
            anq: 130,
            qsi: 131,
            'aq.': 132,
            pti: 133,
            'i u': 134,
            kas: 135,
            'i k': 136,
            'a i': 137,
            kir: 138,
            rim: 139,
            ' ni': 140,
            pis: 141,
            qku: 142,
            yac: 143,
            yaq: 144,
            'pi ': 145,
            ika: 146,
            ruu: 147,
            'si,': 148,
            aya: 149,
            aqk: 150,
            yta: 151,
            ayn: 152,
            daq: 153,
            yan: 154,
            ran: 155,
            rik: 156,
            and: 157,
            nda: 158,
            'n a': 159,
            hak: 160,
            asi: 161,
            aqs: 162,
            npi: 163,
            'a a': 164,
            'in ': 165,
            kaa: 166,
            was: 167,
            uta: 168,
            ayq: 169,
            rqa: 170,
            uch: 171,
            kar: 172,
            lip: 173,
            anu: 174,
            '. c': 175,
            'a w': 176,
            's, ': 177,
            qta: 178,
            ara: 179,
            'uy ': 180,
            iya: 181,
            'a n': 182,
            ych: 183,
            'a. ': 184,
            isi: 185,
            'a p': 186,
            'i r': 187,
            yqa: 188,
            kaw: 189,
            jin: 190,
            ', k': 191,
            yla: 192,
            'un ': 193,
            ' ji': 194,
            'y r': 195,
            lut: 196,
            uus: 197,
            'a q': 198,
            uku: 199,
            tuk: 200,
            ', m': 201,
            uyl: 202,
            aan: 203,
            iku: 204,
            kin: 205,
            usi: 206,
            pac: 207,
            naq: 208,
            inm: 209,
            ' ta': 210,
            kaq: 211,
            'uk ': 212,
            'a j': 213,
            qmi: 214,
            kuy: 215,
            ' lu': 216,
            qni: 217,
            ayc: 218,
            aka: 219,
            'u m': 220,
            tam: 221,
            rak: 222,
            ' qu': 223,
            ayt: 224,
            'm p': 225,
            'ta,': 226,
            'li ': 227,
            'as,': 228,
            rsi: 229,
            ari: 230,
            ayp: 231,
            ' ay': 232,
            'a l': 233,
            'n c': 234,
            mam: 235,
            rap: 236,
            'a y': 237,
            uka: 238,
            ray: 239,
            'u i': 240,
            kac: 241,
            '. m': 242,
            ' ur': 243,
            ynu: 244,
            arq: 245,
            ank: 246,
            aqn: 247,
            ypa: 248,
            ' pa': 249,
            aqa: 250,
            qut: 251,
            bis: 252,
            ala: 253,
            ins: 254,
            unc: 255,
            ink: 256,
            'n, ': 257,
            apt: 258,
            nti: 259,
            aqt: 260,
            inq: 261,
            aqm: 262,
            utu: 263,
            hin: 264,
            'n i': 265,
            'n. ': 266,
            ham: 267,
            hik: 268,
            hun: 269,
            'i i': 270,
            'as.': 271,
            map: 272,
            'u k': 273,
            maq: 274,
            ush: 275,
            's. ': 276,
            upa: 277,
            ' am': 278,
            ysi: 279,
            'aa ': 280,
            'ma ': 281,
            ays: 282,
            naw: 283,
            rac: 284,
            'n n': 285,
            'o 2': 286,
            way: 287,
            'n j': 288,
            ury: 289,
            kuq: 290,
            aki: 291,
            rya: 292,
            'y k': 293,
            ', n': 294,
            'n l': 295,
            'o 1': 296,
            asa: 297,
            api: 298,
            'an,': 299,
            pas: 300
        }
    };
    exports.default = qvn;
});
//# sourceMappingURL=qvn.js.map