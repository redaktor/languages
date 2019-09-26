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
    const cle = {
        id: 'cle',
        name: 'Chinantec, San Juan Lealao',
        trigrams: { 'iáh': 0,
            ' hi': 1,
            'ja̱': 2,
            'a̱³': 3,
            'hi³': 4,
            'h³ ': 5,
            '³ h': 6,
            'i³ ': 7,
            'h⁴ ': 8,
            chi: 9,
            '̱³ ': 10,
            'áh⁴': 11,
            ' di': 12,
            ' ch': 13,
            ' ja': 14,
            'a² ': 15,
            'áh³': 16,
            '³ g': 17,
            ' li': 18,
            'ɨ³ ': 19,
            '³ c': 20,
            'diá': 21,
            ' ba': 22,
            '³ d': 23,
            'h¹ ': 24,
            'liá': 25,
            '⁴ h': 26,
            'nɨ³': 27,
            ' nɨ': 28,
            'y⁴ ': 29,
            ' hí': 30,
            ' mɨ': 31,
            'ah³': 32,
            'hí⁴': 33,
            'gá⁴': 34,
            ' gá': 35,
            '⁴ d': 36,
            'y³ ': 37,
            dsa: 38,
            'ba²': 39,
            '² d': 40,
            '³ j': 41,
            'a³ ': 42,
            ' ds': 43,
            'h² ': 44,
            '³ n': 45,
            '³, ': 46,
            'ah²': 47,
            '³. ': 48,
            dah: 49,
            '² h': 50,
            ' ga': 51,
            '² j': 52,
            'áh²': 53,
            'sa³': 54,
            hia: 55,
            ' ca': 56,
            iaa: 57,
            '³² ': 58,
            jme: 59,
            'ah¹': 60,
            'mɨ²': 61,
            'aáy': 62,
            '³ l': 63,
            '³ m': 64,
            'hiá': 65,
            aah: 66,
            'há⁴': 67,
            '³ja': 68,
            '² c': 69,
            '⁴ c': 70,
            ' há': 71,
            'ga³': 72,
            '⁴ j': 73,
            'á⁴h': 74,
            'hi²': 75,
            'xɨ³': 76,
            '³ b': 77,
            'é³ ': 78,
            'ɨɨ́': 79,
            '²ja': 80,
            'a̱á': 81,
            '̱á̱': 82,
            '̱y³': 83,
            nia: 84,
            ' cá': 85,
            'ɨ²j': 86,
            ' jm': 87,
            'ɨ́⁴': 88,
            '̱a̱': 89,
            'a̱a': 90,
            'á⁴ ': 91,
            'ca̱': 92,
            'a³j': 93,
            '² n': 94,
            ' na': 95,
            '⁴hé': 96,
            'hé³': 97,
            'aá⁴': 98,
            ' je': 99,
            ' ni': 100,
            'áy⁴': 101,
            '²ah': 102,
            ' dx': 103,
            'la³': 104,
            '̱yh': 105,
            '⁴da': 106,
            'á⁴d': 107,
            'é̱y': 108,
            ' ma': 109,
            '³xɨ': 110,
            mee: 111,
            'a̱y': 112,
            'á² ': 113,
            'iaá': 114,
            'yh⁴': 115,
            'lɨ́': 116,
            'ó⁴ ': 117,
            ios: 118,
            dio: 119,
            'na³': 120,
            'baá': 121,
            'jmɨ': 122,
            'cá⁴': 123,
            ', h': 124,
            'i³j': 125,
            '²a²': 126,
            '³ x': 127,
            '̱³,': 128,
            'a³d': 129,
            'uh³': 130,
            'joó': 131,
            ' du': 132,
            'os ': 133,
            'ma³': 134,
            'ɨ́y': 135,
            'oó⁴': 136,
            's j': 137,
            '⁴ah': 138,
            '¹ h': 139,
            jni: 140,
            'yh³': 141,
            '. h': 142,
            hie: 143,
            '⁴ l': 144,
            'e̱é': 145,
            '̱é̱': 146,
            'ca³': 147,
            'ɨ́h': 148,
            '². ': 149,
            'h⁴²': 150,
            'mɨ³': 151,
            duh: 152,
            '⁴² ': 153,
            '² l': 154,
            'ee⁴': 155,
            eey: 156,
            '² g': 157,
            ' jo': 158,
            jes: 159,
            'h³x': 160,
            'í⁴d': 161,
            ' jn': 162,
            ' xi': 163,
            '³la': 164,
            liu: 165,
            '³jm': 166,
            '⁴ n': 167,
            'ɨ³.': 168,
            'a³l': 169,
            'ie̱': 170,
            'yh¹': 171,
            '², ': 172,
            'éh³': 173,
            '̱³.': 174,
            'féh': 175,
            '³ah': 176,
            'esú': 177,
            'sús': 178,
            '⁴²a': 179,
            'í⁴j': 180,
            'ia̱': 181,
            'h³l': 182,
            '. j': 183,
            'mɨɨ': 184,
            'u³ ': 185,
            'i² ': 186,
            'aa³': 187,
            '⁴, ': 188,
            'ús ': 189,
            '⁴. ': 190,
            'y³²': 191,
            'xiá': 192,
            'meé': 193,
            'y² ': 194,
            'e⁴ ': 195,
            'dxú': 196,
            'fáh': 197,
            '³ f': 198,
            '̱h³': 199,
            'á̱h': 200,
            'á⁴j': 201,
            'á̱²': 202,
            'eéy': 203,
            ' cu': 204,
            'úh⁴': 205,
            '. m': 206,
            '¹ d': 207,
            '́⁴ ': 208,
            ', m': 209,
            'ji̱': 210,
            'aá²': 211,
            'ɨ³,': 212,
            ' xɨ': 213,
            'á⁴a': 214,
            '²jm': 215,
            'á⁴l': 216,
            'i³²': 217,
            '¹ j': 218,
            '⁴dx': 219,
            'ɨ² ': 220,
            ' fá': 221,
            ', b': 222,
            'sɨɨ': 223,
            'ii³': 224,
            '̱² ': 225,
            'h³j': 226,
            '¹ c': 227,
            '² m': 228,
            'h²j': 229,
            'i²x': 230,
            '́h⁴': 231,
            'xú⁴': 232,
            '²xi': 233,
            '⁴ g': 234,
            '⁴li': 235,
            'á³ ': 236,
            '⁴ m': 237,
            saa: 238,
            ': ―': 239,
            '́y⁴': 240,
            '³lɨ': 241,
            'dsɨ': 242,
            '³nɨ': 243,
            'ú⁴ ': 244,
            '³ds': 245,
            'uúh': 246,
            'ɨɨ³': 247,
            's n': 248,
            ' xa': 249,
            '³da': 250,
            'a³t': 251,
            '³ti': 252,
            ' dɨ': 253,
            'ɨh¹': 254,
            'a³c': 255,
            '⁴ x': 256,
            ' gu': 257,
            'áy³': 258,
            '² b': 259,
            'mɨ́': 260,
            '. c': 261,
            '³²a': 262,
            ', c': 263,
            '⁴ b': 264,
            'y¹ ': 265,
            joo: 266,
            'é⁴ ': 267,
            'h⁴j': 268,
            ', d': 269,
            'ɨ́³': 270,
            cua: 271,
            '³ ñ': 272,
            'h³²': 273,
            'xa³': 274,
            'ee³': 275,
            'éy⁴': 276,
            ' la': 277,
            'niá': 278,
            '³: ': 279,
            'iá³': 280,
            '³he': 281,
            gua: 282,
            'a⁴²': 283,
            '. b': 284,
            'á⁴t': 285,
            '⁴fé': 286,
            'iu³': 287,
            ', j': 288,
            '⁴lɨ': 289,
            '̱h⁴': 290,
            'á⁴s': 291,
            'a³h': 292,
            'á⁴f': 293,
            'e̱y': 294,
            '. l': 295,
            'xi²': 296,
            'ɨy³': 297,
            ooy: 298,
            '̱i̱': 299,
            'i̱i': 300
        }
    };
    exports.default = cle;
});
//# sourceMappingURL=cle.js.map