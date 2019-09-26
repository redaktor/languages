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
        name: 'Duruwa',
        nameT: 'Duruwa',
        iso3: 'pci',
        wiki: 'Duruwa_language',
        names: 'Dhruva,Dhurwa,Durva,Paraja,Parajhi,Parjhi,Parji,Tagara,Thakara,Tugara'
    });
});
//# sourceMappingURL=pci.js.map