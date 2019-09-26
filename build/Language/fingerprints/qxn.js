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
    const qxn = {
        id: 'qxn',
        name: 'Quechua, Northern Conchucos Ancash',
        trigrams: { una: 0,
            ' ka': 1,
            kun: 2,
            man: 3,
            'an ': 4,
            ana: 5,
            ' ru': 6,
            apa: 7,
            run: 8,
            pis: 9,
            ' ma': 10,
            aku: 11,
            paq: 12,
            'is ': 13,
            nan: 14,
            'na ': 15,
            npa: 16,
            kan: 17,
            nma: 18,
            qan: 19,
            'aw ': 20,
            anp: 21,
            cha: 22,
            nin: 23,
            yan: 24,
            nap: 25,
            anm: 26,
            'ta ': 27,
            kay: 28,
            chu: 29,
            ' y ': 30,
            nqa: 31,
            ' di': 32,
            yun: 33,
            nak: 34,
            haw: 35,
            'a k': 36,
            hun: 37,
            syu: 38,
            'mi ': 39,
            aya: 40,
            'n r': 41,
            api: 42,
            dir: 43,
            ich: 44,
            'qa ': 45,
            ant: 46,
            nku: 47,
            asy: 48,
            'ay ': 49,
            naw: 50,
            'pa ': 51,
            lla: 52,
            ric: 53,
            iri: 54,
            unk: 55,
            ima: 56,
            'n k': 57,
            ' na': 58,
            iku: 59,
            tsa: 60,
            may: 61,
            nas: 62,
            anq: 63,
            rni: 64,
            pan: 65,
            ata: 66,
            'aq ': 67,
            '. y': 68,
            ' im': 69,
            ' hu': 70,
            ' ts': 71,
            'a m': 72,
            'aq.': 73,
            'q. ': 74,
            ' ar': 75,
            nch: 76,
            ' ll': 77,
            huk: 78,
            say: 79,
            'in ': 80,
            yqa: 81,
            nts: 82,
            ayq: 83,
            lap: 84,
            tin: 85,
            ' ni': 86,
            nmi: 87,
            'n. ': 88,
            'a r': 89,
            pti: 90,
            tik: 91,
            nat: 92,
            'an.': 93,
            tsu: 94,
            ' pa': 95,
            ura: 96,
            kul: 97,
            nta: 98,
            apt: 99,
            ' ch': 100,
            'w k': 101,
            rur: 102,
            npi: 103,
            'i k': 104,
            'am ': 105,
            'un ': 106,
            pap: 107,
            art: 108,
            'a p': 109,
            ulu: 110,
            inq: 111,
            'lu ': 112,
            nam: 113,
            '. a': 114,
            rti: 115,
            ach: 116,
            ' wa': 117,
            kuy: 118,
            arn: 119,
            ' is': 120,
            kap: 121,
            ita: 122,
            pit: 123,
            ' mu': 124,
            unm: 125,
            inp: 126,
            ayn: 127,
            'is,': 128,
            'a i': 129,
            's, ': 130,
            'ni ': 131,
            ' ya': 132,
            yna: 133,
            'y t': 134,
            inm: 135,
            ran: 136,
            ayk: 137,
            'uk ': 138,
            ish: 139,
            's d': 140,
            'ka ': 141,
            'a d': 142,
            ' li': 143,
            'a n': 144,
            all: 145,
            'u k': 146,
            tsi: 147,
            irn: 148,
            ' pi': 149,
            sik: 150,
            unc: 151,
            liy: 152,
            uku: 153,
            nka: 154,
            ' ku': 155,
            uri: 156,
            uni: 157,
            ' ri': 158,
            awp: 159,
            ada: 160,
            sya: 161,
            ras: 162,
            kas: 163,
            uya: 164,
            'i p': 165,
            awa: 166,
            'da ': 167,
            wan: 168,
            ink: 169,
            'uq ': 170,
            qpi: 171,
            'a a': 172,
            'q r': 173,
            kaq: 174,
            ' al': 175,
            aqp: 176,
            yka: 177,
            ash: 178,
            yku: 179,
            ' u ': 180,
            ', y': 181,
            'n m': 182,
            'a. ': 183,
            ida: 184,
            yuq: 185,
            hqa: 186,
            'a h': 187,
            'y m': 188,
            asa: 189,
            shq: 190,
            mun: 191,
            'y d': 192,
            wpi: 193,
            qmi: 194,
            aqa: 195,
            ara: 196,
            ') m': 197,
            'y r': 198,
            iya: 199,
            kla: 200,
            aru: 201,
            urn: 202,
            tap: 203,
            kar: 204,
            iwa: 205,
            unp: 206,
            iyi: 207,
            kad: 208,
            kin: 209,
            'as ': 210,
            's m': 211,
            'su ': 212,
            wal: 213,
            aqm: 214,
            ' iw': 215,
            ' pu': 216,
            'u i': 217,
            hka: 218,
            kur: 219,
            lli: 220,
            sak: 221,
            ' si': 222,
            'u. ': 223,
            riy: 224,
            'a l': 225,
            yta: 226,
            'q k': 227,
            shk: 228,
            'su.': 229,
            ' ki': 230,
            's k': 231,
            '. m': 232,
            ika: 233,
            war: 234,
            iki: 235,
            anc: 236,
            yap: 237,
            yin: 238,
            'm k': 239,
            unt: 240,
            nni: 241,
            rnu: 242,
            'n, ': 243,
            unn: 244,
            dik: 245,
            yir: 246,
            yar: 247,
            tan: 248,
            ats: 249,
            'ma ': 250,
            ris: 251,
            'a u': 252,
            ' kr': 253,
            gub: 254,
            yac: 255,
            uby: 256,
            'n a': 257,
            'i r': 258,
            kri: 259,
            nac: 260,
            ' gu': 261,
            kaw: 262,
            shu: 263,
            byi: 264,
            nna: 265,
            ann: 266,
            'a (': 267,
            'k r': 268,
            nis: 269,
            rmi: 270,
            ank: 271,
            usy: 272,
            pip: 273,
            'n n': 274,
            lar: 275,
            siy: 276,
            sti: 277,
            ' ra': 278,
            kik: 279,
            ' ul': 280,
            ' (2': 281,
            iyk: 282,
            ipi: 283,
            ' (1': 284,
            'a y': 285,
            pay: 286,
            'u c': 287,
            ', u': 288,
            ahi: 289,
            isp: 290,
            arm: 291,
            stu: 292,
            ikl: 293,
            'w r': 294,
            ama: 295,
            uta: 296,
            's i': 297,
            '. k': 298,
            'i l': 299,
            mus: 300
        }
    };
    exports.default = qxn;
});
//# sourceMappingURL=qxn.js.map