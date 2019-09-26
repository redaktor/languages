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
        name: 'Catalan',
        nameT: 'català',
        iso1: 'ca',
        iso2: 'cat',
        iso3: 'cat',
        wiki: 'Catalan_language',
        OT: 'CAT',
        names: 'Català,Catalan-Valencian-Balear,Catalán,Catalonian,Valencian,Algherese Catalan',
        hasDetect: true
    });
});
//# sourceMappingURL=ca.js.map