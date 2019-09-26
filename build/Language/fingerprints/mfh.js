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
    const mfh = {
        id: 'mfh',
        name: 'Matal',
        trigrams: { 'la ': 0,
            'a a': 1,
            ' à ': 2,
            ' ma': 3,
            ' la': 4,
            uwa: 5,
            ' uw': 6,
            ' kà': 7,
            'na ': 8,
            'ay ': 9,
            ' aŋ': 10,
            ana: 11,
            'à a': 12,
            wan: 13,
            'kà ': 14,
            'aŋa': 15,
            'a m': 16,
            azl: 17,
            zla: 18,
            ' ta': 19,
            ' az': 20,
            'ŋa ': 21,
            'a k': 22,
            'gəl': 23,
            'a l': 24,
            'a u': 25,
            'ga ': 26,
            'à, ': 27,
            aga: 28,
            'əla': 29,
            'a, ': 30,
            'atà': 31,
            'a t': 32,
            dza: 33,
            'a g': 34,
            'ha ': 35,
            ' gə': 36,
            ' aw': 37,
            ', a': 38,
            'a à': 39,
            'əl ': 40,
            gay: 41,
            aha: 42,
            'za ': 43,
            ' ka': 44,
            'ok ': 45,
            'à m': 46,
            sla: 47,
            'əŋ ': 48,
            'tà ': 49,
            ' ah': 50,
            'agə': 51,
            aka: 52,
            'əza': 53,
            ' ga': 54,
            kul: 55,
            adz: 56,
            zag: 57,
            vok: 58,
            ' vo': 59,
            'kà,': 60,
            ', k': 61,
            ata: 62,
            ' at': 63,
            asl: 64,
            'à u': 65,
            'à g': 66,
            ' zə': 67,
            ' ad': 68,
            mas: 69,
            'zəz': 70,
            'y a': 71,
            ' ak': 72,
            'ŋga': 73,
            wag: 74,
            'l a': 75,
            iya: 76,
            tak: 77,
            tat: 78,
            'ka ': 79,
            'ahə': 80,
            ama: 81,
            'həŋ': 82,
            'ak ': 83,
            ' ab': 84,
            ' ba': 85,
            'aŋh': 86,
            'ŋha': 87,
            'ma ': 88,
            aku: 89,
            ' dz': 90,
            ' ŋg': 91,
            'ya ': 92,
            'a. ': 93,
            ' an': 94,
            gah: 95,
            'ul ': 96,
            'adà': 97,
            ala: 98,
            ats: 99,
            'à à': 100,
            'aw ': 101,
            aba: 102,
            ' sl': 103,
            lak: 104,
            'a s': 105,
            ' ag': 106,
            'akə': 107,
            lam: 108,
            'k a': 109,
            lad: 110,
            'abà': 111,
            ' mə': 112,
            'à v': 113,
            '. a': 114,
            ' gu': 115,
            ' ye': 116,
            'l à': 117,
            'amə': 118,
            ' am': 119,
            'à k': 120,
            'à l': 121,
            'tsə': 122,
            'ahà': 123,
            ', ŋ': 124,
            yes: 125,
            esu: 126,
            ' al': 127,
            'a z': 128,
            mad: 129,
            ' as': 130,
            'apə': 131,
            'y l': 132,
            ' ts': 133,
            'y k': 134,
            'əna': 135,
            ' \"': 136,
            ', t': 137,
            'ik ': 138,
            'a d': 139,
            'slə': 140,
            'su ': 141,
            'àh ': 142,
            'gòɗ': 143,
            'k u': 144,
            ' gi': 145,
            'al ': 146,
            'agò': 147,
            'aw.': 148,
            nay: 149,
            'mən': 150,
            bay: 151,
            ada: 152,
            ina: 153,
            'w, ': 154,
            ' ge': 155,
            ' gà': 156,
            sin: 157,
            esi: 158,
            tsa: 159,
            '\" ': 160,
            ges: 161,
            'da ': 162,
            'pəh': 163,
            'aw,': 164,
            'ba ': 165,
            'y, ': 166,
            ': \\': 167,
            'u a': 168,
            mat: 169,
            ani: 170,
            'gi ': 171,
            'a b': 172,
            ' ki': 173,
            'w. ': 174,
            'à t': 175,
            'əra': 176,
            'la,': 177,
            'səl': 178,
            'ay,': 179,
            bab: 180,
            'a y': 181,
            'asə': 182,
            'kəl': 183,
            asa: 184,
            nik: 185,
            'waŋ': 186,
            ', m': 187,
            'l g': 188,
            'bà ': 189,
            iga: 190,
            ' te': 191,
            'ɗ à': 192,
            'ɗah': 193,
            'ŋ a': 194,
            'i a': 195,
            '. k': 196,
            ' wa': 197,
            anu: 198,
            tad: 199,
            'ŋ l': 200,
            kiy: 201,
            ', l': 202,
            map: 203,
            'h à': 204,
            'a v': 205,
            'aɗa': 206,
            ' ay': 207,
            'àl ': 208,
            'əv ': 209,
            lla: 210,
            mak: 211,
            kay: 212,
            'sa ': 213,
            'əha': 214,
            'y à': 215,
            dzi: 216,
            uba: 217,
            'l k': 218,
            oku: 219,
            'àw ': 220,
            ' ap': 221,
            hay: 222,
            ', g': 223,
            ', u': 224,
            'aŋ ': 225,
            'k, ': 226,
            ulo: 227,
            'à s': 228,
            'k l': 229,
            'y m': 230,
            'à w': 231,
            ' af': 232,
            mag: 233,
            ' ku': 234,
            maw: 235,
            uda: 236,
            aya: 237,
            'anə': 238,
            'ŋat': 239,
            'nu ': 240,
            ago: 241,
            'baŋ': 242,
            'à z': 243,
            'l, ': 244,
            kub: 245,
            'əh ': 246,
            ray: 247,
            'k à': 248,
            'aŋk': 249,
            'goɗ': 250,
            gud: 251,
            'ŋ, ': 252,
            'ay.': 253,
            say: 254,
            tap: 255,
            'à. ': 256,
            ami: 257,
            'ŋ k': 258,
            '. m': 259,
            gul: 260,
            'l l': 261,
            ' hu': 262,
            adi: 263,
            bok: 264,
            'səh': 265,
            'y u': 266,
            'la.': 267,
            maz: 268,
            ' bo': 269,
            'gà ': 270,
            'dəŋ': 271,
            ' su': 272,
            suf: 273,
            'udə': 274,
            '.\"': 275,
            'kəs': 276,
            'y. ': 277,
            'avà': 278,
            'ɗa ': 279,
            'hàl': 280,
            lay: 281,
            'ga,': 282,
            man: 283,
            'k m': 284,
            'ŋku': 285,
            'fəl': 286,
            'y g': 287,
            'òɗ ': 288,
            gam: 289,
            'məŋ': 290,
            'ufə': 291,
            'àŋ ': 292,
            'sà ': 293,
            'ày ': 294,
            ' ud': 295,
            'ŋ à': 296,
            'asà': 297,
            'à: ': 298,
            'nəŋ': 299,
            mok: 300
        }
    };
    exports.default = mfh;
});
//# sourceMappingURL=mfh.js.map