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
        name: 'Bareli, Rathwi',
        nameT: 'Bareli, Rathwi',
        iso3: 'bgd',
        wiki: 'Rathwi_Bareli_language',
        names: 'Barel,Barela,Paura,Pauri,Pawari,Pawri,Rathi,Rathia,Rathwi Pauri'
    });
});
//# sourceMappingURL=bgd.js.map