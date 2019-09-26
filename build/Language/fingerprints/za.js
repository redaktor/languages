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
    const za = {
        id: 'za',
        name: 'Zhuang, Northern',
        trigrams: { bou: 0,
            ' di': 1,
            enz: 2,
            aeu: 3,
            'uz ': 4,
            eng: 5,
            'iz ': 6,
            'ih ': 7,
            ing: 8,
            ' bo': 9,
            'nz ': 10,
            oux: 11,
            'uq ': 12,
            ' ca': 13,
            'z d': 14,
            dih: 15,
            'ux ': 16,
            cae: 17,
            ngh: 18,
            gen: 19,
            'z g': 20,
            euq: 21,
            ' da': 22,
            you: 23,
            ung: 24,
            ngz: 25,
            ' gi': 26,
            ' mi': 27,
            miz: 28,
            'ij ': 29,
            aen: 30,
            ' ge': 31,
            'z c': 32,
            gya: 33,
            ouj: 34,
            'ng ': 35,
            ' yi': 36,
            ' de': 37,
            ' ci': 38,
            'uj ': 39,
            cin: 40,
            ien: 41,
            ngj: 42,
            dae: 43,
            mbo: 44,
            ' gu': 45,
            ' mb': 46,
            ' se': 47,
            zli: 48,
            gij: 49,
            ang: 50,
            ' ba': 51,
            ouz: 52,
            'z, ': 53,
            nae: 54,
            yin: 55,
            ' cu': 56,
            'j d': 57,
            'j g': 58,
            iuz: 59,
            dai: 60,
            aih: 61,
            'h g': 62,
            nzl: 63,
            '. d': 64,
            ' cw': 65,
            euz: 66,
            diu: 67,
            ' yo': 68,
            'x m': 69,
            yau: 70,
            hci: 71,
            vun: 72,
            'z y': 73,
            inh: 74,
            'j b': 75,
            wyo: 76,
            ' ga': 77,
            cwy: 78,
            'oz ': 79,
            nda: 80,
            'h c': 81,
            ' nd': 82,
            ' ro': 83,
            vei: 84,
            'x b': 85,
            'iq ': 86,
            oxn: 87,
            rox: 88,
            'de ': 89,
            'q g': 90,
            'gz ': 91,
            'i c': 92,
            ' si': 93,
            gue: 94,
            yen: 95,
            xna: 96,
            unz: 97,
            cun: 98,
            hoz: 99,
            can: 100,
            bau: 101,
            inz: 102,
            'nj ': 103,
            ihc: 104,
            'z b': 105,
            dan: 106,
            'ix ': 107,
            ' hi': 108,
            ' gy': 109,
            'uh ': 110,
            'z h': 111,
            yie: 112,
            ' vu': 113,
            'li ': 114,
            'ei ': 115,
            'q c': 116,
            faz: 117,
            'gh ': 118,
            uek: 119,
            'z m': 120,
            goz: 121,
            hin: 122,
            zci: 123,
            ' fa': 124,
            ' bi': 125,
            gun: 126,
            cib: 127,
            aej: 128,
            ' li': 129,
            ' ae': 130,
            'gj ': 131,
            'wz ': 132,
            ciz: 133,
            'ej ': 134,
            ouq: 135,
            den: 136,
            gva: 137,
            ngq: 138,
            kgy: 139,
            nhy: 140,
            ' do': 141,
            'z s': 142,
            ekg: 143,
            ' go': 144,
            'nh ': 145,
            sei: 146,
            ' wn': 147,
            'ya ': 148,
            eiq: 149,
            eix: 150,
            gei: 151,
            auj: 152,
            ' ha': 153,
            gai: 154,
            'z. ': 155,
            ', m': 156,
            'h d': 157,
            aiq: 158,
            'q s': 159,
            'nq ': 160,
            sen: 161,
            ', d': 162,
            'j n': 163,
            'uz,': 164,
            'au ': 165,
            'q d': 166,
            eih: 167,
            'h s': 168,
            'h y': 169,
            nei: 170,
            lij: 171,
            jso: 172,
            'u d': 173,
            'q y': 174,
            enh: 175,
            sev: 176,
            'h m': 177,
            gjs: 178,
            ', c': 179,
            sou: 180,
            bin: 181,
            'ou ': 182,
            eve: 183,
            sin: 184,
            'j c': 185,
            vih: 186,
            'az ': 187,
            awz: 188,
            din: 189,
            enj: 190,
            'ci ': 191,
            nge: 192,
            ouh: 193,
            'q n': 194,
            uen: 195,
            ' la': 196,
            hye: 197,
            ' ne': 198,
            liz: 199,
            bae: 200,
            'h b': 201,
            anj: 202,
            'j s': 203,
            wng: 204,
            'z n': 205,
            awj: 206,
            'j y': 207,
            'in ': 208,
            ozc: 209,
            bwn: 210,
            siz: 211,
            ghc: 212,
            ' ya': 213,
            anz: 214,
            bie: 215,
            enq: 216,
            hix: 217,
            oen: 218,
            'nz,': 219,
            anh: 220,
            'i d': 221,
            gak: 222,
            zda: 223,
            ghg: 224,
            'z r': 225,
            zsi: 226,
            'i, ': 227,
            'z l': 228,
            'h f': 229,
            ngg: 230,
            dun: 231,
            ' co': 232,
            ngd: 233,
            ' du': 234,
            'x d': 235,
            law: 236,
            cuz: 237,
            cou: 238,
            eiz: 239,
            'i. ': 240,
            ', g': 241,
            'ek ': 242,
            'g g': 243,
            'g c': 244,
            nzg: 245,
            'j m': 246,
            ' ho': 247,
            '. b': 248,
            'j, ': 249,
            nvi: 250,
            env: 251,
            'aj ': 252,
            'ak ': 253,
            'u, ': 254,
            dei: 255,
            'q b': 256,
            ', h': 257,
            hen: 258,
            ujc: 259,
            'et ': 260,
            min: 261,
            wnj: 262,
            nde: 263,
            'z v': 264,
            izy: 265,
            ujh: 266,
            jhu: 267,
            ozg: 268,
            ' dw': 269,
            giz: 270,
            auy: 271,
            gzd: 272,
            hgy: 273,
            'en ': 274,
            'a d': 275,
            'u c': 276,
            iqg: 277,
            qgy: 278,
            daw: 279,
            yaw: 280,
            gzs: 281,
            yai: 282,
            ', y': 283,
            gda: 284,
            ' ve': 285,
            yuz: 286,
            iet: 287,
            'aw ': 288,
            ihn: 289,
            'q, ': 290,
            iuj: 291,
            hng: 292,
            uyu: 293,
            zge: 294,
            '. g': 295,
            ' na': 296,
            zbi: 297,
            't b': 298,
            zdi: 299,
            'i g': 300
        }
    };
    exports.default = za;
});
//# sourceMappingURL=za.js.map