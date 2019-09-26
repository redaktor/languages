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
        name: 'Lingua Franca',
        nameT: 'Lingua Franca',
        iso3: 'pml',
        wiki: 'Mediterranean_Lingua_Franca',
        names: '’Ajnabi,Aljamia,Ferenghi,Petit Mauresque,Sabir'
    });
});
//# sourceMappingURL=pml.js.map