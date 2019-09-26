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
        name: 'Edo',
        nameT: 'Edo',
        iso2: 'bin',
        iso3: 'bin',
        wiki: 'Edo_language',
        OT: 'EDO',
        names: 'Addo,Benin,Bini,Oviedo,Ovioba',
        hasDetect: true
    });
});
//# sourceMappingURL=bin.js.map