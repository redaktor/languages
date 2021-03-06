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
    const rm = {
        id: 'roh',
        name: 'Romansch',
        trigrams: { ' da': 0,
            'da ': 1,
            iun: 2,
            'a l': 3,
            ' la': 4,
            'la ': 5,
            ' in': 6,
            'ha ': 7,
            cha: 8,
            ziu: 9,
            'as ': 10,
            'a p': 11,
            ' e ': 12,
            ret: 13,
            ain: 14,
            'ts ': 15,
            ' dr': 16,
            dre: 17,
            ' il': 18,
            's d': 19,
            per: 20,
            ' pe': 21,
            'un ': 22,
            sch: 23,
            'na ': 24,
            azi: 25,
            'er ': 26,
            'a d': 27,
            'ls ': 28,
            ' pr': 29,
            inc: 30,
            'l d': 31,
            'in ': 32,
            'il ': 33,
            'et ': 34,
            'el ': 35,
            una: 36,
            che: 37,
            nch: 38,
            ' cu': 39,
            ers: 40,
            ing: 41,
            ' ch': 42,
            'an ': 43,
            's e': 44,
            ' ar': 45,
            ' ha': 46,
            art: 47,
            'a i': 48,
            man: 49,
            ' li': 50,
            tic: 51,
            min: 52,
            'ir ': 53,
            ' a ': 54,
            pro: 55,
            ' qu': 56,
            'üna': 57,
            ' mi': 58,
            nza: 59,
            las: 60,
            ich: 61,
            sun: 62,
            'a e': 63,
            ter: 64,
            lib: 65,
            mai: 66,
            'a c': 67,
            'e d': 68,
            'a, ': 69,
            era: 70,
            ala: 71,
            'za ': 72,
            ' l\'': 73,
            int: 74,
            't d': 75,
            ibe: 76,
            '. a': 77,
            rti: 78,
            ber: 79,
            'a s': 80,
            uma: 81,
            ' co': 82,
            ' o ': 83,
            hel: 84,
            's p': 85,
            '. (': 86,
            's. ': 87,
            'al ': 88,
            tra: 89,
            'ns ': 90,
            'tà ': 91,
            'ta ': 92,
            nta: 93,
            ent: 94,
            ' ün': 95,
            als: 96,
            res: 97,
            ' re': 98,
            ran: 99,
            rsu: 100,
            ' ed': 101,
            'ed ': 102,
            ama: 103,
            ets: 104,
            ' de': 105,
            'ar ': 106,
            'n s': 107,
            'is ': 108,
            uns: 109,
            chi: 110,
            ess: 111,
            naz: 112,
            ' gn': 113,
            ats: 114,
            ' sa': 115,
            'ün ': 116,
            'ia ': 117,
            ant: 118,
            nal: 119,
            ert: 120,
            gni: 121,
            anz: 122,
            'ad ': 123,
            cun: 124,
            'a t': 125,
            ' na': 126,
            sta: 127,
            uot: 128,
            ist: 129,
            's l': 130,
            ' se': 131,
            'ità': 132,
            'n c': 133,
            ') m': 134,
            cum: 135,
            nte: 136,
            ' me': 137,
            ' po': 138,
            qui: 139,
            's s': 140,
            con: 141,
            uis: 142,
            tuo: 143,
            'hi ': 144,
            's i': 145,
            ras: 146,
            's c': 147,
            'nt ': 148,
            'ur ': 149,
            ' d\'': 150,
            ' pa': 151,
            ' tu': 152,
            ' nu': 153,
            'a h': 154,
            ' di': 155,
            't a': 156,
            'r i': 157,
            ual: 158,
            ' su': 159,
            nir: 160,
            'ra ': 161,
            dal: 162,
            czi: 163,
            ' sc': 164,
            ' ad': 165,
            ', i': 166,
            ' fa': 167,
            'ng ': 168,
            'nu ': 169,
            ' um': 170,
            ica: 171,
            ' ma': 172,
            vai: 173,
            'a m': 174,
            ' tr': 175,
            des: 176,
            'a a': 177,
            'a r': 178,
            uni: 179,
            ' va': 180,
            'r l': 181,
            'a. ': 182,
            esc: 183,
            han: 184,
            ' si': 185,
            'gün': 186,
            'ngü': 187,
            gua: 188,
            ver: 189,
            ' es': 190,
            'd a': 191,
            ', d': 192,
            ote: 193,
            's m': 194,
            'n d': 195,
            'a v': 196,
            's n': 197,
            'u p': 198,
            and: 199,
            'a u': 200,
            'r p': 201,
            'rs ': 202,
            tsc: 203,
            'l s': 204,
            ari: 205,
            aja: 206,
            'ss ': 207,
            's, ': 208,
            lit: 209,
            rta: 210,
            'n i': 211,
            'a f': 212,
            ais: 213,
            dis: 214,
            ali: 215,
            nda: 216,
            tat: 217,
            'a q': 218,
            'r a': 219,
            que: 220,
            ons: 221,
            tta: 222,
            lla: 223,
            sia: 224,
            'a g': 225,
            tan: 226,
            ' pu': 227,
            ils: 228,
            'r s': 229,
            ump: 230,
            ide: 231,
            'l\'u': 232,
            'n n': 233,
            ' ot': 234,
            'l e': 235,
            'd e': 236,
            'à d': 237,
            'sa ': 238,
            cia: 239,
            der: 240,
            sei: 241,
            eis: 242,
            'es ': 243,
            'n, ': 244,
            und: 245,
            egu: 246,
            gna: 247,
            ' te': 248,
            'o g': 249,
            'n p': 250,
            'r e': 251,
            ami: 252,
            dec: 253,
            ' st': 254,
            ern: 255,
            pre: 256,
            'n e': 257,
            oci: 258,
            soc: 259,
            'h. ': 260,
            lic: 261,
            unt: 262,
            'ch.': 263,
            ' un': 264,
            ' (2': 265,
            ' fu': 266,
            nts: 267,
            'a o': 268,
            's a': 269,
            ara: 270,
            's o': 271,
            air: 272,
            ' (1': 273,
            ial: 274,
            bli: 275,
            'rtà': 276,
            'ot ': 277,
            lia: 278,
            qua: 279,
            lur: 280,
            ita: 281,
            'n. ': 282,
            men: 283,
            'r d': 284,
            giu: 285,
            rar: 286,
            dad: 287,
            ' el': 288,
            'nd ': 289,
            ' eg': 290,
            ive: 291,
            par: 292,
            'd i': 293,
            'l v': 294,
            ' as': 295,
            '\'um': 296,
            'n l': 297,
            rat: 298,
            'e c': 299,
            'n o': 300
        }
    };
    exports.default = rm;
});
//# sourceMappingURL=rm.js.map