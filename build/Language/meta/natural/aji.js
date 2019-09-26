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
        name: 'Ajië',
        nameT: 'Ajië',
        iso3: 'aji',
        wiki: 'Aji%C3%AB_language',
        names: 'A’jie,Anjie,Houaïlou,Wai,Wailu'
    });
});
//# sourceMappingURL=aji.js.map