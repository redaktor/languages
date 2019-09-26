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
    const cbt = {
        id: 'cbt',
        name: 'Chayahuita',
        trigrams: { 'huë': 0,
            hua: 1,
            ' ya': 2,
            ina: 3,
            '\'hu': 4,
            '\'. ': 5,
            'ya\'': 6,
            chi: 7,
            ' ni': 8,
            'uër': 9,
            hin: 10,
            ' no': 11,
            'a\'h': 12,
            aso: 13,
            ' co': 14,
            rin: 15,
            'quë': 16,
            aca: 17,
            'a\' ': 18,
            'so\'': 19,
            'ëri': 20,
            ach: 21,
            'ya ': 22,
            api: 23,
            'uë\'': 24,
            'pi ': 25,
            'o\' ': 26,
            'ua\'': 27,
            '\', ': 28,
            '\' y': 29,
            'a n': 30,
            cas: 31,
            opi: 32,
            ahu: 33,
            poa: 34,
            ohu: 35,
            noy: 36,
            oya: 37,
            npo: 38,
            'ëhu': 39,
            'co ': 40,
            'na\'': 41,
            'a\'i': 42,
            'an ': 43,
            ipi: 44,
            'a\'.': 45,
            'ë\'.': 46,
            ' na': 47,
            ' ma': 48,
            nan: 49,
            inp: 50,
            sha: 51,
            '\' n': 52,
            ' pi': 53,
            nap: 54,
            '. n': 55,
            'a \'': 56,
            ana: 57,
            ' in': 58,
            uac: 59,
            ' hu': 60,
            '\'ip': 61,
            'arë': 62,
            nhu: 63,
            'a\',': 64,
            '\'sa': 65,
            nin: 66,
            inh: 67,
            'in.': 68,
            'n. ': 69,
            'na ': 70,
            'so ': 71,
            ' qu': 72,
            iya: 73,
            yap: 74,
            mar: 75,
            'ha ': 76,
            ' pa': 77,
            'oa\'': 78,
            pin: 79,
            'ëra': 80,
            'tër': 81,
            piy: 82,
            'uën': 83,
            iso: 84,
            pir: 85,
            '. c': 86,
            nto: 87,
            '\'na': 88,
            ita: 89,
            'ë\' ': 90,
            ' a\'': 91,
            'sa\'': 92,
            '. y': 93,
            nta: 94,
            toh: 95,
            ', n': 96,
            cat: 97,
            ant: 98,
            'a, ': 99,
            ran: 100,
            nis: 101,
            ata: 102,
            tac: 103,
            'o m': 104,
            'i p': 105,
            'rë\'': 106,
            ish: 107,
            ais: 108,
            'ërë': 109,
            'ta ': 110,
            pit: 111,
            'no\'': 112,
            'a y': 113,
            ', c': 114,
            top: 115,
            cai: 116,
            aqu: 117,
            rno: 118,
            cop: 119,
            irn: 120,
            ton: 121,
            'o n': 122,
            oro: 123,
            yon: 124,
            'in ': 125,
            '\'in': 126,
            'o\'s': 127,
            'tëh': 128,
            'na,': 129,
            'a\'n': 130,
            ' sa': 131,
            'n a': 132,
            'rëh': 133,
            ito: 134,
            'ën ': 135,
            'atë': 136,
            hui: 137,
            'ta\'': 138,
            'nën': 139,
            'n n': 140,
            '. a': 141,
            '\'të': 142,
            'a p': 143,
            uan: 144,
            ' an': 145,
            sac: 146,
            ins: 147,
            nac: 148,
            'i n': 149,
            'ë\',': 150,
            ont: 151,
            'a\'a': 152,
            apo: 153,
            nqu: 154,
            nit: 155,
            '\' c': 156,
            '\'an': 157,
            'ro\'': 158,
            ' \'h': 159,
            ato: 160,
            ' ca': 161,
            ani: 162,
            pac: 163,
            ' to': 164,
            ino: 165,
            pah: 166,
            'n q': 167,
            'no ': 168,
            'uë ': 169,
            int: 170,
            ini: 171,
            ', a': 172,
            qui: 173,
            par: 174,
            oas: 175,
            tah: 176,
            iri: 177,
            '. i': 178,
            ica: 179,
            'ma ': 180,
            ihu: 181,
            'ënt': 182,
            'ëca': 183,
            ona: 184,
            'a h': 185,
            nch: 186,
            noh: 187,
            'ëqu': 188,
            'ma\'': 189,
            '\' p': 190,
            'i c': 191,
            'ri ': 192,
            'ënp': 193,
            'anë': 194,
            nip: 195,
            coi: 196,
            'ënë': 197,
            ama: 198,
            'n, ': 199,
            'pi\'': 200,
            ' a ': 201,
            'itë': 202,
            'tëq': 203,
            ari: 204,
            'i. ': 205,
            ' të': 206,
            ' am': 207,
            naq: 208,
            'n p': 209,
            inc: 210,
            onq: 211,
            'on ': 212,
            cha: 213,
            'o\'.': 214,
            npa: 215,
            san: 216,
            ' \'i': 217,
            uir: 218,
            soh: 219,
            shi: 220,
            ian: 221,
            niy: 222,
            uat: 223,
            '\'pa': 224,
            pia: 225,
            oso: 226,
            ain: 227,
            nor: 228,
            'uëc': 229,
            oin: 230,
            'ni ': 231,
            '\' a': 232,
            iyo: 233,
            nso: 234,
            'o\'t': 235,
            'ntë': 236,
            ' \'n': 237,
            'a c': 238,
            nat: 239,
            'o t': 240,
            npi: 241,
            onp: 242,
            ' yo': 243,
            tin: 244,
            'i\'s': 245,
            ' ta': 246,
            'a\'s': 247,
            'a\'c': 248,
            'a q': 249,
            hac: 250,
            'pi.': 251,
            '. 2': 252,
            ', t': 253,
            'o a': 254,
            cac: 255,
            '. 1': 256,
            'o i': 257,
            'a\'p': 258,
            nos: 259,
            ' ch': 260,
            'i \'': 261,
            sor: 262,
            '. p': 263,
            ' sh': 264,
            oca: 265,
            'i y': 266,
            ima: 267,
            tot: 268,
            'nëh': 269,
            pat: 270,
            map: 271,
            ' pë': 272,
            'ëma': 273,
            'a t': 274,
            'hi ': 275,
            'ë n': 276,
            hit: 277,
            apa: 278,
            non: 279,
            'uëm': 280,
            nti: 281,
            ara: 282,
            '\'sh': 283,
            'ua ': 284,
            'pa\'': 285,
            'n i': 286,
            ', y': 287,
            'o y': 288,
            ota: 289,
            och: 290,
            ', i': 291,
            ano: 292,
            ' po': 293,
            'a m': 294,
            art: 295,
            ori: 296,
            'i a': 297,
            'tën': 298,
            nsh: 299,
            'rëc': 300
        }
    };
    exports.default = cbt;
});
//# sourceMappingURL=cbt.js.map