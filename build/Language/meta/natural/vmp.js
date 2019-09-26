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
        name: 'Mazatec, Soyaltepec',
        nameT: 'Mazatec, Soyaltepec',
        iso3: 'vmp',
        wiki: 'Soyaltepec_Mazatec',
        names: 'En naxijen,Mazateco de San Miguel Soyaltepec,Mazateco de Temascal,Mazateco del Noreste'
    });
});
//# sourceMappingURL=vmp.js.map