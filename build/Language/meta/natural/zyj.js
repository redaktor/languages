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
        name: 'Zhuang, Youjiang',
        nameT: 'Zhuang, Youjiang',
        iso3: 'zyj',
        wiki: 'Youjiang_Zhuang'
    });
});
//# sourceMappingURL=zyj.js.map