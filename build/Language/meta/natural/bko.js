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
        name: 'Kwa’',
        nameT: 'Bakoa',
        iso3: 'bko',
        wiki: 'Kwa%E2%80%99_language',
        names: 'Bakwa,Bamileke-Kwa'
    });
});
//# sourceMappingURL=bko.js.map