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
    const bwq = {
        id: 'bwq',
        name: 'Bobo Madare, Southern',
        trigrams: { 'ɔn ': 0,
            ' ma': 1,
            ' ye': 2,
            'ye ': 3,
            ' na': 4,
            'na ': 5,
            'ma ': 6,
            'ɔɔn': 7,
            'ne ': 8,
            ' ɔɔ': 9,
            ' wɔ': 10,
            'a n': 11,
            'a y': 12,
            ' ka': 13,
            'ka ': 14,
            ' ta': 15,
            'a k': 16,
            'a t': 17,
            ' wi': 18,
            'a, ': 19,
            'a w': 20,
            ' da': 21,
            'ta ': 22,
            'wɔn': 23,
            iin: 24,
            wii: 25,
            ' ne': 26,
            'e n': 27,
            'a m': 28,
            ' a ': 29,
            'hɔn': 30,
            'a. ': 31,
            man: 32,
            ' hɔ': 33,
            ' kɔ': 34,
            'in ': 35,
            'e t': 36,
            '\'a ': 37,
            'da ': 38,
            'e m': 39,
            'e y': 40,
            'n n': 41,
            'e k': 42,
            ' ti': 43,
            ane: 44,
            ' yi': 45,
            'ro ': 46,
            're ': 47,
            'kɔ ': 48,
            ' ga': 49,
            ' ɔn': 50,
            'a s': 51,
            'a d': 52,
            'an ': 53,
            'n t': 54,
            'a b': 55,
            ' n\'': 56,
            uro: 57,
            ' mɛ': 58,
            'a ɔ': 59,
            ' ya': 60,
            'ra ': 61,
            'aa ': 62,
            'n y': 63,
            'be ': 64,
            ' wu': 65,
            ' tɛ': 66,
            'n m': 67,
            wur: 68,
            'e w': 69,
            'n d': 70,
            'ɔɔ ': 71,
            'e ɔ': 72,
            ', y': 73,
            'mɛ ': 74,
            ' ba': 75,
            'ga ': 76,
            'ti ': 77,
            ' pe': 78,
            'tɛ ': 79,
            ' fa': 80,
            ' sa': 81,
            'rɛ ': 82,
            'bɛ ': 83,
            yir: 84,
            ' ki': 85,
            'ɛ n': 86,
            aga: 87,
            ara: 88,
            ', w': 89,
            ' be': 90,
            'ɔnn': 91,
            'n k': 92,
            'n\'a': 93,
            'ma,': 94,
            ' si': 95,
            ang: 96,
            'e s': 97,
            bar: 98,
            'a g': 99,
            'e d': 100,
            'ɛrɛ': 101,
            'ga.': 102,
            '. w': 103,
            nga: 104,
            'n w': 105,
            nna: 106,
            ' yɛ': 107,
            ala: 108,
            gan: 109,
            'wɔ ': 110,
            epe: 111,
            'ɔrɔ': 112,
            ' sɔ': 113,
            pep: 114,
            sma: 115,
            'n s': 116,
            yaa: 117,
            'n, ': 118,
            'pe ': 119,
            'e b': 120,
            'a h': 121,
            'fa ': 122,
            ' to': 123,
            '. y': 124,
            ira: 125,
            'zu ': 126,
            'te ': 127,
            ' te': 128,
            iri: 129,
            ' tɔ': 130,
            'we ': 131,
            ' bo': 132,
            'ke ': 133,
            'a f': 134,
            'n f': 135,
            'a p': 136,
            'ɛ w': 137,
            ere: 138,
            'ɛ y': 139,
            'nɛ ': 140,
            ezu: 141,
            yez: 142,
            '\'e ': 143,
            'ma.': 144,
            'ɛ. ': 145,
            kma: 146,
            naa: 147,
            'n ɔ': 148,
            'n\'e': 149,
            nye: 150,
            ' we': 151,
            iny: 152,
            'o t': 153,
            'n. ': 154,
            ' ke': 155,
            ' za': 156,
            'ɛ k': 157,
            'ri ': 158,
            are: 159,
            'ia ': 160,
            'la ': 161,
            'ɔn,': 162,
            'ɔ y': 163,
            'yɛr': 164,
            'nɔ ': 165,
            'a z': 166,
            'ɔ n': 167,
            ' y\'': 168,
            ' sm': 169,
            ', a': 170,
            'anɛ': 171,
            ': «': 172,
            'y\'a': 173,
            ', k': 174,
            ' yɔ': 175,
            ama: 176,
            'ɛ, ': 177,
            '. a': 178,
            'a: ': 179,
            'ga,': 180,
            nka: 181,
            'i n': 182,
            ire: 183,
            ' ni': 184,
            ' nk': 185,
            'o m': 186,
            dia: 187,
            ' kw': 188,
            'ni ': 189,
            'ɛ m': 190,
            '. k': 191,
            'i w': 192,
            'ɔn.': 193,
            san: 194,
            ' di': 195,
            'ɔ w': 196,
            ' fɔ': 197,
            ati: 198,
            'na.': 199,
            'tɔɔ': 200,
            'yi ': 201,
            'ɛn ': 202,
            fan: 203,
            'n b': 204,
            'sɔɔ': 205,
            'rɔ ': 206,
            'ɛre': 207,
            ' nɛ': 208,
            ' bɛ': 209,
            'ɔ m': 210,
            '.» ': 211,
            'i y': 212,
            'ɛ ɔ': 213,
            ' bi': 214,
            'na,': 215,
            'ɔ t': 216,
            yan: 217,
            'ɔ k': 218,
            'a a': 219,
            'ii ': 220,
            aka: 221,
            'ɛ t': 222,
            ' km': 223,
            'i k': 224,
            ' wɛ': 225,
            '. b': 226,
            ' dɔ': 227,
            abe: 228,
            ', m': 229,
            'n g': 230,
            ' nɔ': 231,
            'go ': 232,
            ini: 233,
            'oo ': 234,
            ' do': 235,
            'o n': 236,
            ' sb': 237,
            'sbɛ': 238,
            'o h': 239,
            'un ': 240,
            ian: 241,
            'i m': 242,
            oro: 243,
            'to ': 244,
            tig: 245,
            ' bɔ': 246,
            'e p': 247,
            ' zi': 248,
            'ɔma': 249,
            'fɔr': 250,
            'nɔm': 251,
            ' dɛ': 252,
            'yɔn': 253,
            'e z': 254,
            boo: 255,
            '. n': 256,
            'bo ': 257,
            'ma:': 258,
            'o w': 259,
            'bɛr': 260,
            'ɔnw': 261,
            'e, ': 262,
            'do ': 263,
            kal: 264,
            'ɔ d': 265,
            reb: 266,
            'le ': 267,
            'e h': 268,
            igi: 269,
            imi: 270,
            ogo: 271,
            gun: 272,
            'i t': 273,
            nma: 274,
            'nwɔ': 275,
            uru: 276,
            ana: 277,
            'ɔ s': 278,
            'ɛbɛ': 279,
            '. m': 280,
            mat: 281,
            tog: 282,
            ' gu': 283,
            ber: 284,
            ada: 285,
            'n h': 286,
            'e f': 287,
            wir: 288,
            'kɔn': 289,
            kwa: 290,
            oga: 291,
            gia: 292,
            'wɛ ': 293,
            ' tu': 294,
            'o k': 295,
            ', ɔ': 296,
            rak: 297,
            ' ko': 298,
            ', b': 299,
            'sɔn': 300
        }
    };
    exports.default = bwq;
});
//# sourceMappingURL=bwq.js.map