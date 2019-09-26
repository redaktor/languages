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
    const cr = {
        id: 'cr',
        name: 'Cree, Swampy',
        trigrams: { 'ᑭᒋ ': 0,
            ' ᑭᒋ': 1,
            ' ᓀᐢ': 2,
            'ᓀᐢᑕ': 3,
            'ᐢᑕ ': 4,
            ' ᑲ ': 5,
            ' ᐁ ': 6,
            ' ᐱᑯ': 7,
            'ᓂᐠ ': 8,
            ' ᒥᓯ': 9,
            'ᒥᓯᐌ': 10,
            'ᐠ ᓀ': 11,
            'ᐎᐣ ': 12,
            'ᓯᐟ ': 13,
            'ᐱᑯ ': 14,
            'ᑯᐎᓯ': 15,
            'ᐎᓂᐠ': 16,
            'ᐎᓇ ': 17,
            ' ᐃᔑ': 18,
            'ᒋ ᐃ': 19,
            'ᓯᐌ ': 20,
            'ᐠ ᑭ': 21,
            'ᐟ ᓀ': 22,
            'ᓂᐤ ': 23,
            'ᒥᓂᑯ': 24,
            'ᐁᑲ ': 25,
            'ᐗᐠ ': 26,
            ' ᐁᑲ': 27,
            ' ᒥᓂ': 28,
            ' ᐃᓂ': 29,
            'ᓂᑯᐎ': 30,
            ' ᑎᐯ': 31,
            'ᐃᓂᓂ': 32,
            'ᐊᐌᓇ': 33,
            'ᑕ ᐱ': 34,
            ' ᐊᐢ': 35,
            ' ᐊᐌ': 36,
            'ᐃᔑ ': 37,
            ' ᐅᒋ': 38,
            'ᐌᓇ ': 39,
            'ᐊᐢᑭ': 40,
            'ᐅᐟ ': 41,
            'ᓯᓇᐃ': 42,
            'ᑲᐣ ': 43,
            'ᐢᑭᑕ': 44,
            ' ᐅᐟ': 45,
            'ᑕᓯᓇ': 46,
            'ᓇᐃᑲ': 47,
            'ᐌ ᐊ': 48,
            'ᑭᑕᓯ': 49,
            'ᓂᓂᐤ': 50,
            'ᒋᐠ ': 51,
            'ᐱᐢᑭ': 52,
            'ᑕᑯᓯ': 53,
            'ᐠ ᐅ': 54,
            'ᓂᐗᐠ': 55,
            'ᐅᒋ ': 56,
            'ᐃᑲᐣ': 57,
            ' ᑲᓇ': 58,
            ' ᐱᐢ': 59,
            'ᒋ ᐊ': 60,
            'ᐠ᙮ ': 61,
            'ᓯᐎᓇ': 62,
            'ᑲ ᑭ': 63,
            ' ᐯᔭ': 64,
            'ᐟ ᐃ': 65,
            'ᐣ ᒥ': 66,
            'ᐟ ᑭ': 67,
            'ᑌᓂᑕ': 68,
            ' ᐃᑕ': 69,
            ' ᐁᔑ': 70,
            'ᐁᔑ ': 71,
            'ᐠ ᐁ': 72,
            'ᑕ ᑭ': 73,
            'ᑕ ᐁ': 74,
            'ᐎᓯᐎ': 75,
            'ᓂᒥᑎ': 76,
            'ᓂᑕᑯ': 77,
            'ᐟ ᐅ': 78,
            'ᓇ ᐁ': 79,
            ' ᐊᓂ': 80,
            'ᐯᓂᒥ': 81,
            'ᑎᐯᓂ': 82,
            'ᑕᐢᑲ': 83,
            'ᑭᐠ ': 84,
            'ᐎᓯᐟ': 85,
            'ᐟ ᐊ': 86,
            ' ᐊᐸ': 87,
            'ᓯᐎᓂ': 88,
            'ᒋ ᐅ': 89,
            ' ᐃᐢ': 90,
            ' ᑭᐢ': 91,
            'ᐢᑭᐠ': 92,
            'ᐯᔭᑾ': 93,
            'ᐎᓂᓂ': 94,
            '᙮ ᓂ': 95,
            'ᑕᒧᐎ': 96,
            'ᑲ ᐅ': 97,
            'ᑯᓯᐟ': 98,
            'ᑕ ᑲ': 99,
            'ᑎᓯᐎ': 100,
            'ᐠ ᑲ': 101,
            'ᑲ ᐊ': 102,
            'ᓂᑕᒧ': 103,
            'ᔑ ᑲ': 104,
            'ᑌᐠ ': 105,
            'ᒋᑲᑌ': 106,
            'ᑲᐠ ': 107,
            'ᑕᐟ ': 108,
            ' ᐱᒋ': 109,
            'ᐣ ᑭ': 110,
            'ᐤ ᑭ': 111,
            'ᓯᐎᐣ': 112,
            'ᑲᑌᐠ': 113,
            ' ᐃᑗ': 114,
            'ᐠ ᐱ': 115,
            '᙮ ᐁ': 116,
            ' ᐅᑭ': 117,
            'ᐱᒋ ': 118,
            'ᐣ ᐁ': 119,
            'ᐢᑲᓀ': 120,
            'ᑐᐎᓂ': 121,
            'ᓇᐗᐸ': 122,
            'ᑲᓇᐗ': 123,
            'ᐃᐢᐱ': 124,
            'ᑲ ᐱ': 125,
            'ᐢᑲᒥ': 126,
            'ᐢᐱ ': 127,
            ' ᐃᑌ': 128,
            'ᐠ ᐊ': 129,
            'ᑕᐠ ': 130,
            'ᒧᐎᐣ': 131,
            'ᑲᓀᓯ': 132,
            'ᑭ ᐃ': 133,
            'ᒋ ᒥ': 134,
            'ᒋ ᑭ': 135,
            'ᐠ ᐃ': 136,
            'ᒥᑎᓱ': 137,
            'ᓂᒋᑲ': 138,
            'ᑯᓯᐎ': 139,
            'ᐃᑌᓂ': 140,
            'ᓇ ᓀ': 141,
            'ᐢᑌᓂ': 142,
            'ᑲ ᐃ': 143,
            ' ᑎᐸ': 144,
            'ᒋ ᓇ': 145,
            ' ᐎᒋ': 146,
            'ᐗᐸᒥ': 147,
            ' ᐅᑕ': 148,
            'ᓂᓂᐎ': 149,
            'ᐃᑕᐢ': 150,
            'ᐱ ᑲ': 151,
            'ᑾᐣ ': 152,
            ' ᐅᓇ': 153,
            'ᐤ ᓀ': 154,
            'ᑭᐢᑌ': 155,
            'ᐣ ᓀ': 156,
            'ᓂᓂᐠ': 157,
            'ᓀᓯᐎ': 158,
            'ᒋ ᓂ': 159,
            ' ᐅᑎ': 160,
            'ᓂᓂᐗ': 161,
            'ᐟ᙮ ': 162,
            'ᒋ ᑲ': 163,
            ' ᐅᒪ': 164,
            'ᒋ ᒪ': 165,
            'ᑎᓱᐎ': 166,
            'ᒥᐟ ': 167,
            'ᐊᐸᑎ': 168,
            'ᐤ ᐁ': 169,
            'ᑯ ᑭ': 170,
            'ᓂᐎ ': 171,
            '᙮ ᒥ': 172,
            'ᔓᐌᐎ': 173,
            'ᓇᔓᐌ': 174,
            'ᑾᐠ ': 175,
            'ᐸᑎᓯ': 176,
            'ᑕ ᐅ': 177,
            'ᑕᓂᐗ': 178,
            'ᔕᑊ ': 179,
            ' ᐊᔭ': 180,
            ' ᑕᐺ': 181,
            'ᒥᑯᐎ': 182,
            'ᐌᐎᓂ': 183,
            'ᐎ ᒥ': 184,
            'ᑲᓇᐌ': 185,
            'ᔑ ᒥ': 186,
            'ᐅᒪ ': 187,
            'ᓂᐠ᙮': 188,
            'ᐅᓇᔓ': 189,
            'ᒪᑲᐠ': 190,
            'ᐱᒪᑎ': 191,
            'ᓂᑭ ': 192,
            'ᒪᑲ ': 193,
            'ᐊᔭᒥ': 194,
            ' ᑫᑾ': 195,
            'ᐃᑗᐎ': 196,
            'ᐅᑭᒪ': 197,
            'ᐟ ᐁ': 198,
            'ᓇᐌᓂ': 199,
            ' ᒪᑲ': 200,
            ' ᑭ ': 201,
            ' ᑫ ': 202,
            'ᑊ ᐱ': 203,
            'ᔭᑾᐣ': 204,
            'ᔦᓂᑕ': 205,
            'ᑕ ᐊ': 206,
            'ᑕᐌᓂ': 207,
            ' ᑯᑕ': 208,
            'ᒪᑎᓯ': 209,
            'ᒪᐟ ': 210,
            ' ᓇᑕ': 211,
            'ᒪᒪᐎ': 212,
            'ᒪᐎ ': 213,
            'ᐸᐎᒪ': 214,
            'ᐊᓂᐃ': 215,
            'ᐣ᙮ ': 216,
            'ᑫᐎᓂ': 217,
            'ᐎᒪᑲ': 218,
            'ᒪᐎᐎ': 219,
            'ᑭᒪᐎ': 220,
            'ᑲ ᑎ': 221,
            ' ᐊᔑ': 222,
            'ᐺᔦᓂ': 223,
            'ᑎᓯᐟ': 224,
            'ᓂᔑᒋ': 225,
            ' ᒪᒪ': 226,
            'ᓇᐌ ': 227,
            'ᑕᐺᔦ': 228,
            'ᐁ ᐃ': 229,
            'ᓂᐸᐎ': 230,
            'ᐁ ᒥ': 231,
            'ᑭᔭ ': 232,
            'ᐠ ᒥ': 233,
            'ᓂᒥᑯ': 234,
            ' ᓂᐸ': 235,
            'ᐢᑯᓂ': 236,
            'ᓂᐃ ': 237,
            ' ᑲᑕ': 238,
            'ᓇᐢᑯ': 239,
            'ᐯᓇᐌ': 240,
            'ᐃᐟ ': 241,
            'ᑯᑕᑭ': 242,
            'ᒋᑕᐟ': 243,
            'ᐸᒋᑕ': 244,
            'ᐎᑭᑐ': 245,
            'ᐊᐸᒋ': 246,
            'ᓇ ᑭ': 247,
            ' ᐎᑭ': 248,
            'ᐸᑭᑎ': 249,
            'ᐣ ᐃ': 250,
            'ᑕᒪᑫ': 251,
            'ᒋ ᑎ': 252,
            'ᐌ ᑲ': 253,
            'ᒋ ᐱ': 254,
            'ᓂᑕᑾ': 255,
            ' ᐸᑭ': 256,
            'ᒥᑲᐠ': 257,
            'ᐟ ᐱ': 258,
            'ᒥᑎᓯ': 259,
            'ᑐᑕᒧ': 260,
            'ᐌᓂᒥ': 261,
            'ᐊᓂᑭ': 262,
            'ᑕ ᒥ': 263,
            'ᑎᐯᓇ': 264,
            'ᑲ ᐁ': 265,
            'ᐸᒥᐟ': 266,
            'ᑭ ᐊ': 267,
            'ᑲᒥᑲ': 268,
            ' ᐎᓇ': 269,
            'ᑲᑌᑭ': 270,
            ' ᐗᓂ': 271,
            'ᑗᐎᐣ': 272,
            'ᑕ ᑎ': 273,
            'ᔭᑾᓄ': 274,
            'ᐎᐎᓂ': 275,
            'ᓄᐠ ': 276,
            'ᓇ ᑲ': 277,
            'ᓯᐤ ': 278,
            'ᑎᐯᐣ': 279,
            'ᐁ ᑭ': 280,
            'ᐤ ᑲ': 281,
            'ᐌᓂᑕ': 282,
            'ᔑᒋᑫ': 283,
            'ᐣ ᐅ': 284,
            'ᐎᐣ᙮': 285,
            'ᑯᐟ ': 286,
            'ᑐᒋᐠ': 287,
            ' ᐱᒪ': 288,
            'ᒋᑫᐎ': 289,
            'ᑎᓇᒪ': 290,
            'ᒋ ᐸ': 291,
            'ᐗᓂᔑ': 292,
            ' ᑐᑕ': 293,
            'ᑌᑭ ': 294,
            'ᑲᒋᐃ': 295,
            'ᓯᒋᐠ': 296,
            'ᒪ ᑲ': 297,
            ' ᐊᐗ': 298,
            'ᑾᔭᐢ': 299,
            'ᑲᒥᐠ': 300
        }
    };
    exports.default = cr;
});
//# sourceMappingURL=cr.js.map