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
    const bgr = {
        id: 'bgr',
        name: 'Bawm',
        trigrams: { ' ch': 0,
            chu: 1,
            'an ': 2,
            ' a ': 3,
            'ah ': 4,
            'ng ': 5,
            ' th': 6,
            hun: 7,
            hen: 8,
            'hu ': 9,
            ' he': 10,
            ' le': 11,
            'ih ': 12,
            ' ka': 13,
            ' an': 14,
            ' na': 15,
            ' tl': 16,
            'en ': 17,
            ' si': 18,
            ' mi': 19,
            ' la': 20,
            nih: 21,
            haw: 22,
            'a t': 23,
            'âk ': 24,
            tla: 25,
            'n, ': 26,
            ' ni': 27,
            ang: 28,
            'e, ': 29,
            'le,': 30,
            ' kh': 31,
            'n a': 32,
            'h a': 33,
            'la ': 34,
            awn: 35,
            wng: 36,
            'mi ': 37,
            ' ti': 38,
            'nâk': 39,
            kha: 40,
            'un ': 41,
            'n t': 42,
            'h c': 43,
            'un,': 44,
            thi: 45,
            'ka ': 46,
            ' ah': 47,
            '. c': 48,
            nan: 49,
            ung: 50,
            ' ra': 51,
            'a s': 52,
            ', a': 53,
            awh: 54,
            nah: 55,
            ing: 56,
            ' pa': 57,
            asi: 58,
            'h l': 59,
            ' as': 60,
            'i l': 61,
            ' lo': 62,
            'i. ': 63,
            awm: 64,
            'na ': 65,
            'u a': 66,
            'n s': 67,
            'i t': 68,
            ' di': 69,
            'al ': 70,
            thu: 71,
            'a n': 72,
            din: 73,
            ian: 74,
            ' ha': 75,
            'h n': 76,
            sin: 77,
            nga: 78,
            'lo ': 79,
            'a l': 80,
            ina: 81,
            'ak ': 82,
            'um ': 83,
            'ti ': 84,
            'h t': 85,
            hia: 86,
            'h k': 87,
            ' um': 88,
            ' ta': 89,
            rua: 90,
            raw: 91,
            'eh ': 92,
            'n k': 93,
            'si ': 94,
            uan: 95,
            leh: 96,
            lai: 97,
            ' hi': 98,
            'am ': 99,
            eih: 100,
            'g h': 101,
            kan: 102,
            'ei ': 103,
            'i h': 104,
            'n l': 105,
            gah: 106,
            'h, ': 107,
            'hi ': 108,
            'a h': 109,
            'n n': 110,
            ' \"': 111,
            the: 112,
            'i a': 113,
            'u t': 114,
            'a k': 115,
            zaw: 116,
            'tu ': 117,
            'hâw': 118,
            'h m': 119,
            ath: 120,
            pat: 121,
            ' ru': 122,
            'h. ': 123,
            'wm ': 124,
            'g t': 125,
            '\" ': 126,
            'g k': 127,
            'uh ': 128,
            'a a': 129,
            ' da': 130,
            'âng': 131,
            lun: 132,
            hei: 133,
            'k h': 134,
            tak: 135,
            mah: 136,
            ' ma': 137,
            sim: 138,
            'a c': 139,
            'h h': 140,
            ' hâ': 141,
            'i k': 142,
            ', \\': 143,
            tir: 144,
            'u n': 145,
            'âwi': 146,
            'm l': 147,
            'in ': 148,
            'ai ': 149,
            'wi ': 150,
            ' za': 151,
            'k a': 152,
            'g a': 153,
            'wh ': 154,
            'k l': 155,
            kah: 156,
            'pa ': 157,
            ' su': 158,
            zei: 159,
            tha: 160,
            'âwn': 161,
            ',\"': 162,
            'hnâ': 163,
            thl: 164,
            '" a': 165,
            'n m': 166,
            'n h': 167,
            'a u': 168,
            sua: 169,
            'at ': 170,
            'g l': 171,
            'a r': 172,
            lak: 173,
            'k t': 174,
            ', k': 175,
            aka: 176,
            'mh ': 177,
            'i n': 178,
            'ti.': 179,
            ann: 180,
            isu: 181,
            ', t': 182,
            'si.': 183,
            ' ng': 184,
            'ir ': 185,
            'ah,': 186,
            'a m': 187,
            'a d': 188,
            ' ze': 189,
            nun: 190,
            kal: 191,
            'h r': 192,
            'm a': 193,
            'au ': 194,
            ', n': 195,
            ual: 196,
            kho: 197,
            ikh: 198,
            ', c': 199,
            'a, ': 200,
            'a p': 201,
            'i c': 202,
            khu: 203,
            'n p': 204,
            'u l': 205,
            ' sa': 206,
            'en,': 207,
            lei: 208,
            'u k': 209,
            sel: 210,
            ele: 211,
            jis: 212,
            hil: 213,
            ' ji': 214,
            hua: 215,
            'su ': 216,
            'u c': 217,
            ' ṭh': 218,
            ' tâ': 219,
            sia: 220,
            ' mu': 221,
            lal: 222,
            'im ': 223,
            ' lâ': 224,
            'n r': 225,
            'ân ': 226,
            'i m': 227,
            'i r': 228,
            ' lu': 229,
            'k d': 230,
            awk: 231,
            'ngâ': 232,
            'i, ': 233,
            'âi ': 234,
            'ha ': 235,
            ', m': 236,
            ' ne': 237,
            ' tu': 238,
            hin: 239,
            'lh ': 240,
            hat: 241,
            'tâw': 242,
            auh: 243,
            'wh.': 244,
            awl: 245,
            ', p': 246,
            mse: 247,
            ' fa': 248,
            wms: 249,
            'o l': 250,
            'm t': 251,
            imh: 252,
            'wk ': 253,
            min: 254,
            nei: 255,
            'm n': 256,
            'pi ': 257,
            ' nu': 258,
            'l l': 259,
            'h p': 260,
            'h s': 261,
            'l t': 262,
            'ho ': 263,
            sik: 264,
            ' âu': 265,
            'pêk': 266,
            ani: 267,
            'n u': 268,
            'k n': 269,
            'm k': 270,
            'h d': 271,
            'n d': 272,
            'n c': 273,
            'ia ': 274,
            uah: 275,
            ' ph': 276,
            ' dâ': 277,
            alp: 278,
            'i z': 279,
            ial: 280,
            'u h': 281,
            'm c': 282,
            maw: 283,
            'si,': 284,
            'êk ': 285,
            han: 286,
            'onâ': 287,
            ngn: 288,
            lam: 289,
            'ṭha': 290,
            ngt: 291,
            muh: 292,
            hla: 293,
            ' se': 294,
            'la,': 295,
            ' pu': 296,
            ama: 297,
            'vân': 298,
            ' me': 299,
            ran: 300
        }
    };
    exports.default = bgr;
});
//# sourceMappingURL=bgr.js.map