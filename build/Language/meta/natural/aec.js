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
        name: 'Arabic, Saidi',
        nameT: 'Arabic, Saidi',
        iso3: 'aec',
        wiki: 'Sa%27idi_Arabic',
        names: 'Sa’idi,Upper Egypt Arabic'
    });
});
//# sourceMappingURL=aec.js.map