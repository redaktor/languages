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
        name: 'Kala Lagaw Ya',
        nameT: 'Kala Lagaw Ya',
        iso3: 'mwp',
        wiki: 'Kalaw_Lagaw_Ya',
        names: 'Central Torres Strait,Kala Lagau Langgus,Kala Lagaw,Kala Yagaw Ya,Langus,Mabuiag,Yagar Yagar'
    });
});
//# sourceMappingURL=mwp.js.map