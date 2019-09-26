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
    const sw = {
        id: 'sw',
        name: 'Swahili',
        trigrams: { 'a k': 0,
            'wa ': 1,
            ' ya': 2,
            'na ': 3,
            ' ku': 4,
            'ya ': 5,
            ' na': 6,
            ' wa': 7,
            'a m': 8,
            ' ha': 9,
            'i y': 10,
            'a h': 11,
            'a n': 12,
            ' ki': 13,
            ana: 14,
            'ki ': 15,
            aki: 16,
            kwa: 17,
            ' kw': 18,
            hak: 19,
            ' ka': 20,
            ' ma': 21,
            'la ': 22,
            'a u': 23,
            'tu ': 24,
            'a w': 25,
            '. k': 26,
            'ha ': 27,
            ila: 28,
            cha: 29,
            ' ch': 30,
            ali: 31,
            'li ': 32,
            'a a': 33,
            'a y': 34,
            ati: 35,
            'za ': 36,
            ifa: 37,
            ili: 38,
            'ni ': 39,
            ' mt': 40,
            kil: 41,
            kat: 42,
            'i k': 43,
            mtu: 44,
            ake: 45,
            ' an': 46,
            ote: 47,
            ika: 48,
            ngu: 49,
            'a s': 50,
            'ka ': 51,
            fun: 52,
            ata: 53,
            ung: 54,
            'gu ': 55,
            'ma ': 56,
            'yo ': 57,
            ama: 58,
            'fa ': 59,
            'u a': 60,
            ifu: 61,
            ina: 62,
            amb: 63,
            'we ': 64,
            'i z': 65,
            'te ': 66,
            azi: 67,
            'u w': 68,
            kut: 69,
            'i n': 70,
            'u c': 71,
            ' yo': 72,
            'ke ': 73,
            ' za': 74,
            kif: 75,
            asi: 76,
            'zi ': 77,
            uhu: 78,
            ara: 79,
            yak: 80,
            'au ': 81,
            mba: 82,
            hur: 83,
            wat: 84,
            ish: 85,
            ' bi': 86,
            ' au': 87,
            tik: 88,
            'o y': 89,
            sha: 90,
            ' hi': 91,
            uru: 92,
            tai: 93,
            ' as': 94,
            aif: 95,
            'a. ': 96,
            'e a': 97,
            'e k': 98,
            'ia ': 99,
            ayo: 100,
            'mu ': 101,
            'i, ': 102,
            hal: 103,
            ' uh': 104,
            'a b': 105,
            'a, ': 106,
            'hi ': 107,
            'u n': 108,
            ', k': 109,
            yot: 110,
            awa: 111,
            mat: 112,
            chi: 113,
            'u k': 114,
            'u y': 115,
            atu: 116,
            uli: 117,
            'ru ': 118,
            shi: 119,
            'ja ': 120,
            ani: 121,
            ngi: 122,
            ' zi': 123,
            ari: 124,
            'i. ': 125,
            eri: 126,
            oja: 127,
            ele: 128,
            ' ta': 129,
            ima: 130,
            ami: 131,
            ada: 132,
            'a t': 133,
            end: 134,
            moj: 135,
            uta: 136,
            any: 137,
            nch: 138,
            ' am': 139,
            ' nc': 140,
            ' sh': 141,
            'e y': 142,
            ham: 143,
            'a j': 144,
            iki: 145,
            wan: 146,
            'i h': 147,
            'ii ': 148,
            eza: 149,
            ' sa': 150,
            ' hu': 151,
            kan: 152,
            uwa: 153,
            'ye ': 154,
            kuw: 155,
            iwa: 156,
            she: 157,
            'sa ': 158,
            'i a': 159,
            fan: 160,
            lim: 161,
            'e, ': 162,
            wak: 163,
            ' la': 164,
            iri: 165,
            iwe: 166,
            nay: 167,
            'e n': 168,
            ' wo': 169,
            'bu ': 170,
            'o h': 171,
            wen: 172,
            ' ja': 173,
            ' ni': 174,
            ahi: 175,
            uto: 176,
            'ti ': 177,
            her: 178,
            'i w': 179,
            kam: 180,
            jam: 181,
            ria: 182,
            bin: 183,
            amu: 184,
            'ra ': 185,
            'e. ': 186,
            adh: 187,
            kaz: 188,
            'ao ': 189,
            dha: 190,
            wot: 191,
            ang: 192,
            ing: 193,
            uni: 194,
            'si ': 195,
            kul: 196,
            bar: 197,
            har: 198,
            zim: 199,
            'ri ': 200,
            ini: 201,
            'uu ': 202,
            nya: 203,
            'da ': 204,
            lin: 205,
            kup: 206,
            'o w': 207,
            bil: 208,
            nad: 209,
            agu: 210,
            sta: 211,
            ', n': 212,
            'a l': 213,
            kuf: 214,
            aji: 215,
            mwe: 216,
            dam: 217,
            kus: 218,
            aka: 219,
            'a 1': 220,
            ind: 221,
            ita: 222,
            maa: 223,
            rik: 224,
            rif: 225,
            '. m': 226,
            'ta ': 227,
            ' ba': 228,
            nye: 229,
            ' nd': 230,
            aar: 231,
            ine: 232,
            gin: 233,
            nde: 234,
            'a z': 235,
            ' ut': 236,
            taa: 237,
            'di ': 238,
            asa: 239,
            ndi: 240,
            iyo: 241,
            'a 2': 242,
            'o k': 243,
            mbo: 244,
            azo: 245,
            imu: 246,
            ibu: 247,
            wez: 248,
            lez: 249,
            nga: 250,
            sil: 251,
            hii: 252,
            'o n': 253,
            ush: 254,
            'zo ': 255,
            esh: 256,
            'bo ': 257,
            uzi: 258,
            uba: 259,
            tah: 260,
            man: 261,
            eng: 262,
            ' ye': 263,
            'e w': 264,
            wam: 265,
            'e b': 266,
            izo: 267,
            ufu: 268,
            'a c': 269,
            kos: 270,
            tak: 271,
            'e m': 272,
            'u, ': 273,
            'i m': 274,
            ' si': 275,
            ala: 276,
            tok: 277,
            dhi: 278,
            aba: 279,
            ' um': 280,
            oka: 281,
            hir: 282,
            aza: 283,
            wal: 284,
            yan: 285,
            saw: 286,
            ais: 287,
            del: 288,
            laz: 289,
            nda: 290,
            'i s': 291,
            kuh: 292,
            pat: 293,
            zwa: 294,
            ndo: 295,
            uku: 296,
            hil: 297,
            liz: 298,
            'a i': 299,
            ', h': 300
        }
    };
    exports.default = sw;
});
//# sourceMappingURL=sw.js.map