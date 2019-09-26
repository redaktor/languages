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
    const cak = {
        id: 'cak',
        name: 'Kaqchikel, Central',
        trigrams: { ' ri': 0,
            'ri ': 1,
            ' ru': 2,
            ' ch': 3,
            ' ju': 4,
            jun: 5,
            chi: 6,
            ' ta': 7,
            ' wi': 8,
            'un ': 9,
            'a\' ': 10,
            'an ': 11,
            chu: 12,
            'i r': 13,
            'n r': 14,
            win: 15,
            'el ': 16,
            'b\'a': 17,
            huq: 18,
            'a r': 19,
            'k\'a': 20,
            'l r': 21,
            ' ni': 22,
            uqa: 23,
            'qa\'': 24,
            '\' r': 25,
            'ch\'': 26,
            ' ki': 27,
            'hi ': 28,
            ruw: 29,
            'näq': 30,
            ' k\'': 31,
            'b\'ä': 32,
            'i\' ': 33,
            'inä': 34,
            '\'al': 35,
            tzi: 36,
            'ta ': 37,
            'n j': 38,
            ach: 39,
            'in ': 40,
            taq: 41,
            ' xa': 42,
            'aj ': 43,
            ' pa': 44,
            len: 45,
            ' re': 46,
            ' ma': 47,
            'äq ': 48,
            'al ': 49,
            'j r': 50,
            'xa ': 51,
            'pa ': 52,
            man: 53,
            'en ': 54,
            'q\'a': 55,
            noj: 56,
            'äl ': 57,
            'ij ': 58,
            'ik\'': 59,
            'aq ': 60,
            'ib\'': 61,
            ' xt': 62,
            'i k': 63,
            'i n': 64,
            jel: 65,
            'uk\'': 66,
            oje: 67,
            ruk: 68,
            '\'äl': 69,
            '\'oj': 70,
            '\'ul': 71,
            ono: 72,
            ule: 73,
            uch: 74,
            'n w': 75,
            'h\'u': 76,
            uwa: 77,
            ' ro': 78,
            'i w': 79,
            aji: 80,
            'ik ': 81,
            ina: 82,
            ' nu': 83,
            lew: 84,
            wac: 85,
            aqi: 86,
            '\'at': 87,
            'ïk ': 88,
            'äj ': 89,
            '\'as': 90,
            'uq\'': 91,
            zij: 92,
            ama: 93,
            oji: 94,
            naq: 95,
            '\'an': 96,
            ich: 97,
            asl: 98,
            'k\'o': 99,
            xti: 100,
            sle: 101,
            ' ti': 102,
            'ab\'': 103,
            'qi\'': 104,
            'ch ': 105,
            laj: 106,
            ' ko': 107,
            kaj: 108,
            '. m': 109,
            'a c': 110,
            '\'a ': 111,
            iki: 112,
            '\' c': 113,
            'ub\'': 114,
            'äch': 115,
            ' mo': 116,
            ', r': 117,
            'n k': 118,
            'wäc': 119,
            'n c': 120,
            'q r': 121,
            'l c': 122,
            ala: 123,
            sam: 124,
            'k r': 125,
            ruc: 126,
            maj: 127,
            'l t': 128,
            itz: 129,
            'n t': 130,
            tik: 131,
            utz: 132,
            '\' x': 133,
            'ob\'': 134,
            oka: 135,
            'h\'o': 136,
            mok: 137,
            'a k': 138,
            ron: 139,
            ima: 140,
            nik: 141,
            ' tz': 142,
            're ': 143,
            nim: 144,
            'i t': 145,
            'k\'i': 146,
            'läj': 147,
            rik: 148,
            'l w': 149,
            'a x': 150,
            kik: 151,
            'il ': 152,
            'wi ': 153,
            'a t': 154,
            'h r': 155,
            'k\'u': 156,
            'j c': 157,
            'uwä': 158,
            rut: 159,
            'uj ': 160,
            '\'in': 161,
            hin: 162,
            'ütz': 163,
            'j t': 164,
            ' ka': 165,
            kon: 166,
            ruq: 167,
            'tz ': 168,
            '\' k': 169,
            ' üt': 170,
            ' b\'': 171,
            xik: 172,
            'ya\'': 173,
            'q\'i': 174,
            ', c': 175,
            jib: 176,
            nel: 177,
            ' q\'': 178,
            'ew ': 179,
            'l, ': 180,
            'i m': 181,
            una: 182,
            'l n': 183,
            'l k': 184,
            '\'än': 185,
            'iq\'': 186,
            'e\' ': 187,
            'ma ': 188,
            ' sa': 189,
            '\'o ': 190,
            'e r': 191,
            '\'aj': 192,
            'j k': 193,
            'än ': 194,
            isa: 195,
            zil: 196,
            jin: 197,
            '\'ij': 198,
            'nïk': 199,
            kit: 200,
            'i x': 201,
            ' ra': 202,
            qal: 203,
            oma: 204,
            'ri\'': 205,
            iri: 206,
            ijo: 207,
            ajo: 208,
            cha: 209,
            'chï': 210,
            '\'a\'': 211,
            'b\'e': 212,
            'hïk': 213,
            'ke ': 214,
            'o\' ': 215,
            ric: 216,
            nan: 217,
            raj: 218,
            ale: 219,
            jqa: 220,
            'oj ': 221,
            ejq: 222,
            'h\'a': 223,
            're\'': 224,
            uwi: 225,
            'ïl ': 226,
            pan: 227,
            ris: 228,
            'a j': 229,
            'k c': 230,
            ' wu': 231,
            'ilä': 232,
            rom: 233,
            olo: 234,
            ' ut': 235,
            'wi\'': 236,
            ira: 237,
            nir: 238,
            rej: 239,
            ike: 240,
            hik: 241,
            'j w': 242,
            mal: 243,
            'j p': 244,
            ine: 245,
            'i a': 246,
            'l j': 247,
            'q k': 248,
            haj: 249,
            'alä': 250,
            '\' t': 251,
            ' ja': 252,
            'j j': 253,
            'onï': 254,
            atb: 255,
            'n n': 256,
            aqa: 257,
            kir: 258,
            kic: 259,
            'n x': 260,
            'i q': 261,
            'u\'x': 262,
            xtu: 263,
            'a\'o': 264,
            nib: 265,
            'to\'': 266,
            'tb\'': 267,
            '\'u\'': 268,
            'on ': 269,
            'j, ': 270,
            kan: 271,
            'k, ': 272,
            ', x': 273,
            'q, ': 274,
            ' na': 275,
            '\', ': 276,
            jir: 277,
            rub: 278,
            'z n': 279,
            upa: 280,
            atz: 281,
            lan: 282,
            tij: 283,
            'o c': 284,
            tzo: 285,
            zin: 286,
            'n p': 287,
            'ki\'': 288,
            'k n': 289,
            ' ac': 290,
            juj: 291,
            'w r': 292,
            'j. ': 293,
            jle: 294,
            '. r': 295,
            zob: 296,
            'n, ': 297,
            axi: 298,
            hup: 299,
            wuj: 300
        }
    };
    exports.default = cak;
});
//# sourceMappingURL=cak.js.map