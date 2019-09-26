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
        name: 'Themne',
        nameT: 'Themne',
        iso2: 'tem',
        iso3: 'tem',
        wiki: 'Temne_language',
        OT: 'TMN',
        names: 'Temen,Temne,Timene,Timmannee,Timne',
        hasDetect: true
    });
});
//# sourceMappingURL=tem.js.map