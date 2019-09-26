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
        name: 'Mòoré',
        nameT: 'Mòoré',
        iso2: 'mos',
        iso3: 'mos',
        wiki: 'Mossi_language',
        names: 'Mole,Moose,More,Moré,Moshi,Mossi',
        hasDetect: true
    });
});
//# sourceMappingURL=mos.js.map