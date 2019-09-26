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
        name: 'Chokwe',
        nameT: 'Chokwe',
        iso3: 'cjk',
        wiki: 'Chokwe_language',
        names: 'Ciokwe,Djok,Kioko,Quioco,Shioko,Tschiokloe,Tshokwe,Cokwe,Imo,Tschiokwe',
        hasDetect: true
    });
});
//# sourceMappingURL=cjk.js.map