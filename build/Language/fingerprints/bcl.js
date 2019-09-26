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
    const bcl = {
        id: 'bcl',
        name: 'Bikol, Central',
        trigrams: { 'an ': 0,
            ' sa': 1,
            'in ': 2,
            ' na': 3,
            'ng ': 4,
            'sa ': 5,
            'na ': 6,
            ' pa': 7,
            nin: 8,
            ang: 9,
            ' ka': 10,
            ' ni': 11,
            ' ma': 12,
            ' an': 13,
            pag: 14,
            ' as': 15,
            asi: 16,
            sin: 17,
            ion: 18,
            'n s': 19,
            cio: 20,
            'n n': 21,
            'a m': 22,
            ' de': 23,
            ban: 24,
            'ga ': 25,
            kan: 26,
            mga: 27,
            ' mg': 28,
            ere: 29,
            rec: 30,
            'a p': 31,
            der: 32,
            ech: 33,
            cho: 34,
            'a n': 35,
            aci: 36,
            'os ': 37,
            man: 38,
            aro: 39,
            'n p': 40,
            'on ': 41,
            'n m': 42,
            'n a': 43,
            'a s': 44,
            asa: 45,
            ' la': 46,
            'g s': 47,
            kat: 48,
            'n d': 49,
            sar: 50,
            '. a': 51,
            ata: 52,
            'o n': 53,
            'n k': 54,
            ong: 55,
            'o s': 56,
            ' o ': 57,
            'n l': 58,
            tal: 59,
            ara: 60,
            amb: 61,
            gwa: 62,
            igw: 63,
            kas: 64,
            'ay ': 65,
            'a k': 66,
            mba: 67,
            'wa ': 68,
            ' ig': 69,
            sai: 70,
            lam: 71,
            agk: 72,
            tic: 73,
            'a a': 74,
            'ho ': 75,
            ali: 76,
            gka: 77,
            'al ': 78,
            'o i': 79,
            apa: 80,
            ' ar': 81,
            'n, ': 82,
            'ro ': 83,
            'lo ': 84,
            san: 85,
            art: 86,
            nac: 87,
            ulo: 88,
            cul: 89,
            aba: 90,
            'g p': 91,
            iya: 92,
            ina: 93,
            rti: 94,
            'a d': 95,
            icu: 96,
            yan: 97,
            lin: 98,
            ing: 99,
            may: 100,
            aiy: 101,
            nka: 102,
            ink: 103,
            'a i': 104,
            aka: 105,
            ano: 106,
            ' ba': 107,
            'yo ': 108,
            ' in': 109,
            abo: 110,
            aha: 111,
            ' da': 112,
            ' hu': 113,
            ini: 114,
            nta: 115,
            tan: 116,
            ' ga': 117,
            'o a': 118,
            'o, ': 119,
            hos: 120,
            agt: 121,
            hay: 122,
            'an,': 123,
            kai: 124,
            's n': 125,
            ida: 126,
            ent: 127,
            par: 128,
            ' pr': 129,
            han: 130,
            'og ': 131,
            ', a': 132,
            'o m': 133,
            iba: 134,
            ' ta': 135,
            ron: 136,
            ayo: 137,
            'g n': 138,
            'at ': 139,
            'g m': 140,
            ant: 141,
            nal: 142,
            dap: 143,
            'n. ': 144,
            ' co': 145,
            mag: 146,
            nga: 147,
            aya: 148,
            sta: 149,
            iri: 150,
            'a g': 151,
            'n i': 152,
            ran: 153,
            dad: 154,
            pat: 155,
            'li ': 156,
            cia: 157,
            pro: 158,
            'l n': 159,
            'no ': 160,
            lan: 161,
            men: 162,
            't n': 163,
            'g k': 164,
            mak: 165,
            gan: 166,
            ' si': 167,
            ala: 168,
            bos: 169,
            aki: 170,
            ', n': 171,
            gab: 172,
            's a': 173,
            'y n': 174,
            con: 175,
            nte: 176,
            nda: 177,
            'ad ': 178,
            ona: 179,
            'a b': 180,
            'ia ': 181,
            'a l': 182,
            'n b': 183,
            uha: 184,
            ', s': 185,
            'ag-': 186,
            aan: 187,
            'g d': 188,
            agp: 189,
            tra: 190,
            taw: 191,
            awo: 192,
            uli: 193,
            hul: 194,
            'a c': 195,
            ags: 196,
            tay: 197,
            waa: 198,
            min: 199,
            ter: 200,
            ain: 201,
            ado: 202,
            nwa: 203,
            kam: 204,
            anw: 205,
            ico: 206,
            pan: 207,
            res: 208,
            ami: 209,
            'o k': 210,
            bal: 211,
            ' so': 212,
            'o. ': 213,
            bil: 214,
            'on,': 215,
            'es ': 216,
            'i n': 217,
            kap: 218,
            'n o': 219,
            'ra ': 220,
            gta: 221,
            ika: 222,
            'o 2': 223,
            'n e': 224,
            lar: 225,
            nag: 226,
            nan: 227,
            one: 228,
            gpa: 229,
            nes: 230,
            ' di': 231,
            ' bi': 232,
            'as ': 233,
            ', k': 234,
            'o 1': 235,
            pin: 236,
            'a o': 237,
            'a, ': 238,
            ton: 239,
            ' mi': 240,
            kab: 241,
            uni: 242,
            bas: 243,
            ind: 244,
            'n g': 245,
            ' re': 246,
            'ta ': 247,
            'on.': 248,
            'n t': 249,
            sal: 250,
            hum: 251,
            cci: 252,
            tec: 253,
            's, ': 254,
            'om ': 255,
            pak: 256,
            ' es': 257,
            uma: 258,
            'ag ': 259,
            nci: 260,
            bah: 261,
            ili: 262,
            ial: 263,
            imi: 264,
            nid: 265,
            ecc: 266,
            'en ': 267,
            ios: 268,
            ana: 269,
            agi: 270,
            isa: 271,
            'o p': 272,
            ', p': 273,
            ' le': 274,
            cri: 275,
            dec: 276,
            rar: 277,
            sad: 278,
            iis: 279,
            hal: 280,
            paa: 281,
            say: 282,
            ' se': 283,
            'a t': 284,
            ', h': 285,
            yag: 286,
            ast: 287,
            ecl: 288,
            ipa: 289,
            ley: 290,
            ' un': 291,
            rim: 292,
            cla: 293,
            'ba ': 294,
            aag: 295,
            'y m': 296,
            'a e': 297,
            'n c': 298,
            hon: 299,
            sab: 300
        }
    };
    exports.default = bcl;
});
//# sourceMappingURL=bcl.js.map