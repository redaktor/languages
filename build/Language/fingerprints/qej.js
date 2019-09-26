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
    const qej = {
        id: 'qej',
        name: 'Quechua, Huamalies Dos de Mayo',
        trigrams: { una: 0,
            'ta ': 1,
            ' ca': 2,
            gan: 3,
            cun: 4,
            'mi ': 5,
            qui: 6,
            man: 7,
            ' sa': 8,
            'an ': 9,
            say: 10,
            ash: 11,
            pis: 12,
            ana: 13,
            acu: 14,
            shg: 15,
            ayc: 16,
            ' ma': 17,
            'is ': 18,
            hga: 19,
            rga: 20,
            'ga ': 21,
            'na ': 22,
            'a c': 23,
            ata: 24,
            ' ta': 25,
            '. s': 26,
            cuy: 27,
            cay: 28,
            yta: 29,
            ami: 30,
            ayt: 31,
            'a m': 32,
            ' ru': 33,
            ayn: 34,
            nta: 35,
            'pa ': 36,
            ant: 37,
            cha: 38,
            ita: 39,
            arg: 40,
            tay: 41,
            nac: 42,
            nsi: 43,
            ' pa': 44,
            nan: 45,
            ' di': 46,
            nin: 47,
            pay: 48,
            ' wa': 49,
            'no ': 50,
            api: 51,
            nat: 52,
            anp: 53,
            dio: 54,
            ios: 55,
            'ay ': 56,
            'a d': 57,
            ' je': 58,
            run: 59,
            yca: 60,
            yar: 61,
            ' ch': 62,
            ush: 63,
            yan: 64,
            jes: 65,
            apa: 66,
            can: 67,
            pti: 68,
            ' ya': 69,
            ach: 70,
            'n. ': 71,
            icu: 72,
            ' ni': 73,
            nam: 74,
            nga: 75,
            'an.': 76,
            tin: 77,
            pit: 78,
            uya: 79,
            wan: 80,
            ' ju': 81,
            aya: 82,
            ima: 83,
            yqu: 84,
            'i c': 85,
            apt: 86,
            cas: 87,
            ' mu': 88,
            ama: 89,
            awa: 90,
            ycu: 91,
            ayq: 92,
            yno: 93,
            'o c': 94,
            cho: 95,
            ' wi': 96,
            yas: 97,
            ans: 98,
            ins: 99,
            'ä. ': 100,
            'ho ': 101,
            'npä': 102,
            pan: 103,
            may: 104,
            cur: 105,
            nap: 106,
            'ag ': 107,
            ila: 108,
            tan: 109,
            'pä.': 110,
            tap: 111,
            ish: 112,
            car: 113,
            'a w': 114,
            has: 115,
            'äna': 116,
            ' ga': 117,
            ' cu': 118,
            esu: 119,
            ris: 120,
            'a p': 121,
            'a a': 122,
            'a t': 123,
            cag: 124,
            nqu: 125,
            ang: 126,
            'a r': 127,
            'pä ': 128,
            osn: 129,
            sni: 130,
            'a y': 131,
            nmi: 132,
            uip: 133,
            yay: 134,
            shu: 135,
            suc: 136,
            aga: 137,
            ayp: 138,
            ist: 139,
            cri: 140,
            nay: 141,
            mun: 142,
            'n c': 143,
            'a j': 144,
            'a s': 145,
            'ipä': 146,
            'in ': 147,
            iya: 148,
            wil: 149,
            npi: 150,
            ': “': 151,
            'äya': 152,
            uic: 153,
            'n: ': 154,
            'an:': 155,
            'i. ': 156,
            caw: 157,
            uta: 158,
            'ycä': 159,
            ali: 160,
            gam: 161,
            way: 162,
            gay: 163,
            'si ': 164,
            upa: 165,
            ' sh': 166,
            yac: 167,
            anq: 168,
            'i j': 169,
            ucr: 170,
            lac: 171,
            'ur ': 172,
            ncu: 173,
            'yän': 174,
            cus: 175,
            iqu: 176,
            aym: 177,
            'apä': 178,
            asi: 179,
            mus: 180,
            ' im': 181,
            erg: 182,
            cap: 183,
            lap: 184,
            ura: 185,
            rmi: 186,
            squ: 187,
            oga: 188,
            's m': 189,
            ica: 190,
            inm: 191,
            ' al': 192,
            asq: 193,
            'a. ': 194,
            's c': 195,
            hun: 196,
            nag: 197,
            stu: 198,
            'ayä': 199,
            'i p': 200,
            'a n': 201,
            sha: 202,
            uin: 203,
            war: 204,
            ymi: 205,
            ' is': 206,
            arc: 207,
            arp: 208,
            sal: 209,
            nas: 210,
            nog: 211,
            sip: 212,
            'ynö': 213,
            ray: 214,
            gcu: 215,
            anc: 216,
            yap: 217,
            ann: 218,
            'i m': 219,
            aca: 220,
            'cäy': 221,
            aqu: 222,
            'sh ': 223,
            sta: 224,
            'o n': 225,
            ' la': 226,
            cac: 227,
            'mi.': 228,
            'ä c': 229,
            ' y ': 230,
            cog: 231,
            'su.': 232,
            ' no': 233,
            anm: 234,
            ywa: 235,
            ari: 236,
            ala: 237,
            ' na': 238,
            'g c': 239,
            'og ': 240,
            'ta.': 241,
            nch: 242,
            org: 243,
            ipi: 244,
            tam: 245,
            ypi: 246,
            ' ay': 247,
            'esú': 248,
            'sús': 249,
            'a g': 250,
            '.” ': 251,
            ' ne': 252,
            mar: 253,
            usa: 254,
            gue: 255,
            'su ': 256,
            'ús ': 257,
            ' gu': 258,
            'i s': 259,
            ' ri': 260,
            ara: 261,
            ner: 262,
            shi: 263,
            ayw: 264,
            'ui ': 265,
            par: 266,
            inc: 267,
            'n j': 268,
            'u. ': 269,
            amc: 270,
            mcu: 271,
            ric: 272,
            'i t': 273,
            shc: 274,
            yni: 275,
            '” s': 276,
            rur: 277,
            rcu: 278,
            'chö': 279,
            'öpi': 280,
            ran: 281,
            nir: 282,
            ypa: 283,
            'yäs': 284,
            nty: 285,
            arm: 286,
            tya: 287,
            san: 288,
            'nöp': 289,
            mas: 290,
            int: 291,
            ' pu': 292,
            '. p': 293,
            anu: 294,
            pas: 295,
            'ar ': 296,
            gap: 297,
            'ömi': 298,
            rca: 299,
            'äsu': 300
        }
    };
    exports.default = qej;
});
//# sourceMappingURL=qej.js.map