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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zhuang, Qiubei',
        nameT: 'Zhuang, Qiubei',
        iso3: 'zqe',
        wiki: 'Yei_Zhuang_language',
        names: 'Bau i,Bui,Buyi,Northern Zhuang,Qiubei Sha'
    });
});
//# sourceMappingURL=zqe.js.map