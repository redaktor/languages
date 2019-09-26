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
        name: 'Waorani',
        nameT: 'Waorani',
        iso3: 'auc',
        wiki: 'Waorani_language',
        names: 'Huaorani,Sabela,Wao Tededö,Waodäni,Waodäni Tededö,Waos ("Auca")',
        hasDetect: true
    });
});
//# sourceMappingURL=auc.js.map