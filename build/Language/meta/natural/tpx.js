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
        name: 'Me’phaa, Acatepec',
        nameT: 'Me’pa Wí’ìn',
        iso3: 'tpx',
        wiki: 'Tlapanec_language',
        names: 'Acatepec Tlapanec,Me’pa,Me’pàà Wí’ììn,Me’phaa,Tlapaneco de Acatepec,Tlapaneco del Suroeste,Western Tlapanec'
    });
});
//# sourceMappingURL=tpx.js.map