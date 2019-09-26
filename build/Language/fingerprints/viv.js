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
    const viv = {
        id: 'viv',
        name: 'Iduna',
        trigrams: { 'na ': 0,
            ana: 1,
            ina: 2,
            ' gi': 3,
            'a a': 4,
            ' hi': 5,
            ' ya': 6,
            aga: 7,
            ' ka': 8,
            'a g': 9,
            ada: 10,
            iya: 11,
            'ya ': 12,
            'di ': 13,
            'da ': 14,
            adi: 15,
            ine: 16,
            uwa: 17,
            'a\'i': 18,
            eya: 19,
            'a y': 20,
            'a k': 21,
            'ne ': 22,
            gai: 23,
            ' ag': 24,
            ain: 25,
            ali: 26,
            nuw: 27,
            ami: 28,
            ena: 29,
            'a. ': 30,
            'a t': 31,
            ' tu': 32,
            wan: 33,
            'ma ': 34,
            ' ga': 35,
            ' to': 36,
            ala: 37,
            'a b': 38,
            bad: 39,
            ' an': 40,
            ' wa': 41,
            yan: 42,
            'a h': 43,
            ave: 44,
            ' fa': 45,
            ' ke': 46,
            ' ad': 47,
            'mi ': 48,
            iga: 49,
            'va ': 50,
            hin: 51,
            idi: 52,
            ' ba': 53,
            gin: 54,
            gan: 55,
            ita: 56,
            'a m': 57,
            'na.': 58,
            'a, ': 59,
            'a\'a': 60,
            'tu ': 61,
            ahe: 62,
            'be ': 63,
            yau: 64,
            ' be': 65,
            ata: 66,
            ama: 67,
            'e g': 68,
            'fa\'': 69,
            eke: 70,
            iva: 71,
            ' ma': 72,
            kek: 73,
            kal: 74,
            anu: 75,
            uba: 76,
            ive: 77,
            '\'in': 78,
            aub: 79,
            una: 80,
            gah: 81,
            'ke ': 82,
            ona: 83,
            liv: 84,
            awa: 85,
            adu: 86,
            ' au': 87,
            'ta ': 88,
            'i a': 89,
            miy: 90,
            'au ': 91,
            vai: 92,
            kad: 93,
            'a f': 94,
            ava: 95,
            yam: 96,
            'wa ': 97,
            'e h': 98,
            ' me': 99,
            'la ': 100,
            'du ': 101,
            ' ve': 102,
            ede: 103,
            ida: 104,
            'ga ': 105,
            yao: 106,
            diy: 107,
            aka: 108,
            hid: 109,
            'o, ': 110,
            gig: 111,
            'a v': 112,
            man: 113,
            ' am': 114,
            aha: 115,
            '. a': 116,
            'i. ': 117,
            'na,': 118,
            'ku ': 119,
            ban: 120,
            'e a': 121,
            ahi: 122,
            ayo: 123,
            'i g': 124,
            'ao ': 125,
            tov: 126,
            ' ye': 127,
            imi: 128,
            've\'': 129,
            aiw: 130,
            lin: 131,
            gay: 132,
            ' nu': 133,
            'u y': 134,
            'u g': 135,
            aid: 136,
            ide: 137,
            'i k': 138,
            edi: 139,
            'a w': 140,
            abu: 141,
            ' ta': 142,
            veh: 143,
            ane: 144,
            alu: 145,
            'e\'a': 146,
            ewa: 147,
            haw: 148,
            ', a': 149,
            min: 150,
            'yo,': 151,
            'a\'e': 152,
            fai: 153,
            aba: 154,
            yad: 155,
            'u a': 156,
            him: 157,
            gav: 158,
            oya: 159,
            iwa: 160,
            'u k': 161,
            yes: 162,
            'i t': 163,
            esu: 164,
            'ya\'': 165,
            'su ': 166,
            'i y': 167,
            'o a': 168,
            ema: 169,
            oyo: 170,
            dem: 171,
            moy: 172,
            nav: 173,
            hig: 174,
            ega: 175,
            mey: 176,
            afa: 177,
            oga: 178,
            ime: 179,
            uli: 180,
            'a n': 181,
            kah: 182,
            ' mo': 183,
            '\'ai': 184,
            'e k': 185,
            vel: 186,
            lak: 187,
            ait: 188,
            nan: 189,
            '\'it': 190,
            aku: 191,
            vet: 192,
            'mo\'': 193,
            ela: 194,
            '-ma': 195,
            'i b': 196,
            nen: 197,
            wad: 198,
            eni: 199,
            emi: 200,
            ise: 201,
            'na\'': 202,
            'e y': 203,
            'he ': 204,
            uma: 205,
            '. k': 206,
            nag: 207,
            ele: 208,
            med: 209,
            iye: 210,
            agi: 211,
            wal: 212,
            eli: 213,
            gid: 214,
            'i h': 215,
            '\'al': 216,
            koy: 217,
            '. t': 218,
            'yo ': 219,
            ', “': 220,
            'ka\'': 221,
            '\'i ': 222,
            omi: 223,
            ehi: 224,
            aim: 225,
            ' yo': 226,
            'ni ': 227,
            atu: 228,
            'o\'o': 229,
            'a i': 230,
            vey: 231,
            aya: 232,
            ' sa': 233,
            ' va': 234,
            'i, ': 235,
            hag: 236,
            'ai-': 237,
            hal: 238,
            ika: 239,
            kai: 240,
            uye: 241,
            ova: 242,
            ', k': 243,
            'wa\'': 244,
            ven: 245,
            ove: 246,
            kwa: 247,
            giv: 248,
            nad: 249,
            'a l': 250,
            'u b': 251,
            olo: 252,
            'a s': 253,
            etu: 254,
            'e w': 255,
            ani: 256,
            uya: 257,
            'mo ': 258,
            luv: 259,
            abi: 260,
            ded: 261,
            'a-m': 262,
            ' ha': 263,
            heg: 264,
            'o k': 265,
            ase: 266,
            amo: 267,
            ilu: 268,
            avi: 269,
            'o\'e': 270,
            wah: 271,
            ' iy': 272,
            '.” ': 273,
            '\'ey': 274,
            ' bu': 275,
            '-yo': 276,
            'u h': 277,
            'u t': 278,
            aun: 279,
            gil: 280,
            buy: 281,
            ' ai': 282,
            hiy: 283,
            ' la': 284,
            ale: 285,
            'i m': 286,
            wav: 287,
            uve: 288,
            'e t': 289,
            wab: 290,
            mat: 291,
            '-mo': 292,
            ' om': 293,
            iha: 294,
            '\'en': 295,
            'sa\'': 296,
            'bu ': 297,
            yem: 298,
            mag: 299,
            tan: 300
        }
    };
    exports.default = viv;
});
//# sourceMappingURL=viv.js.map