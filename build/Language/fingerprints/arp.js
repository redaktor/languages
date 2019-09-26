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
    const arp = {
        id: 'arp',
        name: 'Arapaho',
        trigrams: { nau: 0,
            ' ha': 138,
            'au ': 2,
            hau: 3,
            'u h': 4,
            aun: 5,
            ' na': 49,
            ' he': 7,
            dau: 8,
            ena: 9,
            ana: 10,
            ane: 11,
            'e h': 12,
            una: 13,
            ene: 14,
            nan: 15,
            tha: 16,
            eda: 17,
            aua: 18,
            auw: 19,
            eth: 20,
            uau: 21,
            aud: 22,
            'ee ': 23,
            the: 24,
            uth: 25,
            nen: 26,
            had: 27,
            hen: 28,
            uwu: 29,
            hae: 30,
            une: 31,
            han: 32,
            ', n': 33,
            nee: 34,
            aut: 35,
            auh: 36,
            'de ': 37,
            'e, ': 38,
            wau: 39,
            ', h': 40,
            ude: 41,
            '. ': 42,
            'u n': 43,
            hee: 44,
            uha: 45,
            'u, ': 46,
            ' n': 47,
            eau: 48,
            ath: 50,
            ade: 51,
            ede: 52,
            ned: 53,
            'e n': 54,
            ese: 55,
            'a h': 56,
            gau: 57,
            'ne ': 58,
            aug: 59,
            uda: 60,
            hed: 61,
            ' ne': 62,
            uch: 63,
            yau: 64,
            ava: 65,
            eja: 66,
            eha: 67,
            auc: 68,
            cha: 69,
            wun: 70,
            'au,': 71,
            dan: 72,
            'thā': 73,
            het: 74,
            adn: 75,
            nes: 76,
            ada: 77,
            ' va': 78,
            ehe: 79,
            'na ': 80,
            'uu ': 81,
            jau: 82,
            uwa: 83,
            heh: 84,
            uhu: 85,
            ahe: 86,
            aja: 87,
            neh: 88,
            aen: 89,
            'āhe': 90,
            sau: 91,
            'aa ': 92,
            jav: 93,
            naa: 94,
            ' da': 95,
            net: 96,
            'a, ': 97,
            'e. ': 98,
            van: 99,
            nea: 100,
            'de,': 101,
            ugu: 102,
            eve: 103,
            'hāe': 104,
            chu: 105,
            ' h': 106,
            den: 107,
            hej: 108,
            ' ja': 109,
            'naā': 110,
            ase: 111,
            ' hā': 112,
            nad: 113,
            eva: 114,
            dne: 115,
            hat: 116,
            uga: 117,
            eje: 118,
            vah: 119,
            hea: 120,
            'u. ': 121,
            'ee,': 122,
            aya: 123,
            'āna': 124,
            wuu: 125,
            auu: 126,
            esa: 127,
            'u j': 128,
            'āde': 129,
            'ne,': 130,
            haj: 131,
            ded: 132,
            'āen': 133,
            usa: 134,
            ' je': 135,
            jen: 136,
            sen: 137,
            ' wa': 139,
            'u v': 140,
            ith: 141,
            vad: 142,
            'a n': 143,
            'āed': 144,
            asa: 145,
            'au.': 146,
            thu: 147,
            hes: 148,
            uva: 149,
            see: 150,
            hay: 151,
            huh: 152,
            'he ': 153,
            nit: 154,
            dna: 155,
            'aāe': 156,
            nuu: 157,
            ech: 158,
            'āda': 159,
            'u d': 160,
            auv: 161,
            'th ': 162,
            jan: 163,
            ewa: 164,
            sed: 165,
            ave: 166,
            'hāh': 167,
            'e v': 168,
            auj: 169,
            aha: 170,
            ega: 171,
            'e j': 172,
            naj: 173,
            'e d': 174,
            'āth': 175,
            uja: 176,
            aej: 177,
            has: 178,
            aje: 179,
            ' ga': 180,
            ' nu': 181,
            vet: 182,
            aea: 183,
            een: 184,
            'adā': 185,
            'uhā': 186,
            'unā': 187,
            'uu,': 188,
            'un ': 189,
            eni: 190,
            eee: 191,
            'de.': 192,
            'h h': 193,
            ven: 194,
            'a. ': 195,
            vaa: 196,
            '; n': 197,
            'hād': 198,
            huk: 199,
            eya: 200,
            nat: 201,
            det: 202,
            ' ve': 203,
            aus: 204,
            'āne': 205,
            saa: 206,
            'esā': 207,
            auy: 208,
            'na,': 209,
            'n h': 210,
            aev: 211,
            'ee.': 212,
            'anā': 213,
            hah: 214,
            'āej': 215,
            nay: 216,
            hev: 217,
            'āau': 218,
            agu: 219,
            haa: 220,
            jas: 221,
            'auā': 222,
            nev: 223,
            aee: 224,
            jae: 225,
            'aa,': 226,
            nav: 227,
            aed: 228,
            'dāh': 229,
            eed: 230,
            san: 231,
            hus: 232,
            'dād': 233,
            'hāa': 234,
            'wu ': 235,
            uya: 236,
            ': n': 237,
            'e; ': 238,
            hun: 239,
            ': h': 240,
            nae: 241,
            ', ': 242,
            hav: 243,
            'e: ': 244,
            huu: 245,
            jev: 246,
            jea: 247,
            'hān': 248,
            'u w': 249,
            vav: 250,
            'edā': 251,
            'nād': 252,
            dee: 253,
            'gu ': 254,
            jed: 255,
            vas: 256,
            adj: 257,
            vev: 258,
            ' de': 259,
            das: 260,
            use: 261,
            hud: 262,
            hew: 263,
            vee: 264,
            guh: 265,
            ' nā': 266,
            ', d': 267,
            uus: 268,
            vat: 269,
            ', j': 270,
            'hu ': 271,
            'ayā': 272,
            huw: 273,
            'va ': 274,
            'asā': 275,
            '; h': 276,
            '? ': 277,
            ved: 278,
            aeg: 279,
            aey: 280,
            nas: 281,
            ses: 282,
            set: 283,
            'ne.': 284,
            'u; ': 285,
            'u: ': 286,
            'āāe': 287,
            ', v': 288,
            'sān': 289,
            'aāā': 290,
            gud: 291,
            'aa.': 292,
            'he,': 293,
            'nān': 294,
            ' dā': 295,
            'se ': 296,
            'a v': 297,
            'dāe': 298,
            'au;': 299
        }
    };
    exports.default = arp;
});
//# sourceMappingURL=arp.js.map