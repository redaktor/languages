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
        name: 'Standard Arabic',
        nameT: 'Standard Arabic',
        iso3: 'arb',
        wiki: 'Modern_Standard_Arabic',
        names: 'Al-’Arabiyya,Al-Fusha,Literary Arabic',
        hasDetect: true
    });
});
//# sourceMappingURL=arb.js.map