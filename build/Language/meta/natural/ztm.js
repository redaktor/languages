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
        name: 'Zapotec, San Agustín Mixtepec',
        nameT: 'Zapotec, San Agustín Mixtepec',
        iso3: 'ztm',
        wiki: 'San_Agust%C3%ADn_Mixtepec_Zapotec'
    });
});
//# sourceMappingURL=ztm.js.map