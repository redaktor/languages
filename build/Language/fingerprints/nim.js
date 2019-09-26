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
    const nim = {
        id: 'nim',
        name: 'Kinyiramba',
        trigrams: { ' na': 0,
            'a k': 1,
            ' nu': 2,
            ' ku': 3,
            umu: 4,
            ' mu': 5,
            'a n': 6,
            'na ': 7,
            'la ': 8,
            'a, ': 9,
            ' wa': 10,
            'ĩĩl': 11,
            'lĩ ': 12,
            uku: 13,
            'a u': 14,
            ', n': 15,
            ' kĩ': 16,
            'a m': 17,
            ulu: 18,
            naa: 19,
            'le ': 20,
            'ĩla': 21,
            'alĩ': 22,
            aku: 23,
            'ia ': 24,
            ani: 25,
            'ua ': 26,
            'wa ': 27,
            'ĩna': 28,
            kul: 29,
            ' ya': 30,
            'ka ': 31,
            'e k': 32,
            'o n': 33,
            'ya ': 34,
            'a a': 35,
            aan: 36,
            ile: 37,
            kum: 38,
            'ue ': 39,
            ' ka': 40,
            'a ĩ': 41,
            'kĩn': 42,
            'muĩ': 43,
            ' nĩ': 44,
            'a w': 45,
            'ĩ n': 46,
            num: 47,
            nga: 48,
            ' um': 49,
            aak: 50,
            kwi: 51,
            'ĩli': 52,
            ' kw': 53,
            ' al': 54,
            lia: 55,
            'ngĩ': 56,
            amu: 57,
            'e n': 58,
            gua: 59,
            ika: 60,
            'a i': 61,
            kue: 62,
            'ĩlĩ': 63,
            'ga ': 64,
            ang: 65,
            mua: 66,
            mun: 67,
            'io ': 68,
            'e, ': 69,
            'aa ': 70,
            kuk: 71,
            sik: 72,
            kun: 73,
            asi: 74,
            nuk: 75,
            ula: 76,
            waa: 77,
            mul: 78,
            'ie ': 79,
            ' ni': 80,
            ana: 81,
            'i n': 82,
            aal: 83,
            muk: 84,
            alu: 85,
            'u n': 86,
            ' in': 87,
            ', k': 88,
            'ne ': 89,
            'a. ': 90,
            ili: 91,
            'ĩpa': 92,
            end: 93,
            'lu ': 94,
            'ĩ m': 95,
            ala: 96,
            ' uk': 97,
            'ĩle': 98,
            'tũl': 99,
            'tu ': 100,
            'pa ': 101,
            'ni ': 102,
            ' si': 103,
            'e u': 104,
            ntu: 105,
            kan: 106,
            uka: 107,
            'pĩn': 108,
            ' ĩp': 109,
            'o, ': 110,
            ' pa': 111,
            nzu: 112,
            ' uu': 113,
            'gĩ ': 114,
            'ko ': 115,
            ' pĩ': 116,
            ing: 117,
            'u, ': 118,
            nsi: 119,
            zua: 120,
            'ĩ k': 121,
            ' ĩa': 122,
            uns: 123,
            uki: 124,
            nam: 125,
            eel: 126,
            ung: 127,
            uul: 128,
            ook: 129,
            sio: 130,
            igu: 131,
            'za ': 132,
            'e m': 133,
            'uĩĩ': 134,
            'tĩ ': 135,
            'i, ': 136,
            ' ma': 137,
            'a y': 138,
            kua: 139,
            eli: 140,
            nan: 141,
            ', “': 142,
            man: 143,
            'ĩka': 144,
            mum: 145,
            uma: 146,
            'lo ': 147,
            nin: 148,
            ela: 149,
            'itĩ': 150,
            'li ': 151,
            'ũlũ': 152,
            'uĩl': 153,
            uan: 154,
            ens: 155,
            ulo: 156,
            '. n': 157,
            ama: 158,
            '.” ': 159,
            'ĩ, ': 160,
            kil: 161,
            'kĩl': 162,
            ', ĩ': 163,
            kaa: 164,
            ' za': 165,
            and: 166,
            'uĩ ': 167,
            'la,': 168,
            ini: 169,
            luk: 170,
            ant: 171,
            kuu: 172,
            ali: 173,
            'i w': 174,
            nso: 175,
            sun: 176,
            yaa: 177,
            'ndĩ': 178,
            ndu: 179,
            ola: 180,
            aas: 181,
            laa: 182,
            ane: 183,
            iin: 184,
            'lĩĩ': 185,
            uli: 186,
            'e. ': 187,
            'pũn': 188,
            ' ĩm': 189,
            'ĩĩt': 190,
            'si ': 191,
            ', u': 192,
            'ua,': 193,
            kui: 194,
            lua: 195,
            'ũna': 196,
            ako: 197,
            oko: 198,
            kol: 199,
            soo: 200,
            ene: 201,
            nda: 202,
            '. k': 203,
            nua: 204,
            ' un': 205,
            ish: 206,
            mus: 207,
            ' lu': 208,
            ule: 209,
            uit: 210,
            'u w': 211,
            'o y': 212,
            'ũga': 213,
            ' ul': 214,
            'ĩ a': 215,
            nak: 216,
            unz: 217,
            lek: 218,
            ona: 219,
            'ĩĩ ': 220,
            'lũ ': 221,
            'ĩnz': 222,
            lie: 223,
            'ĩkĩ': 224,
            mut: 225,
            nie: 226,
            'ĩ u': 227,
            ndi: 228,
            yes: 229,
            koo: 230,
            'ĩtu': 231,
            'a p': 232,
            igy: 233,
            ten: 234,
            'ĩ w': 235,
            'ma ': 236,
            lag: 237,
            ton: 238,
            esu: 239,
            ngu: 240,
            'ukĩ': 241,
            unt: 242,
            'e ĩ': 243,
            aka: 244,
            ' tũ': 245,
            'ĩma': 246,
            ' ii': 247,
            ' wĩ': 248,
            lum: 249,
            she: 250,
            uko: 251,
            kam: 252,
            uyo: 253,
            'ulĩ': 254,
            'a z': 255,
            ' ĩn': 256,
            kak: 257,
            muu: 258,
            gil: 259,
            'o. ': 260,
            ata: 261,
            ' ĩk': 262,
            'mi ': 263,
            ' su': 264,
            'a l': 265,
            ndo: 266,
            elu: 267,
            pol: 268,
            lig: 269,
            umb: 270,
            umi: 271,
            ' aa': 272,
            '. ĩ': 273,
            'ĩng': 274,
            usu: 275,
            lya: 276,
            ong: 277,
            kia: 278,
            agi: 279,
            nde: 280,
            'ga,': 281,
            ' mw': 282,
            ute: 283,
            ', m': 284,
            'e i': 285,
            pal: 286,
            gia: 287,
            'su ': 288,
            'akĩ': 289,
            una: 290,
            'o k': 291,
            'a; ': 292,
            ngo: 293,
            ila: 294,
            olo: 295,
            amb: 296,
            'nĩa': 297,
            ond: 298,
            ale: 299,
            ' wi': 300
        }
    };
    exports.default = nim;
});
//# sourceMappingURL=nim.js.map