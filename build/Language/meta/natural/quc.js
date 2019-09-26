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
        name: 'K',
        nameT: 'K',
        iso3: 'quc',
        wiki: 'K%27iche%27_language',
        names: 'Central K’iche’,Central Quiché,Chiquel,Qach’abel,Quiché',
        hasDetect: true
    });
});
//# sourceMappingURL=quc.js.map