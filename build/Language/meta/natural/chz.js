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
        name: 'Chinantec, Ozumacin',
        nameT: 'Chinantec, Ozumacin',
        iso3: 'chz',
        wiki: 'Chinantec_of_Ozumac%C3%ADn',
        names: 'Chinanteco de Ayotzintepec,Chinanteco del Sureste Alto,Jumi dsa mojai,Juujmii',
        hasDetect: true
    });
});
//# sourceMappingURL=chz.js.map