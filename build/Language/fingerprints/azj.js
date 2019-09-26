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
    const azj = {
        id: 'azj',
        name: 'Azerbaijani, North (Latin)',
        trigrams: { ' və': 0,
            'və ': 1,
            'də ': 2,
            lar: 3,
            'ər ': 4,
            ' hə': 5,
            'in ': 6,
            ' ol': 7,
            ' hü': 8,
            'hüq': 9,
            'üqu': 10,
            quq: 11,
            ' ma': 12,
            ' bi': 13,
            'lər': 14,
            'na ': 15,
            'r. ': 16,
            'hər': 17,
            ' şə': 18,
            bir: 19,
            'an ': 20,
            lik: 21,
            ' tə': 22,
            mal: 23,
            lma: 24,
            'ası': 25,
            'ir ': 26,
            ini: 27,
            'əxs': 28,
            'şəx': 29,
            qla: 30,
            'arı': 31,
            dir: 32,
            ali: 33,
            uqu: 34,
            'a m': 35,
            'r b': 36,
            mad: 37,
            'ilə': 38,
            una: 39,
            'ın ': 40,
            'yət': 41,
            'ddə': 42,
            ' ya': 43,
            ara: 44,
            'əri': 45,
            add: 46,
            'əsi': 47,
            ikd: 48,
            'ən ': 49,
            '. m': 50,
            ' az': 51,
            'əti': 52,
            rin: 53,
            'r ş': 54,
            'dən': 55,
            'yyə': 56,
            'n h': 57,
            tin: 58,
            nin: 59,
            ' mü': 60,
            nda: 61,
            ' mə': 62,
            'ərə': 63,
            iyy: 64,
            'mək': 65,
            zad: 66,
            sin: 67,
            'ət ': 68,
            qun: 69,
            'rın': 70,
            'ün ': 71,
            'ndə': 72,
            'nın': 73,
            aza: 74,
            olu: 75,
            'ni ': 76,
            'ını': 77,
            ' et': 78,
            'ə a': 79,
            ' qa': 80,
            ilm: 81,
            'lıq': 82,
            'i v': 83,
            'ə y': 84,
            kdi: 85,
            ind: 86,
            'lmə': 87,
            'ir.': 88,
            'aq ': 89,
            'ına': 90,
            olm: 91,
            lun: 92,
            'sın': 93,
            mas: 94,
            'lə ': 95,
            'n t': 96,
            'ək ': 97,
            'xs ': 98,
            ' in': 99,
            ' bə': 100,
            'ə b': 101,
            adl: 102,
            'əya': 103,
            'dlı': 104,
            'q v': 105,
            'tmə': 106,
            'ya ': 107,
            'əmi': 108,
            'n m': 109,
            'da ': 110,
            nun: 111,
            'bər': 112,
            ' on': 113,
            'ar ': 114,
            etm: 115,
            dan: 116,
            'sı ': 117,
            maq: 118,
            'nə ': 119,
            'inə': 120,
            'si ': 121,
            'ə h': 122,
            raq: 123,
            'n a': 124,
            'rlə': 125,
            'ə m': 126,
            'un ': 127,
            ' va': 128,
            'ınd': 129,
            'əra': 130,
            'a b': 131,
            nma: 132,
            ' öz': 133,
            ama: 134,
            'anı': 135,
            'ə v': 136,
            'n b': 137,
            'n i': 138,
            irl: 139,
            'ığı': 140,
            'li ': 141,
            ala: 142,
            ins: 143,
            bil: 144,
            ' al': 145,
            'ə d': 146,
            ' di': 147,
            'lət': 148,
            'alı': 149,
            nsa: 150,
            'müd': 151,
            'n v': 152,
            san: 153,
            nla: 154,
            unm: 155,
            'ə i': 156,
            'ələ': 157,
            'nı ': 158,
            dil: 159,
            uql: 160,
            ' sə': 161,
            'ətl': 162,
            ola: 163,
            ' də': 164,
            ' ha': 165,
            'ə e': 166,
            'ə o': 167,
            xsi: 168,
            'uq ': 169,
            ' he': 170,
            'il ': 171,
            ili: 172,
            'üda': 173,
            asi: 174,
            'ıq ': 175,
            ' ki': 176,
            '. h': 177,
            'iş ': 178,
            kil: 179,
            'tər': 180,
            'məs': 181,
            'həm': 182,
            yin: 183,
            min: 184,
            'u v': 185,
            ' bu': 186,
            'n, ': 187,
            lan: 188,
            eyn: 189,
            'əni': 190,
            'dır': 191,
            ' da': 192,
            yan: 193,
            xal: 194,
            osi: 195,
            'lığ': 196,
            afi: 197,
            'rə ': 198,
            alq: 199,
            sos: 200,
            'q, ': 201,
            ' ed': 202,
            ' as': 203,
            'al ': 204,
            'fiə': 205,
            ' əs': 206,
            daf: 207,
            sia: 208,
            'eç ': 209,
            ' iş': 210,
            'ə q': 211,
            man: 212,
            'bu ': 213,
            'mi ': 214,
            'ik ': 215,
            ' ta': 216,
            kim: 217,
            'heç': 218,
            'q h': 219,
            liy: 220,
            'tlə': 221,
            ' so': 222,
            'ıql': 223,
            'əmə': 224,
            't v': 225,
            ' is': 226,
            'lı ': 227,
            'tün': 228,
            'ə 1': 229,
            ina: 230,
            sas: 231,
            siy: 232,
            iyi: 233,
            'r v': 234,
            'lıd': 235,
            'məz': 236,
            ifa: 237,
            'ı o': 238,
            'aq,': 239,
            ill: 240,
            'rı ': 241,
            'əsa': 242,
            'ədə': 243,
            'ıdı': 244,
            'ə, ': 245,
            'ə 2': 246,
            yar: 247,
            mil: 248,
            ist: 249,
            iya: 250,
            ' nə': 251,
            'ılı': 252,
            'ütü': 253,
            ' bü': 254,
            onu: 255,
            'i s': 256,
            'seç': 257,
            nam: 258,
            edi: 259,
            miy: 260,
            'a q': 261,
            'n e': 262,
            ' cə': 263,
            sil: 264,
            'öz ': 265,
            'ı h': 266,
            'büt': 267,
            'iə ': 268,
            'a h': 269,
            'amə': 270,
            axi: 271,
            'çün': 272,
            ' üç': 273,
            'adə': 274,
            'üçü': 275,
            ril: 276,
            'n ə': 277,
            xil: 278,
            ' mi': 279,
            ial: 280,
            'a v': 281,
            dax: 282,
            'ar.': 283,
            'mən': 284,
            'əyi': 285,
            ' dö': 286,
            'təh': 287,
            'şər': 288,
            var: 289,
            ' ni': 290,
            'ı v': 291,
            'ğın': 292,
            'r h': 293,
            zam: 294,
            'uğu': 295,
            'bəy': 296,
            hsi: 297,
            'vlə': 298,
            'ad ': 299,
            sti: 300
        }
    };
    exports.default = azj;
});
//# sourceMappingURL=azj.js.map