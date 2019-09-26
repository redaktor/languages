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
        name: 'Mixtec, San Juan Colorado',
        nameT: 'Mixtec, San Juan Colorado',
        iso3: 'mjc',
        wiki: 'Pinotepa_Mixtec',
        names: 'Mixteco de Oaxaca de la Costa Noroeste,Mixteco de San Juan Colorado,Tu’un sav'
    });
});
//# sourceMappingURL=mjc.js.map