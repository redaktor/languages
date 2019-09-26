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
        name: 'Zhuang, Minz',
        nameT: 'Zhuang, Minz',
        iso3: 'zgm',
        wiki: 'Min_Zhuang_language',
        names: 'Black Zhuang,Bu Xiong,Heiyi Zhuang,Kon Min,Sung,Zong Zhuang'
    });
});
//# sourceMappingURL=zgm.js.map