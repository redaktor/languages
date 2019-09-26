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
        name: 'Dhuwal',
        nameT: 'Dhuwal',
        iso3: 'duj',
        wiki: 'Dhuwal_language',
        names: 'Dual,Duala,Wulamba,Yolngu'
    });
});
//# sourceMappingURL=duj.js.map