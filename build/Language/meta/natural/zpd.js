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
        name: 'Zapotec, Southeastern Ixtlán',
        nameT: 'Zapotec, Southeastern Ixtlán',
        iso3: 'zpd',
        wiki: 'Yaves%C3%ADa_Zapotec',
        names: 'Latuvi Zapotec,Yavesía Zapotec,Zapoteco del Sureste de Ixtlán'
    });
});
//# sourceMappingURL=zpd.js.map