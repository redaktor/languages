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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, Quiavicuzas',
        nameT: 'Zapotec, Quiavicuzas',
        iso3: 'zpj',
        wiki: 'Quiavicuzas_Zapotec',
        names: 'Northeastern Yautepec Zapotec,Zapoteco de Quiavicuzas,Zapoteco de San Juan Lachixila'
    });
});
//# sourceMappingURL=zpj.js.map