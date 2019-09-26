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
        name: 'Sotho, Northern',
        nameT: 'Sesotho',
        iso2: 'nso',
        iso3: 'nso',
        wiki: 'Northern_Sotho_language',
        OT: 'SOT',
        names: 'Pedi,Sepedi,Sesotho sa Leboa,Transvaal Sotho',
        hasDetect: true
    });
});
//# sourceMappingURL=nso.js.map