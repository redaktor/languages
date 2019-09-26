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
    const bsn = {
        id: 'bsn',
        name: 'Eduria-Barasana',
        trigrams: { 're ': 0,
            ' ĩ': 1,
            ' yi': 2,
            aji: 3,
            '̃na': 4,
            'u̶a': 5,
            ' ba': 6,
            baj: 7,
            'u̶ ': 8,
            ' ña': 9,
            'ro ': 10,
            are: 11,
            ' ma': 12,
            iro: 13,
            ari: 14,
            jir: 15,
            'ĩn': 16,
            mas: 17,
            'mu̶': 18,
            'to ': 19,
            'o b': 20,
            'yu̶': 21,
            ' yu': 22,
            'ẽn': 23,
            aja: 24,
            'ju̶': 25,
            'cu̶': 26,
            'ĩ ': 27,
            'cõa': 28,
            que: 29,
            ' mu': 30,
            'i, ': 31,
            ' to': 32,
            oti: 33,
            '. t': 34,
            'e y': 35,
            'uẽ': 36,
            'arã': 37,
            'ri,': 38,
            'ũ̶': 39,
            ama: 40,
            'a. ': 41,
            tir: 42,
            'e, ': 43,
            aro: 44,
            asi: 45,
            'ja ': 46,
            'rã ': 47,
            'ĩa': 48,
            'na ': 49,
            'õar': 50,
            jar: 51,
            ire: 52,
            nar: 53,
            'e i': 54,
            'u̶r': 55,
            ' qu': 56,
            'rũ': 57,
            'a y': 58,
            'u̶o': 59,
            '̶ar': 60,
            dio: 61,
            'a m': 62,
            iru: 63,
            yir: 64,
            'ru̶': 65,
            'a, ': 66,
            'se ': 67,
            man: 68,
            ' di': 69,
            'gũ': 70,
            'gu̶': 71,
            'ne ': 72,
            '̶re': 73,
            roj: 74,
            ima: 75,
            'u̶j': 76,
            ore: 77,
            'o y': 78,
            ' je': 79,
            ios: 80,
            got: 81,
            ere: 82,
            'o i': 83,
            'e m': 84,
            ani: 85,
            '̶a ': 86,
            'icõ': 87,
            'e b': 88,
            'tu̶': 89,
            'ñar': 90,
            rot: 91,
            'ne,': 92,
            iri: 93,
            '̃re': 94,
            ', i': 95,
            ojo: 96,
            uju: 97,
            'ĩr': 98,
            'ti ': 99,
            ' go': 100,
            ' aj': 101,
            jes: 102,
            '̃ne': 103,
            igu: 104,
            ose: 105,
            aca: 106,
            ' ro': 107,
            ' tu': 108,
            ', “': 109,
            aru: 110,
            '̶cu': 111,
            ise: 112,
            ' ti': 113,
            'irã': 114,
            ser: 115,
            ', y': 116,
            'e a': 117,
            'esú': 118,
            yuj: 119,
            'ñaj': 120,
            'ma,': 121,
            asa: 122,
            'mi ': 123,
            'os ': 124,
            ' ad': 125,
            ' va': 126,
            'o m': 127,
            yig: 128,
            'bu̶': 129,
            jos: 130,
            ami: 131,
            ' cu': 132,
            boa: 133,
            '̶. ': 134,
            yic: 135,
            ', m': 136,
            cam: 137,
            aju: 138,
            'i. ': 139,
            'ju ': 140,
            ija: 141,
            'u̶.': 142,
            'acõ': 143,
            '̶ ñ': 144,
            eti: 145,
            uja: 146,
            ' ri': 147,
            '”, ': 148,
            'u̶c': 149,
            'a i': 150,
            ado: 151,
            'a ñ': 152,
            'u̶t': 153,
            sir: 154,
            're,': 155,
            bet: 156,
            eja: 157,
            '̶ y': 158,
            ica: 159,
            'do ': 160,
            '̶, ': 161,
            ria: 162,
            'ri ': 163,
            'ca ': 164,
            '̃gu': 165,
            'e g': 166,
            jam: 167,
            'ñuj': 168,
            oja: 169,
            '̃ y': 170,
            'e r': 171,
            oca: 172,
            'oĩ': 173,
            '̶oi': 174,
            'e c': 175,
            'ni ': 176,
            agu: 177,
            '̶ja': 178,
            iyu: 179,
            'u̶,': 180,
            'ma ': 181,
            'rãc': 182,
            'sús': 183,
            '̶ju': 184,
            asu: 185,
            ' bu': 186,
            ato: 187,
            '̶mi': 188,
            's i': 189,
            '” y': 190,
            one: 191,
            ron: 192,
            'sa ': 193,
            'e q': 194,
            iar: 195,
            ior: 196,
            'ã ñ': 197,
            'ãca': 198,
            tim: 199,
            'rẽ': 200,
            ibe: 201,
            mac: 202,
            abo: 203,
            'su̶': 204,
            ase: 205,
            oar: 206,
            'e ñ': 207,
            ' ya': 208,
            'i m': 209,
            ana: 210,
            caj: 211,
            '̶̃m': 212,
            'me ': 213,
            iti: 214,
            ati: 215,
            'e t': 216,
            'u̶m': 217,
            '̶̃n': 218,
            oju: 219,
            ', t': 220,
            ' u̶': 221,
            'ãja': 222,
            abe: 223,
            ' ej': 224,
            jac: 225,
            'ũg': 226,
            sar: 227,
            'ãre': 228,
            '̃ni': 229,
            'rãr': 230,
            ', a': 231,
            'ãma': 232,
            car: 233,
            'rãm': 234,
            ' si': 235,
            yis: 236,
            ' rã': 237,
            jit: 238,
            itu: 239,
            ' ju': 240,
            '̶or': 241,
            '̶ti': 242,
            ' ru': 243,
            ror: 244,
            'nu̶': 245,
            dir: 246,
            ine: 247,
            'ã i': 248,
            '̶nu': 249,
            'e s': 250,
            ' bo': 251,
            'i ñ': 252,
            '̶a.': 253,
            ', j': 254,
            tic: 255,
            oro: 256,
            ' gã': 257,
            acu: 258,
            'na.': 259,
            ris: 260,
            ori: 261,
            ', d': 262,
            'erã': 263,
            'o, ': 264,
            's. ': 265,
            ibo: 266,
            rin: 267,
            nir: 268,
            'ja.': 269,
            iaj: 270,
            jer: 271,
            '̃ar': 272,
            'a r': 273,
            ' cõ': 274,
            ' oc': 275,
            'mi.': 276,
            sto: 277,
            '̶ m': 278,
            '. i': 279,
            'ã, ': 280,
            'rã,': 281,
            boj: 282,
            ist: 283,
            'ñam': 284,
            cri: 285,
            ': —': 286,
            osa: 287,
            cat: 288,
            udi: 289,
            'gãj': 290,
            'i j': 291,
            ', r': 292,
            'ãme': 293,
            bos: 294,
            'ma.': 295,
            yim: 296,
            yiy: 297,
            ' me': 298,
            jic: 299,
            aam: 300
        }
    };
    exports.default = bsn;
});
//# sourceMappingURL=bsn.js.map