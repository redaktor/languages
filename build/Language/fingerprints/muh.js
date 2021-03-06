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
    const muh = {
        id: 'muh',
        name: 'Mundu',
        trigrams: { ' ng': 0,
            'gü ': 1,
            ' te': 2,
            'wü ': 3,
            ' wü': 4,
            'ka ': 5,
            ' de': 6,
            'ngü': 7,
            ' kp': 8,
            'a, ': 9,
            'te ': 10,
            'bü ': 11,
            ' fü': 12,
            kpa: 13,
            'gbü': 14,
            'ü k': 15,
            ' ka': 16,
            'fü ': 17,
            ' me': 18,
            ara: 19,
            ' la': 20,
            'la ': 21,
            ' ba': 22,
            'de ': 23,
            'ra ': 24,
            'a n': 25,
            'a a': 26,
            'ü e': 27,
            'e, ': 28,
            ' en': 29,
            'ah ': 30,
            ' ye': 31,
            ere: 32,
            ala: 33,
            'yi ': 34,
            ngb: 35,
            ' an': 36,
            ', a': 37,
            're ': 38,
            par: 39,
            'e n': 40,
            'a k': 41,
            ang: 42,
            mer: 43,
            'la,': 44,
            ' yi': 45,
            ' ma': 46,
            ', t': 47,
            'a e': 48,
            nga: 49,
            'ü n': 50,
            'e m': 51,
            'ma ': 52,
            ' ne': 53,
            'a m': 54,
            'a t': 55,
            'e e': 56,
            'e. ': 57,
            'ewü': 58,
            'ü b': 59,
            'a w': 60,
            ' gb': 61,
            'na ': 62,
            'e w': 63,
            'ü m': 64,
            'ka-': 65,
            ' ew': 66,
            'ü a': 67,
            ' ah': 68,
            'di ': 69,
            eka: 70,
            'ga ': 71,
            'e k': 72,
            ' gü': 73,
            'ü l': 74,
            'ü d': 75,
            'e t': 76,
            ' mü': 77,
            'ye ': 78,
            'me ': 79,
            esu: 80,
            yes: 81,
            aka: 82,
            tek: 83,
            eng: 84,
            ' di': 85,
            ena: 86,
            'ü t': 87,
            'ü, ': 88,
            'a y': 89,
            'e d': 90,
            'le ': 91,
            ', g': 92,
            ' am': 93,
            'a d': 94,
            'üh ': 95,
            ' ni': 96,
            'su ': 97,
            'ba,': 98,
            'i e': 99,
            'ü y': 100,
            'ü w': 101,
            'ba ': 102,
            'e a': 103,
            'mü ': 104,
            mal: 105,
            'i, ': 106,
            ' ta': 107,
            'to ': 108,
            'a. ': 109,
            ' ak': 110,
            'a f': 111,
            'ne,': 112,
            '. a': 113,
            'ia ': 114,
            '. f': 115,
            ', d': 116,
            uru: 117,
            ' ʼb': 118,
            'ni ': 119,
            'ta ': 120,
            ngu: 121,
            '-ye': 122,
            'e y': 123,
            'i n': 124,
            'ne ': 125,
            bal: 126,
            'wüh': 127,
            'da ': 128,
            pah: 129,
            'a l': 130,
            ' ey': 131,
            gar: 132,
            ' em': 133,
            ' le': 134,
            ' ga': 135,
            eyi: 136,
            ', f': 137,
            'ü g': 138,
            ' nd': 139,
            nda: 140,
            'u a': 141,
            nih: 142,
            'ürü': 143,
            'ü f': 144,
            oro: 145,
            'ro ': 146,
            'a-y': 147,
            'gu ': 148,
            'rü ': 149,
            sit: 150,
            ' ad': 151,
            'ʼbu': 152,
            bur: 153,
            ' ko': 154,
            'du ': 155,
            'rï ': 156,
            ayi: 157,
            'e b': 158,
            iti: 159,
            'i m': 160,
            eke: 161,
            ' \"': 162,
            'de.': 163,
            ' ag': 164,
            ' ay': 165,
            ama: 166,
            '. t': 167,
            'ri ': 168,
            ', m': 169,
            iri: 170,
            '\" ': 171,
            ', \\': 172,
            'ti ': 173,
            'e l': 174,
            'a g': 175,
            'u, ': 176,
            amb: 177,
            ' si': 178,
            'ke ': 179,
            yia: 180,
            'ih ': 181,
            'i k': 182,
            kor: 183,
            mba: 184,
            ' da': 185,
            'u n': 186,
            'h d': 187,
            'i d': 188,
            ' tï': 189,
            'ü. ': 190,
            'ra,': 191,
            'u k': 192,
            bak: 193,
            'nü ': 194,
            'ïrï': 195,
            adu: 196,
            'üka': 197,
            ' wa': 198,
            'e f': 199,
            'anü': 200,
            ete: 201,
            'a s': 202,
            'ru ': 203,
            'tï ': 204,
            'yi,': 205,
            ', w': 206,
            ' ra': 207,
            'e g': 208,
            ' e ': 209,
            ', n': 210,
            'wu ': 211,
            agu: 212,
            ' bi': 213,
            'h b': 214,
            ele: 215,
            mag: 216,
            agb: 217,
            ene: 218,
            'ü s': 219,
            ' at': 220,
            'i. ': 221,
            ' sü': 222,
            uma: 223,
            ' fa': 224,
            'zük': 225,
            '-wü': 226,
            'zi ': 227,
            ani: 228,
            gum: 229,
            'wa ': 230,
            ' ku': 231,
            'la.': 232,
            'i w': 233,
            ema: 234,
            ' zü': 235,
            'kpï': 236,
            'i b': 237,
            'da-': 238,
            'a b': 239,
            'e-y': 240,
            'h k': 241,
            ' fï': 242,
            eme: 243,
            'wü,': 244,
            ' es': 245,
            ' ti': 246,
            tim: 247,
            ' mb': 248,
            'i f': 249,
            'h l': 250,
            ' fe': 251,
            'bi ': 252,
            waz: 253,
            jia: 254,
            ' ji': 255,
            ' to': 256,
            kpi: 257,
            ima: 258,
            'i a': 259,
            azi: 260,
            'h e': 261,
            'pa ': 262,
            'ye,': 263,
            '.\"': 264,
            'ne.': 265,
            '. w': 266,
            kpe: 267,
            'h a': 268,
            'üwa': 269,
            'o k': 270,
            'ï k': 271,
            'i l': 272,
            'te-': 273,
            'i t': 274,
            ' wu': 275,
            'fï ': 276,
            'za ': 277,
            ' nz': 278,
            ' mi': 279,
            ako: 280,
            'je ': 281,
            ', y': 282,
            'a-n': 283,
            'e s': 284,
            'h n': 285,
            'me,': 286,
            mir: 287,
            ' ar': 288,
            'a-w': 289,
            rek: 290,
            adi: 291,
            'u. ': 292,
            'mür': 293,
            ' kü': 294,
            'h t': 295,
            'fa ': 296,
            ' na': 297,
            kur: 298,
            pek: 299,
            ato: 300
        }
    };
    exports.default = muh;
});
//# sourceMappingURL=muh.js.map