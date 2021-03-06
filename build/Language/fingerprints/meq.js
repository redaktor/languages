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
    const meq = {
        id: 'meq',
        name: 'Merey',
        trigrams: { 'ye ': 0,
            'ay ': 1,
            ' na': 2,
            ' a ': 3,
            'a, ': 4,
            ' ha': 5,
            eye: 6,
            'na,': 7,
            ' ma': 8,
            iye: 9,
            ' mə': 10,
            ' ta': 11,
            'a n': 12,
            'a m': 13,
            ' ka': 14,
            ' nd': 15,
            ' i ': 16,
            'ka ': 17,
            'a t': 18,
            ' tə': 19,
            'a g': 20,
            'e n': 21,
            hay: 22,
            ndo: 23,
            'ta ': 24,
            'do ': 25,
            'ma ': 26,
            ' ba': 27,
            'ha ': 28,
            aye: 29,
            dza: 30,
            ' ay': 31,
            'kə ': 32,
            'om ': 33,
            aya: 34,
            ' mb': 35,
            'mbə': 36,
            'y a': 37,
            nak: 38,
            ala: 39,
            'e a': 40,
            tay: 41,
            'e t': 42,
            ' ŋg': 43,
            ' ts': 44,
            'tə ': 45,
            ' ne': 46,
            'ya ': 47,
            'bəl': 48,
            ' gə': 49,
            ' an': 50,
            'akə': 51,
            gwa: 52,
            lom: 53,
            ' hə': 54,
            'əlo': 55,
            bay: 56,
            ' ey': 57,
            ' wu': 58,
            'ay.': 59,
            'e. ': 60,
            ' fa': 61,
            'a a': 62,
            ndz: 63,
            'y. ': 64,
            niy: 65,
            ' ye': 66,
            'a k': 67,
            gay: 68,
            'e m': 69,
            ' ni': 70,
            'ye.': 71,
            'a h': 72,
            'a b': 73,
            ' ga': 74,
            'na ': 75,
            'ŋga': 76,
            'i m': 77,
            ' nə': 78,
            'ər ': 79,
            ', a': 80,
            ata: 81,
            'y h': 82,
            and: 83,
            'da ': 84,
            'y n': 85,
            ', n': 86,
            'e h': 87,
            'a s': 88,
            'gər': 89,
            fay: 90,
            'a d': 91,
            ' kə': 92,
            kwa: 93,
            'wu ': 94,
            'hər': 95,
            'wa ': 96,
            ada: 97,
            '. a': 98,
            'ərw': 99,
            rwi: 100,
            'wi ': 101,
            'əra': 102,
            'y t': 103,
            ' gw': 104,
            ' ad': 105,
            'la ': 106,
            'za ': 107,
            ' bə': 108,
            ', t': 109,
            ehe: 110,
            yes: 111,
            esu: 112,
            'waɗ': 113,
            'e k': 114,
            zla: 115,
            'um ': 116,
            ' wa': 117,
            kur: 118,
            'əma': 119,
            neh: 120,
            hey: 121,
            'tsə': 122,
            'eŋ ': 123,
            'o n': 124,
            'neŋ': 125,
            'â ': 126,
            'a w': 127,
            'ra ': 128,
            uro: 129,
            ', m': 130,
            ' ɗə': 131,
            'a y': 132,
            '. n': 133,
            'su ': 134,
            ' me': 135,
            way: 136,
            'am ': 137,
            'm a': 138,
            'əla': 139,
            lam: 140,
            rom: 141,
            awa: 142,
            'y m': 143,
            ' ya': 144,
            'mə ': 145,
            'aɗa': 146,
            'əre': 147,
            'e b': 148,
            ', k': 149,
            aha: 150,
            'u n': 151,
            ' ku': 152,
            tsa: 153,
            'e, ': 154,
            ele: 155,
            '. t': 156,
            'sa ': 157,
            'aŋ ': 158,
            lay: 159,
            'i n': 160,
            ' kw': 161,
            'm n': 162,
            azl: 163,
            ' sa': 164,
            ': «': 165,
            ' bo': 166,
            ' dz': 167,
            'ar ': 168,
            zal: 169,
            wal: 170,
            'həl': 171,
            'bər': 172,
            'əte': 173,
            sik: 174,
            'y, ': 175,
            'ne ': 176,
            'me ': 177,
            'ay,': 178,
            zay: 179,
            'nək': 180,
            'ə g': 181,
            'a ɗ': 182,
            'bo ': 183,
            'a ŋ': 184,
            tsi: 185,
            'a e': 186,
            'o h': 187,
            'ge ': 188,
            'ə m': 189,
            'nət': 190,
            'əts': 191,
            baz: 192,
            'i y': 193,
            ' də': 194,
            'ə n': 195,
            ' pa': 196,
            'a z': 197,
            'ye,': 198,
            'a i': 199,
            'ŋge': 200,
            'ŋgw': 201,
            'vəl': 202,
            may: 203,
            'eŋg': 204,
            'le ': 205,
            'ak ': 206,
            'aw ': 207,
            ' sə': 208,
            nda: 209,
            'k n': 210,
            gey: 211,
            ' te': 212,
            'u a': 213,
            aka: 214,
            '. m': 215,
            aku: 216,
            kum: 217,
            ' və': 218,
            ' ab': 219,
            tey: 220,
            'ɗər': 221,
            'al ': 222,
            'o m': 223,
            'y k': 224,
            're ': 225,
            ' ge': 226,
            day: 227,
            'm h': 228,
            'mən': 229,
            'a. ': 230,
            biy: 231,
            'te ': 232,
            '.» ': 233,
            'əba': 234,
            tse: 235,
            'a p': 236,
            'abə': 237,
            ' si': 238,
            'əv ': 239,
            'sər': 240,
            ' tu': 241,
            'uk ': 242,
            'e i': 243,
            adz: 244,
            'm m': 245,
            lak: 246,
            mey: 247,
            ebi: 248,
            teb: 249,
            'dər': 250,
            'əri': 251,
            akw: 252,
            'məs': 253,
            'ənd': 254,
            'r a': 255,
            kay: 256,
            'y i': 257,
            nah: 258,
            tuk: 259,
            'y: ': 260,
            'ay:': 261,
            'ga ': 262,
            'y b': 263,
            'ɗay': 264,
            'e f': 265,
            'bəy': 266,
            mad: 267,
            'təv': 268,
            'əl ': 269,
            'əy ': 270,
            'ə a': 271,
            'o i': 272,
            'ba ': 273,
            'l n': 274,
            'ə t': 275,
            maa: 276,
            'məd': 277,
            ' ah': 278,
            'əɗa': 279,
            ane: 280,
            'ahə': 281,
            wey: 282,
            ' hu': 283,
            'aa ': 284,
            'mət': 285,
            ' sl': 286,
            ', h': 287,
            'əda': 288,
            'kər': 289,
            ume: 290,
            'əne': 291,
            'ə ɗ': 292,
            'əka': 293,
            'i a': 294,
            '. k': 295,
            'eɗe': 296,
            hal: 297,
            ' ɗa': 298,
            'əsl': 299,
            ama: 300
        }
    };
    exports.default = meq;
});
//# sourceMappingURL=meq.js.map