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
    const ja = {
        id: 'ja',
        name: 'Japanese (Romaji)',
        trigrams: { 'no ': 0,
            ' ni': 1,
            shi: 2,
            ' wo': 3,
            'wo ': 4,
            ' no': 5,
            'ou ': 94,
            'u n': 7,
            yuu: 8,
            ' sh': 9,
            'ni ': 10,
            tsu: 11,
            'ru ': 12,
            ' ko': 252,
            'su ': 14,
            'i n': 15,
            you: 16,
            'in ': 17,
            'a, ': 18,
            'u k': 19,
            ken: 20,
            ' ha': 21,
            oku: 22,
            'ai ': 23,
            ' ke': 24,
            ' ji': 25,
            'ha,': 26,
            eki: 27,
            'o s': 28,
            'ki ': 29,
            'bi ': 30,
            'ri ': 31,
            'i w': 32,
            ' ka': 33,
            'o k': 34,
            'i s': 35,
            'en ': 36,
            oyo: 37,
            'ku ': 38,
            nin: 39,
            obi: 40,
            uru: 41,
            enr: 42,
            ' oy': 43,
            yob: 44,
            ', k': 45,
            ' ru': 46,
            ' to': 47,
            nri: 48,
            'te ': 49,
            bet: 50,
            'i t': 51,
            sur: 52,
            'u s': 135,
            ana: 54,
            tek: 55,
            'uu ': 56,
            usu: 57,
            'n n': 58,
            ' su': 111,
            ete: 60,
            ' yu': 61,
            uus: 62,
            'u r': 63,
            sub: 64,
            ube: 65,
            kan: 66,
            ata: 67,
            'ru.': 68,
            'ha ': 69,
            ' se': 70,
            ite: 71,
            ' ho': 72,
            ' na': 73,
            ono: 74,
            hou: 75,
            kyo: 76,
            ' ma': 77,
            'u. ': 78,
            oto: 79,
            kou: 80,
            'o n': 81,
            ' sa': 82,
            kok: 83,
            'o y': 84,
            jou: 85,
            mat: 86,
            sei: 87,
            'i k': 88,
            hin: 89,
            ara: 90,
            'i, ': 91,
            aku: 92,
            'n h': 93,
            ' so': 95,
            nar: 96,
            kai: 97,
            ' jo': 98,
            gen: 99,
            eru: 100,
            jiy: 101,
            iyu: 102,
            'hi ': 103,
            hit: 104,
            ' ta': 105,
            sho: 106,
            ker: 107,
            kat: 108,
            ' mo': 109,
            dai: 110,
            nai: 112,
            ', s': 113,
            'o h': 114,
            kus: 115,
            'u w': 116,
            '. ': 117,
            ' d': 118,
            ' da': 119,
            kot: 120,
            aha: 121,
            dou: 122,
            ' ky': 123,
            ats: 124,
            'na ': 125,
            tah: 126,
            'u, ': 127,
            iyo: 128,
            'i o': 129,
            uke: 130,
            osh: 131,
            'a s': 132,
            'ei ': 133,
            shu: 134,
            'e n': 136,
            aka: 137,
            aru: 138,
            ush: 139,
            are: 140,
            ais: 141,
            jin: 142,
            ten: 143,
            son: 144,
            'e, ': 293,
            ish: 146,
            'o u': 147,
            sha: 148,
            'to ': 149,
            uko: 150,
            'o j': 151,
            ' uk': 152,
            kon: 153,
            eno: 154,
            'a k': 155,
            its: 156,
            'o, ': 157,
            'ai.': 158,
            ' de': 159,
            iko: 160,
            niy: 161,
            chi: 162,
            ika: 163,
            ran: 164,
            nak: 165,
            hak: 166,
            nge: 167,
            udo: 168,
            'i h': 169,
            ', j': 170,
            tai: 171,
            ', h': 172,
            tte: 173,
            'i j': 174,
            'i m': 175,
            sai: 176,
            sar: 177,
            han: 178,
            jik: 179,
            oud: 180,
            ruk: 181,
            'n w': 182,
            'o t': 183,
            tou: 184,
            ano: 185,
            nsh: 186,
            iku: 187,
            'u d': 188,
            'an ': 189,
            oui: 190,
            sen: 191,
            eng: 192,
            'te,': 193,
            kak: 194,
            ute: 195,
            ' te': 196,
            ' fu': 197,
            ban: 198,
            'hi,': 199,
            hok: 200,
            rer: 201,
            'mo,': 202,
            ', m': 203,
            uto: 204,
            ton: 205,
            uni: 206,
            'n s': 207,
            'e r': 208,
            'go ': 209,
            ouk: 210,
            uka: 211,
            ren: 212,
            'ko ': 213,
            'ui ': 214,
            ous: 215,
            'n t': 216,
            ' ga': 217,
            omo: 218,
            ets: 219,
            ' hi': 220,
            tos: 221,
            ott: 222,
            usa: 223,
            uik: 224,
            ode: 225,
            dea: 226,
            'o m': 227,
            ryo: 228,
            'ta ': 229,
            ', i': 230,
            'u t': 231,
            uuk: 232,
            ' do': 233,
            ani: 234,
            hii: 235,
            'i. ': 236,
            huu: 237,
            uky: 238,
            oka: 239,
            'a h': 240,
            nod: 241,
            tow: 242,
            ' ki': 243,
            ear: 244,
            ink: 245,
            nke: 246,
            'u o': 247,
            ona: 248,
            ann: 249,
            ame: 250,
            yot: 251,
            sui: 253,
            kun: 254,
            ' ch': 255,
            iki: 256,
            ake: 257,
            ere: 258,
            reb: 259,
            eba: 260,
            mon: 261,
            uku: 262,
            use: 263,
            ina: 264,
            toh: 265,
            oha: 266,
            'u j': 267,
            iji: 268,
            wom: 269,
            'n o': 270,
            'ga ': 271,
            our: 272,
            tan: 273,
            dan: 274,
            hog: 275,
            ogo: 276,
            'u m': 277,
            iho: 278,
            eik: 279,
            'u h': 280,
            out: 281,
            anz: 282,
            ' ku': 283,
            hik: 284,
            zai: 285,
            yor: 286,
            nan: 287,
            'n m': 288,
            kut: 289,
            'i 1': 290,
            owo: 291,
            nio: 292,
            kei: 294,
            mot: 295,
            ret: 296,
            isu: 297,
            rut: 298,
            oit: 299
        }
    };
    exports.default = ja;
});
//# sourceMappingURL=ja.js.map