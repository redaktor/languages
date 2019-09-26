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
        name: 'Bomu',
        nameT: 'Bomu',
        iso3: 'bmq',
        wiki: 'Bomu_language',
        names: 'Bobo Oule,Boomu,Bore,Western Bobo Wule,Bobo,Bobo Wule,Western Bobo Oule,Western Bwamu,Western Red'
    });
});
//# sourceMappingURL=bmq.js.map