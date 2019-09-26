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
    const kmh = {
        id: 'kmh',
        name: 'Khmer, Central',
        trigrams: { 'ព្រ': 0,
            '្រះ': 1,
            'ប្រ': 2,
            'មាន': 3,
            '្នក': 4,
            'អ្ន': 5,
            'បាន': 6,
            'ង្គ': 7,
            'ដែល': 8,
            'អោយ': 9,
            'រះអ': 10,
            'លោក': 11,
            'ាំង': 12,
            '្នា': 13,
            'អង្': 14,
            'ខ្ញ': 15,
            '្ញុ': 16,
            'ញុំ': 17,
            'ាស់': 18,
            'របស': 19,
            'បស់': 20,
            'ះអង': 21,
            'ហើយ': 22,
            'ជាម': 23,
            'នោះ': 24,
            'ត្រ': 25,
            ' ព្': 26,
            'ាប់': 27,
            '្ចា': 28,
            'ទាំ': 29,
            'នេះ': 30,
            'ចាស': 31,
            'ម្ច': 32,
            '្រា': 33,
            'ងប្': 34,
            'គ្ន': 35,
            'ក្រ': 36,
            'យើង': 37,
            'ាក់': 38,
            'នឹង': 39,
            'ាល់': 40,
            'អូន': 41,
            '្អូ': 42,
            'ប្អ': 43,
            'មិន': 44,
            'បងប': 45,
            'ាម្': 46,
            'ត្ដ': 47,
            'ះជា': 48,
            'គ្រ': 49,
            'ាត់': 50,
            'មួយ': 51,
            'ក្ន': 52,
            '្នុ': 53,
            'នុង': 54,
            'រះជ': 55,
            'ស្ស': 56,
            '់ព្': 57,
            'ស្រ': 58,
            ' និ': 59,
            ' ហើ': 60,
            'វិញ': 61,
            '។ ព': 62,
            'និង': 63,
            'ិង ': 64,
            '្រុ': 65,
            'ទូល': 66,
            'រះប': 67,
            'បន្': 68,
            '»។ ': 69,
            'ការ': 70,
            '្រូ': 71,
            'ស្ដ': 72,
            '់គ្': 73,
            'ដូច': 74,
            'ន្ទ': 75,
            'ខ្ល': 76,
            'ស៊ូ': 77,
            '្លា': 78,
            'េស៊': 79,
            'រាប': 80,
            '្រោ': 81,
            'យេស': 82,
            'ថា៖': 83,
            'រាល': 84,
            'រូវ': 85,
            'ធ្វ': 86,
            '្វើ': 87,
            'អស់': 88,
            'ល់គ': 89,
            'ស់ព': 90,
            'ដោយ': 91,
            'ានប': 92,
            'ករា': 93,
            'នករ': 94,
            'ពួក': 95,
            'ះយេ': 96,
            'ុស្': 97,
            'មនុ': 98,
            'នុស': 99,
            'រះយ': 100,
            '៖ «': 101,
            'ានព': 102,
            'ា៖ ': 103,
            'ិត្': 104,
            'ិស្': 105,
            ' អ្': 106,
            'ើយ ': 107,
            'នព្': 108,
            'ថា ': 109,
            'តាម': 110,
            'ដែរ': 111,
            'ះបន': 112,
            'ោះ ': 113,
            '្ទូ': 114,
            'េះ ': 115,
            'ពេល': 116,
            'ឡើយ': 117,
            'ទៀត': 118,
            ' លោ': 119,
            'នាក': 120,
            'ានស': 121,
            ' ខ្': 122,
            'ចិត': 123,
            '។ ប': 124,
            'ដល់': 125,
            'រុង': 126,
            'ក្ដ': 127,
            'គាត': 128,
            'បង្': 129,
            'រព្': 130,
            '្ដី': 131,
            '់អ្': 132,
            'ស់ ': 133,
            'ៅក្': 134,
            'ាន់': 135,
            'ាមួ': 136,
            'អំព': 137,
            'បិត': 138,
            'ឃើញ': 139,
            'នាំ': 140,
            'ដើម': 141,
            '្រឹ': 142,
            'ប៉ុ': 143,
            'នប្': 144,
            'ានជ': 145,
            '្ដា': 146,
            '្វី': 147,
            'ម្ប': 148,
            '់ខ្': 149,
            'នជា': 150,
            'អ្វ': 151,
            'សូម': 152,
            'ុំប': 153,
            'លព្': 154,
            'ឡើង': 155,
            'ទួល': 156,
            ' គឺ': 157,
            'ទទួ': 158,
            'ទុក': 159,
            'រោះ': 160,
            'យ៉ា': 161,
            'េចក': 162,
            'ទ្ធ': 163,
            '្រម': 164,
            '្មា': 165,
            '្លួ': 166,
            'លួន': 167,
            '្រស': 168,
            'ចក្': 169,
            'ូច្': 170,
            'ោយប': 171,
            ' មា': 172,
            'ច្ន': 173,
            'យ។ ': 174,
            'ន្ដ': 175,
            'ម្ន': 176,
            'ាក្': 177,
            'ពីរ': 178,
            'រ។ ': 179,
            'ំងន': 180,
            'សេច': 181,
            'ជាប': 182,
            ' នៅ': 183,
            'រិស': 184,
            '្បី': 185,
            ' ដែ': 186,
            'យព្': 187,
            'ស់អ': 188,
            'នៅក': 189,
            'ទ្រ': 190,
            'ំងអ': 191,
            'កដែ': 192,
            'ំបា': 193,
            'ានច': 194,
            ' ក្': 195,
            'រះគ': 196,
            'នកដ': 197,
            '្រព': 198,
            '្រប': 199,
            'ចេញ': 200,
            '៉ាង': 201,
            'ើម្': 202,
            ' គេ': 203,
            ' ជា': 204,
            'ិនប': 205,
            'ានទ': 206,
            ' ដោ': 207,
            '្រិ': 208,
            'រឹត': 209,
            'ងអស': 210,
            'លាប': 211,
            '្នេ': 212,
            'ផ្ទ': 213,
            ' ប្': 214,
            'សម្': 215,
            '៉ុន': 216,
            'ង។ ': 217,
            '្បិ': 218,
            '។ ក': 219,
            'អម្': 220,
            '្រក': 221,
            'ងខ្': 222,
            'រង់': 223,
            'ុន្': 224,
            'ើយ។': 225,
            'ោយម': 226,
            'ដ្ប': 227,
            'ិយា': 228,
            'ិញ ': 229,
            '្រង': 230,
            'ឹត្': 231,
            'ែរ។': 232,
            'នាង': 233,
            '្ញា': 234,
            'ចូរ': 235,
            'ំពី': 236,
            'ជាព': 237,
            'ងនោ': 238,
            'ស់ប': 239,
            ' យើ': 240,
            '់បា': 241,
            'មុខ': 242,
            'ុទ្': 243,
            'ាព្': 244,
            'ះគ្': 245,
            'ះអម': 246,
            'ំរា': 247,
            '្វា': 248,
            'លែង': 249,
            '។ ល': 250,
            ' ដ្': 251,
            'ជំន': 252,
            'ែលប': 253,
            '្រើ': 254,
            ' ដើ': 255,
            'ានអ': 256,
            'យាយ': 257,
            'ចូល': 258,
            'លទៅ': 259,
            'ពុំ': 260,
            'ាសន': 261,
            '្រឡ': 262,
            ' ពួ': 263,
            'មែន': 264,
            'ងព្': 265,
            'ដឹង': 266,
            'កាល': 267,
            '់លោ': 268,
            'ថ្ង': 269,
            'ជាអ': 270,
            '់។ ': 271,
            'ញ្ញ': 272,
            ' សូ': 273,
            'ទេ ': 274,
            'និយ': 275,
            '្ងៃ': 276,
            'មក ': 277,
            'រណា': 278,
            'ច្រ': 279,
            ' ក៏': 280,
            'នកន': 281,
            'សាស': 282,
            'ើង ': 283,
            '់នៅ': 284,
            'េតុ': 285,
            'ហេត': 286,
            'ុំ ': 287,
            'ពាក': 288,
            'កទា': 289,
            'ំគ្': 290,
            'រជា': 291,
            'ះវិ': 292,
            '្រី': 293,
            'យអ្': 294,
            'ោកប': 295,
            'ូលទ': 296,
            '្ទា': 297,
            'ែលម': 298,
            'ទាន': 299,
            'នបា': 300
        }
    };
    exports.default = kmh;
});
//# sourceMappingURL=kmh.js.map