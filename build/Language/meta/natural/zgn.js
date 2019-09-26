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
        name: 'Zhuang, Northern',
        nameT: 'Zhuang, Northern',
        iso3: 'zgn',
        wiki: 'Yei_Zhuang_language',
        names: 'Buyei,Buyoi,Kang Yei,Northern Zhuang',
        hasDetect: true
    });
});
//# sourceMappingURL=zgn.js.map