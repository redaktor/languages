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
    const tue = {
        id: 'tue',
        name: 'Tuyuca',
        trigrams: { 'cʉ̃': 0,
            're ': 1,
            ' ti': 2,
            'jĩĩ': 3,
            ' jĩ': 4,
            tii: 5,
            ' ni': 6,
            nii: 7,
            ' cʉ': 250,
            'rẽ ': 9,
            'ʉ̃ ': 10,
            '. ': 11,
            'ro ': 12,
            'igʉ': 13,
            'ʉ̃ʉ': 14,
            '̃ʉ̃': 15,
            iir: 16,
            mac: 17,
            'a. ': 18,
            ari: 19,
            'ʉ̃́': 20,
            'acʉ': 21,
            ' ma': 22,
            'pʉ ': 23,
            eer: 24,
            'ré ': 25,
            tir: 26,
            ero: 27,
            ' mʉ': 28,
            tee: 29,
            'yʉʉ': 30,
            '́ã ': 31,
            'ra ': 32,
            'mʉ́': 33,
            'ʉ́ã': 34,
            ira: 35,
            'ãrẽ': 36,
            ' ba': 37,
            rig: 38,
            'cõã': 39,
            'ri ': 40,
            ' te': 41,
            iro: 42,
            ', j': 43,
            'ʉre': 44,
            uti: 45,
            '̃́ã': 46,
            'ʉʉ ': 47,
            'a, ': 48,
            'gʉ̃': 49,
            jes: 50,
            ' yʉ': 51,
            ena: 52,
            'na ': 53,
            men: 54,
            'ʉ̃r': 55,
            yig: 56,
            ' pa': 57,
            'wáa': 58,
            'ãma': 59,
            dut: 60,
            aso: 61,
            ' wá': 62,
            ' je': 219,
            gue: 64,
            are: 65,
            bas: 66,
            ' cõ': 67,
            'ĩña': 68,
            'õãm': 69,
            '̃rẽ': 70,
            eti: 71,
            ' we': 72,
            'ĩĩw': 73,
            soc: 74,
            'o t': 75,
            'ʉ. ': 76,
            ' ĩñ': 77,
            'opʉ': 78,
            ', c': 79,
            'ñar': 80,
            'rã ': 81,
            ati: 82,
            ede: 83,
            acu: 84,
            wed: 85,
            ere: 86,
            yir: 87,
            mas: 88,
            iip: 89,
            'esú': 90,
            'sús': 91,
            '. c': 92,
            'gʉ́': 93,
            dac: 94,
            ' du': 95,
            'rõ ': 96,
            'ã. ': 97,
            'ʉ n': 98,
            'ús ': 99,
            '. t': 100,
            'gʉ.': 101,
            'ʉ́ ': 102,
            qui: 103,
            'i, ': 104,
            pet: 105,
            'gʉ ': 106,
            'asĩ': 107,
            ' ña': 108,
            iri: 109,
            ' wã': 110,
            '” j': 111,
            ' at': 112,
            ' di': 113,
            'e t': 114,
            'iiã': 115,
            uer: 116,
            'iró': 117,
            ' ʉ̃': 118,
            igu: 119,
            'rã́': 120,
            ':—‍': 121,
            'wĩ.': 122,
            ' sĩ': 123,
            '́ãr': 124,
            ' wa': 125,
            'mʉʉ': 126,
            'ĩwĩ': 127,
            'ãñu': 128,
            eri: 129,
            'ñañ': 130,
            'aña': 131,
            'cãr': 132,
            'e n': 133,
            'iré': 134,
            'i. ': 135,
            ' pʉ': 136,
            rir: 137,
            'acã': 138,
            pac: 139,
            ' sã': 140,
            too: 141,
            'a w': 142,
            ' ne': 143,
            apa: 144,
            'ʉʉr': 145,
            bir: 146,
            'e w': 147,
            ' ãñ': 148,
            'pʉt': 149,
            'ʉ̃s': 150,
            ' tʉ': 151,
            eco: 152,
            'ére': 153,
            'ocá': 154,
            ipe: 155,
            dar: 156,
            ape: 157,
            ama: 158,
            dia: 159,
            pad: 160,
            'ã, ': 161,
            'ĩ. ': 162,
            aqu: 163,
            'eré': 164,
            ire: 165,
            'ñur': 166,
            'ã́ ': 167,
            'tʉo': 168,
            'ĩyi': 169,
            '̃sã': 170,
            'a n': 171,
            'ĩĩy': 172,
            ade: 173,
            ' bu': 174,
            iig: 175,
            net: 176,
            tic: 177,
            'ri,': 178,
            cua: 179,
            jea: 180,
            'ĩĩr': 181,
            'ãda': 182,
            'agʉ': 183,
            'etõ': 184,
            'ẽrã': 185,
            ico: 186,
            iiw: 187,
            'apʉ': 188,
            'o b': 189,
            rec: 190,
            'cu.': 191,
            wap: 192,
            'o n': 193,
            'aré': 194,
            ada: 195,
            ate: 196,
            bue: 197,
            'ãrã': 198,
            ayi: 199,
            ' si': 200,
            'wʉ̃': 201,
            'rér': 202,
            'e c': 203,
            'a m': 204,
            'u. ': 205,
            '̃ b': 206,
            'oo ': 207,
            ' c': 208,
            'irá': 209,
            'á, ': 210,
            ' t': 211,
            'sĩc': 212,
            'ra.': 213,
            ', t': 214,
            ese: 215,
            'ui.': 216,
            'pʉ́': 217,
            'o s': 218,
            'ya.': 220,
            'áre': 221,
            'õpʉ': 222,
            'irí': 223,
            ', m': 224,
            'a c': 225,
            'o j': 226,
            ' bo': 227,
            'arã': 228,
            'wãc': 229,
            ' pe': 230,
            '. m': 231,
            'o, ': 232,
            'quẽ': 233,
            'a d': 234,
            '́, ': 235,
            ara: 236,
            'ãri': 237,
            'ʉ w': 238,
            dit: 239,
            'e m': 240,
            ' bʉ': 241,
            'rób': 242,
            'óbi': 243,
            'ãcũ': 244,
            ' qu': 245,
            'e b': 246,
            'é t': 247,
            ori: 248,
            'pʉ̃': 249,
            'ĩcʉ': 251,
            'uré': 252,
            'ã t': 253,
            'cʉt': 254,
            cor: 255,
            'rá,': 256,
            'a t': 257,
            'egʉ': 258,
            'ãme': 259,
            ' wi': 260,
            'ã c': 261,
            'rĩ ': 262,
            'pe ': 263,
            'pʉr': 264,
            'ãña': 265,
            ter: 266,
            'ʉ̃m': 267,
            'sãĩ': 268,
            ' ãp': 269,
            'íro': 270,
            'rá ': 271,
            ' j': 272,
            'ʉ, ': 273,
            rar: 274,
            'mʉã': 275,
            'ya ': 276,
            'ʉto': 277,
            que: 278,
            'ʉ t': 279,
            'ʉ c': 280,
            wii: 281,
            car: 282,
            'ĩri': 283,
            ' õp': 284,
            'sã ': 285,
            eor: 286,
            'óar': 287,
            aca: 288,
            'ogʉ': 289,
            'jõã': 290,
            'o w': 291,
            'i s': 292,
            per: 293,
            esu: 294,
            des: 295,
            'áar': 296,
            'ta ': 297,
            'sĩã': 298,
            'gʉd': 299
        }
    };
    exports.default = tue;
});
//# sourceMappingURL=tue.js.map