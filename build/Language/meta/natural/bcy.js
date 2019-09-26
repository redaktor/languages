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
        name: 'Bacama',
        nameT: 'Bacama',
        iso3: 'bcy',
        wiki: 'Bacama_language',
        names: 'Abacama,Bachama,Bashama,Bashamma,Besema,Bwaatye,Bwareba,Bwatiye,Gboare'
    });
});
//# sourceMappingURL=bcy.js.map