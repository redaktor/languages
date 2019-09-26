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
        name: 'Mien, Iu',
        nameT: 'Mien, Iu',
        iso3: 'ium',
        wiki: 'Iu_Mien_language',
        names: 'Ban Yao,Highland Yao,Man,Mian,Mien,Mjen,Myen,Pan Yao,Yao,Yiu Mien,Youmian,Dao Do,Dao Thanh Phan,Dìu,Kim Mien,Red Dao,Yao Kimmien,Yao Ogang,Yu Mien ("Dong","Mán","Trai","Xá")'
    });
});
//# sourceMappingURL=ium.js.map