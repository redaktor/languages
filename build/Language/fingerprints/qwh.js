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
    const qwh = {
        id: 'qwh',
        name: 'Quechua, Huaylas Ancash',
        trigrams: { una: 0,
            man: 1,
            kun: 2,
            'an ': 3,
            ' ka': 4,
            apa: 5,
            ana: 6,
            ' nu': 7,
            nun: 8,
            'na ': 9,
            aku: 10,
            pis: 11,
            nma: 12,
            anm: 13,
            paq: 14,
            ' ma': 15,
            nap: 16,
            nan: 17,
            kan: 18,
            qan: 19,
            'ow ': 20,
            anp: 21,
            cho: 22,
            how: 23,
            'is ': 24,
            npa: 25,
            nak: 26,
            yan: 27,
            'n n': 28,
            'ta ': 29,
            nqa: 30,
            nin: 31,
            lla: 32,
            ' de': 33,
            nku: 34,
            'a k': 35,
            der: 36,
            'mi ': 37,
            chu: 38,
            ant: 39,
            now: 40,
            'am ': 41,
            'erë': 42,
            'qa ': 43,
            pan: 44,
            'ëch': 45,
            'rëc': 46,
            yon: 47,
            iku: 48,
            ' ll': 49,
            ata: 50,
            ' na': 51,
            syo: 52,
            lap: 53,
            ' i ': 54,
            'ey ': 55,
            asy: 56,
            hun: 57,
            key: 58,
            nam: 59,
            ' ts': 60,
            'a m': 61,
            ' ke': 62,
            ach: 63,
            api: 64,
            nas: 65,
            'aq ': 66,
            'pa ': 67,
            tsu: 68,
            ' ni': 69,
            nch: 70,
            'aq.': 71,
            'q. ': 72,
            mey: 73,
            nts: 74,
            eyn: 75,
            all: 76,
            anq: 77,
            'i k': 78,
            aya: 79,
            tik: 80,
            ' me': 81,
            hqa: 82,
            tse: 83,
            ash: 84,
            ' ju': 85,
            shq: 86,
            sey: 87,
            nat: 88,
            ' ru': 89,
            tsa: 90,
            ura: 91,
            rur: 92,
            'a n': 93,
            ' pi': 94,
            'n k': 95,
            nmi: 96,
            '. a': 97,
            yno: 98,
            '. i': 99,
            ' al': 100,
            ima: 101,
            ' im': 102,
            ' ya': 103,
            art: 104,
            tsi: 105,
            rti: 106,
            ' ar': 107,
            kul: 108,
            ulu: 109,
            'lu ': 110,
            ats: 111,
            eyk: 112,
            ' mu': 113,
            'in ': 114,
            'n. ': 115,
            kur: 116,
            nta: 117,
            yqa: 118,
            eyq: 119,
            'w k': 120,
            mun: 121,
            'is,': 122,
            's, ': 123,
            rni: 124,
            'a, ': 125,
            awa: 126,
            kay: 127,
            onk: 128,
            'an.': 129,
            ' wa': 130,
            kuy: 131,
            lli: 132,
            npi: 133,
            nac: 134,
            inm: 135,
            '. m': 136,
            'a p': 137,
            'su ': 138,
            'ni ': 139,
            cha: 140,
            sik: 141,
            ush: 142,
            'äna': 143,
            'a r': 144,
            kaq: 145,
            iya: 146,
            ran: 147,
            'n m': 148,
            ark: 149,
            anc: 150,
            wan: 151,
            kaw: 152,
            juk: 153,
            unk: 154,
            'q n': 155,
            'li ': 156,
            ina: 157,
            ama: 158,
            'i n': 159,
            aqp: 160,
            apt: 161,
            qpi: 162,
            mar: 163,
            'a a': 164,
            '. l': 165,
            'a d': 166,
            arn: 167,
            'a. ': 168,
            'i m': 169,
            ' o ': 170,
            ', m': 171,
            'yän': 172,
            ley: 173,
            wak: 174,
            kap: 175,
            owp: 176,
            ' le': 177,
            'a j': 178,
            ayi: 179,
            aqa: 180,
            ida: 181,
            wmi: 182,
            owm: 183,
            yku: 184,
            yar: 185,
            uya: 186,
            ' pa': 187,
            yac: 188,
            yoq: 189,
            rka: 190,
            kin: 191,
            inp: 192,
            ink: 193,
            yta: 194,
            'uk ': 195,
            ' wi': 196,
            arq: 197,
            war: 198,
            pip: 199,
            yin: 200,
            aki: 201,
            kiy: 202,
            ish: 203,
            'a w': 204,
            unm: 205,
            's d': 206,
            rqa: 207,
            ipi: 208,
            'oq ': 209,
            'i t': 210,
            tin: 211,
            ita: 212,
            ', i': 213,
            uku: 214,
            sya: 215,
            'm k': 216,
            'ayä': 217,
            may: 218,
            pap: 219,
            kar: 220,
            nno: 221,
            ' ur': 222,
            llq: 223,
            qmi: 224,
            iki: 225,
            pti: 226,
            enq: 227,
            ury: 228,
            ', n': 229,
            'n, ': 230,
            kas: 231,
            ann: 232,
            's m': 233,
            'a y': 234,
            'y n': 235,
            ' pu': 236,
            ' ja': 237,
            'y d': 238,
            wpi: 239,
            'u 2': 240,
            onn: 241,
            'k n': 242,
            'w n': 243,
            'u 1': 244,
            pit: 245,
            'u. ': 246,
            hum: 247,
            'u k': 248,
            kik: 249,
            ten: 250,
            uri: 251,
            nni: 252,
            shu: 253,
            uma: 254,
            pte: 255,
            inq: 256,
            onc: 257,
            eyt: 258,
            ' sh': 259,
            'n p': 260,
            'su.': 261,
            'i p': 262,
            tap: 263,
            mat: 264,
            way: 265,
            uts: 266,
            ari: 267,
            '. k': 268,
            'i l': 269,
            'a l': 270,
            koq: 271,
            hak: 272,
            ras: 273,
            ion: 274,
            pur: 275,
            aqm: 276,
            uni: 277,
            ' aw': 278,
            'q; ': 279,
            rwa: 280,
            'qa,': 281,
            's k': 282,
            'apä': 283,
            'i i': 284,
            'aq;': 285,
            'pi ': 286,
            'ta,': 287,
            'm j': 288,
            huk: 289,
            jut: 290,
            'äya': 291,
            ori: 292,
            wto: 293,
            sti: 294,
            'i a': 295,
            '. t': 296,
            'es ': 297,
            hpa: 298,
            shp: 299,
            yka: 300
        }
    };
    exports.default = qwh;
});
//# sourceMappingURL=qwh.js.map