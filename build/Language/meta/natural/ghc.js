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
        name: 'Gaelic, Hiberno-Scottish',
        nameT: 'Gaelic, Hiberno-Scottish',
        iso3: 'ghc',
        wiki: 'History_of_the_Irish_language#Early_Modern_Irish',
        names: 'Gaoidhealg,Hiberno-Scottish Classical Common Gaelic'
    });
});
//# sourceMappingURL=ghc.js.map