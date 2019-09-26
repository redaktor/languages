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
    const agr = {
        id: 'agr',
        name: 'Aguaruna',
        trigrams: { ain: 0,
            ina: 1,
            mai: 2,
            ent: 3,
            ich: 4,
            ash: 5,
            nts: 6,
            ' ae': 7,
            ' ai': 8,
            aen: 9,
            ' nu': 10,
            aka: 11,
            tik: 12,
            chi: 13,
            'i a': 14,
            'sh ': 15,
            wai: 16,
            'ts ': 17,
            gka: 18,
            ida: 19,
            dau: 20,
            cha: 21,
            ama: 22,
            ' as': 23,
            aid: 24,
            shi: 25,
            ' wa': 26,
            'au ': 27,
            '. a': 28,
            tak: 29,
            ' ta': 30,
            nai: 31,
            tsu: 32,
            'ai ': 33,
            ' ti': 34,
            ait: 35,
            'n a': 36,
            uja: 37,
            amu: 38,
            'u a': 39,
            'in ': 40,
            kan: 41,
            kam: 42,
            ' pu': 43,
            ' tu': 44,
            kic: 45,
            'a a': 46,
            puj: 47,
            num: 48,
            'am ': 49,
            'ak ': 50,
            'hi ': 51,
            uju: 52,
            'i. ': 53,
            nun: 54,
            tai: 55,
            aja: 56,
            iki: 57,
            ' an': 58,
            ham: 59,
            'an ': 60,
            nma: 61,
            agk: 62,
            unu: 63,
            'k a': 64,
            ima: 65,
            'sa ': 66,
            kas: 67,
            ' ch': 68,
            hic: 69,
            kat: 70,
            ' ag': 71,
            's a': 72,
            'h a': 73,
            'i, ': 74,
            'ch ': 75,
            ish: 76,
            ush: 77,
            uma: 78,
            'i t': 79,
            aya: 80,
            ' ni': 81,
            ane: 82,
            asa: 83,
            ata: 84,
            'ag ': 85,
            'ja ': 86,
            aku: 87,
            awa: 88,
            nen: 89,
            ' ju': 90,
            ' ya': 91,
            mak: 92,
            its: 93,
            'm a': 94,
            usa: 95,
            nii: 96,
            'uk ': 97,
            tus: 98,
            ', t': 99,
            nak: 100,
            'as ': 101,
            ugk: 102,
            aju: 103,
            mun: 104,
            ', a': 105,
            nug: 106,
            'h, ': 107,
            aki: 108,
            'sh,': 109,
            uni: 110,
            shk: 111,
            sui: 112,
            ' aj': 113,
            'um ': 114,
            'ka ': 115,
            jam: 116,
            jum: 117,
            'a n': 118,
            'na ': 119,
            uti: 120,
            ' at': 121,
            mas: 122,
            tin: 123,
            jai: 124,
            aun: 125,
            tuj: 126,
            'ai.': 127,
            jui: 128,
            ita: 129,
            tka: 130,
            'ii ': 131,
            ika: 132,
            nja: 133,
            cul: 134,
            ' ap': 135,
            art: 136,
            ' ar': 137,
            tsa: 138,
            'un ': 139,
            'lo ': 140,
            ulo: 141,
            anm: 142,
            'rtí': 143,
            'tíc': 144,
            ' pa': 145,
            sag: 146,
            bau: 147,
            'ig ': 148,
            'ícu': 149,
            yam: 150,
            'ai,': 151,
            ' du': 152,
            ake: 153,
            una: 154,
            nia: 155,
            hka: 156,
            ats: 157,
            ', n': 158,
            'i n': 159,
            kus: 160,
            itk: 161,
            ' um': 162,
            dut: 163,
            umi: 164,
            'ui.': 165,
            eka: 166,
            ' de': 167,
            jas: 168,
            jun: 169,
            mta: 170,
            jut: 171,
            wak: 172,
            'h n': 173,
            suk: 174,
            amj: 175,
            'ik ': 176,
            'ta ': 177,
            nta: 178,
            apu: 179,
            kes: 180,
            dek: 181,
            ' ma': 182,
            ais: 183,
            nka: 184,
            esh: 185,
            ' di': 186,
            ach: 187,
            'ek ': 188,
            ' am': 189,
            'g a': 190,
            ' sh': 191,
            aim: 192,
            amt: 193,
            'a j': 194,
            auj: 195,
            enj: 196,
            mam: 197,
            may: 198,
            ete: 199,
            tan: 200,
            uwa: 201,
            'a t': 202,
            chu: 203,
            'n, ': 204,
            jin: 205,
            iig: 206,
            'ui ': 207,
            hii: 208,
            'ti ': 209,
            unm: 210,
            'at ': 211,
            ink: 212,
            jus: 213,
            apa: 214,
            'a d': 215,
            sam: 216,
            'n p': 217,
            gke: 218,
            mka: 219,
            nag: 220,
            'a p': 221,
            ' em': 222,
            kag: 223,
            agt: 224,
            ' ay': 225,
            'k t': 226,
            mju: 227,
            ' au': 228,
            gta: 229,
            'pu ': 230,
            kma: 231,
            ' na': 232,
            ' ak': 233,
            tek: 234,
            ati: 235,
            eja: 236,
            ntu: 237,
            tnu: 238,
            tas: 239,
            ' be': 240,
            'ya ': 241,
            api: 242,
            tia: 243,
            nuw: 244,
            ' ji': 245,
            tam: 246,
            atn: 247,
            bet: 248,
            's p': 249,
            dit: 250,
            hik: 251,
            'n t': 252,
            kak: 253,
            aga: 254,
            min: 255,
            inu: 256,
            'ku ': 257,
            'nu ': 258,
            ant: 259,
            nui: 260,
            uwe: 261,
            ' et': 262,
            'hu ': 263,
            ' im': 264,
            pap: 265,
            'm p': 266,
            naw: 267,
            gma: 268,
            kej: 269,
            ' yu': 270,
            iaj: 271,
            '. n': 272,
            'h t': 273,
            'm, ': 274,
            juj: 275,
            aig: 276,
            uim: 277,
            ets: 278,
            'u d': 279,
            juk: 280,
            aik: 281,
            man: 282,
            kui: 283,
            egk: 284,
            'ma ': 285,
            'mu ': 286,
            ikt: 287,
            nam: 288,
            emt: 289,
            anu: 290,
            'wa ': 291,
            'ju ': 292,
            ' ku': 293,
            '. t': 294,
            'a w': 295,
            hat: 296,
            kin: 297,
            'u n': 298,
            gba: 299,
            iju: 300
        }
    };
    exports.default = agr;
});
//# sourceMappingURL=agr.js.map