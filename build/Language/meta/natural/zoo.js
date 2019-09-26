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
        name: 'Zapotec, Asunción Mixtepec',
        nameT: 'Zapotec, Asunción Mixtepec',
        iso3: 'zoo',
        wiki: 'Asunci%C3%B3n_Mixtepec_Zapotec',
        names: 'North Central Zimatlan Zapotec,Zapoteco de Asunción Mixtepec'
    });
});
//# sourceMappingURL=zoo.js.map