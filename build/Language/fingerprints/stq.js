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
    const stq = {
        id: 'stq',
        name: 'Frisian, Saterlandic',
        trigrams: { ' dä': 0,
            'en ': 1,
            'ät ': 2,
            ' fo': 3,
            'n d': 4,
            'dät': 5,
            oun: 6,
            'ju ': 7,
            'ke ': 8,
            und: 9,
            'on ': 10,
            ' ju': 11,
            fon: 12,
            lou: 13,
            ter: 14,
            'de ': 15,
            ' un': 16,
            'un ': 17,
            ske: 18,
            'e s': 19,
            'er ': 20,
            roa: 21,
            see: 22,
            eel: 23,
            'in ': 24,
            ' do': 25,
            ' in': 26,
            'do ': 27,
            den: 28,
            pro: 29,
            ier: 30,
            'räi': 31,
            'e f': 32,
            lte: 33,
            ' uu': 34,
            ste: 35,
            ' se': 36,
            'äis': 37,
            'nd ': 38,
            'te ': 39,
            elt: 40,
            isk: 41,
            'frä': 42,
            spr: 43,
            oak: 44,
            'äd ': 45,
            ' wä': 46,
            'ch ': 47,
            ' no': 48,
            nde: 49,
            'ie ': 50,
            ake: 51,
            'n j': 52,
            ede: 53,
            eer: 54,
            nne: 55,
            ' sp': 56,
            ' is': 57,
            'n s': 58,
            ' de': 59,
            dee: 60,
            ers: 61,
            uur: 62,
            'ne ': 63,
            erl: 64,
            rlo: 65,
            'an ': 66,
            oar: 67,
            nge: 68,
            ude: 69,
            ich: 70,
            ner: 71,
            'n u': 72,
            foa: 73,
            'e d': 74,
            ' n ': 75,
            'uk ': 76,
            uud: 77,
            'e u': 78,
            oal: 79,
            'e i': 80,
            ' be': 81,
            aas: 82,
            'äst': 83,
            ' su': 84,
            ert: 85,
            'ge ': 86,
            ' fr': 87,
            'is ': 88,
            'n n': 89,
            'le ': 90,
            ien: 91,
            str: 92,
            ied: 93,
            'e. ': 94,
            '. ': 95,
            ale: 96,
            're ': 97,
            oud: 98,
            'mäd': 99,
            een: 100,
            uut: 101,
            'ääs': 102,
            ' di': 103,
            'e w': 104,
            ' uk': 105,
            'as ': 106,
            tou: 107,
            jie: 108,
            fer: 109,
            ' ne': 110,
            'e, ': 111,
            ' ge': 112,
            unn: 113,
            ast: 114,
            'n i': 115,
            'ar ': 116,
            't w': 117,
            'n f': 118,
            ' ji': 119,
            ' fe': 120,
            gen: 121,
            slo: 122,
            oan: 123,
            nie: 124,
            sun: 125,
            ' mä': 126,
            end: 127,
            'e b': 128,
            'en.': 129,
            't f': 130,
            ' ma': 131,
            isl: 132,
            's d': 133,
            ' ra': 134,
            't d': 135,
            ' an': 136,
            'wää': 137,
            ', d': 138,
            die: 139,
            ool: 140,
            'ur ': 141,
            ere: 142,
            ' to': 143,
            't s': 144,
            rsk: 145,
            'n b': 146,
            ' bi': 147,
            ' tr': 148,
            ene: 149,
            ' ko': 150,
            '. j': 151,
            erd: 152,
            ' 19': 153,
            ten: 154,
            eng: 155,
            'nt ': 156,
            ges: 157,
            est: 158,
            nou: 159,
            'd u': 160,
            ' ni': 161,
            der: 162,
            'd w': 163,
            ' aa': 164,
            '. d': 165,
            och: 166,
            lde: 167,
            uum: 168,
            ' wi': 169,
            'e n': 170,
            oom: 171,
            ' ap': 172,
            't n': 173,
            'ou ': 174,
            erh: 175,
            cht: 176,
            ' wu': 177,
            tro: 178,
            nst: 179,
            'dän': 180,
            'rt ': 181,
            oat: 182,
            rad: 183,
            adi: 184,
            dio: 185,
            noa: 186,
            'u n': 187,
            'wäd': 188,
            'e r': 189,
            ' da': 190,
            wie: 191,
            old: 192,
            stf: 193,
            tfr: 194,
            ' hä': 195,
            '00 ': 196,
            'ap ': 197,
            'e j': 198,
            ' ee': 199,
            ken: 200,
            ' sk': 201,
            man: 202,
            ' fu': 203,
            rhu: 204,
            hun: 205,
            ide: 206,
            'e m': 207,
            wuu: 208,
            bie: 209,
            eed: 210,
            'än ': 211,
            'n. ': 212,
            'el ': 213,
            'äid': 214,
            unt: 215,
            'kt ': 216,
            noc: 217,
            'n, ': 218,
            ' oo': 219,
            'e l': 220,
            'e p': 221,
            'd i': 222,
            ' so': 223,
            ' as': 224,
            'al ': 225,
            'e t': 226,
            uch: 227,
            ' wa': 228,
            ski: 229,
            kee: 230,
            'n g': 231,
            ' gr': 232,
            gro: 233,
            'n m': 234,
            ' si': 235,
            'it ': 236,
            'o s': 237,
            ite: 238,
            ese: 239,
            ele: 240,
            '. f': 241,
            tri: 242,
            ric: 243,
            loa: 244,
            ang: 245,
            'd d': 246,
            ' oa': 247,
            'd. ': 248,
            buu: 249,
            akt: 250,
            'e o': 251,
            ' pr': 252,
            ome: 253,
            ' ie': 254,
            oon: 255,
            ' lj': 256,
            ' le': 257,
            euw: 258,
            'n a': 259,
            'se ': 260,
            ens: 261,
            uun: 262,
            aal: 263,
            ege: 264,
            'en,': 265,
            'ke.': 266,
            'äär': 267,
            nen: 268,
            'r d': 269,
            'd f': 270,
            't a': 271,
            men: 272,
            ' ku': 273,
            'ätt': 274,
            tte: 275,
            len: 276,
            ' kr': 277,
            ' ho': 278,
            lit: 279,
            'u s': 280,
            'e a': 281,
            ' är': 282,
            'r s': 283,
            roo: 284,
            bou: 285,
            ann: 286,
            'sät': 287,
            sig: 288,
            ign: 289,
            gno: 290,
            'wäi': 291,
            't. ': 292,
            and: 293,
            eek: 294,
            ust: 295,
            'düü': 296,
            'üüt': 297,
            'üts': 298,
            tsk: 299
        }
    };
    exports.default = stq;
});
//# sourceMappingURL=stq.js.map