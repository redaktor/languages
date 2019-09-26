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
        name: 'Malayalam',
        nameT: 'മലയാളം',
        iso1: 'ml',
        iso2: 'mal',
        iso3: 'mal',
        wiki: 'Malayalam',
        OT: 'sMAL, MLR',
        names: 'Alealum,Malayalani,Malayali,Malean,Maliyad,Mallealle,Mopla,Malayal',
        hasDetect: true
    });
});
//# sourceMappingURL=mal.js.map