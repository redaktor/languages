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
    const mcf = {
        id: 'mcf',
        name: 'Matsés',
        trigrams: { qui: 0,
            ' ch': 1,
            'id ': 2,
            mbo: 3,
            ' ic': 4,
            tsi: 5,
            uid: 6,
            ash: 7,
            amb: 8,
            'bo ': 9,
            aid: 10,
            'o i': 11,
            'ëda': 12,
            que: 13,
            'bëd': 14,
            ' bë': 15,
            'ac ': 16,
            ias: 17,
            dam: 18,
            ict: 19,
            sia: 20,
            cts: 21,
            ' ca': 22,
            chi: 23,
            ' qu': 24,
            uin: 25,
            'n c': 26,
            'sh ': 27,
            'h. ': 28,
            'sh.': 29,
            chu: 30,
            hui: 31,
            'in ': 32,
            cho: 33,
            ' ni': 34,
            'c b': 35,
            ida: 36,
            'bi ': 37,
            iqu: 38,
            uts: 39,
            cac: 40,
            ', c': 41,
            sho: 42,
            ido: 43,
            ' da': 44,
            nid: 45,
            'on ': 46,
            esh: 47,
            ' ta': 48,
            cqu: 49,
            dai: 50,
            ', q': 51,
            abi: 52,
            nqu: 53,
            ' ut': 54,
            ics: 55,
            equ: 56,
            ues: 57,
            ' ma': 58,
            ats: 59,
            csa: 60,
            '. c': 61,
            boe: 62,
            ted: 63,
            tse: 64,
            ' ab': 65,
            hia: 66,
            edi: 67,
            mbi: 68,
            'ec ': 69,
            mat: 70,
            ses: 71,
            'ën ': 72,
            ueq: 73,
            bit: 74,
            'i, ': 75,
            das: 76,
            iai: 77,
            ton: 78,
            ite: 79,
            sam: 80,
            ' ad': 81,
            'dën': 82,
            ada: 83,
            '. a': 84,
            'i c': 85,
            ' na': 86,
            dnu: 87,
            'c i': 88,
            'idë': 89,
            ' cu': 90,
            iac: 91,
            bad: 92,
            'es ': 93,
            'en ': 94,
            tab: 95,
            aba: 96,
            'a, ': 97,
            'n. ': 98,
            ' ai': 99,
            ' - ': 100,
            pan: 101,
            'd d': 102,
            uiq: 103,
            'o: ': 104,
            tia: 105,
            'n m': 106,
            ' pa': 107,
            oqu: 108,
            shu: 109,
            ': a': 110,
            'n: ': 111,
            'di ': 112,
            'd a': 113,
            'nëd': 114,
            dqu: 115,
            pad: 116,
            don: 117,
            'anë': 118,
            'n n': 119,
            'ho:': 120,
            'ho-': 121,
            imb: 122,
            '-ch': 123,
            'o-c': 124,
            apa: 125,
            uen: 126,
            hoq: 127,
            ibi: 128,
            'h c': 129,
            ato: 130,
            '- q': 131,
            'ësh': 132,
            'noë': 133,
            ino: 134,
            'oës': 135,
            sib: 136,
            ' at': 137,
            din: 138,
            '. n': 139,
            ' mi': 140,
            uio: 141,
            ' iq': 142,
            'u, ': 143,
            oec: 144,
            una: 145,
            ono: 146,
            ipa: 147,
            tan: 148,
            'nu,': 149,
            sin: 150,
            'd n': 151,
            ' is': 152,
            emb: 153,
            uip: 154,
            'h n': 155,
            'ho ': 156,
            'un ': 157,
            ibo: 158,
            'on.': 159,
            ' ua': 160,
            adn: 161,
            adq: 162,
            idi: 163,
            dap: 164,
            cue: 165,
            dad: 166,
            ade: 167,
            'c t': 168,
            nun: 169,
            'h -': 170,
            ant: 171,
            ' në': 172,
            hun: 173,
            bon: 174,
            'ai,': 175,
            'da ': 176,
            nue: 177,
            'n t': 178,
            enq: 179,
            nac: 180,
            'c, ': 181,
            nec: 182,
            'a u': 183,
            ': c': 184,
            'i: ': 185,
            anu: 186,
            'o, ': 187,
            bid: 188,
            cai: 189,
            nti: 190,
            abo: 191,
            men: 192,
            'ta,': 193,
            'i n': 194,
            uec: 195,
            nia: 196,
            'o c': 197,
            ', a': 198,
            ' co': 199,
            'do ': 200,
            ' be': 201,
            ado: 202,
            'a. ': 203,
            nen: 204,
            con: 205,
            'tsë': 206,
            dac: 207,
            'd u': 208,
            cui: 209,
            'i b': 210,
            'io ': 211,
            'bi:': 212,
            ' sh': 213,
            pab: 214,
            'c: ': 215,
            'shë': 216,
            ' ne': 217,
            'ëid': 218,
            'd i': 219,
            ito: 220,
            hit: 221,
            'nëi': 222,
            ebi: 223,
            'ec,': 224,
            oen: 225,
            'no,': 226,
            sun: 227,
            'n i': 228,
            '. p': 229,
            'n p': 230,
            aqu: 231,
            ' pi': 232,
            'd c': 233,
            'na,': 234,
            mib: 235,
            '. u': 236,
            'bi,': 237,
            'o b': 238,
            '. m': 239,
            iuc: 240,
            ocq: 241,
            'sëc': 242,
            'n a': 243,
            ish: 244,
            hie: 245,
            'ëqu': 246,
            ' am': 247,
            ucq: 248,
            nuq: 249,
            uqu: 250,
            'te ': 251,
            nan: 252,
            'on:': 253,
            ies: 254,
            ' nu': 255,
            piu: 256,
            uai: 257,
            'n b': 258,
            inq: 259,
            iec: 260,
            ' me': 261,
            'ui ': 262,
            bed: 263,
            'ic:': 264,
            enu: 265,
            api: 266,
            'cuë': 267,
            iap: 268,
            pim: 269,
            'd m': 270,
            uia: 271,
            cbi: 272,
            acn: 273,
            'i m': 274,
            'ëcq': 275,
            nai: 276,
            den: 277,
            'hën': 278,
            'c. ': 279,
            adt: 280,
            'ec.': 281,
            ': m': 282,
            's u': 283,
            ene: 284,
            'd b': 285,
            dec: 286,
            ': n': 287,
            hon: 288,
            hid: 289,
            csh: 290,
            ueb: 291,
            uie: 292,
            dot: 293,
            '-ut': 294,
            ane: 295,
            noa: 296,
            ' më': 297,
            ' em': 298,
            'i. ': 299,
            idt: 300
        }
    };
    exports.default = mcf;
});
//# sourceMappingURL=mcf.js.map