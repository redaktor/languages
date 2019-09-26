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
    const hsb = {
        id: 'hsb',
        name: 'Sorbian, Upper',
        trigrams: { nje: 0,
            'je ': 1,
            ' a ': 2,
            pra: 3,
            raw: 4,
            ' sw': 5,
            ' pr': 6,
            ' wo': 7,
            swo: 8,
            ' na': 9,
            ' pł': 10,
            jen: 11,
            wob: 12,
            ' po': 13,
            ' za': 14,
            awo: 15,
            'a s': 16,
            'a p': 17,
            ' je': 18,
            'na ': 19,
            'wo ': 20,
            ' ma': 21,
            ' so': 22,
            'ch ': 23,
            owa: 24,
            wje: 25,
            anj: 26,
            'ne ': 27,
            enj: 28,
            'óžd': 29,
            'o n': 30,
            'a w': 31,
            'kóž': 32,
            ' kó': 33,
            'e p': 34,
            ' nj': 35,
            'dy ': 36,
            ' wu': 37,
            'ja ': 38,
            sta: 39,
            obo: 40,
            'ow ': 41,
            'płi': 42,
            bod: 43,
            'so ': 44,
            ' w ': 45,
            'płe': 46,
            abo: 47,
            'ždy': 48,
            tik: 49,
            'ma ': 50,
            'e a': 51,
            art: 52,
            ikl: 53,
            rti: 54,
            'kl ': 55,
            ' ar': 56,
            'e w': 57,
            'ć. ': 58,
            '. a': 59,
            'bo ': 60,
            'osć': 61,
            ' ab': 62,
            ich: 63,
            woj: 64,
            stw: 65,
            ' do': 66,
            nja: 67,
            'y m': 68,
            'ym ': 69,
            'ju ': 70,
            'e s': 71,
            ' st': 72,
            'dźe': 73,
            nym: 74,
            'dźě': 75,
            nos: 76,
            jed: 77,
            'o w': 78,
            jes: 79,
            ost: 80,
            odn: 81,
            ', s': 82,
            wan: 83,
            eho: 84,
            owj: 85,
            'ho ': 86,
            ' dź': 87,
            'a z': 88,
            jez: 89,
            'će ': 90,
            aro: 91,
            edn: 92,
            dow: 93,
            'ej ': 94,
            'o s': 95,
            'e z': 96,
            eje: 97,
            'e, ': 98,
            zje: 99,
            'mi ': 100,
            'ny ': 101,
            nju: 102,
            nar: 103,
            ych: 104,
            rod: 105,
            'wać': 106,
            'o, ': 107,
            'łow': 108,
            ', k': 109,
            'a a': 110,
            zak: 111,
            'o z': 112,
            nyc: 113,
            ' ko': 114,
            mje: 115,
            'wa ': 116,
            'čło': 117,
            'a d': 118,
            kot: 119,
            ske: 120,
            jew: 121,
            otr: 122,
            'o p': 123,
            awa: 124,
            'sće': 125,
            'u a': 126,
            ' čł': 127,
            ' zj': 128,
            ' tu': 129,
            two: 130,
            wot: 131,
            oje: 132,
            'ć, ': 133,
            dny: 134,
            'smě': 135,
            'h p': 136,
            kow: 137,
            pow: 138,
            'za ': 139,
            'ež ': 140,
            tut: 141,
            aja: 142,
            'e d': 143,
            ' wš': 144,
            awn: 145,
            dno: 146,
            'ez ': 147,
            adn: 148,
            ist: 149,
            'ć a': 150,
            'a n': 151,
            'i, ': 152,
            ako: 153,
            'a j': 154,
            jeh: 155,
            wow: 156,
            'łis': 157,
            raj: 158,
            isk: 159,
            eny: 160,
            man: 161,
            ' by': 162,
            'žiw': 163,
            'u p': 164,
            esm: 165,
            'y, ': 166,
            'i s': 167,
            ' sp': 168,
            ena: 169,
            tat: 170,
            'u w': 171,
            'm a': 172,
            'y p': 173,
            wos: 174,
            ', w': 175,
            'měr': 176,
            odo: 177,
            'm w': 178,
            'am ': 179,
            ', p': 180,
            ' to': 181,
            taj: 182,
            'l 2': 183,
            'adź': 184,
            dne: 185,
            ', z': 186,
            kej: 187,
            'l 1': 188,
            'u, ': 189,
            'u s': 190,
            'o j': 191,
            'mě ': 192,
            'šit': 193,
            'wši': 194,
            ' šk': 195,
            twa: 196,
            ski: 197,
            nic: 198,
            rje: 199,
            ' dr': 200,
            tre: 201,
            'a, ': 202,
            'ćen': 203,
            ' su': 204,
            'źěł': 205,
            ' mě': 206,
            'łeć': 207,
            'ě s': 208,
            'wój': 209,
            wne: 210,
            'mu ': 211,
            hro: 212,
            'wól': 213,
            'swó': 214,
            'o t': 215,
            'wěd': 216,
            'e č': 217,
            iwa: 218,
            'a m': 219,
            own: 220,
            'a t': 221,
            'ke ': 222,
            'łez': 223,
            emu: 224,
            jej: 225,
            tow: 226,
            ' zh': 227,
            ', d': 228,
            'o d': 229,
            kra: 230,
            'ić.': 231,
            'dźi': 232,
            'wo,': 233,
            ' te': 234,
            dru: 235,
            kit: 236,
            ' re': 237,
            'ki ': 238,
            'wšě': 239,
            'w a': 240,
            ran: 241,
            and: 242,
            woz: 243,
            tej: 244,
            jic: 245,
            ' ni': 246,
            'kła': 247,
            jem: 248,
            sto: 249,
            'la ': 250,
            'ž j': 251,
            odu: 252,
            'akł': 253,
            'u z': 254,
            'rež': 255,
            'słu': 256,
            ' mj': 257,
            run: 258,
            stu: 259,
            'i a': 260,
            'ład': 261,
            rom: 262,
            'eći': 263,
            'ški': 264,
            'sći': 265,
            oma: 266,
            ' z ': 267,
            opr: 268,
            nak: 269,
            ach: 270,
            sob: 271,
            zhr: 272,
            mad: 273,
            aln: 274,
            'ać.': 275,
            'su ': 276,
            ozj: 277,
            low: 278,
            cho: 279,
            pod: 280,
            wop: 281,
            atn: 282,
            bje: 283,
            els: 284,
            zna: 285,
            ' ja': 286,
            'lž ': 287,
            'isł': 288,
            'ić ': 289,
            'elž': 290,
            ami: 291,
            'łuš': 292,
            'm p': 293,
            ' kr': 294,
            oda: 295,
            'ž s': 296,
            'e m': 297,
            nej: 298,
            oci: 299,
            soc: 300
        }
    };
    exports.default = hsb;
});
//# sourceMappingURL=hsb.js.map