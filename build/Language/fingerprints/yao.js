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
    const yao = {
        id: 'yao',
        name: 'Yao',
        trigrams: { chi: 0,
            ndu: 1,
            ' wa': 2,
            'du ': 3,
            ' ch': 4,
            aku: 5,
            akw: 6,
            kwe: 7,
            'ni ': 8,
            '. m': 9,
            ' mu': 10,
            und: 11,
            wan: 12,
            wak: 13,
            mun: 14,
            ' ku': 15,
            'a m': 16,
            'we ': 17,
            'wa ': 18,
            'la ': 19,
            ulu: 20,
            amb: 21,
            kut: 22,
            ' ak': 23,
            mbo: 24,
            'u w': 25,
            ali: 26,
            'lu ': 27,
            ' ma': 28,
            ufu: 29,
            ful: 30,
            ila: 31,
            'a k': 32,
            'bo ': 33,
            'a n': 34,
            'e m': 35,
            ' ga': 36,
            'le ': 37,
            ' ni': 38,
            amu: 39,
            kwa: 40,
            ' na': 41,
            and: 42,
            hil: 43,
            nga: 44,
            ose: 45,
            aka: 46,
            ang: 47,
            ' uf': 48,
            ' pa': 49,
            kul: 50,
            ' jw': 51,
            lam: 52,
            uti: 53,
            jwa: 54,
            ete: 55,
            ngo: 56,
            kam: 57,
            son: 58,
            oni: 59,
            ' so': 60,
            'a c': 61,
            ' mt': 62,
            'u j': 63,
            ele: 64,
            twe: 65,
            'se ': 66,
            'ti ': 67,
            'e u': 68,
            wal: 69,
            ana: 70,
            cha: 71,
            isy: 72,
            gan: 73,
            mwa: 74,
            'go ': 75,
            ' yi': 76,
            'na ': 77,
            'te ': 78,
            'e. ': 79,
            nda: 80,
            wet: 81,
            'e a': 82,
            che: 83,
            lij: 84,
            ' ya': 85,
            mtw: 86,
            ula: 87,
            jos: 88,
            'pa ': 89,
            yak: 90,
            'ya ': 91,
            ili: 92,
            'a u': 93,
            ile: 94,
            'o s': 95,
            ijo: 96,
            mul: 97,
            'li ': 98,
            ich: 99,
            ' mw': 100,
            'ne ': 101,
            'ga ': 102,
            'i m': 103,
            ala: 104,
            ' ka': 105,
            'i a': 106,
            asa: 107,
            kas: 108,
            uch: 109,
            'o c': 110,
            ela: 111,
            'u a': 112,
            ach: 113,
            lan: 114,
            'e n': 115,
            his: 116,
            nam: 117,
            sye: 118,
            yin: 119,
            ani: 120,
            man: 121,
            ind: 122,
            'e k': 123,
            'e, ': 124,
            'i w': 125,
            iwa: 126,
            aga: 127,
            sya: 128,
            gal: 129,
            'i k': 130,
            'a. ': 131,
            ope: 132,
            ikw: 133,
            ule: 134,
            asi: 135,
            jil: 136,
            ika: 137,
            'o. ': 138,
            'a w': 139,
            hak: 140,
            kus: 141,
            kap: 142,
            gak: 143,
            mba: 144,
            ekw: 145,
            'pe ': 146,
            mbi: 147,
            mal: 148,
            any: 149,
            ase: 150,
            aji: 151,
            'u g': 152,
            ite: 153,
            kum: 154,
            uli: 155,
            ape: 156,
            ' ja': 157,
            'ma ': 158,
            imb: 159,
            end: 160,
            'o a': 161,
            ' al': 162,
            ' ng': 163,
            'ja ': 164,
            mas: 165,
            ago: 166,
            kup: 167,
            'yo ': 168,
            anj: 169,
            pen: 170,
            'e c': 171,
            lem: 172,
            usi: 173,
            och: 174,
            pel: 175,
            ako: 176,
            'a j': 177,
            ola: 178,
            'ye ': 179,
            ena: 180,
            ane: 181,
            ine: 182,
            'a p': 183,
            ', m': 184,
            him: 185,
            ama: 186,
            ' kw': 187,
            sop: 188,
            sen: 189,
            oso: 190,
            'ka ': 191,
            gwa: 192,
            hel: 193,
            mch: 194,
            eng: 195,
            lek: 196,
            hik: 197,
            mka: 198,
            ' mp': 199,
            ole: 200,
            gam: 201,
            kol: 202,
            'u y': 203,
            'o n': 204,
            ons: 205,
            'i u': 206,
            awo: 207,
            uma: 208,
            ' mc': 209,
            'a y': 210,
            ion: 211,
            uni: 212,
            'e w': 213,
            ' li': 214,
            ati: 215,
            'si ': 216,
            'i, ': 217,
            ano: 218,
            auf: 219,
            syo: 220,
            mau: 221,
            nji: 222,
            mpe: 223,
            ten: 224,
            'wo ': 225,
            tam: 226,
            wam: 227,
            'e y': 228,
            'i y': 229,
            ene: 230,
            kan: 231,
            iga: 232,
            nag: 233,
            ' ul': 234,
            iku: 235,
            ' un': 236,
            'i g': 237,
            'o m': 238,
            ngw: 239,
            kwi: 240,
            'a, ': 241,
            'he ': 242,
            cho: 243,
            pag: 244,
            ong: 245,
            muc: 246,
            iya: 247,
            'we.': 248,
            uwa: 249,
            bom: 250,
            kuw: 251,
            'da ': 252,
            tio: 253,
            'sa ': 254,
            dan: 255,
            ipa: 256,
            eka: 257,
            ale: 258,
            one: 259,
            upi: 260,
            'je ': 261,
            apa: 262,
            'e 2': 263,
            'e 1': 264,
            esy: 265,
            ' ji': 266,
            'o k': 267,
            ujo: 268,
            jak: 269,
            hiw: 270,
            nya: 271,
            uku: 272,
            'e p': 273,
            'o, ': 274,
            emw: 275,
            waj: 276,
            alo: 277,
            oma: 278,
            nja: 279,
            mus: 280,
            'a l': 281,
            pak: 282,
            'no ': 283,
            ', k': 284,
            duj: 285,
            lil: 286,
            'o g': 287,
            pan: 288,
            yil: 289,
            poc: 290,
            hip: 291,
            ata: 292,
            apo: 293,
            ung: 294,
            ', a': 295,
            lic: 296,
            '. w': 297,
            'ed ': 298,
            'o w': 299,
            ' bo': 300
        }
    };
    exports.default = yao;
});
//# sourceMappingURL=yao.js.map