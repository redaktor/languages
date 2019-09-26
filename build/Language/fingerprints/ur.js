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
    const ur = {
        id: 'ur',
        name: 'Urdu',
        trigrams: { 'ور ': 0,
            ' او': 1,
            'اور': 2,
            ' کی': 3,
            'کے ': 4,
            ' کے': 5,
            'یں ': 6,
            ' کا': 7,
            'کی ': 8,
            ' حق': 9,
            'ے ک': 10,
            'ایٔ': 11,
            'کا ': 12,
            ' کو': 13,
            'یٔے': 14,
            'سے ': 15,
            'یا ': 16,
            'نے ': 17,
            ' اس': 18,
            'ٔے ': 19,
            'کو ': 20,
            ' ہے': 21,
            'میں': 22,
            ' می': 23,
            'ے ا': 24,
            ' ان': 25,
            'وں ': 26,
            ' کر': 27,
            'اس ': 28,
            'ی ا': 29,
            'ر ا': 30,
            ' ہو': 31,
            ' شخ': 32,
            'شخص': 33,
            'حق ': 34,
            ' سے': 35,
            ' جا': 36,
            'خص ': 37,
            'ہر ': 38,
            'ے م': 39,
            'ام ': 40,
            ' یا': 41,
            'ے۔ ': 42,
            'ہیں': 43,
            ' ہر': 44,
            'ں ک': 45,
            'سی ': 46,
            'ادی': 47,
            'عہ ': 48,
            'آزا': 49,
            ' آز': 50,
            'زاد': 51,
            'دفع': 52,
            'فعہ': 53,
            'ہ ا': 54,
            '۔ د': 55,
            ' دف': 56,
            'ص ک': 57,
            'ہے ': 58,
            ' ۔ ': 59,
            'ا ح': 60,
            'جای': 61,
            'ت ک': 62,
            'ر ش': 63,
            'کہ ': 64,
            'م ک': 65,
            ' پر': 66,
            'ان ': 67,
            'ی ک': 68,
            'دی ': 69,
            '۔ ہ': 70,
            'پر ': 71,
            'یٔی': 72,
            'س ک': 73,
            'ا ج': 74,
            'ق ہ': 75,
            'ہے۔': 76,
            ' کس': 77,
            'ی ح': 78,
            'حقو': 79,
            'ر م': 80,
            'ں ا': 81,
            'قوق': 82,
            'و ا': 83,
            'ن ک': 84,
            'ار ': 85,
            ' مع': 86,
            'وق ': 87,
            'ری ': 88,
            'کسی': 89,
            'ے گ': 90,
            'نی ': 91,
            ' ہی': 92,
            'سان': 93,
            'ی ج': 94,
            ' مل': 95,
            'ٔی ': 96,
            'نسا': 97,
            ' نہ': 98,
            ' جو': 99,
            'تی ': 100,
            'ی ت': 101,
            ' لی': 102,
            'انس': 103,
            'کرن': 104,
            ' حا': 105,
            'ل ک': 106,
            'جو ': 107,
            '۔ ا': 108,
            ' اپ': 109,
            ' کہ': 110,
            'اپن': 111,
            'نہ ': 112,
            ' ای': 113,
            'ر ک': 114,
            'ے ب': 115,
            'می ': 116,
            'ہ ک': 117,
            'یت ': 118,
            'ا ا': 119,
            'رنے': 120,
            'ل ہ': 121,
            'ے ل': 122,
            'ے ہ': 123,
            'رے ': 124,
            'ی م': 125,
            'ی ش': 126,
            ' تع': 127,
            'یں۔': 128,
            'ویٔ': 129,
            'حاص': 130,
            'ق ک': 131,
            'اصل': 132,
            'ں۔ ': 133,
            'صل ': 134,
            'معا': 135,
            'وہ ': 136,
            'نہی': 137,
            'ملک': 138,
            'کیا': 139,
            'انہ': 140,
            'ایس': 141,
            'ات ': 142,
            ' من': 143,
            'ی ہ': 144,
            'ی ب': 145,
            'د ک': 146,
            'ے ج': 147,
            'یہ ': 148,
            'انی': 149,
            ' قو': 150,
            'مل ': 151,
            'قوم': 152,
            'عاش': 153,
            ' یہ': 154,
            ' عا': 155,
            'ں م': 156,
            'دہ ': 157,
            'ر ہ': 158,
            'ا م': 159,
            ' دو': 160,
            'اشر': 161,
            ' بن': 162,
            ' وہ': 163,
            'اقو': 164,
            'علا': 165,
            'قوا': 166,
            'دار': 167,
            ' و ': 168,
            'وام': 169,
            'بر ': 170,
            ' قا': 171,
            'ی س': 172,
            'لیٔ': 173,
            'ر ب': 174,
            'گی ': 175,
            'ر ن': 176,
            'اد ': 177,
            'و ت': 178,
            'انو': 179,
            'ے، ': 180,
            'یوں': 181,
            ' دی': 182,
            'لیم': 183,
            'ا۔ ': 184,
            ' جس': 185,
            'ہ م': 186,
            ' با': 187,
            ' گی': 188,
            'ے ح': 189,
            'ر پ': 190,
            'ا ہ': 191,
            'تعل': 192,
            'یم ': 193,
            'ریق': 194,
            'ہ ۲': 195,
            'لک ': 196,
            'ہ ۱': 197,
            'دوس': 198,
            'جس ': 199,
            'نیا': 200,
            ' اق': 201,
            'لاق': 202,
            'یاد': 203,
            'ون ': 204,
            'علی': 205,
            'ے پ': 206,
            'ر ح': 207,
            'یر ': 208,
            'ن ا': 209,
            'ی، ': 210,
            ' مس': 211,
            '، ا': 212,
            'انے': 213,
            'پنے': 214,
            'ین ': 215,
            'ی آ': 216,
            'ر ع': 217,
            'ی ن': 218,
            'م ا': 219,
            'گا۔': 220,
            ' بر': 221,
            ' رک': 222,
            'کر ': 223,
            'وری': 224,
            ' چا': 225,
            'وسر': 226,
            'رکھ': 227,
            ' گا': 228,
            'ا پ': 229,
            'ہوگ': 230,
            'ہ و': 231,
            '۔ ک': 232,
            ' پی': 233,
            'ومی': 234,
            'رتی': 235,
            ' مم': 236,
            'قان': 237,
            ' بھ': 238,
            ' تم': 239,
            'ے خ': 240,
            ' اع': 241,
            ' مر': 242,
            'دگی': 243,
            'خلا': 244,
            'ندگ': 245,
            ' پو': 246,
            'نا ': 247,
            ' بی': 248,
            'یسے': 249,
            'رای': 250,
            'نون': 251,
            ' شا': 252,
            'اری': 253,
            'س م': 254,
            'ر س': 255,
            'سب ': 256,
            'ق ح': 257,
            'ذری': 258,
            'ے س': 259,
            'اعل': 260,
            'بنی': 261,
            'ا ک': 262,
            'ہوں': 263,
            'نکہ': 264,
            ' ذر': 265,
            ' عل': 266,
            'غیر': 267,
            'اف ': 268,
            'ر آ': 269,
            'کوی': 270,
            'پنی': 271,
            'من ': 272,
            'یٔد': 273,
            ' طر': 274,
            'د ا': 275,
            'ھی ': 276,
            ' ام': 277,
            'مام': 278,
            'ں، ': 279,
            'بھی': 280,
            ' مق': 281,
            'م م': 282,
            'ے ی': 283,
            'عام': 284,
            'ونک': 285,
            'و ک': 286,
            'ال ': 287,
            'اں ': 288,
            '، م': 289,
            'ادا': 290,
            ' مح': 291,
            'ریع': 292,
            'تما': 293,
            'دیو': 294,
            'ہو ': 295,
            'ت ا': 296,
            'پور': 297,
            ' مت': 298,
            'دان': 299,
            'نشو': 300
        }
    };
    exports.default = ur;
});
//# sourceMappingURL=ur.js.map