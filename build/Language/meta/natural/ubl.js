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
        name: 'Bikol, Buhi’non',
        nameT: 'Buhi’non',
        iso3: 'ubl',
        wiki: 'Albay_Bikol_language',
        names: 'Bikol Buhi,Boînan,Buhi,Buhi’non,Buhi-non'
    });
});
//# sourceMappingURL=ubl.js.map