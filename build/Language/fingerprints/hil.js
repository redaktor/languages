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
    const hil = {
        id: 'hil',
        name: 'Hiligaynon',
        trigrams: { nga: 0,
            ang: 1,
            ' ka': 2,
            'ga ': 3,
            'ng ': 4,
            ' sa': 5,
            'sa ': 6,
            'an ': 7,
            ' ng': 8,
            ' pa': 9,
            ' ma': 10,
            'ag ': 11,
            san: 12,
            pag: 13,
            'on ': 14,
            ung: 15,
            ' an': 16,
            'a p': 17,
            kag: 18,
            ata: 19,
            'n n': 20,
            'a k': 21,
            kat: 22,
            'n s': 23,
            'a m': 24,
            gan: 25,
            ' ta': 26,
            'g p': 27,
            tar: 28,
            'ay ': 29,
            'g k': 30,
            ags: 31,
            aru: 32,
            run: 33,
            ala: 34,
            gsa: 35,
            tag: 36,
            'g m': 37,
            'a s': 38,
            mga: 39,
            ' mg': 40,
            'a t': 41,
            '. a': 42,
            kon: 43,
            'g s': 44,
            man: 45,
            'a n': 46,
            'a i': 47,
            'n k': 48,
            ing: 49,
            'g t': 50,
            agp: 51,
            tan: 52,
            ulo: 53,
            hil: 54,
            'y k': 55,
            mag: 56,
            ' si': 57,
            gpa: 58,
            may: 59,
            pan: 60,
            ahi: 61,
            'od ': 62,
            aya: 63,
            sin: 64,
            tik: 65,
            'la ': 66,
            han: 67,
            ina: 68,
            gin: 69,
            ili: 70,
            ana: 71,
            'lo ': 72,
            kul: 73,
            art: 74,
            'ya ': 75,
            ' pu': 76,
            gka: 77,
            nan: 78,
            iku: 79,
            ' ar': 80,
            yon: 81,
            way: 82,
            ' in': 83,
            uko: 84,
            aha: 85,
            ' uk': 86,
            ' gi': 87,
            lwa: 88,
            rti: 89,
            ilw: 90,
            apa: 91,
            asa: 92,
            'g i': 93,
            syo: 94,
            kas: 95,
            lin: 96,
            ban: 97,
            'n, ': 98,
            iya: 99,
            'n. ': 100,
            ' na': 101,
            kah: 102,
            ngk: 103,
            lan: 104,
            ali: 105,
            pat: 106,
            ini: 107,
            tao: 108,
            'g n': 109,
            aba: 110,
            'o n': 111,
            'ag-': 112,
            agt: 113,
            pun: 114,
            'a g': 115,
            'n p': 116,
            yan: 117,
            ngo: 118,
            ' iy': 119,
            ngs: 120,
            gba: 121,
            wal: 122,
            kab: 123,
            ano: 124,
            'o s': 125,
            nag: 126,
            'n a': 127,
            agk: 128,
            'at ': 129,
            aga: 130,
            'an.': 131,
            'a a': 132,
            ' wa': 133,
            abu: 134,
            'i s': 135,
            kal: 136,
            'o m': 137,
            isa: 138,
            dap: 139,
            'a h': 140,
            'a d': 141,
            ong: 142,
            sod: 143,
            mat: 144,
            gso: 145,
            ' tu': 146,
            aki: 147,
            agb: 148,
            'in ': 149,
            'an,': 150,
            aho: 151,
            ' hi': 152,
            ' da': 153,
            asy: 154,
            ila: 155,
            'g-a': 156,
            'al ': 157,
            non: 158,
            'no ': 159,
            pas: 160,
            'g a': 161,
            sal: 162,
            gay: 163,
            'di ': 164,
            til: 165,
            agh: 166,
            lal: 167,
            ati: 168,
            god: 169,
            'yo ': 170,
            'a b': 171,
            'd s': 172,
            ' la': 173,
            'n u': 174,
            but: 175,
            'd k': 176,
            ', p': 177,
            uha: 178,
            'o k': 179,
            asu: 180,
            ato: 181,
            pah: 182,
            paa: 183,
            yag: 184,
            uga: 185,
            una: 186,
            'o, ': 187,
            ', m': 188,
            ama: 189,
            atu: 190,
            aan: 191,
            ' pr': 192,
            hay: 193,
            'ka ': 194,
            ngb: 195,
            aka: 196,
            bah: 197,
            'ni ': 198,
            's n': 199,
            'n m': 200,
            oha: 201,
            'na ': 202,
            ' is': 203,
            ' du': 204,
            ' ba': 205,
            'y s': 206,
            nah: 207,
            sil: 208,
            uan: 209,
            uta: 210,
            aag: 211,
            ' di': 212,
            bat: 213,
            iba: 214,
            'gi ': 215,
            ' ko': 216,
            agi: 217,
            ' hu': 218,
            ', s': 219,
            'o 2': 220,
            'i m': 221,
            ida: 222,
            pro: 223,
            'on,': 224,
            sta: 225,
            lig: 226,
            ', k': 227,
            'o 1': 228,
            ' su': 229,
            tun: 230,
            gon: 231,
            'y n': 232,
            'os ': 233,
            ksy: 234,
            sug: 235,
            'k s': 236,
            bis: 237,
            pam: 238,
            him: 239,
            alo: 240,
            gua: 241,
            gtu: 242,
            'ao ': 243,
            ' bi': 244,
            'a e': 245,
            'a l': 246,
            sul: 247,
            uma: 248,
            lib: 249,
            lon: 250,
            ton: 251,
            'm s': 252,
            uli: 253,
            ula: 254,
            asi: 255,
            aoh: 256,
            maa: 257,
            ron: 258,
            'i, ': 259,
            ika: 260,
            mak: 261,
            ibu: 262,
            ghi: 263,
            ' ib': 264,
            'd, ': 265,
            'o. ': 266,
            abi: 267,
            ugu: 268,
            bot: 269,
            lab: 270,
            tek: 271,
            hin: 272,
            ind: 273,
            'ot ': 274,
            'ok ': 275,
            duk: 276,
            eks: 277,
            't n': 278,
            nda: 279,
            'g e': 280,
            iko: 281,
            'og ': 282,
            lah: 283,
            'n t': 284,
            nta: 285,
            iga: 286,
            ' ed': 287,
            tok: 288,
            '-o ': 289,
            par: 290,
            aay: 291,
            inu: 292,
            hat: 293,
            kin: 294,
            gal: 295,
            ' bu': 296,
            tum: 297,
            'mo ': 298,
            'as ': 299,
            gko: 300
        }
    };
    exports.default = hil;
});
//# sourceMappingURL=hil.js.map