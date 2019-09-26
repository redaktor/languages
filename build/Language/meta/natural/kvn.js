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
        name: 'Kuna, Border',
        nameT: 'Kuna, Border',
        iso3: 'kvn',
        wiki: 'Kuna_language',
        names: 'Caiman Nuevo,Colombia Cuna,Cuna,Paya-Pucuro,Guna,Kuna de la Frontera,Long Hair Cuna,Paya-Pucuro Kuna'
    });
});
//# sourceMappingURL=kvn.js.map