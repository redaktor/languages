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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, Amatlán',
        nameT: 'Zapotec, Amatlán',
        iso3: 'zpo',
        wiki: 'Amatl%C3%A1n_Zapotec',
        names: 'Dizhze,Zapoteco de San Cristóbal Amatlán,Zapoteco del Noreste de Miahuatlán'
    });
});
//# sourceMappingURL=zpo.js.map