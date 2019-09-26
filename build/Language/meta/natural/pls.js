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
        name: 'Popoloca, San Marcos Tlacoyalco',
        nameT: 'Popoloca, San Marcos Tlacoyalco',
        iso3: 'pls',
        wiki: 'Northern_Popoloca_language',
        names: 'Ngigua,Ngiwa,Northern Popoloca,Popoloca de San Marcos Tlalcoyalco,Popoluca del Norte,San Marcos Tlalcoyalco Popoloca'
    });
});
//# sourceMappingURL=pls.js.map