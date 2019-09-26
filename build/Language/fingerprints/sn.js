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
    const sn = {
        id: 'sn',
        name: 'Shona',
        trigrams: { chi: 0,
            'wa ': 1,
            'a k': 2,
            ana: 3,
            ' ku': 4,
            ' mu': 5,
            'na ': 6,
            'ro ': 7,
            che: 8,
            ' ch': 9,
            nhu: 10,
            dze: 11,
            ' zv': 12,
            'hu ': 13,
            ' ne': 14,
            mun: 15,
            oku: 16,
            dzi: 17,
            aka: 18,
            ung: 19,
            'a n': 20,
            zer: 21,
            ero: 22,
            'a m': 23,
            unh: 24,
            odz: 25,
            kod: 26,
            rwa: 27,
            ' pa': 28,
            zvi: 29,
            iri: 30,
            kan: 31,
            sun: 32,
            ech: 33,
            'se ': 34,
            'ka ': 35,
            'ra ': 36,
            ' dz': 37,
            ' we': 38,
            ika: 39,
            ' no': 40,
            kut: 41,
            ' an': 42,
            'o y': 43,
            'va ': 44,
            ese: 45,
            nyi: 46,
            van: 47,
            yik: 48,
            nek: 49,
            eko: 50,
            zva: 51,
            'o c': 52,
            ' ka': 53,
            idz: 54,
            ane: 55,
            ngo: 56,
            eku: 57,
            'a, ': 58,
            ano: 59,
            cha: 60,
            'e a': 61,
            'go ': 62,
            ngu: 63,
            udz: 64,
            hec: 65,
            ake: 66,
            ' yo': 67,
            ach: 68,
            iro: 69,
            his: 70,
            'ri ': 71,
            'u w': 72,
            ang: 73,
            wes: 74,
            nge: 75,
            ira: 76,
            ' va': 77,
            'i p': 78,
            eng: 79,
            ' ma': 80,
            ino: 81,
            anh: 82,
            edz: 83,
            nok: 84,
            yok: 85,
            isu: 86,
            ' (c': 87,
            irw: 88,
            '(ch': 89,
            nga: 90,
            'o i': 91,
            ani: 92,
            '. c': 93,
            uva: 94,
            ich: 95,
            zir: 96,
            ' - ': 97,
            tan: 98,
            'a z': 99,
            umi: 100,
            wan: 101,
            hen: 102,
            dza: 103,
            'ti ': 104,
            rir: 105,
            'e, ': 106,
            'i n': 107,
            sha: 108,
            ipi: 109,
            ') -': 110,
            asi: 111,
            ita: 112,
            kur: 113,
            dzw: 114,
            eny: 115,
            'o n': 116,
            vak: 117,
            'wo ': 118,
            zve: 119,
            mwe: 120,
            rud: 121,
            zwa: 122,
            unu: 123,
            'i m': 124,
            'a p': 125,
            'ko ': 126,
            kwa: 127,
            pas: 128,
            uru: 129,
            guk: 130,
            ezv: 131,
            'a. ': 132,
            ' ya': 133,
            ' kw': 134,
            bat: 135,
            'mi ': 136,
            nun: 137,
            'si ': 138,
            ', k': 139,
            uti: 140,
            ara: 141,
            'a y': 142,
            hip: 143,
            ata: 144,
            ere: 145,
            'ke ': 146,
            'o. ': 147,
            ose: 148,
            uch: 149,
            uko: 150,
            nem: 151,
            ema: 152,
            dzo: 153,
            'e n': 154,
            'a d': 155,
            'we ': 156,
            'ta ': 157,
            ' po': 158,
            rus: 159,
            hin: 160,
            kuv: 161,
            kwe: 162,
            'o k': 163,
            omu: 164,
            nen: 165,
            ' rw': 166,
            'e k': 167,
            uta: 168,
            'o r': 169,
            wak: 170,
            kus: 171,
            aku: 172,
            isi: 173,
            han: 174,
            'i z': 175,
            kuc: 176,
            usu: 177,
            '. (': 178,
            pos: 179,
            yak: 180,
            ' in': 181,
            ete: 182,
            get: 183,
            gar: 184,
            '- m': 185,
            vir: 186,
            twa: 187,
            'o d': 188,
            pac: 189,
            ' ye': 190,
            tem: 191,
            hur: 192,
            'e z': 193,
            'a i': 194,
            'za ': 195,
            'sa ': 196,
            'o a': 197,
            'o, ': 198,
            ari: 199,
            emu: 200,
            oru: 201,
            'o m': 202,
            ' ak': 203,
            erw: 204,
            emo: 205,
            kum: 206,
            uka: 207,
            ong: 208,
            rwo: 209,
            pan: 210,
            and: 211,
            kud: 212,
            ' hu': 213,
            ' ha': 214,
            mat: 215,
            ' se': 216,
            kub: 217,
            atu: 218,
            'zo ': 219,
            hak: 220,
            'mo ': 221,
            're ': 222,
            ' uy': 223,
            uba: 224,
            vin: 225,
            nor: 226,
            eva: 227,
            uye: 228,
            uit: 229,
            kui: 230,
            wen: 231,
            sin: 232,
            'e. ': 233,
            ' ko': 234,
            ' ic': 235,
            aru: 236,
            mba: 237,
            adz: 238,
            ava: 239,
            'a) ': 240,
            'pi ': 241,
            mak: 242,
            ina: 243,
            mut: 244,
            ted: 245,
            'a w': 246,
            uma: 247,
            pir: 248,
            nez: 249,
            ura: 250,
            zvo: 251,
            ran: 252,
            era: 253,
            vis: 254,
            ute: 255,
            'u a': 256,
            'e m': 257,
            enz: 258,
            'ri)': 259,
            uny: 260,
            'yo ': 261,
            fan: 262,
            ' iy': 263,
            ush: 264,
            aan: 265,
            oko: 266,
            yor: 267,
            hek: 268,
            'no ': 269,
            asa: 270,
            guv: 271,
            ton: 272,
            'a a': 273,
            'ga)': 274,
            cho: 275,
            hok: 276,
            azv: 277,
            vem: 278,
            osh: 279,
            'i) ': 280,
            'da ': 281,
            ait: 282,
            ' ac': 283,
            ' ny': 284,
            him: 285,
            uri: 286,
            'a s': 287,
            muk: 288,
            kun: 289,
            egu: 290,
            ngi: 291,
            nid: 292,
            mir: 293,
            ima: 294,
            nza: 295,
            sar: 296,
            zid: 297,
            'a u': 298,
            'a c': 299,
            uwa: 300
        }
    };
    exports.default = sn;
});
//# sourceMappingURL=sn.js.map