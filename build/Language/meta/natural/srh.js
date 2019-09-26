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
        name: 'Sarikoli',
        nameT: 'Sarikoli',
        iso3: 'srh',
        wiki: 'Sarikoli_language',
        names: 'Saliku’er,Salikur,Sarikuli,Sariqul,Sarykoly,Tadzik,Tajik,Tajiki'
    });
});
//# sourceMappingURL=srh.js.map