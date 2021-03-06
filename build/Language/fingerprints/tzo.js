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
    const tzo = {
        id: 'tzo',
        name: 'Tzotzil, Chamula',
        trigrams: { 'ta ': 0,
            ' ta': 1,
            'el ': 2,
            'ik ': 3,
            tik: 4,
            ' sk': 5,
            ' i ': 6,
            'a s': 7,
            ' st': 8,
            ech: 9,
            'un ': 10,
            'l t': 11,
            ' mu': 12,
            'k’u': 13,
            ' k’': 14,
            'ol ': 15,
            'uk ': 16,
            ' sp': 17,
            'u’u': 18,
            sta: 19,
            ' oy': 20,
            'e s': 21,
            eti: 22,
            ent: 23,
            '’un': 24,
            ' ju': 25,
            ere: 26,
            der: 27,
            rec: 28,
            cho: 29,
            'i s': 30,
            ane: 31,
            'oy ': 32,
            'il ': 33,
            '’k’': 34,
            sko: 35,
            ' ya': 36,
            jun: 37,
            'yu’': 38,
            'al ': 39,
            ' yu': 40,
            ' o ': 41,
            'sk’': 42,
            spa: 43,
            'te ': 44,
            'ke ': 45,
            pas: 46,
            '’ch': 47,
            oto: 48,
            tol: 49,
            kot: 50,
            jel: 51,
            nel: 52,
            nik: 53,
            'as ': 54,
            'k s': 55,
            'mu’': 56,
            'a’k': 57,
            'k’a': 58,
            ' va': 59,
            ' le': 60,
            'l i': 61,
            cha: 62,
            'l s': 63,
            'ho ': 64,
            '’ux': 65,
            ' ke': 66,
            'ch ': 67,
            ' si': 68,
            vin: 69,
            '’an': 70,
            'n s': 71,
            ini: 72,
            'o s': 73,
            ' ch': 74,
            sch: 75,
            sde: 76,
            'k t': 77,
            'i’c': 78,
            'e o': 79,
            ' sd': 80,
            ' de': 81,
            ' sc': 82,
            'a j': 83,
            art: 84,
            ' te': 85,
            une: 86,
            '’el': 87,
            ' ar': 88,
            '’u ': 89,
            rti: 90,
            'ch’': 91,
            'in ': 92,
            nte: 93,
            ulo: 94,
            'k’e': 95,
            yan: 96,
            ' xa': 97,
            ' ja': 98,
            kul: 99,
            ' ge': 100,
            ' vi': 101,
            'an ': 102,
            ale: 103,
            gen: 104,
            'lo:': 105,
            iku: 106,
            'o: ': 107,
            ele: 108,
            lum: 109,
            ' je': 110,
            bal: 111,
            nta: 112,
            'l y': 113,
            bil: 114,
            lek: 115,
            jec: 116,
            lel: 117,
            'l k': 118,
            'a y': 119,
            'a k': 120,
            'h’u': 121,
            ' bu': 122,
            ven: 123,
            'le ': 124,
            'u s': 125,
            'k o': 126,
            'l g': 127,
            'e. ': 128,
            'va ': 129,
            ela: 130,
            chi: 131,
            'xa ': 132,
            'a m': 133,
            's s': 134,
            chu: 135,
            'e m': 136,
            'si’': 137,
            'l, ': 138,
            'y s': 139,
            uxi: 140,
            ' sl': 141,
            ': s': 142,
            'k’i': 143,
            ', s': 144,
            ' a’': 145,
            'k i': 146,
            'u’k': 147,
            aci: 148,
            net: 149,
            'l o': 150,
            kux: 151,
            'k y': 152,
            ' ko': 153,
            ike: 154,
            alu: 155,
            'n k': 156,
            sba: 157,
            'k’o': 158,
            ' sv': 159,
            'k m': 160,
            '’uk': 161,
            'a t': 162,
            muk: 163,
            sve: 164,
            ion: 165,
            uni: 166,
            'i t': 167,
            ' s-': 168,
            'b a': 169,
            kol: 170,
            tal: 171,
            oje: 172,
            'k a': 173,
            'me ': 174,
            mil: 175,
            jol: 176,
            amt: 177,
            lik: 178,
            ' sb': 179,
            'l. ': 180,
            aje: 181,
            mte: 182,
            'l v': 183,
            tae: 184,
            tel: 185,
            'e, ': 186,
            'a o': 187,
            lan: 188,
            '’in': 189,
            lal: 190,
            umi: 191,
            's t': 192,
            'o t': 193,
            sto: 194,
            ile: 195,
            toj: 196,
            ' ba': 197,
            ' se': 198,
            stu: 199,
            one: 200,
            'oj ': 201,
            'y t': 202,
            ' sn': 203,
            cio: 204,
            ' me': 205,
            tak: 206,
            tad: 207,
            kil: 208,
            ' ts': 209,
            ' na': 210,
            'y y': 211,
            eje: 212,
            yuk: 213,
            ' sm': 214,
            lta: 215,
            'ak’': 216,
            'k k': 217,
            aik: 218,
            tsa: 219,
            tun: 220,
            'xa’': 221,
            ojo: 222,
            'o k': 223,
            'u’c': 224,
            'eb ': 225,
            'k, ': 226,
            han: 227,
            mal: 228,
            'a’b': 229,
            ael: 230,
            'es ': 231,
            ant: 232,
            eki: 233,
            'i k': 234,
            'ja’': 235,
            xch: 236,
            '-el': 237,
            'ik,': 238,
            ano: 239,
            bee: 240,
            'hi ': 241,
            lib: 242,
            '. j': 243,
            'h a': 244,
            eel: 245,
            'le.': 246,
            'a v': 247,
            'e i': 248,
            ' li': 249,
            sin: 250,
            noj: 251,
            'ju ': 252,
            ine: 253,
            'a b': 254,
            aki: 255,
            'el,': 256,
            uma: 257,
            laj: 258,
            lej: 259,
            'l l': 260,
            'bu ': 261,
            neb: 262,
            uxc: 263,
            ail: 264,
            olt: 265,
            oet: 266,
            ila: 267,
            xij: 268,
            ibe: 269,
            'n t': 270,
            'va’': 271,
            ' ku': 272,
            'ij ': 273,
            nac: 274,
            'a l': 275,
            tso: 276,
            'e j': 277,
            ' la': 278,
            'a a': 279,
            rta: 280,
            aju: 281,
            'l b': 282,
            'ib ': 283,
            'o y': 284,
            'hu’': 285,
            'x-e': 286,
            kxa: 287,
            'b s': 288,
            'e t': 289,
            oyu: 290,
            tai: 291,
            huk: 292,
            'ts ': 293,
            baj: 294,
            lti: 295,
            'n j': 296,
            ' sj': 297,
            che: 298,
            ban: 299,
            'l n': 300
        }
    };
    exports.default = tzo;
});
//# sourceMappingURL=tzo.js.map