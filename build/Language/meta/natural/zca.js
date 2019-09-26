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
        name: 'Zapotec, Coatecas Altas',
        nameT: 'Zapoteco de San Juan Coatecas Altas',
        iso3: 'zca',
        wiki: 'Coatecas_Altas_Zapotec',
        names: 'Zapoteco de San Juan Coatecas Altas'
    });
});
//# sourceMappingURL=zca.js.map