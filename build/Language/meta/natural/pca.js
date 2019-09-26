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
        name: 'Popoloca, Santa Inés Ahuatempan',
        nameT: 'Popoloca, Santa Inés Ahuatempan',
        iso3: 'pca',
        wiki: 'Western_Popoloca_language',
        names: 'Ngiba,Ngigua,Popoloca de Santa Inés Ahuatempan,Popoloca del Poniente'
    });
});
//# sourceMappingURL=pca.js.map