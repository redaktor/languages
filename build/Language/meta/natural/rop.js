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
        name: 'Kriol',
        nameT: 'Roper-Bamyili Creole',
        iso3: 'rop',
        wiki: 'Australian_Kriol_language',
        names: 'Roper-Bamyili Creole'
    });
});
//# sourceMappingURL=rop.js.map