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
        name: 'Ute-Southern Paiute',
        nameT: 'Ute-Southern Paiute',
        iso3: 'ute',
        wiki: 'Colorado_River_Numic_language',
        names: 'Southern Paiute,Ute-Chemehuevi'
    });
});
//# sourceMappingURL=ute.js.map