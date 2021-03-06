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
    const az = {
        id: 'az',
        name: 'Azerbaijani, Simali',
        trigrams: { lar: 0,
            'lәr': 1,
            ' on': 2,
            'an ': 3,
            ' bi': 4,
            'әn ': 5,
            'dә ': 6,
            ' mә': 7,
            ' vә': 8,
            ' ol': 9,
            nla: 10,
            'ın ': 11,
            'da ': 12,
            'in ': 13,
            'vә ': 14,
            'әri': 15,
            'arı': 16,
            'әr ': 17,
            ' gö': 18,
            ' qa': 19,
            'nә ': 20,
            ' de': 21,
            ' ki': 22,
            ' ya': 23,
            bir: 24,
            'dәn': 25,
            'ilә': 26,
            'anı': 27,
            ' bu': 28,
            'lә ': 29,
            ini: 30,
            dan: 31,
            'r. ': 32,
            'na ': 33,
            edi: 34,
            ' i̇': 35,
            nda: 36,
            'ndә': 37,
            ara: 38,
            ' ba': 39,
            rin: 40,
            ' al': 41,
            'çün': 42,
            'ar ': 43,
            'ә b': 44,
            'ını': 45,
            'i̇s': 46,
            'ün ': 47,
            ' hә': 48,
            'ir ': 49,
            ' da': 50,
            'mәn': 51,
            ' \"': 52,
            'әsi': 53,
            ' ed': 54,
            '̇sa': 55,
            'ә d': 56,
            lla: 57,
            'ni ': 58,
            lan: 59,
            dir: 60,
            ' dә': 61,
            ' et': 62,
            'i, ': 63,
            siz: 64,
            onl: 65,
            ada: 66,
            'n b': 67,
            ' si': 68,
            'nın': 69,
            lah: 70,
            'әni': 71,
            all: 72,
            '. b': 73,
            'rın': 74,
            sin: 75,
            ' ye': 76,
            'gör': 77,
            ola: 78,
            'ki ': 79,
            'ra ': 80,
            ' gә': 81,
            'iz ': 82,
            ': \\': 83,
            onu: 84,
            ' sa': 85,
            'a g': 86,
            ' sә': 87,
            'n a': 88,
            'a b': 89,
            '. o': 90,
            'sa ': 91,
            'i. ': 92,
            'di.': 93,
            'ri ': 94,
            'un ': 95,
            'rә ': 96,
            'sın': 97,
            'a d': 98,
            nun: 99,
            'n s': 100,
            'bu ': 101,
            'ә o': 102,
            'әrә': 103,
            'im ': 104,
            dey: 105,
            'sәn': 106,
            rdi: 107,
            'әk ': 108,
            'әli': 109,
            'nı ': 110,
            ' tә': 111,
            'ki,': 112,
            ind: 113,
            'nu ': 114,
            eyi: 115,
            'ә g': 116,
            imi: 117,
            aya: 118,
            ded: 119,
            ' üç': 120,
            'inә': 121,
            niz: 122,
            kim: 123,
            iri: 124,
            ver: 125,
            yan: 126,
            ' ve': 127,
            'adı': 128,
            'n d': 129,
            tdi: 130,
            'gәl': 131,
            'ә y': 132,
            ' ha': 133,
            'i: ': 134,
            'di:': 135,
            san: 136,
            'aq ': 137,
            unu: 138,
            'a o': 139,
            'üçü': 140,
            'әyә': 141,
            'әyi': 142,
            'әlә': 143,
            'әt ': 144,
            'r, ': 145,
            ' va': 146,
            ard: 147,
            iyi: 148,
            'ına': 149,
            'әcә': 150,
            'ınd': 151,
            'baş': 152,
            ' ad': 153,
            'ә s': 154,
            ' nә': 155,
            dil: 156,
            '\".': 157,
            'ası': 158,
            '". ': 159,
            ' öz': 160,
            nki: 161,
            anl: 162,
            ird: 163,
            'ә, ': 164,
            ' bә': 165,
            'ә q': 166,
            'nız': 167,
            bun: 168,
            'örә': 169,
            ' mü': 170,
            'n y': 171,
            'әti': 172,
            ' çü': 173,
            'mәs': 174,
            'edә': 175,
            izi: 176,
            diy: 177,
            'yә ': 178,
            'ya ': 179,
            'n i': 180,
            'ma ': 181,
            'ünk': 182,
            ' gü': 183,
            'elә': 184,
            'di ': 185,
            ala: 186,
            'rı ': 187,
            man: 188,
            'n. ': 189,
            ' is': 190,
            'dır': 191,
            etd: 192,
            'hәr': 193,
            bil: 194,
            yin: 195,
            'әdi': 196,
            'zә ': 197,
            'dәr': 198,
            'n q': 199,
            'ib ': 200,
            'ә i': 201,
            'amı': 202,
            'ağı': 203,
            'ahı': 204,
            'n o': 205,
            ' be': 206,
            'la ': 207,
            'ıla': 208,
            'gün': 209,
            'izә': 210,
            rda: 211,
            '. a': 212,
            qal: 213,
            'әdә': 214,
            'n h': 215,
            'ayı': 216,
            ' ar': 217,
            ' o ': 218,
            ' so': 219,
            ona: 220,
            '. i': 221,
            ' il': 222,
            ', b': 223,
            'a i': 224,
            'i b': 225,
            and: 226,
            'mәy': 227,
            'ә a': 228,
            'әnd': 229,
            ', a': 230,
            nin: 231,
            'ә m': 232,
            ' pa': 233,
            etm: 234,
            'irә': 235,
            lma: 236,
            bel: 237,
            'sә ': 238,
            'ı. ': 239,
            'dı.': 240,
            'rlә': 241,
            ' qo': 242,
            'n v': 243,
            'lәn': 244,
            'nlә': 245,
            ' ge': 246,
            yir: 247,
            aca: 248,
            '\" ': 249,
            yer: 250,
            'i i': 251,
            'stә': 252,
            lik: 253,
            ' am': 254,
            ' şә': 255,
            'n m': 256,
            qar: 257,
            ' rә': 258,
            'mi ': 259,
            'mәk': 260,
            var: 261,
            'n k': 262,
            'r v': 263,
            biz: 264,
            'n, ': 265,
            amm: 266,
            ama: 267,
            'a m': 268,
            mma: 269,
            'tmә': 270,
            'i o': 271,
            dam: 272,
            ahi: 273,
            'hın': 274,
            'ığı': 275,
            'әbb': 276,
            'әnә': 277,
            'ağa': 278,
            'ıb ': 279,
            ' sö': 280,
            ' ta': 281,
            'klә': 282,
            'yi ': 283,
            ' in': 284,
            'a, ': 285,
            ' qu': 286,
            'rdı': 287,
            idi: 288,
            'әtl': 289,
            olu: 290,
            ', o': 291,
            'özü': 292,
            'әmi': 293,
            ', s': 294,
            caq: 295,
            'cәk': 296,
            'am ': 297,
            'isә': 298,
            'a q': 299,
            ' dü': 300
        }
    };
    exports.default = az;
});
//# sourceMappingURL=az.js.map