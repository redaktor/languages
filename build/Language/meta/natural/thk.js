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
        name: 'Tharaka',
        nameT: 'Tharaka',
        iso3: 'thk',
        wiki: 'Meru_language',
        names: 'Atharaka,Saraka,Sharoka',
        hasDetect: true
    });
});
//# sourceMappingURL=thk.js.map