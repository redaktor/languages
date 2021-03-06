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
    const gux = {
        id: 'gux',
        name: 'Gulmancema',
        trigrams: { 'ni ': 0,
            'aa ': 1,
            ' ti': 2,
            'li ': 3,
            ' ki': 4,
            ' ya': 5,
            'di ': 6,
            'ki ': 7,
            'i k': 8,
            'i y': 9,
            ' n ': 10,
            yaa: 11,
            ani: 12,
            ' ba': 13,
            'en ': 14,
            ' de': 15,
            den: 16,
            eni: 17,
            'i b': 18,
            'ma ': 19,
            ' o ': 20,
            'a n': 21,
            tie: 22,
            'ba ': 23,
            ' bi': 24,
            'a k': 25,
            ' ye': 26,
            ' ke': 27,
            'i n': 28,
            'a y': 29,
            'bi ': 30,
            ' yi': 31,
            baa: 32,
            'i t': 33,
            'ua ': 34,
            ' li': 35,
            'ke ': 36,
            ' le': 37,
            ali: 38,
            ama: 39,
            ' ku': 40,
            ien: 41,
            'i l': 42,
            'a b': 43,
            len: 44,
            'ie ': 45,
            'i, ': 46,
            'i d': 47,
            'an ': 48,
            adi: 49,
            ' ma': 50,
            'i o': 51,
            'i m': 52,
            ndi: 53,
            'a t': 54,
            'n d': 55,
            uli: 56,
            'a, ': 57,
            'n y': 58,
            ' la': 59,
            ' mi': 60,
            nni: 61,
            'n t': 62,
            ' po': 63,
            ima: 64,
            'ti ': 65,
            'i. ': 66,
            edi: 67,
            'nu ': 68,
            'a l': 69,
            ' ni': 70,
            aba: 71,
            ban: 72,
            'i p': 73,
            idi: 74,
            'a p': 75,
            ' u ': 76,
            aan: 77,
            'la ': 78,
            ', k': 79,
            ' nn': 80,
            'n b': 81,
            kul: 82,
            aal: 83,
            ' ka': 84,
            yen: 85,
            ' na': 86,
            maa: 87,
            ' yu': 88,
            ' wa': 89,
            'yi ': 90,
            ' da': 91,
            eli: 92,
            agi: 93,
            'u t': 94,
            aab: 95,
            ala: 96,
            'o d': 97,
            'a. ': 98,
            'a m': 99,
            'a d': 100,
            enu: 101,
            'gi ': 102,
            ' di': 103,
            ' tu': 104,
            and: 105,
            'o k': 106,
            aam: 107,
            lim: 108,
            ili: 109,
            'po ': 110,
            ' bu': 111,
            nba: 112,
            wan: 113,
            ' pa': 114,
            ' mo': 115,
            ' ta': 116,
            yed: 117,
            'in ': 118,
            'ni,': 119,
            kan: 120,
            'mi ': 121,
            'o y': 122,
            'u n': 123,
            ' go': 124,
            ' kp': 125,
            'ni.': 126,
            yua: 127,
            'i g': 128,
            ini: 129,
            ' bo': 130,
            ' je': 131,
            ian: 132,
            ' ŋa': 133,
            ' pi': 134,
            iba: 135,
            lan: 136,
            ' a ': 137,
            'n k': 138,
            pia: 139,
            anb: 140,
            'ga ': 141,
            'ŋan': 142,
            'ia ': 143,
            'e y': 144,
            laa: 145,
            gid: 146,
            die: 147,
            yin: 148,
            'o, ': 149,
            ' pu': 150,
            kel: 151,
            'u k': 152,
            oan: 153,
            'o. ': 154,
            'n g': 155,
            jes: 156,
            esu: 157,
            'i j': 158,
            kaa: 159,
            anl: 160,
            bon: 161,
            'o n': 162,
            'o b': 163,
            nan: 164,
            'n p': 165,
            'e b': 166,
            iga: 167,
            'su ': 168,
            'e l': 169,
            'ye ': 170,
            nli: 171,
            '. l': 172,
            ' si': 173,
            'go ': 174,
            aad: 175,
            'a o': 176,
            moa: 177,
            ngi: 178,
            bua: 179,
            'i s': 180,
            cia: 181,
            'gu ': 182,
            'e n': 183,
            taa: 184,
            ' ja': 185,
            end: 186,
            'i u': 187,
            naa: 188,
            '.” ': 189,
            'i c': 190,
            ' fi': 191,
            man: 192,
            ': “': 193,
            ang: 194,
            'na ': 195,
            ogu: 196,
            'u d': 197,
            ' cu': 198,
            tuo: 199,
            'e o': 200,
            dan: 201,
            iig: 202,
            ' fa': 203,
            ' am': 204,
            ', y': 205,
            paa: 206,
            inb: 207,
            ' gb': 208,
            'do ': 209,
            ' yo': 210,
            'e k': 211,
            ika: 212,
            nma: 213,
            uon: 214,
            'i a': 215,
            'po.': 216,
            'o t': 217,
            nbi: 218,
            '. y': 219,
            'li.': 220,
            daa: 221,
            '. b': 222,
            'li,': 223,
            nla: 224,
            'mo ': 225,
            'da ': 226,
            ', b': 227,
            tin: 228,
            iad: 229,
            ied: 230,
            bia: 231,
            'a j': 232,
            min: 233,
            kpi: 234,
            ', l': 235,
            'u y': 236,
            'i f': 237,
            oli: 238,
            waa: 239,
            'lo ': 240,
            gba: 241,
            isi: 242,
            'n m': 243,
            'ma.': 244,
            '. o': 245,
            'ii ': 246,
            yog: 247,
            'ma,': 248,
            'a s': 249,
            sii: 250,
            ' i ': 251,
            'i ŋ': 252,
            unu: 253,
            ana: 254,
            nib: 255,
            'n c': 256,
            gun: 257,
            'o l': 258,
            iti: 259,
            ' ga': 260,
            bal: 261,
            'i: ': 262,
            uni: 263,
            gin: 264,
            'a f': 265,
            'e t': 266,
            ' te': 267,
            uan: 268,
            'po,': 269,
            cua: 270,
            kpa: 271,
            nci: 272,
            lis: 273,
            amo: 274,
            'i w': 275,
            'e m': 276,
            'ba,': 277,
            ema: 278,
            'n l': 279,
            ugi: 280,
            ' ju': 281,
            ', o': 282,
            ' ca': 283,
            'a g': 284,
            'n f': 285,
            'o m': 286,
            ', a': 287,
            ' fu': 288,
            'u, ': 289,
            pun: 290,
            'uo ': 291,
            tua: 292,
            'ku ': 293,
            ' ña': 294,
            ten: 295,
            dim: 296,
            abi: 297,
            odi: 298,
            ' do': 299,
            iin: 300
        }
    };
    exports.default = gux;
});
//# sourceMappingURL=gux.js.map