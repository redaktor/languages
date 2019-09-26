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
    const ahk = {
        id: 'ahk',
        name: 'Akha ',
        trigrams: { 'aˬ ': 0,
            '-eu': 1,
            'hˇ ': 2,
            'eu ': 3,
            ' ̭ ': 4,
            'uˬ ': 5,
            'euˬ': 6,
            'awˇ': 7,
            ' ma': 8,
            'ehˇ': 9,
            'aw ': 10,
            'aˇ ': 11,
            'ahˇ': 12,
            ' k\'': 13,
            ' ̭-': 14,
            ' ya': 15,
            'ˇ n': 16,
            'ˬ m': 17,
            'a ̭': 18,
            'wˇ ': 19,
            '-ah': 20,
            'ˇ-e': 21,
            ' aˬ': 22,
            yaw: 23,
            'awˬ': 24,
            'eh ': 25,
            ' me': 26,
            'ˬ-e': 27,
            ' la': 28,
            ' g\'': 29,
            ' na': 30,
            '̭-e': 31,
            meh: 32,
            'iˬ ': 33,
            'k\'o': 34,
            'eˇ ': 35,
            'w ̭': 36,
            'ˬ y': 37,
            'oeˇ': 38,
            'ˇ, ': 39,
            ' ne': 40,
            '\'oe': 41,
            neh: 42,
            'ˬ d': 43,
            ' ts': 44,
            'ˇ m': 45,
            'ˬ n': 46,
            'hˬ ': 47,
            'ˬ-a': 48,
            ' ng': 49,
            'ehˬ': 50,
            ' ha': 51,
            'ma ': 52,
            'aˬ-': 53,
            'wˬ ': 54,
            'ˬ t': 55,
            'g\'a': 56,
            'ˇ k': 57,
            'ˇ d': 58,
            'iˇ ': 59,
            'eh.': 60,
            ' mi': 61,
            ' da': 62,
            tsa: 63,
            'h. ': 64,
            ' ta': 65,
            'ˬ l': 66,
            '-aw': 67,
            'k\'a': 68,
            ' ga': 69,
            'gaˇ': 70,
            'u ̭': 71,
            ' le': 72,
            'ˇ h': 73,
            'maˬ': 74,
            ' ja': 75,
            ' de': 76,
            'ˬ g': 77,
            'ˇ-a': 78,
            ' du': 79,
            'haˬ': 80,
            'ˇ g': 81,
            ' eh': 82,
            '\'aˬ': 83,
            '̭-a': 84,
            'ˇ t': 85,
            'ˬ k': 86,
            saw: 87,
            'eˬ ': 88,
            ' je': 89,
            '-eh': 90,
            'aˆ ': 91,
            'ahˬ': 92,
            ' za': 93,
            'ˇ l': 94,
            ' sh': 95,
            nga: 96,
            'jeˬ': 97,
            'o ̭': 98,
            'hˇ-': 99,
            'u m': 100,
            naw: 101,
            deu: 102,
            ' ny': 103,
            daw: 104,
            yeh: 105,
            'h ̭': 106,
            'ya ': 107,
            'zaˬ': 108,
            'hˬ-': 109,
            'uˇ ': 110,
            'ˬ j': 111,
            'la ': 112,
            'ui ': 113,
            ' ka': 114,
            'ˬ, ': 115,
            nge: 116,
            'ˬ p': 117,
            'ˬ b': 118,
            'miˬ': 119,
            '̭ m': 120,
            'a. ': 121,
            'wˇ-': 122,
            ' sa': 123,
            '̭ k': 124,
            ' lu': 125,
            'w m': 126,
            ', a': 127,
            ' pa': 128,
            leh: 129,
            'ˇ j': 130,
            'wˇ,': 131,
            ' ti': 132,
            ' bi': 133,
            'lu ': 134,
            'ˬ s': 135,
            ' ba': 136,
            ' lo': 137,
            'miˇ': 138,
            '\'aw': 139,
            ', n': 140,
            'ˇ y': 141,
            'bi ': 142,
            ' te': 143,
            ' ni': 144,
            'tiˬ': 145,
            'ˬye': 146,
            'iˬy': 147,
            'uˬ-': 148,
            ' dz': 149,
            'ˬ h': 150,
            'aˬ,': 151,
            'a l': 152,
            'gaˬ': 153,
            geh: 154,
            jaw: 155,
            'naˇ': 156,
            haw: 157,
            '-aˬ': 158,
            'laˇ': 159,
            '. a': 160,
            dui: 161,
            'ˇ b': 162,
            '̭ n': 163,
            'ˆ l': 164,
            'awˆ': 165,
            'duˬ': 166,
            'taˬ': 167,
            ' py': 168,
            'h, ': 169,
            'ˇ s': 170,
            ' ye': 171,
            'u g': 172,
            'uiˬ': 173,
            'aˇ-': 174,
            'eh,': 175,
            'ˇ a': 176,
            teh: 177,
            'lo ': 178,
            nya: 179,
            '\'eh': 180,
            '\'aˇ': 181,
            'ni ': 182,
            ', m': 183,
            'mˇ ': 184,
            '̭ l': 185,
            'ˬ a': 186,
            'ˇ e': 187,
            'wˆ ': 188,
            'u t': 189,
            'saˬ': 190,
            maw: 191,
            'iˇ-': 192,
            sha: 193,
            'ˬ z': 194,
            'ˆ-e': 195,
            heu: 196,
            'ˆ n': 197,
            'u j': 198,
            'uˇ-': 199,
            'i ̭': 200,
            'yeˬ': 201,
            'suˇ': 202,
            ' \"': 203,
            'aˇ,': 204,
            'ah ': 205,
            sah: 206,
            'oˆ ': 207,
            '-a.': 208,
            'h-e': 209,
            'hˇ,': 210,
            ' ca': 211,
            'eˬs': 212,
            pye: 213,
            ' he': 214,
            ' ̭,': 215,
            '̭, ': 216,
            'uˆ ': 217,
            'ˬsu': 218,
            'ˇ p': 219,
            'ˬ c': 220,
            ', y': 221,
            geu: 222,
            'oeˬ': 223,
            'u l': 224,
            '. n': 225,
            'a m': 226,
            '\" ': 227,
            'wˬ-': 228,
            nui: 229,
            'ma.': 230,
            ' nu': 231,
            lah: 232,
            'mˬ ': 233,
            ' aˇ': 234,
            caw: 235,
            yeu: 236,
            '̭ d': 237,
            '. k': 238,
            'i m': 239,
            'u, ': 240,
            ' mˇ': 241,
            'eu,': 242,
            'a n': 243,
            'g\'e': 244,
            kaw: 245,
            'paˬ': 246,
            ' my': 247,
            ' si': 248,
            mya: 249,
            ' by': 250,
            'eˇ-': 251,
            'euˇ': 252,
            'siˬ': 253,
            'eˬ-': 254,
            'eh-': 255,
            '\'o ': 256,
            dza: 257,
            '\'ah': 258,
            'h n': 259,
            'a-e': 260,
            ' mu': 261,
            'i d': 262,
            ' do': 263,
            'ˆ t': 264,
            ' li': 265,
            ' gu': 266,
            'ka ': 267,
            '̭ t': 268,
            deh: 269,
            '.\"': 270,
            '-iˇ': 271,
            'aˆ-': 272,
            ', \\': 273,
            'euˆ': 274,
            'leˇ': 275,
            seh: 276,
            shi: 277,
            dze: 278,
            'ˬ. ': 279,
            ', t': 280,
            jah: 281,
            'ah-': 282,
            ' yu': 283,
            'oˆ-': 284,
            taw: 285,
            'ˇ. ': 286,
            'h l': 287,
            'taˆ': 288,
            ' ke': 289,
            keu: 290,
            'ga ': 291,
            bya: 292,
            'mˇ-': 293,
            'ˆ m': 294,
            'u d': 295,
            'g\'o': 296,
            'ˇ c': 297,
            yah: 298,
            nah: 299,
            ' iˇ': 300
        }
    };
    exports.default = ahk;
});
//# sourceMappingURL=ahk.js.map