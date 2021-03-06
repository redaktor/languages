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
    const sri = {
        id: 'sri',
        name: 'Siriano',
        trigrams: { 'ãrĩ': 0,
            iri: 1,
            ' ir': 2,
            'gʉ̃': 3,
            ' ma': 4,
            'ĩgʉ': 5,
            're ': 6,
            'rã ': 7,
            ' ĩg': 8,
            'ããr': 9,
            ' ãã': 10,
            'rẽ ': 11,
            mar: 12,
            ere: 13,
            'erã': 14,
            'ʉ̃ ': 15,
            'arĩ': 16,
            ' ãr': 17,
            rir: 18,
            'rĩ ': 19,
            'ri ': 20,
            mer: 21,
            'rĩp': 22,
            'a. ': 23,
            'ãrẽ': 24,
            mak: 25,
            ' mʉ': 26,
            mas: 27,
            gue: 28,
            ira: 29,
            'ʉre': 30,
            ras: 31,
            'pʉ ': 32,
            'akʉ': 33,
            ' me': 34,
            'kʉ̃': 35,
            'sã ': 36,
            'sũ ': 37,
            '. i': 38,
            ari: 39,
            'rĩr': 40,
            'arã': 41,
            ', ã': 42,
            'rĩm': 43,
            asi: 44,
            'rõ ': 45,
            'ue ': 46,
            '̃sã': 47,
            'ʉ̃s': 48,
            'ĩpʉ': 49,
            rer: 50,
            ' ga': 51,
            'pʉr': 52,
            'ro ': 53,
            'ʉsã': 54,
            'ã, ': 55,
            'mʉs': 56,
            ' yʉ': 57,
            sir: 58,
            ire: 59,
            ' we': 60,
            wer: 61,
            ' wa': 62,
            'gʉ ': 63,
            are: 64,
            ore: 65,
            ' je': 66,
            jes: 67,
            'ũ ã': 68,
            'rã,': 69,
            ' bʉ': 70,
            'ã m': 71,
            'sãr': 72,
            ', m': 73,
            bir: 74,
            rik: 75,
            'ta ': 76,
            'irã': 77,
            'bʉr': 78,
            'i. ': 79,
            'mi.': 80,
            rem: 81,
            ' õã': 82,
            'ʉ m': 83,
            'urã': 84,
            '. ĩ': 85,
            'e m': 86,
            'ʉ, ': 87,
            ' op': 88,
            eri: 89,
            'i m': 90,
            iro: 91,
            'esú': 92,
            dea: 93,
            ': “': 94,
            'ã ã': 95,
            'rãr': 96,
            'ʉ̃r': 97,
            'ʉ̃,': 98,
            '̃, ': 99,
            'ãrã': 100,
            '. m': 101,
            per: 102,
            'igʉ': 103,
            rig: 104,
            'asĩ': 105,
            'õãr': 106,
            'upʉ': 107,
            'e b': 108,
            kum: 109,
            '̃rẽ': 110,
            'ya ': 111,
            ', ĩ': 112,
            yup: 113,
            ' ñe': 114,
            'ʉ. ': 115,
            uri: 116,
            '”, ': 117,
            aka: 118,
            gaj: 119,
            'e w': 120,
            der: 121,
            'ma.': 122,
            ' ĩã': 123,
            'asũ': 124,
            'yʉ ': 125,
            'osũ': 126,
            'a m': 127,
            bur: 128,
            'ã. ': 129,
            'a, ': 130,
            ros: 131,
            'ĩrẽ': 132,
            'rã.': 133,
            emu: 134,
            sak: 135,
            asa: 136,
            'ñer': 137,
            dor: 138,
            'i ã': 139,
            'ka!': 140,
            'ʉro': 141,
            'o m': 142,
            ' pʉ': 143,
            'di ': 144,
            'ĩma': 145,
            ero: 146,
            rid: 147,
            'e ã': 148,
            'kõã': 149,
            yar: 150,
            'ʉya': 151,
            'ãrõ': 152,
            ' bu': 153,
            ' do': 154,
            '̃ i': 155,
            'ã i': 156,
            waa: 157,
            rim: 158,
            ker: 159,
            ' su': 160,
            ' pé': 161,
            'agʉ': 162,
            ' ne': 163,
            ' bo': 164,
            ima: 165,
            ama: 166,
            'rĩg': 167,
            'ĩpe': 168,
            'a! ': 169,
            uro: 170,
            uma: 171,
            aja: 172,
            ' di': 173,
            'sús': 174,
            'apʉ': 175,
            koa: 176,
            'ʉ ĩ': 177,
            rib: 178,
            'ãsũ': 179,
            gap: 180,
            mur: 181,
            ris: 182,
            'ka ': 183,
            ner: 184,
            'a w': 185,
            'ĩmí': 186,
            ' go': 187,
            'ã ĩ': 188,
            umi: 189,
            'rĩ́': 190,
            ' pe': 191,
            'ʉrʉ': 192,
            ade: 193,
            'ñur': 194,
            'e ĩ': 195,
            'ãme': 196,
            aji: 197,
            'e i': 198,
            'rĩb': 199,
            'erõ': 200,
            waj: 201,
            'õ i': 202,
            opa: 203,
            'gũñ': 204,
            ' gã': 205,
            ' gũ': 206,
            tur: 207,
            ' mo': 208,
            'gʉa': 209,
            ogu: 210,
            bue: 211,
            tar: 212,
            'ús ': 213,
            'o, ': 214,
            'ũña': 215,
            ' du': 216,
            'ea ': 217,
            'ĩ g': 218,
            rog: 219,
            'egʉ': 220,
            ' ãs': 221,
            'ʉ ã': 222,
            uer: 223,
            ' ta': 224,
            ' gʉ': 225,
            sto: 226,
            'ĩrã': 227,
            aar: 228,
            ear: 229,
            ist: 230,
            cri: 231,
            'pʉ.': 232,
            'a ã': 233,
            eja: 234,
            ' wi': 235,
            'ĩ m': 236,
            'gʉk': 237,
            'opʉ': 238,
            'mʉ ': 239,
            ' ʉ̃': 240,
            'ã g': 241,
            'rĩy': 242,
            'yʉr': 243,
            'gʉ,': 244,
            'ĩrĩ': 245,
            'ugʉ': 246,
            dup: 247,
            oja: 248,
            ema: 249,
            'ẽ w': 250,
            'rãk': 251,
            'ã w': 252,
            ' wã': 253,
            'ãgʉ': 254,
            ' pa': 255,
            'ʉ̃y': 256,
            '̃ya': 257,
            'ẽ b': 258,
            'a”,': 259,
            'e p': 260,
            ren: 261,
            'mí.': 262,
            'í. ': 263,
            'ĩyu': 264,
            'e g': 265,
            'ẽ i': 266,
            ', i': 267,
            ' ke': 268,
            '̃ p': 269,
            'ẽ m': 270,
            'ʉ i': 271,
            'oa.': 272,
            ', g': 273,
            'ma ': 274,
            ita: 275,
            '̃ m': 276,
            ide: 277,
            'ʉ̃m': 278,
            par: 279,
            'ĩ́m': 280,
            'ʉar': 281,
            'dʉa': 282,
            reg: 283,
            'eõ ': 284,
            goj: 285,
            ' de': 286,
            'neõ': 287,
            'ẽrẽ': 288,
            gor: 289,
            ' i ': 290,
            'gãã': 291,
            'ããm': 292,
            ': —': 293,
            'a d': 294,
            ura: 295,
            eta: 296,
            rar: 297,
            'moã': 298,
            rip: 299,
            'rĩd': 300
        }
    };
    exports.default = sri;
});
//# sourceMappingURL=sri.js.map