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
    const zai = {
        id: 'zai',
        name: 'Zapotec, Istmo',
        trigrams: { ' ca': 0,
            'ni ': 1,
            ' la': 2,
            'ca ': 3,
            ' bi': 4,
            ' ne': 5,
            'ne ': 6,
            ' ni': 7,
            'be ': 8,
            laa: 9,
            ' na': 10,
            'a n': 11,
            ' gu': 12,
            dxi: 13,
            ' be': 14,
            'tu ': 15,
            abe: 16,
            'i c': 17,
            aca: 18,
            'ti ': 19,
            ' qu': 20,
            'i n': 21,
            'a c': 22,
            que: 23,
            nda: 24,
            'e n': 25,
            'ra ': 26,
            'e l': 27,
            'na ': 28,
            'a b': 29,
            'aa ': 30,
            'da ': 31,
            'xi ': 32,
            ' tu': 33,
            ' di': 34,
            ' ra': 35,
            'e c': 36,
            idx: 37,
            ' pa': 38,
            'i b': 39,
            'ue ': 40,
            'a l': 41,
            ani: 42,
            cab: 43,
            ' nu': 44,
            'de ': 45,
            'u n': 46,
            ', n': 47,
            ' st': 48,
            'bi ': 49,
            'qué': 50,
            'a d': 51,
            'ué ': 52,
            ' ru': 53,
            ' de': 54,
            'i l': 55,
            'e b': 56,
            ' ma': 57,
            sti: 58,
            uni: 59,
            aan: 60,
            '. n': 61,
            inn: 62,
            'a g': 63,
            gui: 64,
            dio: 65,
            'uu ': 66,
            ios: 67,
            'ma ': 68,
            bin: 69,
            'a r': 70,
            'di ': 71,
            'i g': 72,
            'ru ': 73,
            nni: 74,
            'pa ': 75,
            ' pu': 76,
            ' za': 77,
            ' lu': 78,
            pur: 79,
            ' ga': 80,
            'si ': 81,
            'ga ': 82,
            ' ri': 83,
            '\'. ': 84,
            'i d': 85,
            and: 86,
            can: 87,
            ara: 88,
            ' dx': 89,
            par: 90,
            ' pe': 91,
            ' ti': 92,
            'i r': 93,
            'la?': 94,
            'a? ': 95,
            ' ir': 96,
            'e. ': 97,
            aqu: 98,
            cad: 99,
            'lu ': 100,
            dxa: 101,
            '. p': 102,
            adx: 103,
            '\', ': 104,
            'u l': 105,
            'a t': 106,
            ' ch': 107,
            'nu ': 108,
            'u c': 109,
            ' ng': 110,
            'ca\'': 111,
            eru: 112,
            'os ': 113,
            adi: 114,
            'e r': 115,
            per: 116,
            rti: 117,
            'né ': 118,
            urt: 119,
            ' xi': 120,
            aab: 121,
            atu: 122,
            'e, ': 123,
            aac: 124,
            'rá ': 125,
            nuu: 126,
            'ee ': 127,
            aat: 128,
            'ii ': 129,
            ana: 130,
            'irá': 131,
            end: 132,
            nga: 133,
            'e g': 134,
            'u. ': 135,
            'e d': 136,
            naa: 137,
            abi: 138,
            'u, ': 139,
            'i t': 140,
            gun: 141,
            chi: 142,
            'du ': 143,
            ', p': 144,
            ' si': 145,
            'ba ': 146,
            'xa ': 147,
            'i q': 148,
            'a x': 149,
            'a s': 150,
            xii: 151,
            caa: 152,
            'a. ': 153,
            ' cr': 154,
            ora: 155,
            'iiñ': 156,
            aba: 157,
            ' or': 158,
            nna: 159,
            'u d': 160,
            ': —': 161,
            ' nd': 162,
            raq: 163,
            'i s': 164,
            daa: 165,
            run: 166,
            lad: 167,
            asi: 168,
            '\' n': 169,
            'a i': 170,
            'i. ': 171,
            ' né': 172,
            'a, ': 173,
            'e t': 174,
            'a p': 175,
            'ya ': 176,
            ' cu': 177,
            'í\' ': 178,
            nan: 179,
            ann: 180,
            iid: 181,
            'e i': 182,
            'u s': 183,
            aga: 184,
            qui: 185,
            'be.': 186,
            ris: 187,
            'hi ': 188,
            cas: 189,
            'i, ': 190,
            uid: 191,
            'á n': 192,
            'i m': 193,
            'a q': 194,
            ini: 195,
            're ': 196,
            isa: 197,
            hui: 198,
            'a u': 199,
            rab: 200,
            'e p': 201,
            gue: 202,
            dii: 203,
            ' je': 204,
            'e s': 205,
            'lú ': 206,
            eda: 207,
            obi: 208,
            'he ': 209,
            ist: 210,
            tob: 211,
            'a\'.': 212,
            'e z': 213,
            eza: 214,
            che: 215,
            bid: 216,
            'i i': 217,
            'i p': 218,
            apa: 219,
            ' du': 220,
            nab: 221,
            ixh: 222,
            ica: 223,
            anu: 224,
            ' to': 225,
            udi: 226,
            stu: 227,
            jes: 228,
            ' uc': 229,
            'u r': 230,
            uii: 231,
            'tu.': 232,
            uaa: 233,
            'é n': 234,
            ' zu': 235,
            'a j': 236,
            'ní\'': 237,
            'e q': 238,
            'u b': 239,
            cay: 240,
            bia: 241,
            'be,': 242,
            uca: 243,
            hua: 244,
            'i j': 245,
            'i u': 246,
            'a\',': 247,
            'tu,': 248,
            cri: 249,
            'za ': 250,
            'la\'': 251,
            aad: 252,
            ' hu': 253,
            bis: 254,
            usi: 255,
            'u p': 256,
            idi: 257,
            'a\'d': 258,
            xhe: 259,
            lac: 260,
            'ná ': 261,
            'cá ': 262,
            iqu: 263,
            cha: 264,
            ' ya': 265,
            iaa: 266,
            ' zi': 267,
            'ni.': 268,
            ' en': 269,
            'á c': 270,
            tii: 271,
            ' sa': 272,
            aya: 273,
            nez: 274,
            ala: 275,
            'u t': 276,
            ' li': 277,
            ila: 278,
            'a z': 279,
            gan: 280,
            ayu: 281,
            man: 282,
            'a m': 283,
            'u g': 284,
            '\'dx': 285,
            'ó\' ': 286,
            gud: 287,
            ' xp': 288,
            'esú': 289,
            'sús': 290,
            uti: 291,
            'e u': 292,
            zac: 293,
            '. o': 294,
            'xe ': 295,
            ubi: 296,
            'ña ': 297,
            'ta ': 298,
            sac: 299,
            ' ju': 300
        }
    };
    exports.default = zai;
});
//# sourceMappingURL=zai.js.map