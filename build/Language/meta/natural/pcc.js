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
        name: 'Bouyei',
        nameT: 'Bouyei',
        iso3: 'pcc',
        wiki: 'Bouyei_language',
        names: 'Bo-I,Bui,Buyei,Buyi,Buyui,Chung-Chia,Dioi,Giay,Pui,Pu-I,Pujai,Pu-Jui,Puyi,Puyoi,Shuihu,Tujia,Zhongjia,Bouyei,Bo-Y,Chang Chá,Chung Cha,Cùi Chu,Dang,Giai,Giang,Nhaang,Niang,Nyang,Pau Thin,Pú Nà,Pu-Nam,Sa,Trong Ggia,Tu-Dìn,Xa Chung Chá,Yai,Yay'
    });
});
//# sourceMappingURL=pcc.js.map