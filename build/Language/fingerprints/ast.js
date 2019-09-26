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
    const ast = {
        id: 'ast',
        name: 'Asturian',
        trigrams: { ' de': 0,
            'os ': 1,
            'es ': 2,
            'de ': 3,
            'la ': 4,
            ' y ': 5,
            ' la': 6,
            ' a ': 7,
            'e l': 8,
            rec: 9,
            ech: 10,
            ien: 11,
            ent: 12,
            'en ': 13,
            dre: 14,
            ' dr': 15,
            ' so': 16,
            'na ': 17,
            ' co': 18,
            aci: 19,
            'a l': 20,
            les: 21,
            'n d': 22,
            ' pe': 23,
            los: 24,
            'a p': 25,
            'ión': 26,
            ' qu': 27,
            ona: 28,
            que: 29,
            ' ll': 30,
            ' to': 31,
            chu: 32,
            per: 33,
            's d': 34,
            'el ': 35,
            nte: 36,
            'ció': 37,
            'ón ': 38,
            ' lo': 39,
            'hu ': 40,
            ' na': 41,
            ' es': 42,
            ers: 43,
            'u a': 44,
            'al ': 45,
            ion: 46,
            ' pr': 47,
            ' d\'': 48,
            tie: 49,
            'a d': 50,
            ' se': 51,
            'ue ': 52,
            con: 53,
            ' ti': 54,
            res: 55,
            cio: 56,
            art: 57,
            ' ar': 58,
            rso: 59,
            son: 60,
            'er ': 61,
            'a s': 62,
            'u d': 63,
            ' en': 64,
            cul: 65,
            cia: 66,
            '. a': 67,
            'lu ': 68,
            men: 69,
            lli: 70,
            nes: 71,
            'a, ': 72,
            'rtí': 73,
            pro: 74,
            ' re': 75,
            's y': 76,
            'tíc': 77,
            ' o ': 78,
            lib: 79,
            ulu: 80,
            'ícu': 81,
            'se ': 82,
            'tu ': 83,
            'oa ': 84,
            toa: 85,
            'a t': 86,
            nci: 87,
            ale: 88,
            nac: 89,
            's, ': 90,
            ' in': 91,
            'so ': 92,
            one: 93,
            'un ': 94,
            est: 95,
            'ar ': 96,
            ici: 97,
            'te ': 98,
            ' un': 99,
            ber: 100,
            tra: 101,
            's p': 102,
            mie: 103,
            man: 104,
            enc: 105,
            del: 106,
            ' ne': 107,
            'y a': 108,
            ', d': 109,
            ual: 110,
            ert: 111,
            'ra ': 112,
            's n': 113,
            ' el': 114,
            ' po': 115,
            ibe: 116,
            hos: 117,
            com: 118,
            nal: 119,
            'e s': 120,
            cho: 121,
            ' pa': 122,
            'es,': 123,
            ' le': 124,
            ami: 125,
            'a c': 126,
            ', a': 127,
            'idá': 128,
            ase: 129,
            'a e': 130,
            'e c': 131,
            esc: 132,
            una: 133,
            ome: 134,
            ' nu': 135,
            ' di': 136,
            ' xu': 137,
            ter: 138,
            nun: 139,
            'rá ': 140,
            ' ca': 141,
            ere: 142,
            'e p': 143,
            end: 144,
            ame: 145,
            'ia ': 146,
            ntr: 147,
            'a y': 148,
            'y d': 149,
            ' fa': 150,
            ese: 151,
            ' vi': 152,
            'dá ': 153,
            'u, ': 154,
            aes: 155,
            hum: 156,
            '-y ': 157,
            'á d': 158,
            's. ': 159,
            cla: 160,
            'n c': 161,
            uma: 162,
            'e n': 163,
            ica: 164,
            dic: 165,
            'iu ': 166,
            ntu: 167,
            'l d': 168,
            era: 169,
            ' hu': 170,
            's e': 171,
            'e d': 172,
            'e-y': 173,
            col: 174,
            's a': 175,
            cie: 176,
            'a a': 177,
            ial: 178,
            ndi: 179,
            'y l': 180,
            'n s': 181,
            ide: 182,
            'r d': 183,
            ene: 184,
            ' me': 185,
            tiv: 186,
            oci: 187,
            nta: 188,
            soc: 189,
            esp: 190,
            ' al': 191,
            nde: 192,
            'u n': 193,
            sco: 194,
            des: 195,
            ' cu': 196,
            'in ': 197,
            'y e': 198,
            'n p': 199,
            ali: 200,
            'd\'a': 201,
            ', l': 202,
            pre: 203,
            'a m': 204,
            qui: 205,
            'u y': 206,
            vid: 207,
            ten: 208,
            's s': 209,
            ies: 210,
            'e, ': 211,
            sta: 212,
            ver: 213,
            nos: 214,
            ier: 215,
            's c': 216,
            ont: 217,
            'tá ': 218,
            ist: 219,
            ' ma': 220,
            tos: 221,
            ens: 222,
            'a u': 223,
            ond: 224,
            rac: 225,
            'rtá': 226,
            'a q': 227,
            'da ': 228,
            ive: 229,
            ', e': 230,
            'y p': 231,
            gua: 232,
            ser: 233,
            's o': 234,
            rta: 235,
            bre: 236,
            ', y': 237,
            eme: 238,
            'u 2': 239,
            nda: 240,
            'a. ': 241,
            esq: 242,
            sto: 243,
            omu: 244,
            's q': 245,
            'n e': 246,
            sos: 247,
            'u 1': 248,
            squ: 249,
            'l y': 250,
            olo: 251,
            sen: 252,
            ant: 253,
            tol: 254,
            ara: 255,
            'su ': 256,
            igu: 257,
            mes: 258,
            'se-': 259,
            ibr: 260,
            rem: 261,
            'drá': 262,
            ndo: 263,
            xun: 264,
            lar: 265,
            eli: 266,
            nen: 267,
            '. t': 268,
            efe: 269,
            tae: 270,
            tar: 271,
            'or ': 272,
            ' fu': 273,
            'á, ': 274,
            lle: 275,
            egu: 276,
            'o q': 277,
            int: 278,
            tor: 279,
            imi: 280,
            uni: 281,
            ' ye': 282,
            ind: 283,
            'ru ': 284,
            'ia,': 285,
            'r e': 286,
            nel: 287,
            aid: 288,
            'e y': 289,
            dis: 290,
            cua: 291,
            'r l': 292,
            'on ': 293,
            vis: 294,
            dec: 295,
            ola: 296,
            met: 297,
            lid: 298,
            rar: 299,
            'ta ': 300
        }
    };
    exports.default = ast;
});
//# sourceMappingURL=ast.js.map