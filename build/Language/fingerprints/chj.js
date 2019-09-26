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
    const chj = {
        id: 'chj',
        name: 'Chinantec, Ojitlán',
        trigrams: { ' ds': 0,
            dsa: 1,
            'sa ': 2,
            ' e ': 3,
            '\' d': 4,
            'a j': 5,
            'ía ': 6,
            'i\' ': 7,
            ' la': 8,
            ' ju': 9,
            ' jm': 10,
            'a-j': 11,
            ' sí': 12,
            'a d': 13,
            ' ki': 14,
            'a e': 15,
            'la ': 16,
            ' na': 17,
            'a s': 18,
            jmo: 19,
            'e j': 20,
            '-ds': 21,
            'a t': 22,
            'sía': 23,
            'ki\'': 24,
            jua: 25,
            'a, ': 26,
            'u d': 27,
            'a k': 28,
            ' li': 29,
            'nía': 30,
            'uu ': 31,
            '-ju': 32,
            'jä ': 33,
            'a\' ': 34,
            'mo ': 35,
            'sa,': 36,
            'li ': 37,
            'a l': 38,
            ' de': 39,
            ' ní': 40,
            'ua ': 41,
            ' gu': 42,
            'lo ': 43,
            ' jä': 44,
            cul: 45,
            ' ñi': 46,
            'rtí': 47,
            'tíc': 48,
            art: 49,
            'ju ': 50,
            rec: 51,
            ' ar': 52,
            'ícu': 53,
            ulo: 54,
            'u\' ': 55,
            ere: 56,
            '. a': 57,
            der: 58,
            ech: 59,
            'o d': 60,
            cho: 61,
            ' ma': 62,
            'a n': 63,
            '\'. ': 64,
            'ma ': 65,
            'a. ': 66,
            'e l': 67,
            ' kö': 68,
            ' jn': 69,
            'ä\' ': 70,
            ' a ': 71,
            ' o ': 72,
            'ä d': 73,
            ', e': 74,
            'i j': 75,
            '\' j': 76,
            '\' n': 77,
            'la-': 78,
            ' ku': 79,
            'ñi ': 80,
            'ho ': 81,
            '\' e': 82,
            'u-d': 83,
            ' i ': 84,
            'e s': 85,
            'kö ': 86,
            ' jï': 87,
            'o\' ': 88,
            'íä ': 89,
            'na-': 90,
            dsu: 91,
            'tu ': 92,
            'i d': 93,
            'ï\' ': 94,
            ' tä': 95,
            'ma-': 96,
            ' tu': 97,
            'ia ': 98,
            'uu\'': 99,
            'sa.': 100,
            'ja ': 101,
            ' su': 102,
            jma: 103,
            'o e': 104,
            nia: 105,
            'e\' ': 106,
            ' sa': 107,
            ' e-': 108,
            'na ': 109,
            kuu: 110,
            '\', ': 111,
            'jï ': 112,
            ' fu': 113,
            ' lu': 114,
            ' ru': 115,
            '\' l': 116,
            'u g': 117,
            'a m': 118,
            'ua\'': 119,
            'u j': 120,
            'i k': 121,
            'i t': 122,
            'síä': 123,
            'su-': 124,
            ' ti': 125,
            'o k': 126,
            'a i': 127,
            ' ka': 128,
            nac: 129,
            dso: 130,
            'ä e': 131,
            suu: 132,
            ', n': 133,
            fuu: 134,
            ' ta': 135,
            '\' k': 136,
            juu: 137,
            ' ni': 138,
            'e d': 139,
            '. e': 140,
            '\' t': 141,
            ' tï': 142,
            'ä k': 143,
            ' tí': 144,
            'o 2': 145,
            'dsá': 146,
            'a h': 147,
            ' tá': 148,
            'o 1': 149,
            'a o': 150,
            ' i\'': 151,
            'ö\' ': 152,
            jmu: 153,
            ' ja': 154,
            jni: 155,
            '-jä': 156,
            '\' s': 157,
            ' h\'': 158,
            'e t': 159,
            jne: 160,
            ' si': 161,
            aci: 162,
            'a ñ': 163,
            'sa-': 164,
            'o, ': 165,
            'ue ': 166,
            'a r': 167,
            ', j': 168,
            'mu ': 169,
            ' hu': 170,
            'ú\' ': 171,
            'e a': 172,
            'o j': 173,
            'tä\'': 174,
            'uu-': 175,
            gua: 176,
            'ä l': 177,
            'ö ñ': 178,
            'i l': 179,
            'ka ': 180,
            'a a': 181,
            '. l': 182,
            'tá\'': 183,
            ' kä': 184,
            'e-j': 185,
            'iä ': 186,
            'ñi\'': 187,
            'siä': 188,
            ' ba': 189,
            'mo-': 190,
            'li\'': 191,
            'tï ': 192,
            'ací': 193,
            ' as': 194,
            'ö j': 195,
            'e n': 196,
            ' ji': 197,
            dsi: 198,
            'u t': 199,
            'ie\'': 200,
            '\' ñ': 201,
            'ta ': 202,
            'tíä': 203,
            'así': 204,
            'u s': 205,
            'u k': 206,
            'a\'.': 207,
            'jï\'': 208,
            'h\'i': 209,
            'juú': 210,
            ' un': 211,
            '. k': 212,
            'ba ': 213,
            'lu\'': 214,
            '-jm': 215,
            'tä ': 216,
            'ciö': 217,
            '\'-d': 218,
            'ne ': 219,
            'á j': 220,
            ' ï ': 221,
            uni: 222,
            'á\' ': 223,
            guu: 224,
            'uú\'': 225,
            'ru ': 226,
            ' sï': 227,
            'ki ': 228,
            'u e': 229,
            'jní': 230,
            'i s': 231,
            'í\' ': 232,
            'tö ': 233,
            'guí': 234,
            ', a': 235,
            'ï d': 236,
            'i m': 237,
            '. n': 238,
            'sá ': 239,
            'íá ': 240,
            'e k': 241,
            '-la': 242,
            ' vo': 243,
            'ti ': 244,
            'ä j': 245,
            'i\'.': 246,
            'ï j': 247,
            'ía\'': 248,
            'mo\'': 249,
            ', k': 250,
            '\' g': 251,
            'a g': 252,
            'ua-': 253,
            '-ja': 254,
            rue: 255,
            ', o': 256,
            'ta\'': 257,
            'ia\'': 258,
            ' kï': 259,
            huu: 260,
            'lu ': 261,
            '\' a': 262,
            ' é ': 263,
            '\' o': 264,
            'síá': 265,
            'ni\'': 266,
            ' le': 267,
            'íä\'': 268,
            'kï\'': 269,
            'ö n': 270,
            'u\'.': 271,
            '-a.': 272,
            'o t': 273,
            'i\'-': 274,
            '\' i': 275,
            'u, ': 276,
            '\'ie': 277,
            lar: 278,
            ' kí': 279,
            'h. ': 280,
            eli: 281,
            ' jú': 282,
            'i\',': 283,
            one: 284,
            'eé ': 285,
            'iö\'': 286,
            'u n': 287,
            '-jï': 288,
            ' d.': 289,
            'sá.': 290,
            'á. ': 291,
            ara: 292,
            '° l': 293,
            gui: 294,
            'kä\'': 295,
            'a ï': 296,
            'ï k': 297,
            ion: 298,
            'a-l': 299,
            'sa\'': 300
        }
    };
    exports.default = chj;
});
//# sourceMappingURL=chj.js.map