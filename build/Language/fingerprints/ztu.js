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
    const ztu = {
        id: 'ztu',
        name: 'Zapotec, Güilá',
        trigrams: { 'ny ': 0,
            'a:a': 1,
            'u:u': 2,
            ' bu': 3,
            'bu:': 4,
            ':un': 5,
            nny: 6,
            unn: 7,
            ' ra': 8,
            'e:e': 9,
            ':a\'': 10,
            ':e\'': 11,
            ' pa': 12,
            ' na': 13,
            ' de': 14,
            'ih ': 15,
            'hr ': 16,
            pah: 17,
            ahr: 18,
            'e\'c': 19,
            'a\' ': 20,
            'ee\'': 21,
            ' ga': 22,
            '\' b': 23,
            'ta\'': 24,
            'a\'t': 25,
            'y n': 26,
            'na:': 27,
            'a\'p': 28,
            'ra\'': 29,
            'y r': 30,
            ere: 31,
            '\'ta': 32,
            der: 33,
            '\'ch': 34,
            '\'p ': 35,
            ree: 36,
            'ch ': 37,
            ' ch': 38,
            ':a ': 39,
            ':i\'': 40,
            'ra:': 41,
            'nn ': 42,
            ' x:': 43,
            'r g': 44,
            chi: 45,
            'e\'i': 46,
            'i:i': 47,
            ' ni': 48,
            rih: 49,
            'ra ': 50,
            ' gu': 51,
            'a p': 52,
            'ty ': 53,
            'te:': 54,
            'ga:': 55,
            nih: 56,
            'by ': 57,
            ':te': 58,
            'x:t': 59,
            'u\' ': 60,
            que: 61,
            'te\'': 62,
            '\'ih': 63,
            ' te': 64,
            'ei\'': 65,
            'h r': 66,
            '\'ty': 67,
            'i\'t': 68,
            ony: 69,
            oon: 70,
            yoo: 71,
            'e\' ': 72,
            uny: 73,
            'y b': 74,
            hnn: 75,
            ' qu': 76,
            'p d': 77,
            'a\'c': 78,
            'cy ': 79,
            'h c': 80,
            'cëh': 81,
            uei: 82,
            ' cë': 83,
            'ëhn': 84,
            'h p': 85,
            syo: 86,
            '\'cy': 87,
            '\'c ': 88,
            'ga\'': 89,
            ihb: 90,
            uun: 91,
            hby: 92,
            guu: 93,
            ') r': 94,
            'e:i': 95,
            ' la': 96,
            'h, ': 97,
            'y. ': 98,
            ' re': 99,
            ihz: 100,
            'ru\'': 101,
            ' zi': 102,
            asy: 103,
            'i\'c': 104,
            'i\' ': 105,
            'zi\'': 106,
            'h n': 107,
            'ny.': 108,
            'y g': 109,
            hih: 110,
            'aa ': 111,
            '\'ny': 112,
            'ye:': 113,
            ':e:': 114,
            'ly ': 115,
            'i\'n': 116,
            'y c': 117,
            iru: 118,
            '\' r': 119,
            taa: 120,
            hir: 121,
            're:': 122,
            'ni\'': 123,
            'e\'n': 124,
            'y x': 125,
            ' o ': 126,
            hzy: 127,
            ' xi': 128,
            ', c': 129,
            ' li': 130,
            ':al': 131,
            'y, ': 132,
            all: 133,
            'y z': 134,
            lly: 135,
            lah: 136,
            hzh: 137,
            '\'. ': 138,
            'a b': 139,
            'xi ': 140,
            ' pr': 141,
            'n r': 142,
            'ar ': 143,
            loh: 144,
            'e\'r': 145,
            nye: 146,
            'ni:': 147,
            ' ny': 148,
            aar: 149,
            'y a': 150,
            pro: 151,
            '. r': 152,
            'eh ': 153,
            'y t': 154,
            rta: 155,
            'h g': 156,
            'y l': 157,
            ahb: 158,
            ' co': 159,
            'h. ': 160,
            ida: 161,
            '. g': 162,
            '. t': 163,
            ' ah': 164,
            cla: 165,
            'ih,': 166,
            'y q': 167,
            'zy ': 168,
            '\'ri': 169,
            'a\'s': 170,
            'le\'': 171,
            ibe: 172,
            'r c': 173,
            ':i:': 174,
            ber: 175,
            'ca:': 176,
            lib: 177,
            ann: 178,
            ':a:': 179,
            ert: 180,
            'ny,': 181,
            'y d': 182,
            'e\'e': 183,
            'i\'i': 184,
            'r y': 185,
            ahz: 186,
            'er ': 187,
            'a l': 188,
            chu: 189,
            eer: 190,
            'a d': 191,
            ' gy': 192,
            'a\'r': 193,
            rnn: 194,
            dec: 195,
            daa: 196,
            ' ca': 197,
            'a x': 198,
            'r r': 199,
            lar: 200,
            nah: 201,
            '\'ll': 202,
            ecl: 203,
            'y p': 204,
            'o:o': 205,
            nni: 206,
            ' (2': 207,
            'e\'b': 208,
            ara: 209,
            '\' g': 210,
            '\'s ': 211,
            'a n': 212,
            '\' n': 213,
            'hu\'': 214,
            aht: 215,
            iny: 216,
            ' ts': 217,
            '\', ': 218,
            '\' d': 219,
            'zh:': 220,
            'h b': 221,
            ras: 222,
            nna: 223,
            yee: 224,
            ' (1': 225,
            'be:': 226,
            '\'eh': 227,
            gax: 228,
            '\'bl': 229,
            bye: 230,
            hah: 231,
            'oh ': 232,
            '. c': 233,
            'la:': 234,
            '. n': 235,
            lyu: 236,
            '\'rn': 237,
            'a\'z': 238,
            gah: 239,
            ' di': 240,
            wby: 241,
            ' ru': 242,
            yuh: 243,
            'p (': 244,
            '\'n ': 245,
            ' ze': 246,
            'a r': 247,
            uni: 248,
            'a\'a': 249,
            '-ni': 250,
            ' wb': 251,
            ' lo': 252,
            'p b': 253,
            'ze:': 254,
            'y (': 255,
            'n-n': 256,
            maa: 257,
            'co\'': 258,
            yih: 259,
            'n n': 260,
            'za\'': 261,
            blo: 262,
            hii: 263,
            'uh ': 264,
            jee: 265,
            rca: 266,
            ' rc': 267,
            dig: 268,
            ' mn': 269,
            lle: 270,
            ote: 271,
            '\'n-': 272,
            'se:': 273,
            'c t': 274,
            ion: 275,
            '\'in': 276,
            '\' p': 277,
            ' sa': 278,
            deh: 279,
            tej: 280,
            ' rr': 281,
            'y o': 282,
            'h y': 283,
            'ii\'': 284,
            'z b': 285,
            iga: 286,
            'll ': 287,
            hny: 288,
            hbt: 289,
            'h x': 290,
            eje: 291,
            tee: 292,
            'na\'': 293,
            'ah ': 294,
            'e\'.': 295,
            tse: 296,
            ':u\'': 297,
            cas: 298,
            rot: 299,
            'n d': 300
        }
    };
    exports.default = ztu;
});
//# sourceMappingURL=ztu.js.map