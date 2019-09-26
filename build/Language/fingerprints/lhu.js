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
    const lhu = {
        id: 'lhu',
        name: 'Lahu',
        trigrams: { ' ve': 0,
            've ': 1,
            'awˬ': 2,
            'wˬ ': 3,
            'a‸ ': 4,
            'awˇ': 5,
            ' ht': 6,
            'wˇ ': 7,
            ' hk': 8,
            'aˇ ': 9,
            hta: 10,
            ' te': 11,
            'ˇ h': 12,
            ' aw': 13,
            'ˬ h': 14,
            ' le': 15,
            ' ya': 16,
            'ta‸': 17,
            'k\'a': 18,
            leh: 19,
            'hk\'': 20,
            ' ma': 21,
            ' k\'': 22,
            'aw ': 23,
            ' yo': 24,
            ' ch': 25,
            'ˇ v': 26,
            'yoˬ': 27,
            'eˇ ': 28,
            'ˬ. ': 29,
            ' hp': 30,
            'aˬ ': 31,
            'teˇ': 32,
            ' sh': 33,
            ' g\'': 34,
            ' la': 35,
            'e y': 36,
            yaw: 37,
            'ui ': 38,
            'aˍ ': 39,
            'oˬ.': 40,
            ' hu': 41,
            hui: 42,
            'uˬ ': 43,
            'k\'o': 44,
            ' ta': 45,
            ' na': 46,
            'eh ': 47,
            '\'aw': 48,
            'ehˬ': 49,
            'ˬ l': 50,
            'g\'a': 51,
            ' lo': 52,
            'iˇ ': 53,
            haw: 54,
            'gaˬ': 55,
            naw: 56,
            '\'a ': 57,
            '\'oˆ': 58,
            'ˬ v': 59,
            ' ng': 60,
            nga: 61,
            'eh‸': 62,
            hpa: 63,
            'maˇ': 64,
            'oˆ ': 65,
            'h‸ ': 66,
            cha: 67,
            'e t': 68,
            'ˬ, ': 69,
            taw: 70,
            ' tu': 71,
            'iˬ ': 72,
            'ˍ v': 73,
            'hˇ ': 74,
            'ˇ t': 75,
            'lo ': 76,
            'paˍ': 77,
            'e a': 78,
            ' ca': 79,
            'tuˬ': 80,
            '‸ k': 81,
            ' pa': 82,
            'ˬ t': 83,
            'ˇ g': 84,
            ' pi': 85,
            'i h': 86,
            'e h': 87,
            '\'aˇ': 88,
            'piˇ': 89,
            ', y': 90,
            heh: 91,
            'ˇ l': 92,
            'ˍ h': 93,
            ' ka': 94,
            ' pe': 95,
            sha: 96,
            ' ha': 97,
            'ˇ m': 98,
            ', n': 99,
            'w l': 100,
            'hˬ ': 101,
            'ˇ c': 102,
            'uiˬ': 103,
            'euˬ': 104,
            'hˬ,': 105,
            'te ': 106,
            'a t': 107,
            'e c': 108,
            'h, ': 109,
            'eh,': 110,
            '‸ h': 111,
            'ha ': 112,
            'e l': 113,
            teh: 114,
            'ehˇ': 115,
            '‸ v': 116,
            'ˬ s': 117,
            ' da': 118,
            chi: 119,
            peh: 120,
            'nˇ ': 121,
            '. y': 122,
            'taˍ': 123,
            nyi: 124,
            ' ny': 125,
            peu: 126,
            'ˬ y': 127,
            'ˇ, ': 128,
            'ˇ k': 129,
            '‸ t': 130,
            'iˍ ': 131,
            '‸ n': 132,
            hpe: 133,
            law: 134,
            'aˆ ': 135,
            ' ce': 136,
            hka: 137,
            caw: 138,
            ' ye': 139,
            'iˉ ': 140,
            'ˆ v': 141,
            'oˇ ': 142,
            'aw‸': 143,
            'w‸ ': 144,
            'g\'u': 145,
            'ˇ y': 146,
            'yi ': 147,
            'nˍ ': 148,
            che: 149,
            'k\'e': 150,
            ' oˇ': 151,
            'la ': 152,
            'hi ': 153,
            'uˆ ': 154,
            'ˬ p': 155,
            'ˍ l': 156,
            'ˬ m': 157,
            ', a': 158,
            'a h': 159,
            vuh: 160,
            '\'ui': 161,
            'aˉ ': 162,
            '‸ y': 163,
            '‸ c': 164,
            'ˬ n': 165,
            maw: 166,
            'a v': 167,
            'yaˇ': 168,
            'ˇ p': 169,
            'laˇ': 170,
            'o, ': 171,
            '‸ l': 172,
            'ˬ c': 173,
            '\'e ': 174,
            'taˇ': 175,
            'a p': 176,
            'da‸': 177,
            'hˍ ': 178,
            'e, ': 179,
            ' ja': 180,
            '. a': 181,
            'ˇ n': 182,
            'ma ': 183,
            'ˆ l': 184,
            'ˇ s': 185,
            '‸ m': 186,
            shu: 187,
            awn: 188,
            'w h': 189,
            she: 190,
            'anˇ': 191,
            'ˬ a': 192,
            'pa ': 193,
            '. n': 194,
            'uh ': 195,
            'ˍ t': 196,
            kaw: 197,
            '\'o,': 198,
            suh: 199,
            'ˆ h': 200,
            'on ': 201,
            'ˬ g': 202,
            ceu: 203,
            'eˬ ': 204,
            ' me': 205,
            'e k': 206,
            'aˇ,': 207,
            'i v': 208,
            've,': 209,
            'uhˇ': 210,
            ' mi': 211,
            'yeˍ': 212,
            ' mv': 213,
            mvu: 214,
            ' su': 215,
            '‸ p': 216,
            'i t': 217,
            '‸ g': 218,
            'w t': 219,
            'ˇ a': 220,
            kan: 221,
            shi: 222,
            'awˉ': 223,
            'a l': 224,
            ', h': 225,
            'eˍs': 226,
            'wn ': 227,
            ' he': 228,
            'ˍ p': 229,
            paw: 230,
            'suˆ': 231,
            'ˍsu': 232,
            'awˆ': 233,
            'i l': 234,
            '\'ai': 235,
            ' ge': 236,
            ' yu': 237,
            ', c': 238,
            'nˉ ': 239,
            ' ga': 240,
            geh: 241,
            'e m': 242,
            'wˆ ': 243,
            'ˆ t': 244,
            'ˉ h': 245,
            'h t': 246,
            'ˆ p': 247,
            'ai ': 248,
            'i‸ ': 249,
            'i m': 250,
            'ya‸': 251,
            'uˇ ': 252,
            'e v': 253,
            'a s': 254,
            'oˬ ': 255,
            'hiˍ': 256,
            'ehˍ': 257,
            daw: 258,
            ' po': 259,
            pon: 260,
            '‸ s': 261,
            ' ba': 262,
            'ˬ k': 263,
            'ka‸': 264,
            'wˉ ': 265,
            'ˉ t': 266,
            'ˆ k': 267,
            'oˍ ': 268,
            'anˍ': 269,
            jaw: 270,
            'hu ': 271,
            'yuˬ': 272,
            'hˆ ': 273,
            'enˇ': 274,
            'e‸ ': 275,
            yan: 276,
            'u‸ ': 277,
            '. h': 278,
            '‸, ': 279,
            ' a ': 280,
            ven: 281,
            ', m': 282,
            'hˉ ': 283,
            'ˆ, ': 284,
            ' bo': 285,
            ' ti': 286,
            'miˬ': 287,
            meh: 288,
            ' pu': 289,
            ' ku': 290,
            'ˉ l': 291,
            'maˍ': 292,
            '‸ a': 293,
            kui: 294,
            bon: 295,
            'heˆ': 296,
            'eu-': 297,
            'uiˉ': 298,
            '-eˬ': 299,
            'h y': 300
        }
    };
    exports.default = lhu;
});
//# sourceMappingURL=lhu.js.map