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
    const tly = {
        id: 'tly',
        name: 'Talysh',
        trigrams: {
            'iyə': 151,
            ' bə': 115,
            'on ': 111,
            'əti': 104,
            'ən ': 103,
            'yən': 96,
            ' hə': 94,
            'ti ': 93,
            'də ': 92,
            ' iy': 89,
            'bə ': 72,
            'ədə': 66,
            'ard': 62,
            'həx': 61,
            ' ka': 56,
            'lə ': 55,
            'kar': 52,
            'rde': 49,
            'de ': 49,
            ' tə': 48,
            ' şə': 47,
            'ni ': 47,
            'n b': 46,
            'ə i': 45,
            ' ha': 45,
            'e h': 44,
            'har': 43,
            'yə ': 42,
            'ar ': 42,
            'ə m': 41,
            'əxs': 40,
            'yət': 39,
            'ılə': 39,
            'şəx': 39,
            ' be': 39,
            'nə ': 38,
            'ə ş': 38,
            ' qı': 37,
            'te ': 37,
            'ə h': 36,
            'qıl': 36,
            'si ': 35,
            'ə b': 35,
            'i i': 35,
            'i h': 35,
            ' he': 34,
            'hes': 33,
            ' mə': 32,
            'xsi': 31,
            'est': 31,
            'ış ': 31,
            'r q': 31,
            'i b': 31,
            'ste': 31,
            'ku ': 30,
            'ştə': 30,
            'ş h': 30,
            'ıə ': 30,
            ' sə': 29,
            'bıə': 29,
            'əxı': 28,
            'həm': 27,
            'xış': 27,
            ' mı': 27,
            'ə s': 27,
            ' de': 27,
            'əy ': 26,
            'ozo': 26,
            'zod': 26,
            ' oz': 26,
            'tə ': 25,
            'odə': 25,
            'rə ': 25,
            'n h': 24,
            'oni': 23,
            'be ': 23,
            'əni': 23,
            'ışt': 22,
            'ə d': 22,
            'ərə': 22,
            'onə': 22,
            'n i': 22,
            'ə k': 22,
            'nin': 21,
            'bər': 21,
            ' va': 21,
            'ya ': 21,
            'dət': 21,
            'ə n': 20,
            'in ': 20,
            'əmi': 20,
            ' ya': 20,
            'yon': 20,
            'son': 20,
            'mon': 20,
            'n d': 19,
            'ne ': 19,
            'ə v': 19,
            'əyo': 19,
            'iku': 18,
            'sos': 18,
            ' ış': 18,
            ' in': 18,
            'xon': 18,
            'niy': 18,
            'lət': 18,
            ' ko': 17,
            'əxo': 17,
            'yo ': 17,
            ' çı': 17,
            ' co': 17,
            'bey': 17,
            'tən': 17,
            'çı ': 16,
            'von': 16,
            'osi': 16,
            ' bı': 16,
            'e i': 16,
            'ə ə': 16,
            'co ': 16,
            'rdə': 16,
            'n k': 16,
            'ə t': 16,
            ' da': 16,
            'təd': 16,
            ' kə': 16,
            'e b': 15,
            'ins': 15,
            'omə': 15,
            'kəs': 15,
            'yyə': 15,
            'eəd': 15,
            'ton': 15,
            'miy': 15,
            'ini': 15,
            'mıd': 15,
            'inə': 14,
            'ət ': 14,
            'təm': 14,
            'i t': 14,
            'ə c': 14,
            'nso': 14,
            'iyy': 14,
            'əto': 14,
            'e ə': 14,
            'siy': 14,
            'ıda': 14,
            'y h': 14,
            'i m': 14,
            'asi': 14,
            'bəy': 13,
            ' ni': 13,
            'bən': 13,
            'daf': 13,
            'sti': 13,
            ' i̇': 13,
            ' hi': 13,
            'i d': 13,
            ' çə': 13,
            'n t': 13,
            ' so': 13,
            'ətə': 13,
            'min': 13,
            'ıni': 13,
            'əkə': 12,
            ' bo': 12,
            'ə o': 12,
            ' ma': 12,
            'i ə': 12,
            'n o': 12,
            'ine': 12,
            'iyo': 12,
            'tər': 12,
            ' cə': 12,
            ' də': 12,
            'çəy': 12,
            'dey': 12,
            'afi': 12,
            'mə ': 12,
            'əro': 12,
            'əvo': 12,
            'u b': 11,
            'n ç': 11,
            'ə r': 11,
            'alə': 11,
            ' vı': 11,
            'sia': 11,
            'əx ': 11,
            'mət': 11,
            'mmə': 11,
            'hiç': 11,
            'kə ': 11,
            'eyo': 11,
            ' və': 11,
            ' mi': 11,
            'əmm': 11,
            'ill': 10,
            'o i': 10,
            'nət': 10,
            'ast': 10,
            'ə y': 10,
            'non': 10,
            'zın': 10,
            'şər': 10,
            'ənə': 10,
            'bəş': 10,
            'rob': 10,
            'iç ': 10,
            'fiə': 10,
            ' əs': 10,
            'nun': 10,
            'ial': 10,
            'nıb': 10,
            ' ji': 10,
            'i s': 10,
            'oy ': 10,
            'mil': 10,
            'kət': 9,
            ' nə': 9,
            'əso': 9,
            ' di': 9,
            'kay': 9,
            'o k': 9,
            'emo': 9,
            'məh': 9,
            'n m': 9,
            'nik': 9,
            'rəf': 9,
            'obə': 9,
            'sə ': 9,
            ' ro': 9,
            'ist': 9,
            'dən': 9,
            'ə j': 9,
            ' nı': 9,
            'var': 9,
            'təh': 9,
            'əhs': 9,
            ' do': 9,
            'itə': 9,
            'hsi': 9,
            'ıbə': 9,
            'iə ': 9,
            'sil': 9,
            'ey ': 9,
            'dax': 9,
            'r k': 9,
            'əbı': 9,
            'əmə': 8,
            'don': 8,
            'vlə': 8,
            'bəs': 8,
            'deə': 8,
            'nom': 8,
            ' ta': 8,
            'məd': 8,
            'ə ç': 8,
            'ğət': 8,
            ' əb': 8,
            'əra': 8,
            'bo ': 8,
            'di ': 8,
            ' is': 8,
            ' ğa': 8,
            'anu': 8,
            'uni': 8,
            'tio': 8,
            'eyn': 8,
            'ion': 8,
            'stə': 8,
            'ifa': 8,
            'ro ': 8,
            'din': 8,
            'o b': 8,
            'ali': 8,
            'ın ': 8,
            'liy': 8,
            'əsə': 8,
            'sər': 8,
            'das': 8,
            'ənd': 8,
            'bın': 8,
            'məy': 7,
            ' cu': 7,
            'orə': 7,
            'onn': 7,
            'ə q': 7,
            'ğan': 7,
            's b': 7,
            'ynə': 7,
            'cin': 7,
            'fik': 7,
            ' hı': 7,
            'seə': 7,
            'lli': 7,
            ' se': 7,
            'adə': 7,
            'dev': 7,
            'tif': 7,
            'arə': 7
        }
    };
    exports.default = tly;
});
//# sourceMappingURL=tly.js.map