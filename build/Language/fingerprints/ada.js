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
    const ada = {
        id: 'ada',
        name: 'Dangme, Adangme',
        trigrams: { 'mi ': 0,
            'nɛ ': 1,
            ' nɔ': 2,
            ' nɛ': 3,
            ' e ': 4,
            ' he': 5,
            'nɔ ': 6,
            'he ': 7,
            ' a ': 8,
            'ɔ n': 9,
            ' kɛ': 10,
            'kɛ ': 11,
            'i k': 12,
            ' ng': 13,
            'a n': 14,
            'aa ': 15,
            'blɔ': 16,
            ' bl': 17,
            'ngɛ': 18,
            'ɛ e': 19,
            'e b': 20,
            'gɛ ': 21,
            'ɛ n': 22,
            'e n': 23,
            'lɔ ': 24,
            ' ma': 25,
            'i n': 26,
            ' mi': 27,
            ' ts': 28,
            'ɛ h': 29,
            ' ko': 30,
            'hi ': 31,
            'ɛ a': 32,
            'e h': 33,
            'ko ': 34,
            tsu: 35,
            ' ni': 36,
            'a m': 37,
            'ma ': 38,
            ' ny': 39,
            'a k': 40,
            'ɔ k': 41,
            'ɛɛ ': 42,
            emi: 43,
            'a h': 44,
            ami: 45,
            ' be': 46,
            'i h': 47,
            'ɛmi': 48,
            ' si': 49,
            'be ': 50,
            'e m': 51,
            'ya ': 52,
            nya: 53,
            ' ka': 54,
            'e j': 55,
            'si ': 56,
            'i a': 57,
            'ɔ f': 58,
            ' je': 59,
            'ɛ m': 60,
            ' kp': 61,
            loo: 62,
            'oo ': 63,
            'a t': 64,
            ' hi': 65,
            'ɔ, ': 66,
            'o n': 67,
            'fɛɛ': 68,
            ' ɔ ': 69,
            ' fɛ': 70,
            ' fi': 71,
            laa: 72,
            ', n': 73,
            'ni ': 74,
            'a b': 75,
            'e k': 76,
            'je ': 77,
            ' pe': 78,
            pee: 79,
            ' ye': 80,
            ' ha': 81,
            'fiɛ': 82,
            'i. ': 83,
            '. f': 84,
            'ɛɛm': 85,
            umi: 86,
            'iɛɛ': 87,
            'ɔmi': 88,
            omi: 89,
            'ɛ ɔ': 90,
            'mi.': 91,
            'ɔ m': 92,
            'mɛ ': 93,
            kpa: 94,
            ' wo': 95,
            'i t': 96,
            'i, ': 97,
            'e s': 98,
            ' ɔ,': 99,
            'a a': 100,
            'ha ': 101,
            ' lo': 102,
            ', a': 103,
            'ke ': 104,
            maa: 105,
            'ɔ h': 106,
            'bɔ ': 107,
            'ɛ k': 108,
            'i b': 109,
            mla: 110,
            ahi: 111,
            kaa: 112,
            'e p': 113,
            'lɔh': 114,
            'ɔ t': 115,
            'ɔhi': 116,
            ' sa': 117,
            'nɔ́': 118,
            ' na': 119,
            ' gb': 120,
            sum: 121,
            'e, ': 122,
            'mi,': 123,
            'ɔ e': 124,
            'i m': 125,
            'sa ': 126,
            'e ɔ': 127,
            ' ji': 128,
            ' to': 129,
            'i s': 130,
            yem: 131,
            ' hɛ': 132,
            'o e': 133,
            'ɔ́ ': 134,
            ' ml': 135,
            'ɛ s': 136,
            'ɛ b': 137,
            ' lɛ': 138,
            'ee ': 139,
            ' jɔ': 140,
            ' ku': 141,
            alo: 142,
            'a s': 143,
            ' bɔ': 144,
            sua: 145,
            ' ad': 146,
            'a j': 147,
            'ɔɔ ': 148,
            ade: 149,
            uaa: 150,
            ' fa': 151,
            esa: 152,
            'u n': 153,
            des: 154,
            ' su': 155,
            imi: 156,
            'o k': 157,
            'jɔm': 158,
            'ɛ, ': 159,
            ake: 160,
            ihi: 161,
            ', e': 162,
            ' al': 163,
            'ɛ y': 164,
            'e. ': 165,
            'e y': 166,
            'ɛ t': 167,
            eem: 168,
            ' hu': 169,
            'ngɔ': 170,
            kak: 171,
            tom: 172,
            'a e': 173,
            'eɔ ': 174,
            'ne ': 175,
            'ɛ j': 176,
            'o b': 177,
            '́ k': 178,
            'lɛ ': 179,
            ' ya': 180,
            ane: 181,
            suo: 182,
            ' ke': 183,
            'ɔ y': 184,
            him: 185,
            ' bu': 186,
            'ia ': 187,
            mah: 188,
            'wo ': 189,
            'i l': 190,
            ', k': 191,
            'e g': 192,
            'suɔ': 193,
            'ji ': 194,
            'i j': 195,
            wom: 196,
            hia: 197,
            'tsɔ': 198,
            'e t': 199,
            'uu ': 200,
            san: 201,
            'pa ': 202,
            'o a': 203,
            ' tu': 204,
            ' gu': 205,
            'ba ': 206,
            ' bi': 207,
            gba: 208,
            'ue ': 209,
            ' we': 210,
            'e w': 211,
            ' ja': 212,
            'gɔ ': 213,
            'ɛ p': 214,
            kuu: 215,
            'uo ': 216,
            'e a': 217,
            'i 1': 218,
            'a p': 219,
            'ɛ. ': 220,
            'i 2': 221,
            'ɔ s': 222,
            'he,': 223,
            'hu ': 224,
            'fa ': 225,
            'sɔs': 226,
            'na ': 227,
            'sɔɔ': 228,
            isi: 229,
            'ɛ g': 230,
            'e f': 231,
            'o, ': 232,
            'e e': 233,
            ' sɔ': 234,
            'i ɔ': 235,
            'o m': 236,
            'ɔ. ': 237,
            ' ab': 238,
            'hɛɛ': 239,
            jam: 240,
            tue: 241,
            ', l': 242,
            hla: 243,
            'ye ': 244,
            'ɔ b': 245,
            ' ba': 246,
            'ɛ w': 247,
            'li ': 248,
            '. n': 249,
            'ti ': 250,
            'a w': 251,
            'a l': 252,
            sis: 253,
            ' hl': 254,
            'a y': 255,
            'abɔ': 256,
            ' ju': 257,
            'ɔsɔ': 258,
            'a. ': 259,
            'pe ': 260,
            'ɔmɛ': 261,
            '. a': 262,
            'sɔɛ': 263,
            'o s': 264,
            'to ': 265,
            ' ɔm': 266,
            ' kɔ': 267,
            'kpɛ': 268,
            'ɛti': 269,
            ' nu': 270,
            'yɛm': 271,
            'i w': 272,
            pak: 273,
            asa: 274,
            'uɛ ': 275,
            nyu: 276,
            'pɛt': 277,
            'u ɔ': 278,
            akp: 279,
            'o h': 280,
            kpe: 281,
            ' yi': 282,
            '. b': 283,
            'se ': 284,
            sem: 285,
            'ɔ w': 286,
            'o j': 287,
            'ɔ a': 288,
            ', h': 289,
            'he.': 290,
            'u k': 291,
            ' sɛ': 292,
            ' mɛ': 293,
            nih: 294,
            'su ': 295,
            'hɛ ': 296,
            'a g': 297,
            ngm: 298,
            '. e': 299,
            ' wa': 300
        }
    };
    exports.default = ada;
});
//# sourceMappingURL=ada.js.map