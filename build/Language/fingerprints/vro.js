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
    const vro = {
        id: 'vro',
        name: 'Võro',
        trigrams: { ' ja': 0,
            'ja ': 1,
            ' ki': 2,
            eel: 3,
            ' om': 4,
            kee: 5,
            'i k': 6,
            est: 7,
            sti: 8,
            ele: 9,
            'õro': 10,
            'võr': 11,
            ' võ': 12,
            ' ke': 13,
            iil: 14,
            kii: 15,
            ees: 16,
            'om ': 17,
            'o k': 18,
            'ti ': 19,
            'st ': 20,
            ' va': 21,
            'aq ': 22,
            ' mu': 23,
            'ro ': 24,
            ist: 25,
            '. ': 26,
            ' kõ': 27,
            'lõu': 28,
            'õun': 29,
            ' lõ': 30,
            ast: 31,
            ' mi': 32,
            mis: 33,
            'lt ': 34,
            sta: 35,
            isi: 36,
            'le ': 37,
            ' ku': 38,
            'a k': 39,
            ' ka': 40,
            mul: 41,
            ulg: 42,
            'ga ': 43,
            ', m': 44,
            ids: 45,
            una: 46,
            'sõ ': 47,
            'il ': 48,
            'si ': 49,
            lgi: 50,
            'gi ': 51,
            uul: 52,
            ' ta': 53,
            vai: 54,
            'to ': 55,
            aee: 56,
            mur: 57,
            omm: 58,
            mma: 59,
            ' ni': 60,
            ' pä': 61,
            ' se': 62,
            ' ee': 63,
            maq: 64,
            'sõq': 65,
            ' pe': 66,
            'as ': 67,
            'pää': 68,
            'i p': 69,
            'a v': 70,
            nae: 71,
            ise: 72,
            sis: 73,
            ' lu': 74,
            'iä ': 75,
            ilt: 76,
            lid: 77,
            'dsõ': 78,
            ili: 79,
            '. a': 80,
            'l o': 81,
            lin: 82,
            'õq ': 83,
            luu: 84,
            kun: 85,
            und: 86,
            'o j': 87,
            lii: 88,
            iis: 89,
            its: 90,
            tuu: 91,
            tar: 92,
            'ai ': 93,
            maa: 94,
            ' aa': 95,
            ine: 96,
            'q o': 97,
            ' li': 98,
            'a s': 99,
            'ni ': 100,
            'õmb': 101,
            'miä': 102,
            ' ma': 103,
            ' sa': 104,
            'tsõ': 105,
            aga: 106,
            ' ol': 107,
            'i, ': 108,
            'a t': 109,
            ' tu': 110,
            'al ': 111,
            ' põ': 112,
            aas: 113,
            'i m': 114,
            uur: 115,
            all: 116,
            'q j': 117,
            jao: 118,
            'q, ': 119,
            ' si': 120,
            's v': 121,
            'a m': 122,
            't l': 123,
            'q. ': 208,
            'en ': 125,
            't o': 126,
            ', k': 127,
            min: 128,
            eli: 129,
            ' la': 130,
            per: 131,
            'li ': 132,
            'se ': 133,
            iho: 134,
            tsi: 135,
            ' ko': 136,
            'ne ': 137,
            tus: 138,
            'õnõ': 139,
            'i j': 140,
            'i v': 141,
            ' üt': 142,
            's k': 143,
            ' pa': 144,
            puu: 145,
            't, ': 146,
            'a l': 147,
            'äq ': 148,
            ' in': 149,
            'it ': 150,
            tag: 151,
            set: 152,
            eto: 153,
            urd: 154,
            't k': 155,
            't. ': 156,
            'kõi': 157,
            lit: 158,
            'q k': 159,
            'es ': 160,
            'i s': 161,
            arv: 162,
            'nõ ': 163,
            iid: 164,
            rii: 165,
            'an ': 166,
            'ka ': 167,
            art: 168,
            lau: 169,
            'e l': 170,
            ' ih': 171,
            'i l': 172,
            ' tõ': 173,
            mba: 174,
            ' vä': 175,
            ' pu': 176,
            rva: 177,
            'olõ': 178,
            't p': 179,
            'ääl': 180,
            oli: 181,
            dse: 182,
            ami: 183,
            'isõ': 184,
            ala: 185,
            ' ri': 186,
            ' tä': 187,
            'rdõ': 188,
            ' al': 189,
            oon: 190,
            'ri ': 191,
            rto: 192,
            aul: 193,
            'unõ': 194,
            emi: 195,
            'ho ': 196,
            '. k': 197,
            itu: 198,
            vaq: 199,
            nii: 200,
            ', t': 201,
            ' ve': 202,
            'is ': 203,
            'a p': 204,
            ult: 205,
            'õis': 206,
            tas: 207,
            ' ai': 209,
            'q s': 210,
            ' kü': 211,
            'ulõ': 212,
            'n o': 213,
            kuu: 214,
            koo: 215,
            ', a': 216,
            hil: 217,
            les: 218,
            'kõn': 219,
            'nõl': 220,
            'nõe': 221,
            'õee': 222,
            ' su': 223,
            ' hu': 224,
            mit: 225,
            ' sä': 226,
            'a e': 227,
            'erä': 228,
            lli: 229,
            ', n': 230,
            'm v': 231,
            'l, ': 232,
            ats: 233,
            'sõs': 234,
            'õs ': 235,
            ' ar': 236,
            'uu ': 237,
            'õq.': 238,
            ais: 239,
            'in ': 240,
            'ämb': 241,
            'n, ': 242,
            'eq ': 243,
            saa: 244,
            'i a': 245,
            'ik ': 246,
            'n j': 247,
            ike: 248,
            'ä k': 249,
            'õ v': 250,
            't v': 251,
            val: 252,
            uli: 253,
            ' el': 254,
            par: 255,
            oom: 256,
            loo: 257,
            tii: 258,
            err: 259,
            'aa ': 260,
            ' pi': 261,
            'la ': 262,
            '. v': 263,
            mii: 264,
            'ääm': 265,
            rra: 266,
            ' il': 267,
            ilm: 268,
            'rüh': 269,
            'ühm': 270,
            urr: 271,
            ega: 272,
            nem: 273,
            'm s': 274,
            suu: 275,
            hul: 276,
            lga: 277,
            'ma ': 278,
            ' mõ': 279,
            'ii ': 280,
            'q p': 281,
            lih: 282,
            iha: 283,
            'a j': 284,
            'õ k': 285,
            ' eh': 286,
            'hk ': 287,
            'lõ ': 288,
            'üse': 289,
            'e a': 290,
            and: 291,
            ina: 292,
            'anõ': 293,
            vam: 294,
            sai: 295,
            'õ p': 296,
            'q v': 297,
            's, ': 298,
            ' sü': 299
        }
    };
    exports.default = vro;
});
//# sourceMappingURL=vro.js.map