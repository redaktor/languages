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
    const agn = {
        id: 'agn',
        name: 'Agutaynen',
        trigrams: { 'ng ': 0,
            ang: 1,
            ' ta': 2,
            tan: 3,
            ' an': 4,
            ong: 5,
            ' on': 6,
            ' ma': 7,
            'g m': 8,
            'an ': 9,
            ' na': 10,
            ' pa': 11,
            'ga ': 12,
            mga: 13,
            ' mg': 14,
            'a t': 15,
            ' ka': 16,
            man: 17,
            'g t': 18,
            ndi: 19,
            'g n': 20,
            nan: 21,
            'ta ': 22,
            ani: 23,
            ' ni': 24,
            ' si': 25,
            ing: 26,
            'ig ': 27,
            'g p': 28,
            'g a': 29,
            'ay ': 30,
            ' ig': 31,
            ama: 32,
            'ra ': 33,
            ira: 34,
            ata: 35,
            ana: 36,
            and: 37,
            nir: 38,
            'g k': 39,
            nin: 40,
            'n a': 41,
            dio: 42,
            'a o': 43,
            'g d': 44,
            ind: 45,
            'en ': 46,
            mag: 47,
            ali: 48,
            'n t': 49,
            eng: 50,
            gan: 51,
            ina: 52,
            dia: 53,
            'a m': 54,
            nge: 55,
            'na ': 56,
            pag: 57,
            ' ga': 58,
            ten: 59,
            ' mi': 60,
            ' in': 61,
            'ed ': 62,
            'n n': 63,
            sin: 64,
            ala: 65,
            ' pi': 66,
            'a, ': 67,
            'si ': 68,
            'a. ': 69,
            ita: 70,
            'g b': 71,
            'a a': 72,
            aga: 73,
            ged: 74,
            ' ag': 75,
            asi: 76,
            'di ': 77,
            'g s': 78,
            ' di': 79,
            nga: 80,
            ' do': 81,
            'on ': 82,
            'ni ': 83,
            ' la': 84,
            taw: 85,
            'g i': 86,
            ios: 87,
            'o t': 88,
            'n m': 89,
            'ia ': 90,
            'aw ': 91,
            'a n': 92,
            pan: 93,
            agp: 94,
            ' am': 95,
            ' as': 96,
            'mo ': 97,
            ' da': 98,
            'n o': 99,
            'a p': 100,
            gpa: 101,
            oma: 102,
            'a k': 103,
            pir: 104,
            ' mo': 105,
            ' ba': 106,
            'n, ': 107,
            ' ya': 108,
            'g g': 109,
            'o, ': 110,
            aba: 111,
            ', i': 112,
            'g y': 113,
            amo: 114,
            'io ': 115,
            agt: 116,
            lan: 117,
            '. a': 118,
            ' je': 119,
            ', a': 120,
            'at ': 121,
            'i j': 122,
            'ro ': 123,
            ' te': 124,
            ' \"': 125,
            'o o': 126,
            abo: 127,
            'pa ': 128,
            apa: 129,
            par: 130,
            ari: 131,
            'g o': 132,
            'a s': 133,
            'g l': 134,
            jes: 135,
            esu: 136,
            'os ': 137,
            'i t': 138,
            nag: 139,
            ato: 140,
            pam: 141,
            kal: 142,
            min: 143,
            ino: 144,
            'to ': 145,
            'mi ': 146,
            ' ra': 147,
            sus: 148,
            'ka ': 149,
            '\" ': 150,
            lam: 151,
            'in ': 152,
            iro: 153,
            ' bi': 154,
            oro: 155,
            ara: 156,
            gto: 157,
            mas: 158,
            'o a': 159,
            ran: 160,
            ate: 161,
            'da ': 162,
            'n. ': 163,
            '. p': 164,
            ', \\': 165,
            ini: 166,
            'o. ': 167,
            'y a': 168,
            mat: 169,
            'a i': 170,
            olo: 171,
            tat: 172,
            ian: 173,
            tal: 174,
            'od ': 175,
            don: 176,
            ', m': 177,
            oat: 178,
            'i a': 179,
            day: 180,
            nda: 181,
            'w a': 182,
            pat: 183,
            may: 184,
            gal: 185,
            ago: 186,
            ist: 187,
            'an,': 188,
            bin: 189,
            lag: 190,
            ima: 191,
            '. i': 192,
            ' sa': 193,
            agi: 194,
            'a b': 195,
            yan: 196,
            agb: 197,
            ris: 198,
            boa: 199,
            'ag ': 200,
            yen: 201,
            pin: 202,
            'o m': 203,
            't t': 204,
            's, ': 205,
            ' ko': 206,
            nab: 207,
            'no ': 208,
            adi: 209,
            ' bo': 210,
            's a': 211,
            '. m': 212,
            ano: 213,
            nim: 214,
            bol: 215,
            'd o': 216,
            tay: 217,
            ola: 218,
            ' to': 219,
            god: 220,
            '-ya': 221,
            rin: 222,
            mon: 223,
            'i o': 224,
            'us ': 225,
            'd a': 226,
            'i m': 227,
            opa: 228,
            lon: 229,
            mal: 230,
            bot: 231,
            ela: 232,
            'a l': 233,
            lin: 234,
            gin: 235,
            '.\"': 236,
            ', p': 237,
            nop: 238,
            'o n': 239,
            'i p': 240,
            ili: 241,
            bal: 242,
            ono: 243,
            nam: 244,
            gat: 245,
            ' it': 246,
            'na.': 247,
            sia: 248,
            obo: 249,
            dan: 250,
            sto: 251,
            'd t': 252,
            'an.': 253,
            ngo: 254,
            agg: 255,
            kab: 256,
            kam: 257,
            'i, ': 258,
            aka: 259,
            ' ye': 260,
            wan: 261,
            ami: 262,
            sta: 263,
            'lo ': 264,
            isi: 265,
            apo: 266,
            ila: 267,
            awa: 268,
            's. ': 269,
            'as ': 270,
            'o i': 271,
            'ra.': 272,
            'i n': 273,
            dor: 274,
            mam: 275,
            kat: 276,
            ' en': 277,
            'a r': 278,
            'o-y': 279,
            nat: 280,
            aya: 281,
            imi: 282,
            log: 283,
            'n i': 284,
            ' gi': 285,
            ayo: 286,
            'na,': 287,
            iag: 288,
            'ki ': 289,
            'd m': 290,
            ski: 291,
            ask: 292,
            tol: 293,
            lib: 294,
            '. t': 295,
            ipa: 296,
            san: 297,
            bel: 298,
            lia: 299,
            kan: 300
        }
    };
    exports.default = agn;
});
//# sourceMappingURL=agn.js.map