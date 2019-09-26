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
        name: 'Tujia, Northern',
        nameT: 'Tujia, Northern',
        iso3: 'tji',
        wiki: 'Tujia_language',
        names: 'pi tsi kha,Tuchia,Tudja'
    });
});
//# sourceMappingURL=tji.js.map