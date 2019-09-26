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
        name: 'Unami',
        nameT: 'Unami',
        iso3: 'unm',
        wiki: 'Unami_language',
        names: 'Delaware,Lenape,Lenni-Lenape'
    });
});
//# sourceMappingURL=unm.js.map