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
    const tpt = {
        id: 'tpt',
        name: 'Tepehua Tlachichilco',
        trigrams: { cha: 0,
            ' yu': 1,
            'ni ': 2,
            'ha ': 3,
            ' ni': 4,
            ' la': 5,
            ' ta': 6,
            'yu ': 7,
            ' va': 8,
            'an ': 9,
            ach: 10,
            ' ix': 11,
            'un ': 12,
            ' ka': 13,
            'kʼa': 14,
            ala: 15,
            nch: 16,
            ' ja': 17,
            'va ': 18,
            'ʼan': 19,
            aka: 20,
            chu: 21,
            ant: 22,
            laq: 23,
            lak: 24,
            ana: 25,
            apa: 26,
            lhi: 27,
            'al ': 28,
            'tʼi': 29,
            aqa: 30,
            ata: 31,
            ama: 32,
            jan: 33,
            hun: 34,
            ntu: 35,
            ' ma': 36,
            'ay ': 37,
            ' ch': 38,
            jun: 39,
            'a k': 40,
            'tʼa': 41,
            'tu ': 42,
            kan: 43,
            kat: 44,
            'atʼ': 45,
            ' ki': 46,
            'aʼa': 47,
            'ex ': 48,
            alh: 49,
            ' ex': 50,
            nta: 51,
            tac: 52,
            uch: 53,
            mak: 54,
            'in ': 55,
            tau: 56,
            niy: 57,
            aun: 58,
            'ʼat': 59,
            chi: 60,
            unc: 61,
            'a t': 62,
            xta: 63,
            int: 64,
            tal: 65,
            lha: 66,
            'n. ': 67,
            'n y': 68,
            'ʼin': 69,
            'ʼal': 70,
            'ti ': 71,
            uni: 72,
            'n k': 73,
            dio: 74,
            ios: 75,
            'ʼik': 76,
            aqt: 77,
            ' di': 78,
            ixt: 79,
            ani: 80,
            ati: 81,
            lap: 82,
            pan: 83,
            ava: 84,
            'i j': 85,
            'u k': 86,
            aju: 87,
            maq: 88,
            'a l': 89,
            ' pa': 90,
            'a i': 91,
            kal: 92,
            'iy ': 93,
            'il ': 94,
            tam: 95,
            nak: 96,
            nan: 97,
            aya: 98,
            'tsʼ': 99,
            'l n': 100,
            nil: 101,
            kun: 102,
            akn: 103,
            'i y': 104,
            'n t': 105,
            'a n': 106,
            'aʼ ': 107,
            yuc: 108,
            ' kʼ': 109,
            ' ku': 110,
            ini: 111,
            nin: 112,
            'akʼ': 113,
            tap: 114,
            'taʼ': 115,
            'u l': 116,
            'ʼun': 117,
            '. e': 118,
            'y k': 119,
            ' lh': 120,
            ' an': 121,
            'u t': 122,
            'n n': 123,
            nti: 124,
            ali: 125,
            'i l': 126,
            'ik ': 127,
            ' je': 128,
            kni: 129,
            anc: 130,
            val: 131,
            ats: 132,
            ' xa': 133,
            tan: 134,
            put: 135,
            lay: 136,
            'os ': 137,
            ', v': 138,
            'u i': 139,
            vin: 140,
            taq: 141,
            ' y ': 142,
            'oʼo': 143,
            jes: 144,
            'n l': 145,
            aul: 146,
            'an.': 147,
            'as ': 148,
            jal: 149,
            'itʼ': 150,
            nau: 151,
            'ra ': 152,
            'chʼ': 153,
            ita: 154,
            sta: 155,
            qta: 156,
            vac: 157,
            '. v': 158,
            ara: 159,
            jka: 160,
            ' ox': 161,
            ivi: 162,
            'i d': 163,
            par: 164,
            'a j': 165,
            ' al': 166,
            'u j': 167,
            ejk: 168,
            tej: 169,
            'n i': 170,
            ' te': 171,
            'n, ': 172,
            ixl: 173,
            iya: 174,
            'ʼay': 175,
            'esú': 176,
            'sús': 177,
            ast: 178,
            hiv: 179,
            him: 180,
            'la ': 181,
            'ta ': 182,
            'a y': 183,
            ayn: 184,
            apu: 185,
            'ntʼ': 186,
            'uʼ ': 187,
            'ox ': 188,
            han: 189,
            'u a': 190,
            'l. ': 191,
            inc: 192,
            axt: 193,
            naj: 194,
            'a. ': 195,
            kam: 196,
            'i k': 197,
            mal: 198,
            'u m': 199,
            'i. ': 200,
            anu: 201,
            ' ju': 202,
            'ro ': 203,
            una: 204,
            qni: 205,
            ' pe': 206,
            'au ': 207,
            tat: 208,
            yan: 209,
            mas: 210,
            qal: 211,
            unt: 212,
            lch: 213,
            imo: 214,
            kla: 215,
            'n j': 216,
            'moʼ': 217,
            ila: 218,
            'sʼa': 219,
            'i a': 220,
            's. ': 221,
            'ʼon': 222,
            hac: 223,
            ': —': 224,
            'ul ': 225,
            tak: 226,
            ' mi': 227,
            'a m': 228,
            'a p': 229,
            'aj ': 230,
            ero: 231,
            aqs: 232,
            uku: 233,
            akt: 234,
            'a a': 235,
            xlh: 236,
            ' ay': 237,
            per: 238,
            kap: 239,
            'uʼu': 240,
            'yaʼ': 241,
            kak: 242,
            ist: 243,
            hit: 244,
            tsu: 245,
            ula: 246,
            'l l': 247,
            tay: 248,
            'l t': 249,
            lan: 250,
            'apʼ': 251,
            oqo: 252,
            ich: 253,
            ' kl': 254,
            min: 255,
            tsa: 256,
            kna: 257,
            qay: 258,
            'n p': 259,
            suk: 260,
            ' tu': 261,
            ' pu': 262,
            'pʼa': 263,
            nit: 264,
            'l: ': 265,
            'nkʼ': 266,
            '. y': 267,
            'y l': 268,
            tas: 269,
            ' na': 270,
            'tʼu': 271,
            '. t': 272,
            kin: 273,
            'ús ': 274,
            'kʼi': 275,
            kit: 276,
            hoq: 277,
            cho: 278,
            akm: 279,
            aqn: 280,
            ' aq': 281,
            uxi: 282,
            'sʼi': 283,
            'ka ': 284,
            akl: 285,
            qan: 286,
            'l y': 287,
            ina: 288,
            'hu ': 289,
            'a v': 290,
            pas: 291,
            'y t': 292,
            lat: 293,
            pay: 294,
            xla: 295,
            'n v': 296,
            qts: 297,
            kma: 298,
            'naʼ': 299,
            hin: 300
        }
    };
    exports.default = tpt;
});
//# sourceMappingURL=tpt.js.map