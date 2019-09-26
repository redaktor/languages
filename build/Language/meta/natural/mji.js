(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Kim Mun',
        nameT: 'Kim Mun',
        iso3: 'mji',
        wiki: 'Kim_Mun_language',
        names: 'Chasan Yao,Gem Mun,Hainan Miao,Jim Mun,Jinmen,Kem di mun,Kem Mun,Kimmun,Lan Tin,Lanten,Lowland Yao,Man Lantien,Men,Mun,Shanzi Yao,Man Lan-Tien,Coc Mun,Dao Ao Dai,Dao Lam Dinh,Dao Quan Trang,Dao Thanh Y,Great Tunic Yao,Lan Ten,Lantin,Red Trouser Yao ("Man Lan-Tien")'
    });
});
//# sourceMappingURL=mji.js.map