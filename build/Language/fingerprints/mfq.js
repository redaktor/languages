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
    const mfq = {
        id: 'mfq',
        name: 'Moba',
        trigrams: { ' g ': 0,
            'an ': 1,
            ' k ': 2,
            ' n ': 3,
            ' ye': 4,
            yen: 5,
            ' ti': 6,
            nba: 7,
            ' ma': 8,
            ' bu': 9,
            'en ': 10,
            ' u ': 11,
            ' ni': 12,
            ' ba': 13,
            tie: 14,
            'n n': 15,
            'ba ': 16,
            'aa ': 17,
            ' l ': 18,
            'n b': 19,
            ' bo': 20,
            ' i ': 21,
            ' nb': 22,
            ' ny': 23,
            ' ya': 24,
            'al ': 25,
            'ie ': 26,
            maa: 27,
            ' ku': 28,
            aan: 29,
            ' yi': 30,
            ' mɔ': 31,
            'ua ': 32,
            ' po': 33,
            'nn ': 34,
            ', g': 35,
            nya: 36,
            'n g': 37,
            yan: 38,
            ' b ': 39,
            end: 40,
            'n y': 41,
            'a n': 42,
            'bo ': 43,
            ndu: 44,
            ban: 45,
            daa: 46,
            aad: 47,
            'ad ': 48,
            ' la': 49,
            ' bi': 50,
            ' tu': 51,
            ann: 52,
            'g n': 53,
            'n t': 54,
            'ii ': 55,
            'g y': 56,
            'g b': 57,
            'du ': 58,
            ' da': 59,
            'l n': 60,
            'a k': 61,
            nin: 62,
            'ug ': 63,
            baa: 64,
            ' ŋa': 65,
            aal: 66,
            'nŋ ': 67,
            'nm ': 68,
            ' su': 69,
            'nd ': 70,
            'n, ': 71,
            'a b': 72,
            and: 73,
            ' ka': 74,
            'n m': 75,
            'inŋ': 76,
            ' gi': 77,
            gii: 78,
            kul: 79,
            'bu ': 80,
            'u b': 81,
            'k b': 82,
            'g t': 83,
            'n k': 84,
            'g m': 85,
            'in ': 86,
            ', k': 87,
            'a g': 88,
            'd g': 89,
            ' pa': 90,
            uan: 91,
            yie: 92,
            'n i': 93,
            'a y': 94,
            'ŋan': 95,
            'po ': 96,
            uol: 97,
            'ul ': 98,
            'iɛ ': 99,
            'k u': 100,
            'i, ': 101,
            ' wa': 102,
            ' di': 103,
            'g d': 104,
            'ɔg ': 105,
            lan: 106,
            'l g': 107,
            ' ta': 108,
            ' ji': 109,
            'u n': 110,
            ' be': 111,
            anm: 112,
            'i. ': 113,
            'n. ': 114,
            'iɛn': 115,
            'ab ': 116,
            ' yo': 117,
            'i k': 118,
            'l b': 119,
            'g g': 120,
            ies: 121,
            esu: 122,
            ' t ': 123,
            'id ': 124,
            wan: 125,
            paa: 126,
            'mɔn': 127,
            ' sa': 128,
            'i g': 129,
            nii: 130,
            'la ': 131,
            'su ': 132,
            bua: 133,
            'i b': 134,
            ' si': 135,
            ' na': 136,
            buo: 137,
            ' « ': 138,
            'be ': 139,
            ' kp': 140,
            'b n': 141,
            'd n': 142,
            '. l': 143,
            oug: 144,
            'n p': 145,
            'n l': 146,
            man: 147,
            ' » ': 148,
            ': «': 149,
            ' fi': 150,
            yal: 151,
            'e n': 152,
            'a t': 153,
            ien: 154,
            ' yu': 155,
            'l y': 156,
            'o, ': 157,
            yua: 158,
            'na ': 159,
            'u t': 160,
            kua: 161,
            ' te': 162,
            yaa: 163,
            ' du': 164,
            yab: 165,
            bon: 166,
            'g s': 167,
            'o. ': 168,
            'o n': 169,
            'biɛ': 170,
            'm n': 171,
            'k l': 172,
            'b b': 173,
            'e k': 174,
            'o g': 175,
            'g k': 176,
            ' gb': 177,
            'n d': 178,
            'gn ': 179,
            ' a ': 180,
            iib: 181,
            'ne ': 182,
            'd y': 183,
            'a, ': 184,
            ' pu': 185,
            ' ga': 186,
            ' i.': 187,
            'mɔg': 188,
            dug: 189,
            'e y': 190,
            'an,': 191,
            'ib ': 192,
            'u p': 193,
            uon: 194,
            ' ń ': 195,
            ' mi': 196,
            ' ne': 197,
            'am ': 198,
            'u k': 199,
            'g p': 200,
            'ji ': 201,
            'te ': 202,
            'ol ': 203,
            tuo: 204,
            tan: 205,
            'l p': 206,
            'iɛl': 207,
            'u m': 208,
            'g l': 209,
            gba: 210,
            taa: 211,
            ' i,': 212,
            'n s': 213,
            ama: 214,
            'l k': 215,
            '. »': 216,
            yin: 217,
            '. y': 218,
            tin: 219,
            'i n': 220,
            'u y': 221,
            'i t': 222,
            'l, ': 223,
            ' li': 224,
            ' nn': 225,
            'l m': 226,
            'l. ': 227,
            iid: 228,
            '. g': 229,
            ' ? ': 230,
            '’o ': 231,
            'a m': 232,
            ris: 233,
            'un ': 234,
            ', y': 235,
            'l t': 236,
            'k n': 237,
            bii: 238,
            aam: 239,
            'mɔ ': 240,
            ugn: 241,
            you: 242,
            'u g': 243,
            'ciɛ': 244,
            dan: 245,
            'ad’': 246,
            'lu ': 247,
            'no ': 248,
            ', l': 249,
            'b k': 250,
            'il ': 251,
            onm: 252,
            nan: 253,
            'i y': 254,
            kaa: 255,
            'o t': 256,
            'a. ': 257,
            'n u': 258,
            ' nu': 259,
            kan: 260,
            ist: 261,
            ' kr': 262,
            'u ŋ': 263,
            '. n': 264,
            kri: 265,
            'ŋ n': 266,
            sto: 267,
            'po,': 268,
            'a p': 269,
            'po.': 270,
            'o b': 271,
            ' ja': 272,
            'ɛl ': 273,
            ' do': 274,
            'o k': 275,
            ieb: 276,
            ' fa': 277,
            'ni ': 278,
            ', n': 279,
            'd k': 280,
            ' am': 281,
            'ŋaa': 282,
            sun: 283,
            min: 284,
            saa: 285,
            'ma ': 286,
            ' pi': 287,
            'i ?': 288,
            nyu: 289,
            kpa: 290,
            ' ci': 291,
            'an.': 292,
            '. b': 293,
            'e g': 294,
            'g ŋ': 295,
            ' ŋu': 296,
            puo: 297,
            'g j': 298,
            'nu ': 299,
            naa: 300
        }
    };
    exports.default = mfq;
});
//# sourceMappingURL=mfq.js.map