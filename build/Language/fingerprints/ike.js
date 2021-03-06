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
    const ike = {
        id: 'ike',
        name: 'Inuktitut, Eastern Canadian',
        trigrams: { 'ᑦ ᐊ': 0,
            'ᐃᓐᓇ': 1,
            'ᐊᒻᒪ': 2,
            'ᒪᓗ ': 3,
            'ᒻᒪᓗ': 4,
            ' ᐊᒻ': 5,
            'ᑐᐃᓐ': 6,
            'ᑦᑎᐊ': 7,
            'ᒃᑯᑦ': 8,
            'ᔪᓐᓇ': 9,
            'ᑦ ᐃ': 10,
            'ᓂᒃᑯ': 11,
            'ᓐᓇᐅ': 12,
            'ᑯᑦ ': 13,
            ' ᐱᔪ': 14,
            'ᒍᑦ ': 15,
            'ᓇᐅᑎ': 16,
            'ᑦ ᐱ': 17,
            'ᑎᖃᕐ': 18,
            'ᐅᑎᖃ': 19,
            'ᐱᔪᓐ': 20,
            'ᓄᑦ ': 21,
            'ᒃᓴᐅ': 22,
            ' ᑭᓇ': 23,
            'ᑦ, ': 24,
            ' ᐃᓚ': 25,
            'ᓇᒃᑯ': 26,
            ' ᐃᓱ': 27,
            'ᒥᒃ ': 28,
            ' ᐃᓅ': 29,
            'ᐅᕝᕙ': 30,
            'ᓐᓇᕐ': 31,
            'ᓂᕐᒥ': 32,
            'ᑭᓇᒃ': 33,
            ' ᑕᒪ': 34,
            ' ᐅᕝ': 35,
            'ᒧᑦ ': 36,
            'ᒃ ᐊ': 37,
            'ᐃᓱᒪ': 38,
            'ᑎᒍᑦ': 39,
            'ᑯᑐᐃ': 40,
            'ᒃᑯᑐ': 41,
            '. ᐃ': 42,
            'ᑎᒃ ': 43,
            'ᓐᓃᑦ': 44,
            'ᓂᒃ ': 45,
            'ᕐᓂᕐ': 46,
            'ᕐᔪᐊ': 47,
            'ᓘᓐᓃ': 48,
            'ᖃᖅᑐ': 49,
            'ᓃᑦ ': 50,
            'ᓐᓇᖅ': 51,
            'ᑦ. ': 52,
            '. ᑭ': 53,
            'ᑦ ᐅ': 54,
            'ᒋᑦ ': 55,
            'ᐳᑦ ': 56,
            'ᕝᕙᓘ': 57,
            'ᕙᓘᓐ': 58,
            'ᑐᒃᓴ': 59,
            'ᕐᒧᑦ': 60,
            'ᖅᑐᒃ': 61,
            'ᕈᓐᓇ': 62,
            'ᓚᖓ ': 63,
            'ᐃᓚᖓ': 64,
            'ᑎᐊᑦ': 65,
            'ᓇᕐᓂ': 66,
            'ᔪᐊᕐ': 67,
            ' ᓄᓇ': 68,
            'ᕐᐳᑦ': 69,
            'ᖃᕐᐳ': 70,
            'ᐊᑦ ': 71,
            'ᓂᕐᒧ': 72,
            'ᕐᓂᒃ': 73,
            'ᑎᑦᑎ': 74,
            'ᓇᑦᑎ': 75,
            'ᖅᑕᐅ': 76,
            'ᓗᒋᑦ': 77,
            'ᓴᐅᙱ': 78,
            'ᖃᕐᓂ': 79,
            'ᕐᓯᒪ': 80,
            'ᓗᒍ ': 81,
            'ᐊᕐᒥ': 82,
            'ᑎᑕᐅ': 83,
            'ᕐᒥᒃ': 84,
            'ᓕᒫᑦ': 85,
            'ᓗ ᐃ': 86,
            'ᓯᒪᔪ': 87,
            ' ᓯᓚ': 88,
            'ᓐᓇᑦ': 89,
            'ᓗ ᐊ': 90,
            'ᓚᕐᔪ': 91,
            'ᓯᓚᕐ': 92,
            'ᓪᓗᒍ': 93,
            'ᕐᒥᐅ': 94,
            'ᓇᖅ ': 95,
            'ᓗᑎᒃ': 96,
            ' ᐊᔾ': 97,
            'ᐱᖁᔭ': 98,
            'ᑦ ᓴ': 99,
            ' ᐱᖁ': 100,
            'ᓱᒪᖅ': 101,
            'ᐊᕐᓂ': 102,
            'ᔾᔪᑎ': 103,
            ', ᐃ': 104,
            'ᓗᓂ ': 105,
            'ᐊᔾᔨ': 106,
            'ᐅᙱᓚ': 107,
            'ᖅ ᐃ': 108,
            'ᖅᑐᐃ': 109,
            ', ᐊ': 110,
            'ᓂᖅ ': 111,
            'ᒪᖅᓱ': 112,
            'ᑦ ᓇ': 113,
            'ᐅᓯᒪ': 114,
            'ᑎᐊᖅ': 115,
            'ᖃᑎᒌ': 116,
            'ᖅ ᐊ': 117,
            'ᑦ ᑕ': 118,
            'ᕐᓗᓂ': 119,
            'ᔪᑦ ': 120,
            'ᕆᐊᖃ': 121,
            'ᑕᐅᓯ': 122,
            ' ᐃᓄ': 123,
            ' ᐃᓕ': 124,
            'ᑎᐊᕐ': 125,
            'ᙱᓚᖅ': 126,
            'ᐃᓅᖃ': 127,
            'ᒫᑦᑎ': 128,
            'ᑎᓪᓗ': 129,
            'ᒃ ᐃ': 130,
            'ᑕᐅᔪ': 131,
            'ᓪᓗᒋ': 132,
            'ᑐᑦ ': 133,
            'ᒋᔭᐅ': 134,
            'ᒪᑦ ': 135,
            'ᐅᑉ ': 136,
            'ᖕᒥᓂ': 137,
            'ᑦ ᓄ': 138,
            ' ᓇᖕ': 139,
            'ᓯᒪᓂ': 140,
            'ᓐᓂᐊ': 141,
            'ᑦ ᓯ': 142,
            ' ᐊᖑ': 143,
            'ᐊᖑᑎ': 144,
            'ᓯᐅᑎ': 145,
            'ᓂᑐᐃ': 146,
            'ᓗ ᓇ': 147,
            'ᖕᒋᓐ': 148,
            'ᑦ ᑲ': 149,
            ' ᐊᑐ': 150,
            'ᖁᓪᓗ': 151,
            'ᓇᖕᒥ': 152,
            'ᓂ ᐊ': 153,
            'ᖓ 1': 154,
            'ᓱᕈᓐ': 155,
            'ᔭᐅᔪ': 156,
            ' ᐅᖃ': 157,
            'ᐅᓂᒃ': 158,
            'ᓐᓇᐃ': 159,
            ' ᓴᐳ': 160,
            'ᓂ, ': 161,
            'ᔾᔨᐅ': 162,
            'ᑕᒪᒃ': 163,
            'ᖅᓱᕈ': 164,
            'ᖢᑎᒃ': 165,
            'ᖅ, ': 166,
            'ᖅᑎᑦ': 167,
            'ᓐᓇᓕ': 168,
            ' ᓇᓂ': 169,
            ' ᐃᑲ': 170,
            'ᒥᒍᑦ': 171,
            'ᑦ ᑭ': 172,
            ' ᒪᓕ': 173,
            'ᖅᓯᐅ': 174,
            'ᔪᖃᖅ': 175,
            'ᐅᑦ ': 176,
            'ᒃᑎᒍ': 177,
            'ᐃᓅᓯ': 178,
            'ᓗᓇᐃ': 179,
            'ᑲᔪᖅ': 180,
            'ᕗᑦ ': 181,
            'ᐃᑲᔪ': 182,
            ' ᓇᓗ': 183,
            'ᐊᖅ ': 184,
            'ᓴᐳᒻ': 185,
            'ᓪᓕᐊ': 186,
            ' ᖃᓄ': 187,
            'ᖃᑦᑎ': 188,
            'ᓇᓕᒫ': 189,
            'ᒥᓂᒃ': 190,
            'ᓇᓂᑐ': 191,
            'ᐳᒻᒥ': 192,
            'ᑕᐅᓂ': 193,
            'ᓗ ᐱ': 194,
            'ᐃᑦ ': 195,
            ' ᓴᓇ': 196,
            'ᓚᖅ ': 197,
            'ᐊᖅᑐ': 198,
            'ᒃ, ': 199,
            'ᐅᔪᑦ': 200,
            'ᓇᓗᓇ': 201,
            'ᓇᓱᐊ': 202,
            'ᕐᖢᑎ': 203,
            ' ᐊᕐ': 204,
            'ᒻᒥᔭ': 205,
            'ᑯᑦ,': 206,
            'ᖅ ᐱ': 207,
            'ᐊᕐᓗ': 208,
            ' ᐃᒪ': 209,
            'ᒥᒃᑎ': 210,
            'ᒍ ᐊ': 211,
            'ᑦ ᖃ': 212,
            'ᐃᒪᐃ': 213,
            'ᐃᒻᒪ': 214,
            ' ᐊᓯ': 215,
            'ᑎᓄᑦ': 216,
            'ᕐᓱᐊ': 217,
            'ᕐᓂᖅ': 218,
            'ᒃᑯᐊ': 219,
            'ᓇᐃᑦ': 220,
            ' ᓇᓪ': 221,
            'ᓕᐅᖅ': 222,
            'ᐅᔪᒥ': 223,
            'ᒪᒃᑯ': 224,
            'ᓐᓇ ': 225,
            ', ᐱ': 226,
            'ᔪᖅ ': 227,
            'ᖑᑎᐅ': 228,
            'ᔭᐅᑎ': 229,
            'ᖃᓄᐃ': 230,
            ' ᐊᑭ': 231,
            'ᓇᓪᓕ': 232,
            'ᐊᕐᓇ': 233,
            'ᖅᑎᑕ': 234,
            'ᔪᖅᑐ': 235,
            'ᑦᑎᔪ': 236,
            ' ᑲᑐ': 237,
            'ᓱᐊᕐ': 238,
            'ᑎᐅᔪ': 239,
            'ᐅᑎᐅ': 240,
            'ᓪᓚᕆ': 241,
            'ᑐᔾᔨ': 242,
            'ᓅᖃᑎ': 243,
            'ᒃ ᐱ': 244,
            'ᖁᑎᒋ': 245,
            'ᖓᓄᑦ': 246,
            'ᖓᒍᑦ': 247,
            'ᕐᒥᒍ': 248,
            'ᐊᖃᕐ': 249,
            ', ᐅ': 250,
            'ᓗ ᑕ': 251,
            'ᓂᕈᐊ': 252,
            'ᔪᒃᓴ': 253,
            'ᕐᓗᑎ': 254,
            'ᐊᖕᒍ': 255,
            'ᓱᒪᒋ': 256,
            'ᑯᐊ ': 257,
            ' ᑲᑎ': 258,
            'ᖓᓂᒃ': 259,
            'ᕐᕕᖃ': 260,
            ' ᒐᕙ': 261,
            'ᒻᒪᑦ': 262,
            'ᓂᐊᕐ': 263,
            ' ᐊᓂ': 264,
            ' ᓂᕈ': 265,
            'ᔭᒥᓂ': 266,
            'ᖕᒐ ': 267,
            ' ᓈᓚ': 268,
            'ᒪᐃᒻ': 269,
            'ᓂᐊᖅ': 270,
            'ᔪᒥᒃ': 271,
            'ᓂᕐᓱ': 272,
            ' ᑭᒡ': 273,
            'ᙱᓪᓗ': 274,
            'ᒥᓂᖅ': 275,
            ' ᐊᖏ': 276,
            'ᓂ ᐃ': 277,
            'ᒪᑕ ': 278,
            'ᐅᓄᑦ': 279,
            'ᒥᔭᐅ': 280,
            'ᑦ ᑎ': 281,
            'ᖅᑲᖅ': 282,
            'ᒥᐅᓄ': 283,
            'ᒐᕙᒪ': 284,
            'ᑎᖃᑦ': 285,
            'ᑦ ᒪ': 286,
            'ᙱᑦᑐ': 287,
            ' ᐃᖅ': 288,
            'ᑎᔪᖃ': 289,
            'ᕈᑕᐅ': 290,
            'ᐃᔾᔪ': 291,
            'ᓄᓇᒋ': 292,
            'ᕕᖃᖅ': 293,
            'ᓇᑐᐃ': 294,
            'ᓪᓗᑎ': 295,
            'ᓪᓗᓂ': 296,
            'ᐊᕆᓗ': 297,
            'ᓐᓂᒃ': 298,
            'ᐃᖅᑲ': 299,
            'ᓐᓄᑦ': 300
        }
    };
    exports.default = ike;
});
//# sourceMappingURL=ike.js.map