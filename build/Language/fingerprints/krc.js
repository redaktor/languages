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
    const krc = {
        id: 'krc',
        name: 'Karachay-Balkar',
        trigrams: { 'гъа': 0,
            'ны ': 1,
            'ла ': 2,
            'да ': 3,
            ' дж': 4,
            'ъан': 5,
            'ан ': 6,
            'аны': 7,
            'бла': 8,
            ' къ': 9,
            'а б': 10,
            ' бл': 11,
            ' бо': 12,
            'бол': 13,
            'анд': 14,
            'агъ': 15,
            'ыла': 16,
            'лгъ': 17,
            'лан': 18,
            ' ба': 19,
            'нда': 20,
            'ы б': 21,
            ' би': 22,
            'ала': 23,
            'ары': 24,
            'дан': 25,
            'а к': 26,
            'нды': 27,
            'лар': 28,
            'ъа ': 29,
            ' са': 30,
            ' ал': 31,
            'а, ': 32,
            'бир': 33,
            'ен ': 34,
            'а д': 35,
            'ни ': 36,
            ' ке': 37,
            'ады': 38,
            'ери': 39,
            'ге ': 40,
            'ада': 41,
            'джу': 42,
            'ген': 43,
            'дыл': 44,
            '. ': 45,
            'джа': 46,
            'къа': 47,
            ', а': 48,
            'еди': 49,
            'гъы': 50,
            'асс': 51,
            'жул': 52,
            'улд': 53,
            'лду': 54,
            'дуз': 55,
            'къу': 56,
            'олг': 57,
            'ара': 58,
            'ия ': 59,
            'укъ': 60,
            'лад': 61,
            'ура': 62,
            ' да': 63,
            'ле ': 64,
            'бар': 65,
            'ынд': 66,
            ' бу': 67,
            'акъ': 68,
            ' эм': 69,
            'ири': 70,
            'къ ': 71,
            'ды.': 72,
            ' ан': 73,
            ' те': 74,
            'а а': 75,
            'ъат': 76,
            'ну ': 77,
            'ы, ': 78,
            'ама': 79,
            ' та': 80,
            'ргъ': 81,
            'лас': 82,
            'ъур': 83,
            'рал': 84,
            'а с': 85,
            'ай ': 86,
            'нде': 87,
            'еге': 88,
            'гиз': 89,
            'иле': 90,
            'баш': 91,
            'кла': 92,
            'алг': 93,
            'н с': 94,
            ' су': 95,
            'ды,': 96,
            'лер': 97,
            ' за': 98,
            'ман': 99,
            'алы': 100,
            'ыкъ': 101,
            'инд': 102,
            ' кё': 103,
            'лег': 104,
            'ыгъ': 105,
            'къл': 106,
            'ннг': 107,
            ' бе': 108,
            'сы ': 109,
            'зла': 110,
            'ы а': 111,
            'ден': 112,
            'н к': 113,
            'лай': 114,
            'юрл': 115,
            'рин': 116,
            'ар ': 117,
            ' — ': 118,
            'ы с': 119,
            'лен': 120,
            'ция': 121,
            'ла.': 122,
            'лаг': 123,
            ' тю': 124,
            'ы к': 125,
            ' ха': 126,
            'кел': 127,
            'е к': 128,
            'н а': 129,
            ' ев': 130,
            'евр': 131,
            'де ': 132,
            'е б': 133,
            'рле': 134,
            'зам': 135,
            'иян': 136,
            'яны': 137,
            ' ма': 138,
            'рын': 139,
            'эмд': 140,
            'мда': 141,
            'ллу': 142,
            ' ар': 143,
            'дия': 144,
            'ект': 145,
            'и б': 146,
            'сан': 147,
            'нла': 148,
            'рге': 149,
            'лук': 150,
            'ъыз': 151,
            'н д': 152,
            'нгы': 153,
            'н, ': 154,
            'и д': 155,
            'асы': 156,
            ' кл': 157,
            'узл': 158,
            'хар': 159,
            'дам': 160,
            ', к': 161,
            'суу': 162,
            'ам ': 163,
            'дун': 164,
            'уни': 165,
            'ния': 166,
            'олу': 167,
            'кле': 168,
            'нди': 169,
            'а т': 170,
            ' ин': 171,
            'анг': 172,
            'н б': 173,
            'ула': 174,
            'нед': 175,
            'ир ': 176,
            'б б': 177,
            'дже': 178,
            'ени': 179,
            'сла': 180,
            'вро': 181,
            'роп': 182,
            'опа': 183,
            ' де': 184,
            'рад': 185,
            'аты': 186,
            'ы э': 187,
            '. а': 188,
            'уну': 189,
            ' ду': 190,
            'лык': 191,
            'пед': 192,
            'еги': 193,
            'ры ': 194,
            'ы т': 195,
            'ъла': 196,
            'а э': 197,
            'жаз': 198,
            ' не': 199,
            'еда': 200,
            'тюр': 201,
            'ы. ': 264,
            'дил': 203,
            'ла,': 204,
            'анн': 205,
            ' кю': 206,
            'ктр': 207,
            'джы': 208,
            'саг': 209,
            'тда': 210,
            'юле': 211,
            'нти': 212,
            'тен': 213,
            'енг': 214,
            'нги': 215,
            ' ай': 216,
            'жер': 217,
            'ине': 218,
            'у б': 219,
            ' ат': 220,
            ' сё': 221,
            'сёз': 222,
            'да,': 223,
            'тер': 224,
            'лы ': 225,
            'мал': 226,
            'ди.': 227,
            'яла': 228,
            'анл': 229,
            'екл': 230,
            'ияд': 231,
            'аци': 232,
            'къд': 233,
            'тал': 234,
            'а. ': 235,
            'рик': 236,
            'арг': 237,
            'амы': 238,
            'рек': 239,
            'сын': 240,
            ' ': 241,
            'нга': 242,
            'ол ': 243,
            ' со': 244,
            'сор': 245,
            ' эс': 246,
            'эсе': 247,
            'ра ': 248,
            'лам': 249,
            'кюн': 250,
            'е д': 251,
            'елг': 252,
            'рим': 253,
            'спе': 254,
            'пек': 255,
            ' ам': 256,
            ' а ': 257,
            'ик ': 258,
            'дер': 259,
            'маг': 260,
            'ана': 261,
            'лу ': 262,
            'у с': 263,
            ' эн': 265,
            'ёле': 266,
            'и. ': 267,
            '. б': 268,
            'бу ': 269,
            ' че': 270,
            'енд': 271,
            'изл': 272,
            'зле': 273,
            'яда': 274,
            'ысы': 275,
            'лма': 276,
            'лги': 277,
            'гил': 278,
            'тур': 279,
            'кер': 280,
            'р к': 281,
            'ирг': 282,
            'ек ': 283,
            'алл': 284,
            ', б': 285,
            'угъ': 286,
            'атл': 287,
            ' ол': 288,
            'н э': 289,
            'къо': 290,
            'ъош': 291,
            'ына': 292,
            'или': 293,
            'бус': 294,
            'уса': 295,
            'атд': 296,
            'гыл': 297,
            'айы': 298,
            'жыл': 299
        }
    };
    exports.default = krc;
});
//# sourceMappingURL=krc.js.map