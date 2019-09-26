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
    const buc = {
        id: 'buc',
        name: 'Bushi',
        trigrams: {
            'aŋa': 217,
            'ŋa ': 176,
            ' ni': 176,
            'a n': 136,
            'ni ': 132,
            'nin': 127,
            'ka ': 117,
            'in ': 115,
            'i n': 114,
            'si ': 112,
            'i a': 107,
            ' an': 102,
            'ndr': 101,
            'dre': 98,
            ' nd': 94,
            'a a': 93,
            'an ': 93,
            'eka': 92,
            ' ha': 90,
            'rek': 89,
            ' fi': 86,
            'ki ': 83,
            ' mi': 82,
            'la ': 82,
            ' am': 79,
            'ŋu ': 78,
            'isi': 77,
            'iku': 77,
            'uŋu': 76,
            ' na': 71,
            'hul': 70,
            'ulu': 70,
            'ula': 70,
            ' hu': 69,
            'luŋ': 68,
            'a m': 68,
            ' ma': 68,
            'n’n': 67,
            'u m': 67,
            'i h': 66,
            '’ni': 64,
            'aha': 62,
            'hak': 61,
            'in’': 61,
            ' ku': 60,
            'a h': 59,
            'ami': 59,
            'u n': 59,
            'aki': 59,
            'n f': 59,
            'min': 58,
            'zi ': 57,
            'kul': 56,
            'i m': 54,
            'ani': 52,
            'sha': 49,
            'u a': 49,
            ' fa': 48,
            'ana': 48,
            'a k': 43,
            'eu ': 42,
            'mis': 42,
            'ala': 41,
            'ha ': 40,
            'asi': 40,
            'azi': 39,
            'fik': 38,
            'afa': 38,
            'tsi': 37,
            'ama': 36,
            'a f': 35,
            ' ts': 35,
            ' ta': 35,
            ' sh': 35,
            'iaŋ': 34,
            'dja': 34,
            'tan': 33,
            'ira': 33,
            'a t': 33,
            'mu ': 33,
            'aka': 32,
            'uru': 32,
            'a i': 31,
            ' dj': 30,
            'nyi': 30,
            ' mu': 30,
            'naf': 29,
            'ŋan': 28,
            'ia ': 28,
            'reu': 28,
            'i f': 28,
            ' re': 27,
            ' au': 27,
            'a r': 27,
            'yi ': 27,
            'n h': 27,
            'fas': 27,
            'raŋ': 27,
            'izi': 27,
            'au ': 26,
            'i r': 26,
            'nik': 26,
            'li ': 26,
            'i k': 25,
            'ma ': 25,
            'naz': 25,
            'ata': 24,
            'ada': 24,
            ' iz': 24,
            ' ra': 24,
            ' ki': 24,
            'ara': 24,
            'n t': 24,
            'naŋ': 24,
            'har': 23,
            'i i': 23,
            'fih': 23,
            'rah': 23,
            'and': 23,
            ' it': 23,
            'ti ': 22,
            ' at': 22,
            'mbu': 22,
            'iny': 22,
            'ru ': 22,
            'ngu': 22,
            'u h': 22,
            ' ka': 22,
            'ali': 21,
            'ra ': 21,
            'laŋ': 21,
            'kur': 21,
            'i t': 21,
            'u k': 21,
            'itì': 21,
            'tì ': 21,
            ' mb': 21,
            'bu ': 21,
            'ifa': 21,
            'ari': 20,
            'ri ': 20,
            'vaŋ': 20,
            'bi ': 20,
            'imu': 20,
            'ihi': 20,
            'n u': 19,
            'n n': 19,
            'jab': 19,
            'abi': 19,
            'aru': 19,
            'uaŋ': 19,
            'ang': 19,
            'fid': 19,
            'ria': 18,
            'aza': 18,
            'faŋ': 18,
            'wi ': 17,
            'ian': 17,
            'i s': 17,
            ' da': 17,
            'u d': 17,
            'na ': 17,
            'ina': 17,
            'ro ': 17,
            'ahi': 17,
            'dam': 17,
            'a s': 17,
            'itr': 16,
            'i u': 16,
            'his': 16,
            'mah': 16,
            'mba': 16,
            'mia': 16,
            'tu ': 16,
            ' la': 16,
            'fa ': 16,
            ' ɓi': 16,
            'sis': 16,
            'a u': 16,
            'mus': 16,
            'amb': 16,
            'amu': 16,
            'ou ': 16,
            'kut': 16,
            'n d': 16,
            'sa ': 15,
            'gu ': 15,
            'nga': 15,
            'shi': 15,
            'hwi': 15,
            'ish': 15,
            'n s': 15,
            'aɓu': 15,
            'u i': 15,
            'usu': 14,
            'lal': 14,
            ' hi': 14,
            'ano': 14,
            'ba ': 14,
            'u t': 14,
            'iki': 14,
            'i d': 14,
            'zim': 14,
            'dhw': 14,
            'iɓa': 14,
            'eng': 14,
            ' ro': 14,
            'ahu': 13,
            'mik': 13,
            'adi': 13,
            'idi': 13,
            'usi': 13,
            'ini': 13,
            'ifi': 13,
            'nov': 13,
            'tru': 13,
            'utr': 13,
            'laz': 13,
            'nan': 13,
            'ɓin': 13,
            'ati': 13,
            'm m': 13,
            'sia': 13,
            'ɓaɓ': 13,
            'rak': 13,
            'adh': 13,
            'siɓ': 13,
            'fan': 13,
            ' si': 13,
            'ova': 13,
            'nad': 13,
            'u f': 12,
            'tri': 12,
            'fad': 12,
            'han': 12,
            'kus': 12,
            'i l': 12,
            'ham': 12,
            'iti': 12,
            'sin': 12,
            'asa': 12,
            'era': 12,
            'maã': 12,
            'n k': 12,
            'haŋ': 12,
            'iha': 12,
            'aul': 11,
            'ing': 11,
            'iri': 11,
            'ja ': 11,
            'eti': 11,
            'rum': 11,
            'ret': 11,
            'umi': 11,
            'a d': 11,
            ' ik': 11,
            'dza': 11,
            'idz': 11,
            'dau': 11,
            'uhu': 11,
            'a ɓ': 11,
            'tra': 11,
            'hus': 11,
            'ato': 11,
            'uvu': 11,
            'ava': 11,
            'amp': 11,
            'etu': 11,
            'ita': 11,
            'tou': 10,
            'fah': 10,
            'tas': 10,
            'swa': 10,
            'ele': 10,
            'da ': 10,
            'zaŋ': 10,
            'faz': 10,
            'zah': 10,
            'hua': 10,
            'aã ': 10,
            'hif': 10,
            'ɓu ': 10,
            ' aŋ': 10,
            'hin': 10,
            'ais': 10,
            'mai': 10,
            'tsa': 10,
            'men': 10,
            'gi ': 10,
            'haf': 10,
            'ɓil': 10,
            'uhi': 10,
            'bar': 10,
            'aba': 10,
            'kab': 10,
            'kir': 10,
            'rua': 10,
            'ivu': 10,
            'uɓa': 10,
            'uni': 10
        }
    };
    exports.default = buc;
});
//# sourceMappingURL=buc.js.map