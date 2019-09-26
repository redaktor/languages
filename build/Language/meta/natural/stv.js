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
        name: 'Silt’e',
        nameT: 'Silt’e',
        iso3: 'stv',
        wiki: 'Silt%27e_language',
        OT: 'SIG',
        names: 'East Gurage,Selti,Silte,Silti'
    });
});
//# sourceMappingURL=stv.js.map