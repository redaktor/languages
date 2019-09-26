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
        name: 'Ho',
        nameT: 'Ho',
        iso3: 'hoc',
        wiki: 'Ho_language',
        OT: 'HO',
        names: 'Bihar Ho,Lanka Kol'
    });
});
//# sourceMappingURL=hoc.js.map