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
    const lo = {
        id: 'lo',
        name: 'Lao',
        trigrams: { 'ການ': 0,
            'ແລະ': 1,
            'ລະ ': 2,
            ' ແລ': 3,
            'ທີ່': 4,
            'ຄົນ': 5,
            'ຸກຄ': 6,
            'ສິດ': 7,
            'ກຄົ': 8,
            'ຂອງ': 9,
            'ວາມ': 10,
            'ຄວາ': 11,
            'ບຸກ': 12,
            '່ຈະ': 13,
            'ີ່ຈ': 14,
            'ັ້ນ': 15,
            'ໄດ້': 16,
            'ນັ້': 17,
            'ມີສ': 18,
            'ີສິ': 19,
            '່າງ': 20,
            'ທຸກ': 21,
            'ເປັ': 22,
            'ດທີ': 23,
            'ຫຼື': 24,
            'ປັນ': 25,
            'າດຕ': 26,
            'ວ່າ': 27,
            ' ຫຼ': 28,
            'ມາດ': 29,
            'ິດທ': 30,
            '້ອງ': 31,
            'ໃຫ້': 32,
            'ຼື ': 33,
            '. ບ': 34,
            'ໂດຍ': 35,
            'ດຕາ': 36,
            'ພາບ': 37,
            ' ມາ': 38,
            '. ມ': 39,
            'ຜູ້': 40,
            'ຊາດ': 41,
            'ຕາ ': 42,
            'ບໍ່': 43,
            'ຕົນ': 44,
            'ຮັບ': 45,
            ' ບຸ': 46,
            'ື່ອ': 47,
            'ກັນ': 48,
            'ງຕົ': 49,
            'ເສລ': 50,
            'ົນທ': 51,
            'ີພາ': 52,
            'ສລີ': 53,
            'ອງຕ': 54,
            'ື່ງ': 55,
            'ນກາ': 56,
            'ນມີ': 57,
            'ນທຸ': 58,
            'ດ ແ': 59,
            'ຢ່າ': 60,
            'ລີພ': 61,
            'ຕາມ': 62,
            'ົນມ': 63,
            'ຕ້ອ': 64,
            'ະກາ': 65,
            'ະ ເ': 66,
            'ດ້ວ': 67,
            'ປະກ': 68,
            'ຊື່': 69,
            'ານສ': 70,
            'ນີ້': 71,
            'ງຄົ': 72,
            '້ຮັ': 73,
            'ຈະໄ': 74,
            'ະເທ': 75,
            'ຄົມ': 76,
            '້ວຍ': 77,
            'ຖືກ': 78,
            'ປະເ': 79,
            'ມະນ': 80,
            'ດສະ': 81,
            'ດ້ຮ': 82,
            'ອັນ': 83,
            'ໃນກ': 84,
            'ັງຄ': 85,
            'ເທດ': 86,
            'ນປະ': 87,
            'ນຸດ': 88,
            'ະໄດ': 89,
            'ຳເນ': 90,
            'ກໍ່': 91,
            'າມເ': 92,
            'ດຂອ': 93,
            'າມຄ': 94,
            'ປະຊ': 95,
            'ນ. ': 96,
            'ະນຸ': 97,
            'ານກ': 98,
            'ໝາຍ': 99,
            '່ມີ': 100,
            'ກາດ': 101,
            'ສັງ': 102,
            'ູ້ໃ': 103,
            'ເນີ': 104,
            'ກສາ': 105,
            'ນໃນ': 106,
            'ສົມ': 107,
            'ງປະ': 108,
            'ຕໍ່': 109,
            'ນທີ': 110,
            '້ໃດ': 111,
            'ດໝາ': 112,
            'າດ ': 113,
            'ກົດ': 114,
            'ດຳເ': 115,
            'ອງມ': 116,
            ' ຄວ': 117,
            'ນີນ': 118,
            '່າ:': 119,
            ' ກາ': 120,
            '່ຽວ': 121,
            'ົດໝ': 122,
            'ນສະ': 123,
            'ນນັ': 124,
            'ນຂອ': 125,
            'ເລີ': 126,
            'ົນ ': 127,
            'ໍ່ມ': 128,
            'ພື່': 129,
            'ັນເ': 130,
            'ກ່ຽ': 131,
            'ເພື': 132,
            'ນຜູ': 133,
            'ັບຄ': 134,
            'ະທຳ': 135,
            'ະຊາ': 136,
            'ງກາ': 137,
            'ນ ແ': 138,
            'ງມະ': 139,
            'ດ. ': 140,
            'ສະຫ': 141,
            'ະນະ': 142,
            'ນໂດ': 143,
            'ສະເ': 144,
            'ນຄວ': 145,
            'ຖານ': 146,
            'ິດເ': 147,
            'ັນຕ': 148,
            'ຊາຊ': 149,
            'ະຕິ': 150,
            'ິດ ': 151,
            'ານອ': 152,
            'ັນທ': 153,
            'ະ ສ': 154,
            'ົນຜ': 155,
            'າດສ': 156,
            'ທາງ': 157,
            'ິດສ': 158,
            'ໜື່': 159,
            'ບັດ': 160,
            'ເຫດ': 161,
            'າ 2': 162,
            'ຈາກ': 163,
            'ຢູ່': 164,
            'າ 1': 165,
            'ະມາ': 166,
            'ຄອງ': 167,
            ' ເສ': 168,
            'ເມື': 169,
            'ກະທ': 170,
            'ື້ນ': 171,
            'ະປະ': 172,
            'ະຫວ': 173,
            'ົ່າ': 174,
            'ດເສ': 175,
            'ລັດ': 176,
            'ສະມ': 177,
            'ນດ້': 178,
            'ນເປ': 179,
            'ສະໜ': 180,
            'ນລະ': 181,
            'ງຊາ': 182,
            'ບຄວ': 183,
            'າ: ': 184,
            'ຫວ່': 185,
            'ຂື້': 186,
            'ທັງ': 187,
            'ສັນ': 188,
            'ລີຍ': 189,
            'ຳຄັ': 190,
            'ສຳຄ': 191,
            'ະ ຄ': 192,
            'ຄັນ': 193,
            'ດຕິ': 194,
            'ົ້າ': 195,
            'ເຊື': 196,
            'ະເໝ': 197,
            'ິບັ': 198,
            'ົນເ': 199,
            'ານັ': 200,
            ' ປະ': 201,
            'ມຄຸ': 202,
            'ອງສ': 203,
            'ານເ': 204,
            'ລະຫ': 205,
            '່າວ': 206,
            'ໜ້າ': 207,
            'ດວ່': 208,
            'ຄະນ': 209,
            '່ານ': 210,
            'ງກັ': 211,
            'ຶກສ': 212,
            'ຕິບ': 213,
            ' ໃນ': 214,
            'ເຫຼ': 215,
            'າງກ': 216,
            'ປະຕ': 217,
            'ສຶກ': 218,
            'ງສະ': 219,
            'ດກາ': 220,
            'ນໄດ': 221,
            'ຊົນ': 222,
            'ແກ່': 223,
            'າມກ': 224,
            'ນສັ': 225,
            'ເໝີ': 226,
            'ອງບ': 227,
            'ດ ຫ': 228,
            'ີກາ': 229,
            'ຸ້ມ': 230,
            'ດກໍ': 231,
            'ຮ່ວ': 232,
            'ັດກ': 233,
            'ຮູ້': 234,
            'ກັບ': 235,
            'ດຍບ': 236,
            'າຊາ': 237,
            'ັນໃ': 238,
            '້ມຄ': 239,
            'ໍ່ຈ': 240,
            'ຄຸ້': 241,
            'ຫ່ງ': 242,
            'ແຫ່': 243,
            'ໃນຄ': 244,
            '່ໃນ': 245,
            'ົນໃ': 246,
            'ໃນທ': 247,
            'ອງກ': 248,
            'ນທາ': 249,
            'ບນີ': 250,
            'ິດຂ': 251,
            'ໃນສ': 252,
            'ິທີ': 253,
            'ຈະເ': 254,
            'ທົ່': 255,
            'ຫຼົ': 256,
            'ຍບໍ': 257,
            '້ານ': 258,
            'ັນຂ': 259,
            'ງບຸ': 260,
            'ມຄອ': 261,
            'ມີກ': 262,
            ' ດ້': 263,
            '່ວມ': 264,
            'ານປ': 265,
            'ີ່ງ': 266,
            'າມສ': 267,
            'ັບນ': 268,
            'ດເລ': 269,
            'ຫດວ': 270,
            'ໝູ່': 271,
            'ຕິສ': 272,
            'ສະບ': 273,
            ' ເປ': 274,
            'າຂອ': 275,
            '້າງ': 276,
            'ະຫະ': 277,
            'ງໃຈ': 278,
            'ະໜາ': 279,
            'ຍເຫ': 280,
            'ງຂອ': 281,
            'ມ ແ': 282,
            'ັນສ': 283,
            'ນກະ': 284,
            '້ນຕ': 285,
            'າສະ': 286,
            'ຼົ່': 287,
            'ໃດກ': 288,
            'ນໄປ': 289,
            '່ໄດ': 290,
            'ນ ຫ': 291,
            'ຫັນ': 292,
            'ຂໍ້': 293,
            '້ນ.': 294,
            'ເກີ': 295,
            'ຫະປ': 296,
            'ແຕ່': 297,
            'ບໃນ': 298,
            'ູ່ໃ': 299,
            'ເຫັ': 300
        }
    };
    exports.default = lo;
});
//# sourceMappingURL=lo.js.map