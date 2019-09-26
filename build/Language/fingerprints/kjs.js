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
    const kjs = {
        id: 'kjs',
        name: 'Kewa, East',
        trigrams: { ' go': 0,
            ali: 1,
            'na ': 2,
            ' ni': 3,
            imi: 4,
            'a p': 5,
            're ': 6,
            ' pa': 7,
            ' ko': 8,
            'ma ': 9,
            'go ': 10,
            'mi ': 11,
            '. g': 12,
            ' ra': 13,
            par: 14,
            'ra ': 15,
            ' pi': 16,
            'aa ': 17,
            'me ': 18,
            'e n': 19,
            ' ma': 20,
            'a. ': 21,
            naa: 22,
            'le ': 23,
            ada: 24,
            ale: 25,
            ena: 26,
            ara: 27,
            ' na': 28,
            isa: 29,
            nim: 30,
            'a k': 31,
            'pa ': 32,
            'a a': 33,
            are: 34,
            '-pa': 35,
            'e a': 36,
            'o p': 37,
            daa: 38,
            ipu: 39,
            aal: 40,
            uma: 41,
            'a r': 42,
            aga: 43,
            'li ': 44,
            nip: 45,
            ' al': 46,
            oma: 47,
            pir: 48,
            'a m': 49,
            'a n': 50,
            gal: 51,
            iri: 52,
            'a l': 53,
            ' pu': 54,
            'ri ': 55,
            ' ag': 56,
            'ne ': 57,
            pum: 58,
            alo: 59,
            umi: 60,
            'pe ': 61,
            ' en': 62,
            upa: 63,
            ' ad': 64,
            abu: 65,
            rab: 66,
            ina: 67,
            ' me': 68,
            lis: 69,
            rup: 70,
            una: 71,
            one: 72,
            '-ru': 73,
            kon: 74,
            mad: 75,
            eme: 76,
            'e k': 77,
            ala: 78,
            sim: 79,
            'pu ': 80,
            'e p': 81,
            ape: 82,
            raa: 83,
            lin: 84,
            'i m': 85,
            inu: 86,
            'sa.': 87,
            isi: 88,
            epe: 89,
            ' ya': 90,
            'e g': 91,
            'e m': 92,
            pag: 93,
            ' la': 94,
            'i n': 95,
            ore: 96,
            aap: 97,
            eda: 98,
            'i. ': 99,
            ' su': 100,
            'da ': 101,
            ote: 102,
            ana: 103,
            ' ep': 104,
            'a e': 105,
            got: 106,
            ame: 107,
            ' ka': 108,
            '-na': 109,
            'e r': 110,
            'mi.': 111,
            imu: 112,
            ' wa': 113,
            'e e': 114,
            ' ab': 115,
            gor: 116,
            ' ne': 117,
            lim: 118,
            'a-p': 119,
            'lo ': 120,
            'bu ': 121,
            'e. ': 122,
            'te-': 123,
            ' li': 124,
            'la ': 125,
            'i r': 126,
            age: 127,
            'u p': 128,
            ora: 129,
            'i p': 130,
            med: 131,
            'u n': 132,
            kom: 133,
            'o r': 134,
            ade: 135,
            ' pe': 136,
            'ge ': 137,
            'e l': 138,
            'o a': 139,
            ira: 140,
            aay: 141,
            aba: 142,
            'nu ': 143,
            pis: 144,
            pal: 145,
            ' re': 146,
            'i a': 147,
            'a g': 148,
            uri: 149,
            epa: 150,
            mea: 151,
            ' ru': 152,
            min: 153,
            ' lo': 154,
            'su ': 155,
            apa: 156,
            'u a': 157,
            ere: 158,
            'de ': 159,
            maa: 160,
            'lu ': 161,
            '. n': 162,
            yes: 163,
            esu: 164,
            'ea ': 165,
            'a s': 166,
            ' ye': 167,
            pun: 168,
            'go-': 169,
            ris: 170,
            ele: 171,
            ' or': 172,
            'a y': 173,
            bal: 174,
            'o-r': 175,
            lia: 176,
            ' mo': 177,
            ayo: 178,
            'u-p': 179,
            ' mu': 180,
            'u m': 181,
            lom: 182,
            pul: 183,
            nem: 184,
            '-me': 185,
            ome: 186,
            apu: 187,
            'i g': 188,
            'u r': 189,
            kal: 190,
            asa: 191,
            'a w': 192,
            api: 193,
            ' po': 194,
            ogo: 195,
            'i k': 196,
            aar: 197,
            ulu: 198,
            ' el': 199,
            'i e': 200,
            'u k': 201,
            pap: 202,
            'ru ': 203,
            pea: 204,
            'o k': 205,
            'no ': 206,
            'e-n': 207,
            'sa ': 208,
            mum: 209,
            'mo ': 210,
            ula: 211,
            ono: 212,
            '-pu': 213,
            'ia ': 214,
            'e w': 215,
            ' di': 216,
            'e y': 217,
            'e s': 218,
            war: 219,
            yaa: 220,
            nal: 221,
            gon: 222,
            '-da': 223,
            'aa-': 224,
            'ae ': 225,
            ' ki': 226,
            'o m': 227,
            ' aa': 228,
            kog: 229,
            'pe.': 230,
            lak: 231,
            ' le': 232,
            laa: 233,
            apo: 234,
            ' ip': 235,
            aan: 236,
            udu: 237,
            ' ke': 238,
            sum: 239,
            ama: 240,
            aru: 241,
            'pi ': 242,
            num: 243,
            ita: 244,
            lep: 245,
            paa: 246,
            'mu ': 247,
            mak: 248,
            mar: 249,
            mim: 250,
            lal: 251,
            lem: 252,
            agi: 253,
            koe: 254,
            'ni ': 255,
            alu: 256,
            ' ta': 257,
            ado: 258,
            tal: 259,
            'po ': 260,
            ' wi': 261,
            'ia.': 262,
            '-le': 263,
            pur: 264,
            uru: 265,
            rek: 266,
            dal: 267,
            ake: 268,
            ' sa': 269,
            ' ro': 270,
            kir: 271,
            nan: 272,
            aom: 273,
            'o e': 274,
            mud: 275,
            ipi: 276,
            'du ': 277,
            'u g': 278,
            dia: 279,
            'e-m': 280,
            rub: 281,
            aam: 282,
            'ea-': 283,
            'e-p': 284,
            'i y': 285,
            'a b': 286,
            aas: 287,
            ami: 288,
            ral: 289,
            rep: 290,
            'a: ': 291,
            rap: 292,
            'bi ': 293,
            'o n': 294,
            aka: 295,
            rum: 296,
            nap: 297,
            ' gi': 298,
            'i-p': 299,
            'i l': 300
        }
    };
    exports.default = kjs;
});
//# sourceMappingURL=kjs.js.map