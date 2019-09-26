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
        name: 'Baniwa',
        nameT: 'Baniwa',
        iso3: 'bwi',
        wiki: 'Baniwa_language',
        names: 'Baniba,Baniua do Içana,Baniva,Dakenei,Issana,Kohoroxitari,Maniba'
    });
});
//# sourceMappingURL=bwi.js.map