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
    const ptu = {
        id: 'ptu',
        name: 'Bambam',
        trigrams: { 'na ': 0,
            nna: 1,
            ann: 2,
            'am ': 3,
            ' ma': 4,
            'la ': 5,
            'a\' ': 6,
            ' la': 7,
            ' na': 8,
            ' to': 9,
            ang: 10,
            ala: 11,
            ' in': 12,
            ' an': 13,
            'a t': 14,
            ' ka': 15,
            'a m': 16,
            aka: 17,
            ata: 18,
            ind: 19,
            lla: 20,
            ' pu': 21,
            'to ': 22,
            ndo: 23,
            ' ta': 24,
            uan: 25,
            ' um': 26,
            'do ': 27,
            ' di': 28,
            all: 29,
            ' sa': 30,
            'a p': 31,
            'a n': 32,
            ako: 33,
            'a s': 34,
            ngk: 35,
            'ä\' ': 36,
            ' pa': 37,
            'a i': 38,
            pua: 39,
            'ng ': 40,
            asa: 41,
            'pa\'': 42,
            'ka ': 43,
            'a u': 44,
            'ko ': 45,
            lak: 46,
            ump: 47,
            'a l': 48,
            'a k': 49,
            ' si': 50,
            ' su': 51,
            'ia ': 52,
            ' me': 53,
            nga: 54,
            aam: 55,
            sus: 56,
            'a d': 57,
            san: 58,
            gan: 59,
            'tä\'': 60,
            aha: 61,
            ' tä': 62,
            'a a': 63,
            ' ia': 64,
            ' al': 65,
            'o\' ': 66,
            sam: 67,
            ' pe': 68,
            'o t': 69,
            too: 70,
            ' ak': 71,
            'ai ': 72,
            'a. ': 73,
            ngg: 74,
            nap: 75,
            ing: 76,
            koa: 77,
            tau: 78,
            ana: 79,
            ama: 80,
            ' de': 81,
            apo: 82,
            taa: 83,
            'oa\'': 84,
            'o m': 85,
            kam: 86,
            'ya ': 87,
            mal: 88,
            'ma\'': 89,
            iya: 90,
            ' iy': 91,
            gga: 92,
            amb: 93,
            and: 94,
            ola: 95,
            aba: 96,
            lat: 97,
            aua: 98,
            'ka\'': 99,
            '\' t': 100,
            ' ba': 101,
            'em ': 102,
            mba: 103,
            aal: 104,
            'us ': 105,
            nau: 106,
            apa: 107,
            laa: 108,
            'g a': 109,
            mpa: 110,
            ada: 111,
            'm t': 112,
            'm p': 113,
            'au ': 114,
            app: 115,
            ppa: 116,
            ill: 117,
            ena: 118,
            sap: 119,
            eem: 120,
            '\' l': 121,
            ssa: 122,
            lam: 123,
            man: 124,
            '\' m': 125,
            nde: 126,
            'oo ': 127,
            '\' d': 128,
            '\' i': 129,
            'la\'': 130,
            'a, ': 131,
            '\'na': 132,
            'po\'': 133,
            ' \"': 134,
            'si ': 135,
            mat: 136,
            ' mu': 137,
            uhu: 138,
            ' ku': 139,
            'um ': 140,
            ' il': 141,
            ' ye': 142,
            pen: 143,
            pat: 144,
            'ta ': 145,
            '\" ': 146,
            'm i': 147,
            'a: ': 148,
            ': \\': 149,
            'o p': 150,
            dee: 151,
            '. a': 152,
            ' un': 153,
            pas: 154,
            tam: 155,
            nda: 156,
            esu: 157,
            'o k': 158,
            'm m': 159,
            '\' p': 160,
            kal: 161,
            tap: 162,
            yes: 163,
            'm k': 164,
            'sa ': 165,
            nab: 166,
            '\' s': 167,
            'ua:': 168,
            dio: 169,
            sol: 170,
            ale: 171,
            '\' k': 172,
            mas: 173,
            uha: 174,
            sul: 175,
            ', i': 176,
            men: 177,
            ' so': 178,
            kah: 179,
            bat: 180,
            'da ': 181,
            'o s': 182,
            'u\' ': 183,
            ung: 184,
            ' du': 185,
            'i p': 186,
            eba: 187,
            ban: 188,
            'i i': 189,
            tan: 190,
            mes: 191,
            ule: 192,
            'ua ': 193,
            'im ': 194,
            'de ': 195,
            'i\' ': 196,
            eng: 197,
            ong: 198,
            'o i': 199,
            esa: 200,
            ' li': 201,
            amm: 202,
            '\'i ': 203,
            'ba ': 204,
            ', a': 205,
            'a\'k': 206,
            'g y': 207,
            'le ': 208,
            'di ': 209,
            '. i': 210,
            usi: 211,
            'i t': 212,
            uka: 213,
            sal: 214,
            ttu: 215,
            'm l': 216,
            olo: 217,
            kad: 218,
            att: 219,
            '\' a': 220,
            asu: 221,
            iss: 222,
            ' bu': 223,
            'a\'p': 224,
            nta: 225,
            duk: 226,
            'na.': 227,
            ula: 228,
            iko: 229,
            puh: 230,
            upa: 231,
            gam: 232,
            nni: 233,
            ona: 234,
            '. s': 235,
            'm s': 236,
            unt: 237,
            'i m': 238,
            'ia\'': 239,
            'o l': 240,
            tul: 241,
            'a b': 242,
            ngn: 243,
            gng: 244,
            iam: 245,
            ' ke': 246,
            adi: 247,
            '\'. ': 248,
            'o d': 249,
            'nä\'': 250,
            '.\"': 251,
            dad: 252,
            'i k': 253,
            'm d': 254,
            'ha ': 255,
            'm a': 256,
            'io ': 257,
            gka: 258,
            han: 259,
            kat: 260,
            ita: 261,
            ass: 262,
            gko: 263,
            lan: 264,
            suh: 265,
            mbi: 266,
            'i a': 267,
            '\', ': 268,
            'i l': 269,
            ' da': 270,
            ' tu': 271,
            '\'ka': 272,
            'oi ': 273,
            inn: 274,
            'bi\'': 275,
            ahe: 276,
            atu: 277,
            umb: 278,
            ahu: 279,
            'm. ': 280,
            nas: 281,
            pah: 282,
            ipa: 283,
            'ba\'': 284,
            'o u': 285,
            ' ya': 286,
            'ne ': 287,
            '\' u': 288,
            'tu ': 289,
            'i s': 290,
            pal: 291,
            'a\'i': 292,
            ' ti': 293,
            'ei ': 294,
            unn: 295,
            'a h': 296,
            dip: 297,
            ase: 298,
            pan: 299,
            pak: 300
        }
    };
    exports.default = ptu;
});
//# sourceMappingURL=ptu.js.map