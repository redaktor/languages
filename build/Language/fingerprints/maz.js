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
    const maz = {
        id: 'maz',
        name: 'Mazahua Central',
        trigrams: { 'ra ': 0,
            ' ra': 1,
            'u̸ ': 2,
            'yo ': 3,
            ' nu': 4,
            '\'u̸': 5,
            'k\'u': 6,
            'ji ': 7,
            ' yo': 8,
            ' k\'': 9,
            'a n': 10,
            ' kj': 11,
            'o n': 12,
            'nu ': 13,
            ' te': 14,
            'a m': 15,
            ' so': 16,
            ' o ': 17,
            kja: 18,
            tex: 19,
            ' dy': 20,
            ' nr': 21,
            nrr: 22,
            ' ma': 23,
            '̸ji': 24,
            'ja ': 25,
            'u̸j': 26,
            ' ng': 27,
            'a j': 28,
            'mu̸': 29,
            dya: 30,
            'i n': 31,
            'o r': 32,
            '̸ r': 33,
            'a k': 34,
            'o k': 35,
            exe: 36,
            'a r': 37,
            'na ': 38,
            ' pe': 39,
            ' ne': 40,
            ' b\'': 41,
            soo: 42,
            'oo ': 43,
            'zo ': 44,
            'xe ': 45,
            'e n': 46,
            imi: 47,
            'b\'e': 48,
            ' na': 49,
            ' jñ': 50,
            ' xi': 51,
            '. p': 52,
            'o o': 53,
            nge: 54,
            'ma ': 55,
            '\'ez': 56,
            ezh: 57,
            'he ': 58,
            'ts\'': 59,
            'ru̸': 60,
            'o s': 61,
            ' pj': 62,
            ezo: 63,
            '̸ n': 64,
            'mi ': 65,
            zhe: 66,
            'i, ': 67,
            pez: 68,
            ang: 69,
            ' ye': 70,
            rri: 71,
            ixo: 72,
            rix: 73,
            'e b': 74,
            ' mb': 75,
            'su̸': 76,
            'in ': 77,
            'jñi': 78,
            'je ': 79,
            'ya ': 80,
            ' in': 81,
            'te̱': 82,
            '\'e̱': 83,
            osu: 84,
            'e̱\'': 85,
            '̱\'e': 86,
            eje: 87,
            'xo ': 88,
            '\'a ': 89,
            'ye ': 90,
            ' ts': 91,
            ', n': 92,
            'e y': 93,
            jan: 94,
            'a x': 95,
            'o\'o': 96,
            'jo ': 97,
            ' ja': 98,
            jua: 99,
            'ji,': 100,
            kjo: 101,
            ngo: 102,
            oji: 103,
            ' jo': 104,
            'i k': 105,
            ' ri': 106,
            'i y': 107,
            'ri ': 108,
            'a p': 109,
            'e d': 110,
            ') t': 111,
            nte: 112,
            '̸ y': 113,
            ' ga': 114,
            'ñi ': 115,
            ' xo': 116,
            ' nt': 117,
            'ga ': 118,
            'ñiñ': 119,
            'iñi': 120,
            'ta ': 121,
            mbo: 122,
            ' d\'': 123,
            'a t': 124,
            'e̱ ': 125,
            nes: 126,
            sta: 127,
            mam: 128,
            xim: 129,
            'ua ': 130,
            ' nz': 131,
            amu: 132,
            est: 133,
            pjo: 134,
            'go ': 135,
            ' ch': 136,
            'a y': 137,
            'o y': 138,
            '\'o ': 139,
            '̸ k': 140,
            '\'ua': 141,
            'i. ': 142,
            ' mi': 143,
            'tr\'': 144,
            nuy: 145,
            uyo: 146,
            'a d': 147,
            'o (': 148,
            jom: 149,
            omu: 150,
            's\'i': 151,
            'o j': 152,
            's\'a': 153,
            ama: 154,
            ' ñe': 155,
            'a s': 156,
            mim: 157,
            gek: 158,
            '̸. ': 159,
            ngu: 160,
            ana: 161,
            'ek\'': 162,
            jos: 163,
            chj: 164,
            ' pa': 165,
            'te ': 166,
            nee: 167,
            bos: 168,
            'u̸.': 169,
            nch: 170,
            'ñej': 171,
            aji: 172,
            uam: 173,
            rra: 174,
            iji: 175,
            'nu̸': 176,
            'o p': 177,
            'u x': 178,
            'o, ': 179,
            'i r': 180,
            dyo: 181,
            'u r': 182,
            'e j': 183,
            ' ju': 184,
            ech: 185,
            'jo\'': 186,
            'a. ': 187,
            anr: 188,
            chi: 189,
            pji: 190,
            eji: 191,
            '. n': 192,
            sku: 193,
            kua: 194,
            kju: 195,
            'o d': 196,
            ' a ': 197,
            'i j': 198,
            'jña': 199,
            'so\'': 200,
            'xoñ': 201,
            trj: 202,
            'o t': 203,
            'to ': 204,
            'oñi': 205,
            xis: 206,
            ' (2': 207,
            umu: 208,
            'a, ': 209,
            isk: 210,
            ' (1': 211,
            pje: 212,
            '̸, ': 213,
            rjo: 214,
            inc: 215,
            'u̸,': 216,
            nru: 217,
            hje: 218,
            '\'ye': 219,
            'i m': 220,
            uan: 221,
            yec: 222,
            oru: 223,
            gum: 224,
            'o m': 225,
            ext: 226,
            'ch\'': 227,
            epj: 228,
            'h\'a': 229,
            'o i': 230,
            ara: 231,
            ote: 232,
            'ji.': 233,
            joj: 234,
            'd\'y': 235,
            pan: 236,
            'r\'u': 237,
            'a c': 238,
            eze: 239,
            'e t': 240,
            xto: 241,
            gej: 242,
            'n j': 243,
            '̸ a': 244,
            'e k': 245,
            aja: 246,
            ' an': 247,
            'u n': 248,
            etr: 249,
            gez: 250,
            man: 251,
            ' e ': 252,
            'ho ': 253,
            cho: 254,
            yot: 255,
            'a̸ ': 256,
            nza: 257,
            'd\'a': 258,
            anu: 259,
            its: 260,
            '. t': 261,
            'o. ': 262,
            'e, ': 263,
            'a g': 264,
            'e. ': 265,
            'ña\'': 266,
            akj: 267,
            nzh: 268,
            ekj: 269,
            aba: 270,
            ', m': 271,
            'ba ': 272,
            'ra̸': 273,
            ', k': 274,
            'ñij': 275,
            'e r': 276,
            '\'aj': 277,
            jek: 278,
            ntr: 279,
            jab: 280,
            'a\'a': 281,
            'i t': 282,
            ijo: 283,
            'i ñ': 284,
            'a (': 285,
            iyo: 286,
            ' zo': 287,
            'i p': 288,
            'o b': 289,
            'se ': 290,
            jet: 291,
            'e\'e': 292,
            zhi: 293,
            'i s': 294,
            ' jm': 295,
            'e̱,': 296,
            xes: 297,
            'ee ': 298,
            '\'e ': 299,
            ', x': 300
        }
    };
    exports.default = maz;
});
//# sourceMappingURL=maz.js.map