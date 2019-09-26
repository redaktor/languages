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
    const es = {
        id: 'es',
        name: 'Spanish',
        trigrams: { ' de': 0,
            'de ': 1,
            'os ': 2,
            ' la': 3,
            'la ': 4,
            'el ': 5,
            que: 6,
            'as ': 7,
            ' co': 8,
            ' qu': 9,
            ' en': 10,
            'en ': 11,
            'ue ': 12,
            'es ': 13,
            ent: 14,
            ' el': 15,
            ' y ': 16,
            ' es': 17,
            ' un': 18,
            'do ': 19,
            'e l': 20,
            's d': 21,
            con: 22,
            est: 23,
            nte: 24,
            'a d': 25,
            ' a ': 26,
            ' se': 27,
            ' lo': 28,
            'ra ': 29,
            ' pa': 30,
            'o d': 31,
            los: 32,
            ' po': 33,
            'te ': 34,
            ' ca': 35,
            'e e': 36,
            ado: 37,
            ' ha': 38,
            ' re': 39,
            'ar ': 40,
            'o e': 41,
            'a e': 42,
            'a c': 43,
            's, ': 44,
            'no ': 45,
            'se ': 46,
            ' su': 47,
            'on ': 48,
            'n e': 49,
            'a l': 50,
            'na ': 51,
            ' al': 52,
            'or ': 53,
            'ión': 54,
            par: 55,
            ' pr': 56,
            ' no': 57,
            'o, ': 58,
            sta: 59,
            's e': 60,
            'al ': 61,
            'un ': 62,
            ien: 63,
            'to ': 64,
            las: 65,
            'ón ': 66,
            'e s': 67,
            'e a': 68,
            'a p': 69,
            'e d': 70,
            'a, ': 71,
            por: 72,
            res: 73,
            's p': 74,
            com: 75,
            ara: 76,
            tra: 77,
            ' pe': 78,
            's c': 79,
            'a a': 80,
            'ro ': 81,
            aci: 82,
            men: 83,
            'ía ': 84,
            era: 85,
            ant: 86,
            'ció': 87,
            des: 88,
            una: 89,
            'e c': 90,
            'n l': 91,
            'an ': 92,
            ida: 93,
            ' in': 94,
            'o a': 95,
            ' me': 96,
            del: 97,
            'o p': 98,
            'lo ': 99,
            ' ma': 100,
            'a s': 101,
            'ta ': 102,
            ada: 103,
            ' si': 104,
            'da ': 105,
            ' di': 106,
            nto: 107,
            'e p': 108,
            cia: 109,
            dad: 110,
            per: 111,
            ndo: 112,
            aba: 113,
            les: 114,
            nci: 115,
            's a': 116,
            'mo ': 117,
            dos: 118,
            's. ': 119,
            'n d': 120,
            ' mi': 121,
            ero: 122,
            rec: 123,
            ', e': 124,
            'er ': 125,
            ica: 126,
            pro: 127,
            ntr: 128,
            nta: 129,
            esp: 130,
            ros: 131,
            ' so': 132,
            ist: 133,
            'o c': 134,
            tro: 135,
            enc: 136,
            cio: 137,
            ' cu': 138,
            'a m': 139,
            one: 140,
            'su ': 141,
            's y': 142,
            nos: 143,
            'n c': 144,
            ten: 145,
            ' vi': 146,
            nes: 147,
            and: 148,
            'n a': 149,
            ran: 150,
            ido: 151,
            'n p': 152,
            'o. ': 153,
            'e m': 154,
            'a. ': 155,
            'o l': 156,
            ras: 157,
            'e h': 158,
            ' te': 159,
            '. e': 160,
            's q': 161,
            'ba ': 162,
            pre: 163,
            're ': 164,
            'o s': 165,
            omo: 166,
            ale: 167,
            ' ve': 168,
            'más': 169,
            sti: 170,
            ' tr': 171,
            ion: 172,
            ' to': 173,
            ter: 174,
            ier: 175,
            'o q': 176,
            's m': 177,
            ', a': 178,
            'e t': 179,
            'ia ': 180,
            car: 181,
            's s': 182,
            mos: 183,
            'a q': 184,
            tos: 185,
            ', c': 186,
            tor: 187,
            'ás ': 188,
            'a t': 189,
            'e, ': 190,
            ' le': 191,
            ste: 192,
            ina: 193,
            ene: 194,
            ' má': 195,
            's l': 196,
            'n s': 197,
            tes: 198,
            str: 199,
            'l c': 200,
            ' ta': 201,
            'io ': 202,
            'os,': 203,
            ont: 204,
            'a y': 205,
            ' mu': 206,
            ona: 207,
            'r e': 208,
            ', p': 209,
            'l p': 210,
            tar: 211,
            lla: 212,
            'a v': 213,
            cas: 214,
            ', s': 215,
            ura: 216,
            eci: 217,
            'o m': 218,
            'so ': 219,
            ici: 220,
            'e n': 221,
            ' mo': 222,
            'r l': 223,
            'o y': 224,
            hab: 225,
            ron: 226,
            ' ac': 227,
            das: 228,
            'e u': 229,
            end: 230,
            ari: 231,
            'l d': 232,
            tan: 233,
            ' sa': 234,
            'ad ': 235,
            'ca ': 236,
            'r d': 237,
            'e q': 238,
            ' pu': 239,
            'n m': 240,
            'r a': 241,
            emp: 242,
            tas: 243,
            ', l': 244,
            nas: 245,
            ' do': 246,
            ' an': 247,
            cos: 248,
            ali: 249,
            ' ce': 250,
            'l m': 251,
            ' ex': 252,
            esa: 253,
            rio: 254,
            qui: 255,
            bre: 256,
            cto: 257,
            pue: 258,
            'co ': 259,
            'a u': 260,
            ese: 261,
            ner: 262,
            gra: 263,
            man: 264,
            lar: 265,
            'o h': 266,
            esc: 267,
            tre: 268,
            ', d': 269,
            ver: 270,
            ues: 271,
            ico: 272,
            ren: 273,
            cua: 274,
            'me ': 275,
            ' li': 276,
            'e r': 277,
            'le ': 278,
            'es,': 279,
            's t': 280,
            'a n': 281,
            cad: 282,
            cer: 283,
            int: 284,
            '. l': 285,
            ons: 286,
            lle: 287,
            'a r': 288,
            ' ho': 289,
            den: 290,
            uer: 291,
            art: 292,
            'l e': 293,
            spe: 294,
            'ha ': 295,
            son: 296,
            'ma ': 297,
            ori: 298,
            sto: 299,
            'a i': 300
        }
    };
    exports.default = es;
});
//# sourceMappingURL=es.js.map