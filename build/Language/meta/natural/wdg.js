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
        name: 'Wadaginam',
        nameT: 'Wadaginamb',
        iso3: 'wdg',
        wiki: 'Wadaginam_language',
        names: 'Wadaginamb'
    });
});
//# sourceMappingURL=wdg.js.map