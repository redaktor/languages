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
        name: 'Chinantec, Chiltepec',
        nameT: 'Chinantec, Chiltepec',
        iso3: 'csa',
        wiki: 'Chiltepec-Tlacoatzintepec_Chinantec',
        names: 'Jajme dzä mii,Jmiih kia’ dzä mii',
        hasDetect: true
    });
});
//# sourceMappingURL=csa.js.map