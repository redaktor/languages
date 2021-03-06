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
    const qvm = {
        id: 'qvm',
        name: 'Quechua, Margos',
        trigrams: { una: 0,
            kun: 1,
            nts: 2,
            tsi: 3,
            ' ka': 4,
            ant: 5,
            'an ': 6,
            pis: 7,
            man: 8,
            apa: 9,
            paq: 10,
            shq: 11,
            hqa: 12,
            ana: 13,
            kan: 14,
            'is ': 15,
            nap: 16,
            nan: 17,
            ' ma': 18,
            chu: 19,
            qan: 20,
            'na ': 21,
            hun: 22,
            iku: 23,
            'a k': 24,
            sik: 25,
            ish: 26,
            ash: 27,
            ' de': 28,
            tsa: 29,
            'qa ': 30,
            noq: 31,
            'mi ': 32,
            api: 33,
            lap: 34,
            der: 35,
            aku: 36,
            'ëch': 37,
            sip: 38,
            'rëc': 39,
            'erë': 40,
            'ta ': 41,
            say: 42,
            ' ru': 43,
            pan: 44,
            ' ni': 45,
            'aq ': 46,
            ipa: 47,
            ' ts': 48,
            ' la': 49,
            nku: 50,
            anp: 51,
            'i k': 52,
            int: 53,
            ami: 54,
            'si ': 55,
            ima: 56,
            'pa ': 57,
            nma: 58,
            kay: 59,
            ita: 60,
            unt: 61,
            ayn: 62,
            nas: 63,
            nis: 64,
            npa: 65,
            run: 66,
            'ay ': 67,
            wan: 68,
            unk: 69,
            ata: 70,
            ' na': 71,
            qpi: 72,
            anm: 73,
            pit: 74,
            ' ju': 75,
            '. t': 76,
            'q. ': 77,
            ' im': 78,
            yno: 79,
            nin: 80,
            nak: 81,
            'aq.': 82,
            asy: 83,
            'a m': 84,
            yun: 85,
            'oq ': 86,
            kas: 87,
            ' y ': 88,
            oqp: 89,
            cho: 90,
            awa: 91,
            ' ya': 92,
            'n k': 93,
            nat: 94,
            '. n': 95,
            'a r': 96,
            syu: 97,
            ayk: 98,
            'ho ': 99,
            ala: 100,
            ach: 101,
            juk: 102,
            ' ch': 103,
            'n i': 104,
            'a. ': 105,
            nam: 106,
            pti: 107,
            pam: 108,
            ' mu': 109,
            apt: 110,
            'un ': 111,
            tin: 112,
            ' al': 113,
            tsu: 114,
            ipi: 115,
            mun: 116,
            ali: 117,
            ank: 118,
            ' pi': 119,
            npi: 120,
            'i d': 121,
            'q k': 122,
            may: 123,
            ' wa': 124,
            'n n': 125,
            aqp: 126,
            'a a': 127,
            ura: 128,
            tap: 129,
            qku: 130,
            rur: 131,
            ') l': 132,
            'is.': 133,
            nka: 134,
            kin: 135,
            kap: 136,
            'äku': 137,
            'n r': 138,
            ush: 139,
            's. ': 140,
            kaq: 141,
            shw: 142,
            'is,': 143,
            'a p': 144,
            's, ': 145,
            'ka ': 146,
            hwa: 147,
            'a d': 148,
            'li ': 149,
            'a i': 150,
            ama: 151,
            'in ': 152,
            ats: 153,
            ' ki': 154,
            naw: 155,
            cha: 156,
            'q, ': 157,
            'a y': 158,
            yan: 159,
            ' re': 160,
            's k': 161,
            'apä': 162,
            'päk': 163,
            ' ku': 164,
            'aq,': 165,
            aqa: 166,
            nta: 167,
            kik: 168,
            uri: 169,
            kuy: 170,
            kaw: 171,
            's m': 172,
            aka: 173,
            'su ': 174,
            'uk ': 175,
            'a n': 176,
            ' is': 177,
            pip: 178,
            iki: 179,
            aqk: 180,
            kus: 181,
            'i p': 182,
            res: 183,
            ano: 184,
            kri: 185,
            ink: 186,
            yku: 187,
            'ma ': 188,
            ran: 189,
            ark: 190,
            'a j': 191,
            nmi: 192,
            iwa: 193,
            qpa: 194,
            nch: 195,
            'äna': 196,
            'n c': 197,
            ' ar': 198,
            yka: 199,
            mar: 200,
            unn: 201,
            wal: 202,
            ' iw': 203,
            mas: 204,
            yni: 205,
            hka: 206,
            ' aw': 207,
            'n m': 208,
            '. m': 209,
            nqa: 210,
            esp: 211,
            rka: 212,
            'n a': 213,
            yin: 214,
            'i r': 215,
            nni: 216,
            lla: 217,
            'ta.': 218,
            ras: 219,
            ' es': 220,
            'chö': 221,
            asa: 222,
            'q y': 223,
            ara: 224,
            esk: 225,
            shk: 226,
            lay: 227,
            'y d': 228,
            aru: 229,
            'n. ': 230,
            pap: 231,
            ayi: 232,
            'la ': 233,
            ypa: 234,
            ' pa': 235,
            ina: 236,
            mal: 237,
            ten: 238,
            unm: 239,
            yar: 240,
            'a (': 241,
            kar: 242,
            tur: 243,
            all: 244,
            'q i': 245,
            ' (2': 246,
            'idä': 247,
            'y k': 248,
            ' qa': 249,
            awt: 250,
            ' (1': 251,
            yla: 252,
            tan: 253,
            rid: 254,
            ', y': 255,
            wtu: 256,
            lak: 257,
            skr: 258,
            sar: 259,
            ibi: 260,
            rib: 261,
            'n y': 262,
            yac: 263,
            das: 264,
            san: 265,
            'öpi': 266,
            shi: 267,
            'n j': 268,
            aki: 269,
            arp: 270,
            sho: 271,
            'y t': 272,
            'höp': 273,
            wak: 274,
            ann: 275,
            's a': 276,
            'a, ': 277,
            '. l': 278,
            'y c': 279,
            uni: 280,
            inm: 281,
            ' sh': 282,
            rak: 283,
            'o k': 284,
            ych: 285,
            nno: 286,
            ila: 287,
            ika: 288,
            'q m': 289,
            ', m': 290,
            ayp: 291,
            sya: 292,
            spi: 293,
            nac: 294,
            '. k': 295,
            'a l': 296,
            'as ': 297,
            shp: 298,
            's d': 299,
            ayl: 300
        }
    };
    exports.default = qvm;
});
//# sourceMappingURL=qvm.js.map