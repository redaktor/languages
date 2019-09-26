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
        name: 'Swedish',
        nameT: 'svenska',
        iso1: 'sv',
        iso2: 'swe',
        iso3: 'swe',
        wiki: 'Swedish_language',
        OT: 'SVE',
        names: 'Ruotsi,Svenska',
        hasDetect: true
    });
});
//# sourceMappingURL=sv.js.map