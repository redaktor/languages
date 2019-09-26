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
    const kk = {
        id: 'kk',
        name: 'Kazakh',
        trigrams: { ' ба': 0,
            ' құ': 1,
            'ен ': 2,
            'не ': 3,
            'тар': 4,
            'ұқы': 5,
            ' қа': 6,
            'дам': 7,
            'құқ': 8,
            'ада': 9,
            ' ад': 10,
            ' бо': 11,
            'ықт': 12,
            'қта': 13,
            'ға ': 14,
            'ына': 15,
            ' жә': 16,
            'ылы': 17,
            'ық ': 18,
            'ың ': 19,
            'жән': 20,
            'әне': 21,
            'мен': 22,
            ' не': 23,
            'лық': 24,
            'ары': 25,
            ' жа': 26,
            'р а': 27,
            ' әр': 28,
            'ара': 29,
            'а қ': 30,
            'қыл': 31,
            'ала': 32,
            ' ме': 33,
            ' де': 34,
            'ның': 35,
            'уға': 36,
            'ан ': 37,
            'на ': 38,
            'еме': 39,
            'н қ': 40,
            'іне': 41,
            'асы': 42,
            'ін ': 43,
            'тан': 44,
            'әр ': 45,
            'ығы': 46,
            'нды': 47,
            'еке': 48,
            'ста': 49,
            ' бі': 50,
            ' өз': 51,
            'ар ': 52,
            'ған': 53,
            'анд': 54,
            'ын ': 55,
            'мес': 56,
            'ам ': 57,
            'де ': 58,
            'ап ': 59,
            ' қо': 60,
            'бап': 61,
            'бас': 62,
            'бол': 63,
            'етт': 64,
            'да ': 65,
            'қық': 66,
            'ілі': 67,
            'ің ': 68,
            'бір': 69,
            'нде': 70,
            'лар': 71,
            'ері': 72,
            'е, ': 73,
            'алы': 74,
            'есе': 75,
            'н б': 76,
            'се ': 77,
            'нем': 78,
            'ы. ': 79,
            'а, ': 80,
            ' ке': 81,
            'тын': 82,
            'ост': 83,
            ' ти': 84,
            'тиі': 85,
            'сы ': 86,
            'е қ': 87,
            'ы б': 88,
            'бар': 89,
            ' ар': 90,
            ' бе': 91,
            'аты': 92,
            ', н': 93,
            'інд': 94,
            'олы': 95,
            'дық': 96,
            'ы т': 97,
            ' та': 98,
            'луы': 99,
            'нда': 100,
            'бос': 101,
            'ғын': 102,
            'е б': 103,
            'п ә': 104,
            'ғы ': 105,
            'рде': 106,
            'ры ': 107,
            'иіс': 108,
            ' те': 109,
            'рын': 110,
            'н, ': 111,
            'еті': 112,
            'е а': 113,
            'ге ': 114,
            'қығ': 115,
            'сын': 116,
            'ды ': 117,
            'алу': 118,
            'іні': 119,
            'ік ': 120,
            'рін': 121,
            'п, ': 122,
            'дар': 123,
            'егі': 124,
            'тті': 125,
            'а ж': 126,
            'ыры': 127,
            'қар': 128,
            ' ер': 129,
            'ыны': 130,
            ' са': 131,
            'ім ': 132,
            'рға': 133,
            'ген': 134,
            'н ж': 135,
            'уын': 136,
            'ынд': 137,
            'аны': 138,
            'лға': 139,
            'лы ': 140,
            'н к': 141,
            'тік': 142,
            'нің': 143,
            'тер': 144,
            'лы.': 145,
            'ы м': 146,
            'ей ': 147,
            'уы ': 148,
            'с. ': 149,
            'е ж': 150,
            'ана': 151,
            'р. ': 152,
            'мыс': 153,
            ' от': 154,
            'еге': 155,
            'нан': 156,
            'аза': 157,
            ' на': 158,
            'сқа': 159,
            'м б': 160,
            'ард': 161,
            'мны': 162,
            'гіз': 163,
            'тық': 164,
            'өзі': 165,
            'ң қ': 166,
            'кет': 167,
            'асқ': 168,
            'тта': 169,
            'дей': 170,
            'ар.': 171,
            'ті ': 172,
            'аса': 173,
            'амн': 174,
            'р м': 175,
            'ып,': 176,
            'рал': 177,
            'кін': 178,
            ', қ': 179,
            ' же': 180,
            'рды': 181,
            'луғ': 182,
            'қа ': 183,
            'а б': 184,
            'лан': 185,
            'нег': 186,
            ', ж': 187,
            'айд': 188,
            ' ал': 189,
            'өз ': 190,
            'мет': 191,
            'де,': 192,
            'ру ': 193,
            'лып': 194,
            'ама': 195,
            'ауд': 196,
            'дай': 197,
            'бер': 198,
            'іс.': 199,
            'е т': 200,
            'лік': 201,
            'ке ': 202,
            'ігі': 203,
            'тыр': 204,
            'ып ': 205,
            'жас': 206,
            'зін': 207,
            ', б': 208,
            ' мү': 209,
            ' жү': 210,
            'кел': 211,
            'ция': 212,
            'лге': 213,
            'қор': 214,
            'елі': 215,
            'тін': 216,
            'і б': 217,
            'арқ': 218,
            'еле': 219,
            'біл': 220,
            'рқы': 221,
            'қам': 222,
            'уда': 223,
            ', а': 224,
            ' тү': 225,
            'рлы': 226,
            'дер': 227,
            'і т': 228,
            'тең': 229,
            'ден': 230,
            'е ө': 231,
            'лтт': 232,
            'ең ': 233,
            'уге': 234,
            'оға': 235,
            'зде': 236,
            'ркі': 237,
            'тты': 238,
            'осы': 239,
            'кті': 240,
            'ұлт': 241,
            'оны': 242,
            ' то': 243,
            'жағ': 244,
            'рыл': 245,
            'ікт': 246,
            ' ха': 247,
            '. 1': 248,
            'е н': 249,
            'ір ': 250,
            'ы ж': 251,
            'ы а': 252,
            ' ос': 253,
            'түр': 254,
            'лде': 255,
            'ауы': 256,
            'н т': 257,
            'гін': 258,
            'а т': 259,
            'ді ': 260,
            ' ау': 261,
            'ірі': 262,
            'кім': 263,
            'ерк': 264,
            'құр': 265,
            'н е': 266,
            ' да': 267,
            'лма': 268,
            'шін': 269,
            'лім': 270,
            '. 2': 271,
            'аци': 272,
            'оты': 273,
            'ені': 274,
            ' әл': 275,
            'сіз': 276,
            'қты': 277,
            'ағы': 278,
            'ң ж': 279,
            'ағд': 280,
            'тте': 281,
            'ек ': 282,
            ' ұл': 283,
            'орғ': 284,
            ' ас': 285,
            'ң б': 286,
            'ау ': 287,
            'імд': 288,
            'қат': 289,
            'ғда': 290,
            'ірд': 291,
            'амд': 292,
            'а д': 293,
            'елг': 294,
            ' ел': 295,
            'хал': 296,
            'тал': 297,
            ' еш': 298,
            'елд': 299,
            'тол': 300
        }
    };
    exports.default = kk;
});
//# sourceMappingURL=kk.js.map