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
        name: 'Sami, Northern',
        nameT: 'Sámegiella',
        iso1: 'se',
        iso2: 'sme',
        iso3: 'sme',
        wiki: 'Northern_Sami',
        OT: 'NSM',
        names: 'Davvin,Northern Lapp,Saame,Same,North Sámi,Northern Saami,Saami,Samic,Northern Lappish,Norwegian Saami ("Lapp","Northern Lappish","Norwegian Lapp")'
    });
});
//# sourceMappingURL=sme.js.map