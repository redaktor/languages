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
        name: 'Mixtec, Huitepec',
        nameT: 'Mixtec, Huitepec',
        iso3: 'mxs',
        wiki: 'Estetla_Mixtec',
        names: 'Mixteco de Huitepec,Mixteco de San Antonio Huitepec,Mixteco de Zaachila,Tu’un sav'
    });
});
//# sourceMappingURL=mxs.js.map