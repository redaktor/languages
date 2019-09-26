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
        name: 'Mapun',
        nameT: 'Mapun',
        iso3: 'sjm',
        wiki: 'Bajaw_language',
        names: 'Bajau Kagayan,Cagayan de Sulu,Cagayanon,Jama Mapun,Kagayan,Orang Cagayan,Pellun Mapun,Sama Mapun,Cagayan,Cagayanen,Cagayano,Orang'
    });
});
//# sourceMappingURL=sjm.js.map