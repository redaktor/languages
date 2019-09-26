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
        name: 'Croatian',
        nameT: 'hrvatski',
        iso1: 'hr',
        iso2: 'hrv',
        iso3: 'hrv',
        wiki: 'Croatian_language',
        OT: 'HRV',
        names: 'Hrvatski',
        hasDetect: true
    });
});
//# sourceMappingURL=hrv.js.map