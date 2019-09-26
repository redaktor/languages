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
    const koi = {
        id: 'koi',
        name: 'Komi Permiak',
        trigrams: { '193': 158,
            ' ко': 0,
            'ком': 1,
            'оми': 2,
            'ын ': 3,
            'ӧн ': 4,
            'сь ': 5,
            'ми ': 6,
            'ны ': 7,
            ' по': 8,
            'сӧ ': 9,
            'да ': 10,
            '. ': 11,
            'сьӧ': 12,
            ' кы': 13,
            ' ка': 14,
            'ась': 15,
            ', к': 16,
            'ӧны': 17,
            'ыс ': 18,
            'ӧма': 19,
            ' да': 20,
            'ӧ к': 21,
            'ліс': 22,
            'кыт': 23,
            ' ас': 24,
            'кам': 25,
            'ісь': 26,
            ' кӧ': 27,
            ' ку': 28,
            'ама': 29,
            ' ве': 30,
            'лӧн': 31,
            'эз ': 32,
            ' ме': 33,
            ' шу': 34,
            ' во': 35,
            'н, ': 36,
            'тӧн': 37,
            ' го': 38,
            'кар': 39,
            'мас': 40,
            'пер': 41,
            'ан ': 42,
            'ика': 43,
            'сян': 44,
            'лын': 45,
            'дӧ ': 46,
            'и к': 47,
            'роч': 48,
            ' пе': 49,
            'ма ': 50,
            'ылы': 51,
            'н к': 52,
            'пон': 53,
            'онд': 54,
            'а к': 55,
            ' ро': 56,
            'выл': 57,
            'год': 58,
            ' ре': 59,
            'рес': 60,
            'бли': 61,
            'мед': 62,
            'ӧрт': 63,
            'рын': 64,
            'дз ': 65,
            'кӧд': 66,
            ' 19': 67,
            'ныс': 68,
            'есп': 69,
            'спу': 70,
            'пуб': 71,
            'убл': 72,
            'лик': 73,
            'лан': 74,
            ' ва': 75,
            'уды': 76,
            'ымк': 77,
            'одӧ': 78,
            'алӧ': 79,
            ' и ': 80,
            'ыв ': 81,
            'ись': 82,
            'ь к': 83,
            'ытш': 84,
            'ӧм ': 85,
            'куд': 86,
            'дым': 87,
            ' вы': 88,
            'миэ': 89,
            'дор': 90,
            'а, ': 91,
            'янь': 92,
            'ас ': 93,
            'вес': 94,
            'мка': 95,
            'ва ': 96,
            'с к': 97,
            ' к': 98,
            'ӧдз': 99,
            'иэз': 100,
            'лӧ ': 101,
            'нін': 102,
            'кӧт': 103,
            ' сь': 104,
            ' вӧ': 105,
            '\' г': 106,
            ' бы': 107,
            'ія ': 108,
            ' ол': 109,
            'ьва': 110,
            'ез ': 111,
            'на ': 112,
            ' – ': 113,
            'чӧн': 114,
            'жык': 115,
            'ерм': 116,
            'ыт ': 117,
            'ӧ п': 118,
            'ськ': 119,
            'алі': 120,
            'аын': 121,
            'лӧм': 122,
            'н о': 123,
            'ы к': 124,
            ' сі': 125,
            'ним': 126,
            ' ла': 127,
            'очӧ': 128,
            'а с': 129,
            'зын': 130,
            'нь ': 131,
            'есь': 132,
            'ьӧр': 133,
            '\' в': 134,
            'ӧ в': 135,
            'н п': 136,
            'ӧт ': 137,
            ' ни': 138,
            'сьт': 139,
            'быд': 140,
            'н с': 141,
            'яна': 142,
            'тат': 143,
            'одз': 144,
            'н. ': 267,
            'и р': 146,
            'ьӧ ': 147,
            'инь': 148,
            'ӧтл': 149,
            'рті': 150,
            ' пы': 151,
            'ка ': 152,
            'рез': 153,
            'тӧм': 154,
            'ӧры': 155,
            ' со': 156,
            'ссе': 157,
            ' бӧ': 159,
            'бӧр': 160,
            'ысӧ': 161,
            'рем': 162,
            'рмя': 163,
            'ста': 164,
            'тор': 165,
            '. к': 166,
            'рал': 167,
            ' от': 168,
            'оти': 169,
            'тир': 170,
            ' лы': 171,
            ' ин': 172,
            'тла': 173,
            'эзӧ': 174,
            ', а': 175,
            'ов ': 176,
            'ар ': 177,
            ' та': 178,
            'тчӧ': 179,
            ' ло': 180,
            'тан': 181,
            'ось': 182,
            'а д': 183,
            'ӧтӧ': 184,
            'а ю': 185,
            'з, ': 186,
            ' юр': 187,
            ' эт': 188,
            'вет': 189,
            'сез': 190,
            'сьн': 191,
            'ьны': 192,
            'шуӧ': 193,
            'кӧй': 194,
            'ӧй ': 195,
            'выв': 196,
            'лад': 197,
            ' йы': 198,
            'орт': 199,
            'ист': 200,
            'лас': 201,
            'ті ': 202,
            ' а ': 203,
            'в в': 204,
            ' ви': 205,
            'ся ': 206,
            '. 1': 207,
            'а в': 208,
            'ньв': 209,
            ' ту': 210,
            ' не': 211,
            'ӧсь': 212,
            ' мы': 213,
            'код': 214,
            'н д': 215,
            'ӧтч': 216,
            'тіс': 217,
            'ісс': 218,
            'ін ': 219,
            '), ': 220,
            'рре': 221,
            ' ун': 222,
            'уна': 223,
            'зӧн': 224,
            'аыс': 225,
            'зыр': 226,
            'ыря': 227,
            'рян': 228,
            'скӧ': 229,
            'асс': 230,
            ' му': 231,
            'ын,': 232,
            'ере': 233,
            'адо': 234,
            'йыв': 235,
            ' мо': 236,
            'н л': 237,
            'ӧлі': 238,
            ' пу': 239,
            'ир ': 240,
            'ндӧ': 241,
            ' ӧн': 242,
            'я к': 243,
            'ажы': 244,
            'пыр': 245,
            'рӧм': 246,
            ' ки': 247,
            '. в': 248,
            'чӧ ': 249,
            'а л': 250,
            'нда': 251,
            ' ос': 252,
            '0\' ': 253,
            'ьӧн': 254,
            ' ке': 255,
            'кер': 256,
            'ннэ': 257,
            'нэз': 258,
            'юра': 259,
            'адӧ': 260,
            ' то': 261,
            'ола': 262,
            ', б': 263,
            'ель': 264,
            'ттэ': 265,
            'тэз': 266,
            'ісӧ': 268,
            'н (': 269,
            'ник': 270,
            'ӧ м': 271,
            'ала': 272,
            'дӧт': 273,
            'май': 274,
            'ӧ, ': 275,
            'з. ': 276,
            'ем ': 277,
            'рас': 278,
            'ын.': 279,
            ' чу': 280,
            'джы': 281,
            'оэз': 282,
            'едо': 283,
            'дод': 284,
            'вӧл': 285,
            'лі ': 286,
            'н в': 287,
            'ь, ': 288,
            ' уд': 289,
            'удж': 290,
            'кад': 291,
            'ь. ': 292,
            ' ӧт': 293,
            'ль ': 294,
            'туй': 295,
            'ӧта': 296,
            'ӧда': 297,
            'тӧ ': 298,
            'а п': 299
        }
    };
    exports.default = koi;
});
//# sourceMappingURL=koi.js.map