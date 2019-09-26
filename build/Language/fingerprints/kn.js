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
    const kn = {
        id: 'kn',
        name: 'Kannada',
        trigrams: { 'ನ್ನ': 0,
            'ಲ್ಲ': 1,
            'ಪ್ರ': 2,
            'ಕ್ಕ': 3,
            ' ಪ್': 4,
            'ಗೂ ': 5,
            'ನು ': 6,
            'ಾಗಿ': 7,
            'ು. ': 8,
            '್ನು': 9,
            '್ಲಿ': 10,
            'ಹಕ್': 11,
            ' ಹಕ': 12,
            'ಿಗೂ': 13,
            ' ನಿ': 14,
            '್ಕು': 15,
            '್ರತ': 16,
            'ರತಿ': 17,
            'ತ್ರ': 18,
            'ತಿಯ': 19,
            'ವಾಗ': 20,
            ' ಸ್': 21,
            'ಕ್ಷ': 22,
            'ಿಂದ': 23,
            'ಲಿ ': 24,
            'ನೆ ': 25,
            'ಂಟು': 26,
            'ಬಂಧ': 27,
            'ನೂ ': 28,
            '್ನೂ': 29,
            'ತ್ತ': 30,
            'ಬ್ಬ': 31,
            'ಿಸಲ': 32,
            'ನಿಗ': 33,
            'ಟು.': 34,
            'ುವ ': 35,
            ' ಸಮ': 36,
            'ೊಬ್': 37,
            'ಸ್ವ': 38,
            'ಯೊಬ': 39,
            'ಳನ್': 40,
            'ಧನೆ': 41,
            'ವುದ': 42,
            ' ಯಾ': 43,
            ' ವಿ': 44,
            'ಿಯೊ': 45,
            'ಂಧನ': 46,
            '. ನ': 47,
            'ಗಳನ': 48,
            'ಿಬಂ': 49,
            'ವನ್': 50,
            ' ಮತ': 51,
            'ನಿಬ': 52,
            'ಂತ್': 53,
            '್ವಾ': 54,
            'ೂ, ': 55,
            'ಯಾವ': 56,
            'ಯೂ ': 57,
            'ತಂತ': 58,
            'ಮಾನ': 59,
            ' ಸಾ': 60,
            '್ಯ ': 61,
            'ರ್ಯ': 62,
            'ಿಯೂ': 63,
            'ುಂಟ': 64,
            '್ಬನ': 65,
            'ಿಸು': 66,
            'ಸುವ': 67,
            'ಗಳಿ': 68,
            'ಬನಿ': 69,
            '್ತು': 70,
            'ಮತ್': 71,
            'ತು ': 72,
            'ಗೆ ': 73,
            ' ಸಂ': 74,
            'ವಾತ': 75,
            'ಾರ್': 76,
            'ುವು': 77,
            'ಾತಂ': 78,
            'ಿರು': 79,
            'ೂ ಸ': 80,
            'ಗಳ ': 81,
            'ಂದ ': 82,
            'ಾಷ್': 83,
            'ಗಿ ': 84,
            'ರಾಷ': 85,
            ' ತನ': 86,
            'ು ಸ': 87,
            'ುಗಳ': 88,
            'ಳಿಗ': 89,
            '್ರ್': 90,
            ' ರಾ': 91,
            'ು ಪ': 92,
            '್ಯಗ': 93,
            'ಾದ ': 94,
            'ವಾದ': 95,
            'ೂ ಅ': 96,
            '್ಟ್': 97,
            'ಟ್ರ': 98,
            'ಯಗಳ': 99,
            'ಷ್ಟ': 100,
            'ಸಮಾ': 101,
            'ರುವ': 102,
            '್ನ ': 103,
            'ದಲ್': 104,
            'ಗಿಯ': 105,
            ' ಕಾ': 106,
            'ದ ಸ': 107,
            'ಿಕ ': 108,
            'ತನ್': 109,
            ' ಮಾ': 110,
            'ಕುಂ': 111,
            'ಾವ ': 112,
            'ಲಾಗ': 113,
            'ತ್ಯ': 114,
            ' ಅಥ': 115,
            'ವಾ ': 116,
            'ಥವಾ': 117,
            'ಂದಲ': 118,
            'ಅಥವ': 119,
            'ಸಾರ': 120,
            'ಯನ್': 121,
            'ೂ ಹ': 122,
            'ಳಲ್': 123,
            'ಗಳಲ': 124,
            '್ಯವ': 125,
            'ಲೂ ': 126,
            'ಲೂ,': 127,
            'ಿಗೆ': 128,
            'ಲು ': 129,
            '್ಷಣ': 130,
            'ಾನವ': 131,
            ' ಈ ': 132,
            'ೆಯಲ': 133,
            'ಿ ಸ': 134,
            'ೆಗಳ': 135,
            'ಟ್ಟ': 136,
            'ದು ': 137,
            'ದಲೂ': 138,
            ' ಅಂ': 139,
            'ದು.': 140,
            'ಲಿಯ': 141,
            'ವೂ ': 142,
            'ಧ್ಯ': 143,
            'ಿಕ್': 144,
            'ು ಅ': 145,
            'ವ್ಯ': 146,
            ' ಅನ': 147,
            'ಕೆ ': 148,
            ' ಶಿ': 149,
            'ಳ್ಳ': 150,
            'ಶಿಕ': 151,
            'ಕಾರ': 152,
            'ು ಕ': 153,
            'ಾಗಲ': 154,
            ' ಗಳ': 155,
            ' ಹಾ': 156,
            'ಗಿರ': 157,
            'ಯತೆ': 158,
            'ಕು ': 159,
            ' ಬಾ': 160,
            'ರಕ್': 161,
            'ದ್ದ': 162,
            'ಾಧ್': 163,
            'ಗಲಿ': 164,
            'ಕುಗ': 165,
            'ಸಲೂ': 166,
            'ಹಾಗ': 167,
            'ಾಗೂ': 168,
            'ಮಾಜ': 169,
            'ೆ. ': 170,
            'ಕ್ತ': 171,
            'ಲ್ಪ': 172,
            '್ಯತ': 173,
            'ತರ ': 174,
            'ೂ ಪ': 175,
            'ನೆಯ': 176,
            'ಿ, ': 177,
            'ರವಾ': 178,
            ' ವ್': 179,
            'ಿ ಯ': 180,
            'ವ ಹ': 181,
            'ದ ಅ': 182,
            'ತೆಯ': 183,
            'ಮಾಡ': 184,
            'ೆ ಯ': 185,
            'ದ್ಧ': 186,
            'ಸಲಾ': 187,
            'ಯಲ್': 188,
            '್ವತ': 189,
            'ಬಾಧ': 190,
            'ೆ ೧': 191,
            'ರಿಂ': 192,
            '್ಲಾ': 193,
            'ವ ಸ': 194,
            '್ಯಾ': 195,
            '್ತಿ': 196,
            'ರಗಳ': 197,
            ' ಎಲ': 198,
            'ೂ ತ': 199,
            ' ಜನ': 200,
            'ಪಡೆ': 201,
            'ಸಲ್': 202,
            'ಗೊಳ': 203,
            'ೆ ೨': 204,
            '್ರೀ': 205,
            'ನ್ಯ': 206,
            ', ಸ': 207,
            'ಎಲ್': 208,
            'ೂ ವ': 209,
            '್ಳಲ': 210,
            'ೀಯ ': 211,
            'ಿಸಿ': 212,
            'ಮೂಲ': 213,
            'ಂರಕ': 214,
            'ಧಿಸ': 215,
            'ಾವನ': 216,
            'ೂ ಮ': 217,
            ', ಮ': 218,
            'ದಾಗ': 219,
            ' ವಾ': 220,
            'ಯಿಂ': 221,
            ' ಪಡ': 222,
            'ಸಂರ': 223,
            'ರ್ವ': 224,
            'ದಿಂ': 225,
            'ವಿಸ': 226,
            ' ಯು': 227,
            'ೆಯನ': 228,
            'ೆ ಸ': 229,
            'ೊಳ್': 230,
            'ರಿಸ': 231,
            ' ಆದ': 232,
            ' ಮೂ': 233,
            'ದರಿ': 234,
            'ರದ ': 235,
            'ತಿ ': 236,
            'ೆ ಪ': 237,
            'ದೇಶ': 238,
            'ಲಿ,': 239,
            'ೆ ವ': 240,
            'ಯವಾ': 241,
            'ೂ ಆ': 242,
            'ಾರವ': 243,
            'ಗದು': 244,
            'ುದು': 245,
            'ತೆ ': 246,
            'ಯ ವ': 247,
            'ಯೋಗ': 248,
            ' ಮನ': 249,
            'ಭಾವ': 250,
            '್ಕೆ': 251,
            ' ಅವ': 252,
            'ಸ್ಥ': 253,
            'ೂ ಉ': 254,
            ' ಅಭ': 255,
            '್ರಗ': 256,
            'ಾಗದ': 257,
            'ುದರ': 258,
            'ಸ್ತ': 259,
            'ಾನು': 260,
            'ನನ್': 261,
            ' ಕೊ': 262,
            ' ಸದ': 263,
            'ತ್ವ': 264,
            'ಇಚ್': 265,
            'ು ವ': 266,
            'ೆ ಮ': 267,
            ' ವನ': 268,
            '್ರಾ': 269,
            'ೂ ಇ': 270,
            '್ಮ ': 271,
            '್ರಕ': 272,
            'ೊಳಿ': 273,
            'ವಿವ': 274,
            'ಲಿರ': 275,
            'ಕೊಳ': 276,
            'ಾವು': 277,
            'ಿದ್': 278,
            'ರಕಟ': 279,
            'ಾಗು': 280,
            'ನಿರ': 281,
            '್ಧಿ': 282,
            'ಡೆಯ': 283,
            '್ಲದ': 284,
            'ು ಗ': 285,
            'ಲಾ ': 286,
            'ುತ್': 287,
            'ವು ': 288,
            '್ಯಕ': 289,
            'ಡಿಸ': 290,
            'ಅಂತ': 291,
            ' ಇಚ': 292,
            '್ರವ': 293,
            'ಾಮಾ': 294,
            'ು ಹ': 295,
            '. ಪ': 296,
            'ಸಾಮ': 297,
            'ಳಿಸ': 298,
            'ರ್ಣ': 299,
            'ಯಕ್': 300
        }
    };
    exports.default = kn;
});
//# sourceMappingURL=kn.js.map