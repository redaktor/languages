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
    const chy = {
        id: 'chy',
        name: 'Cheyenne',
        trigrams: { ' ': 118,
            tse: 1,
            ' ts': 109,
            est: 3,
            sto: 4,
            'tsé': 5,
            'se ': 6,
            'êst': 7,
            sts: 8,
            'he ': 9,
            hes: 10,
            'óhe': 11,
            'éhe': 13,
            'e. ': 38,
            'ést': 15,
            'e t': 16,
            'sêh': 18,
            ses: 19,
            '. ': 144,
            sta: 21,
            'se.': 22,
            ots: 23,
            'êhe': 24,
            hev: 25,
            'sês': 26,
            'tsê': 28,
            tan: 29,
            'o\'o': 30,
            'êhé': 31,
            '\'ês': 32,
            naa: 33,
            'aa ': 34,
            'nêh': 35,
            'ho\'': 36,
            ' na': 221,
            'e ': 72,
            'tâh': 40,
            ' he': 41,
            'ma\'': 42,
            'éxh': 43,
            ' és': 44,
            ese: 45,
            'e n': 46,
            ' ne': 47,
            'e h': 48,
            'ôse': 49,
            'to ': 50,
            ' m': 51,
            '\'en': 52,
            eta: 53,
            'o\'e': 54,
            'o. ': 95,
            'to\'': 56,
            'o\'s': 57,
            ist: 58,
            'he.': 59,
            'tóh': 60,
            'to.': 61,
            'no ': 62,
            'héh': 63,
            'esê': 64,
            ish: 65,
            seh: 66,
            '\'e ': 67,
            eve: 68,
            ane: 69,
            'he\'': 70,
            'e é': 71,
            xhe: 73,
            het: 74,
            'stâ': 75,
            'oo\'': 76,
            set: 77,
            'o h': 78,
            eno: 79,
            'vóh': 80,
            'e m': 81,
            ema: 82,
            ' é': 83,
            'emé': 84,
            hts: 85,
            'evó': 86,
            'no\'': 87,
            'óse': 88,
            ' mó': 147,
            his: 90,
            ets: 91,
            'âhe': 92,
            'ne ': 93,
            ohe: 94,
            tot: 96,
            'ts ': 97,
            'e\'e': 98,
            'o\'ê': 99,
            'sé\'': 100,
            'o, ': 101,
            'e, ': 102,
            'sáa': 103,
            'ätä': 104,
            ' h': 241,
            'nês': 106,
            ehe: 107,
            toh: 108,
            'a t': 110,
            tsi: 111,
            ohk: 112,
            hke: 113,
            'vo\'': 114,
            'sés': 115,
            'ése': 116,
            'néh': 117,
            ' nê': 119,
            'o t': 120,
            ', n': 121,
            'móh': 122,
            ' éx': 179,
            'ämä': 124,
            'oh˙': 125,
            ' hé': 126,
            net: 127,
            sen: 128,
            'a\'e': 129,
            '\'se': 130,
            sem: 131,
            ' t': 132,
            'mâh': 133,
            ' ho': 134,
            'a\'é': 135,
            '\'éh': 136,
            'nôh': 137,
            'o n': 138,
            hov: 139,
            'ová': 140,
            'ta\'': 141,
            'ehé': 142,
            'hén': 143,
            ' n': 235,
            'êho': 146,
            eoh: 148,
            'nâh': 149,
            'éše': 150,
            'séh': 151,
            evo: 153,
            '. n': 154,
            'hét': 155,
            'tän': 156,
            ' nä': 157,
            she: 158,
            'täm': 159,
            man: 160,
            hem: 161,
            '\'o.': 162,
            ' ma': 163,
            sis: 164,
            'na\'': 165,
            'é\'t': 166,
            'nó\'': 167,
            'a\'h': 168,
            '\'ôh': 169,
            'ôhk': 170,
            'kêh': 171,
            'mós': 172,
            'o\'é': 173,
            neo: 174,
            'a\'o': 175,
            '\'ov': 176,
            voo: 177,
            'éhn': 178,
            eho: 180,
            'êse': 181,
            hoe: 182,
            'a\'x': 183,
            'še ': 184,
            '\'ha': 185,
            ' há': 186,
            'êše': 187,
            'evä': 188,
            'vät': 189,
            its: 190,
            'äno': 191,
            'mäh': 192,
            ', t': 193,
            oev: 194,
            'stó': 195,
            'enê': 196,
            '\'to': 197,
            'vôs': 198,
            'a m': 199,
            'va ': 200,
            'ne\'': 201,
            'eo\'': 202,
            '\'o ': 203,
            'a\'ê': 204,
            'vá\'': 205,
            'o ': 206,
            'háh': 207,
            'áhk': 208,
            'hkê': 209,
            'o\'h': 210,
            'hát': 211,
            'éha': 212,
            '\'ho': 213,
            'héó': 214,
            'éóh': 215,
            'ha\'': 216,
            ', ': 217,
            'mó\'': 218,
            eot: 219,
            tov: 220,
            'ôht': 222,
            ' né': 223,
            ' éh': 264,
            tam: 225,
            '\'a\'': 226,
            'šem': 227,
            'he,': 228,
            'éno': 229,
            'óne': 230,
            'nä ': 231,
            ' hä': 232,
            ' ha': 233,
            's, ': 234,
            'éoh': 236,
            eha: 237,
            'a\'ë': 238,
            '\'ën': 239,
            'ëno': 240,
            sev: 242,
            'vêh': 243,
            hen: 244,
            ene: 245,
            omo: 246,
            hot: 247,
            'se\'': 248,
            oht: 249,
            hoh: 250,
            hko: 251,
            'ôhe': 252,
            'tám': 253,
            'éne': 254,
            'nát': 255,
            'êhó': 256,
            'ó\'ô': 257,
            'nôs': 258,
            'nét': 259,
            'âhé': 260,
            'hév': 261,
            'éta': 262,
            ano: 263,
            'ané': 265,
            'e\'é': 266,
            'méo': 267,
            'óst': 268,
            'ó\'h': 269,
            'e\'h': 270,
            'etó': 271,
            'e\'ó': 272,
            '\'óh': 273,
            'ho ': 274,
            'âho': 275,
            'êhn': 276,
            'hnê': 277,
            tao: 278,
            '. é': 279,
            'hés': 280,
            'ovó': 281,
            'áho': 282,
            'é\'a': 283,
            'e\'š': 284,
            '\'še': 285,
            heh: 286,
            non: 287,
            'onó': 288,
            '\'hó': 289,
            'nêš': 290,
            '\'éš': 291,
            ham: 292,
            'stá': 293,
            'etä': 294,
            aho: 295,
            'hän': 296,
            'emä': 297,
            'män': 298,
            'h˙t': 299
        }
    };
    exports.default = chy;
});
//# sourceMappingURL=chy.js.map