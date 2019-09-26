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
    const fa = {
        id: 'fa',
        name: 'Farsi, Western (persian)',
        trigrams: { ' و ': 0,
            ' حق': 1,
            ' با': 2,
            'د. ': 3,
            'که ': 4,
            ' که': 5,
            ' در': 6,
            'در ': 7,
            ' دا': 8,
            'دار': 9,
            'از ': 10,
            'هر ': 11,
            ' از': 12,
            ' هر': 13,
            'یت ': 14,
            'ند ': 15,
            'هٔ ': 16,
            'ر ک': 17,
            'حق ': 18,
            'رد ': 19,
            'اده': 20,
            'ای ': 21,
            'ان ': 22,
            'د و': 23,
            ' ما': 24,
            ' را': 25,
            'ین ': 26,
            ' یا': 27,
            'یا ': 28,
            'ارد': 29,
            'ماد': 30,
            'دهٔ': 31,
            'را ': 32,
            'کس ': 33,
            'ی و': 34,
            ' کس': 35,
            '. م': 36,
            ' بر': 37,
            'آزا': 38,
            ' آز': 39,
            'باش': 40,
            'ه ا': 41,
            'ه ب': 42,
            ' خو': 43,
            ' بی': 44,
            'زاد': 45,
            'د ک': 46,
            ' اس': 47,
            ' آن': 48,
            'ار ': 49,
            'حقو': 50,
            'ق د': 51,
            'قوق': 52,
            'د ب': 53,
            'وق ': 54,
            'ی ب': 55,
            'ه د': 56,
            'ده ': 57,
            'ر م': 58,
            'م ه': 59,
            'ود ': 60,
            'ور ': 61,
            'اشد': 62,
            'ت و': 63,
            'ام ': 64,
            'و ا': 65,
            'رای': 66,
            'خود': 67,
            'ی ک': 68,
            'ادی': 69,
            ' اج': 70,
            'ری ': 71,
            'تما': 72,
            'اید': 73,
            'س ح': 74,
            'دی ': 75,
            'ست ': 76,
            'است': 77,
            ' ان': 78,
            'نه ': 79,
            'و م': 80,
            'ر ا': 81,
            'ون ': 82,
            ' هم': 83,
            'مای': 84,
            'با ': 85,
            'ات ': 86,
            'ی ا': 87,
            ' نم': 88,
            'انه': 89,
            ' تا': 90,
            'د، ': 91,
            'ایت': 92,
            ' بش': 93,
            'ا ب': 94,
            ' مل': 95,
            'این': 96,
            ' مو': 97,
            'شد ': 98,
            ' کن': 99,
            'انو': 100,
            ' اع': 101,
            ' مر': 102,
            'اسا': 103,
            'برا': 104,
            'ید ': 105,
            'ر ب': 106,
            'وان': 107,
            ' شو': 108,
            ' ای': 109,
            ' می': 110,
            'ن ا': 111,
            'جتم': 112,
            'ورد': 113,
            'نی ': 114,
            'هم ': 115,
            'اجت': 116,
            'ئی ': 117,
            'عی ': 118,
            'و آ': 119,
            '، ا': 120,
            'آن ': 121,
            ' به': 122,
            'بشر': 123,
            'ند.': 124,
            'ا م': 125,
            'ائی': 126,
            'ماع': 127,
            'ملل': 128,
            'و ب': 129,
            'ن م': 130,
            'های': 131,
            'ی، ': 132,
            'علا': 133,
            ' زن': 134,
            'شود': 135,
            ' مق': 136,
            'یه ': 137,
            '. ه': 138,
            'کند': 139,
            ' من': 140,
            'ن و': 141,
            'بای': 142,
            'ی ی': 143,
            'ت م': 144,
            'انی': 145,
            'توا': 146,
            'ت ب': 147,
            'لام': 148,
            ' بد': 149,
            ' مس': 150,
            'مل ': 151,
            'یگر': 152,
            'ی ر': 153,
            'گرد': 154,
            'ز آ': 155,
            'ن ب': 156,
            'و د': 157,
            'ی م': 158,
            'ت ا': 159,
            'شور': 160,
            'دان': 161,
            ' گر': 162,
            'اری': 163,
            'اعی': 164,
            'کار': 165,
            'مور': 166,
            ' مج': 167,
            'میت': 168,
            'ت ک': 169,
            'اعل': 170,
            'کشو': 171,
            'مین': 172,
            'ی د': 173,
            'دیگ': 174,
            'ه م': 175,
            'اه ': 176,
            'ه و': 177,
            ' کا': 178,
            'ر خ': 179,
            'رد.': 180,
            'ن ح': 181,
            'لی ': 182,
            ' کش': 183,
            'یست': 184,
            'ق م': 185,
            'رند': 186,
            'م ا': 187,
            ' حم': 188,
            'د ش': 189,
            'ن ت': 190,
            'ی ح': 191,
            'نون': 192,
            ' اح': 193,
            ' مت': 194,
            ' شد': 195,
            ' عم': 196,
            'گی ': 197,
            'ساس': 198,
            'ا ک': 199,
            'شر ': 200,
            'ر ش': 201,
            'اد ': 202,
            ' هی': 203,
            'و ه': 204,
            'د ا': 205,
            'قان': 206,
            ' آم': 207,
            'نجا': 208,
            'ساو': 209,
            'یده': 210,
            'وی ': 211,
            'ق و': 212,
            'می ': 213,
            'ود.': 214,
            'دهم': 215,
            'ادا': 216,
            ' مح': 217,
            'شد.': 218,
            'بیس': 219,
            'ا د': 220,
            ' قا': 221,
            'بعی': 222,
            'ٔ ب': 223,
            'نوا': 224,
            'مقا': 225,
            'لل ': 226,
            ' او': 227,
            ' شر': 228,
            'شده': 229,
            'تی ': 230,
            'بین': 231,
            'یر ': 232,
            'ومی': 233,
            'ز ح': 234,
            'ر ت': 235,
            'او ': 236,
            ' بع': 237,
            'ر و': 238,
            'ا ه': 239,
            '‌ها': 240,
            'هیچ': 241,
            'اً ': 242,
            'خوا': 243,
            'د م': 244,
            'ه‌ا': 245,
            'اسی': 246,
            'دگی': 247,
            'ع ا': 248,
            'حما': 249,
            ' عق': 250,
            ' دی': 251,
            'همه': 252,
            'بر ': 253,
            'هد ': 254,
            'نمی': 255,
            'سان': 256,
            'مند': 257,
            'ه ح': 258,
            'واه': 259,
            'ا ا': 260,
            'مه ': 261,
            'یتو': 262,
            'د ت': 263,
            'موم': 264,
            'ل م': 265,
            'امی': 266,
            'زش ': 267,
            'رار': 268,
            'أم': 269,
            'ردد': 270,
            'وم ': 271,
            'انت': 272,
            'ارن': 273,
            ' بم': 274,
            'د آ': 275,
            'اوی': 276,
            'بهر': 277,
            'و ت': 278,
            'ران': 279,
            ' بو': 280,
            'نما': 281,
            'میه': 282,
            'عیت': 283,
            'ٔمی': 284,
            'ا ر': 285,
            ' فر': 286,
            'م م': 287,
            'رفت': 288,
            'مسا': 289,
            'عقی': 290,
            'ندگ': 291,
            'جا ': 292,
            'تأ': 293,
            'اند': 294,
            'ید.': 295,
            'عمو': 296,
            'ی ن': 297,
            'م و': 298,
            'زند': 299,
            ' دو': 300
        }
    };
    exports.default = fa;
});
//# sourceMappingURL=fa.js.map