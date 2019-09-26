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
        name: 'Arabic, Sanaani',
        nameT: 'Northern Yemeni Arabic',
        iso3: 'ayn',
        wiki: 'Yemeni_Arabic',
        names: 'Northern Yemeni Arabic'
    });
});
//# sourceMappingURL=ayn.js.map