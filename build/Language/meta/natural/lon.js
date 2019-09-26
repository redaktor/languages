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
        name: 'Lomwe, Malawi',
        nameT: 'Lomwe, Malawi',
        iso3: 'lon',
        wiki: 'Malawi_Lomwe_language',
        names: 'Anguru,Elhomwe,Nguru'
    });
});
//# sourceMappingURL=lon.js.map