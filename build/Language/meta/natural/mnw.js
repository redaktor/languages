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
        name: 'Mon',
        nameT: 'ဘာသာမန္',
        iso3: 'mnw',
        wiki: 'Mon_language',
        OT: 'MON',
        names: 'Aleng,Mou,Mun,Peguan,Raman,Rman,Rmen,Takanoon,Talaing,Taleng,Teguan'
    });
});
//# sourceMappingURL=mnw.js.map