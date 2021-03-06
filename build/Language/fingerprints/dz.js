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
    const dz = {
        id: 'dz',
        name: 'Dzongkha',
        trigrams: { '199': 122,
            '200': 105,
            '996': 110,
            ' th': 0,
            'ས་ག': 1,
            'ིག་': 2,
            igh: 3,
            the: 4,
            ' of': 5,
            'he ': 6,
            ion: 7,
            uni: 8,
            udh: 9,
            'on ': 10,
            '་གཅ': 11,
            'གིས': 12,
            'ིས་': 13,
            '་ར་': 14,
            hts: 15,
            'གཅི': 16,
            ' hu': 17,
            rig: 18,
            'of ': 19,
            'ts ': 20,
            'an ': 21,
            '་གི': 22,
            hum: 23,
            '་ག་': 24,
            ght: 25,
            'e o': 26,
            ' pr': 27,
            nic: 28,
            ver: 29,
            ode: 30,
            uma: 31,
            sio: 32,
            'ཅིག': 33,
            ers: 34,
            'in ': 35,
            man: 36,
            cod: 37,
            dhr: 38,
            'ག་ར': 39,
            ' ri': 40,
            'n r': 41,
            ico: 42,
            jec: 43,
            hig: 44,
            'ww.': 45,
            's p': 46,
            'de.': 47,
            ' འག': 48,
            '- འ': 49,
            '་དབ': 50,
            '་དག': 51,
            'མ་ཚ': 52,
            'l d': 53,
            '© 1': 54,
            '་སྤ': 55,
            'ct,': 56,
            'r. ': 57,
            off: 58,
            'ལུ་': 59,
            '.or': 60,
            mmi: 61,
            'd b': 62,
            dec: 63,
            'is ': 64,
            'བད་': 65,
            htt: 66,
            'ུ་ས': 67,
            'མཏམ': 68,
            's t': 69,
            '་མཏ': 70,
            'ྲོ་': 71,
            'h c': 72,
            'ན་ཆ': 73,
            ngk: 74,
            'ྒྱེ': 75,
            red: 76,
            '་ལས': 77,
            '://': 78,
            'མི་': 79,
            epa: 80,
            'de”': 81,
            '---': 82,
            'ྤུན': 83,
            't v': 84,
            'r h': 85,
            tex: 86,
            '་རི': 87,
            '་ཆ་': 88,
            ' co': 89,
            for: 90,
            pre: 91,
            '96 ': 92,
            lai: 93,
            '009': 94,
            pla: 95,
            'n t': 96,
            'p:/': 97,
            'གས་': 98,
            'བ་མ': 99,
            ' – ': 100,
            tio: 101,
            'ལས་': 102,
            lar: 103,
            '་བ་': 104,
            ', h': 106,
            '“ud': 107,
            'hr.': 108,
            'འདྲ': 109,
            'སྟན': 111,
            'ད་ས': 112,
            'ང་ཆ': 113,
            ' “u': 114,
            zon: 115,
            'ག་བ': 116,
            are: 117,
            'ོ་བ': 118,
            'tp:': 119,
            sal: 120,
            'དགོ': 121,
            ' ht': 123,
            ive: 124,
            ecl: 125,
            par: 126,
            'ed ': 127,
            rsi: 128,
            '” p': 129,
            'ི་ད': 130,
            'བང་': 131,
            'hr ': 132,
            org: 133,
            pro: 134,
            'er ': 135,
            'ར་ད': 136,
            ner: 137,
            '//w': 138,
            'འི་': 139,
            '་བས': 140,
            one: 141,
            'g/u': 142,
            'བསྟ': 143,
            rsa: 144,
            'ི་ར': 145,
            'w.u': 146,
            '- d': 147,
            ' un': 148,
            'རིག': 149,
            ffi: 150,
            roj: 151,
            'rg/': 152,
            'or ': 153,
            ' 20': 154,
            cla: 155,
            'al ': 156,
            'ན་ད': 157,
            ' - ': 158,
            ' --': 159,
            mis: 160,
            'ཏམ་': 161,
            '་སྒ': 162,
            'གོ།': 163,
            ext: 164,
            'e h': 165,
            ' dz': 166,
            'y t': 167,
            's -': 168,
            rat: 169,
            '་དམ': 170,
            'a ©': 171,
            ect: 172,
            thi: 173,
            iss: 174,
            dzo: 175,
            com: 176,
            oje: 177,
            '. -': 178,
            www: 179,
            '6 –': 180,
            '9 t': 181,
            '་ཚི': 182,
            'ྱེཝ': 183,
            'ུན་': 184,
            ' de': 185,
            'f h': 186,
            fic: 187,
            '– 2': 188,
            ain: 189,
            ara: 190,
            'འབད': 191,
            'འགྲ': 192,
            'ག་ལ': 193,
            'r i': 194,
            't, ': 195,
            'ཆའི': 196,
            'ྲ་མ': 197,
            '་འད': 198,
            'དབང': 199,
            '09 ': 200,
            'r f': 201,
            'n o': 202,
            'ha ': 203,
            'by ': 204,
            ' in': 205,
            'དྲ་': 206,
            'སྤུ': 207,
            ' fo': 208,
            '་ལུ': 209,
            '/ud': 210,
            'སྒྱ': 211,
            'n u': 212,
            gkh: 213,
            'ཝ་ལ': 214,
            'ག་ག': 215,
            'ར་ག': 216,
            'གྲོ': 217,
            'ce ': 218,
            ' © ': 219,
            'མ་འ': 220,
            ' by': 221,
            'e.o': 222,
            'f t': 223,
            ' 19': 224,
            kha: 225,
            'ེཝ་': 226,
            omm: 227,
            niv: 228,
            his: 229,
            ttp: 230,
            'ཆ་འ': 231,
            '་འབ': 232,
            ' hi': 233,
            '-- ': 234,
            ' te': 235,
            'gh ': 236,
            'ིགས': 237,
            ssi: 238,
            '་ཆའ': 239,
            '.un': 240,
            ong: 241,
            'e “': 242,
            'xt ': 243,
            ' pl': 244,
            rep: 245,
            'དམ་': 246,
            ice: 247,
            '/ww': 248,
            'n p': 249,
            'ྟན་': 250,
            ati: 251,
            '་མི': 252,
            'ཚིག': 253,
            ' ve': 254,
            'e” ': 255
        }
    };
    exports.default = dz;
});
//# sourceMappingURL=dz.js.map