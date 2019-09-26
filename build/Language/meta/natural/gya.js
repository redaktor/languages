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
        name: 'Gbaya, Northwest',
        nameT: 'Gbaya, Northwest',
        iso3: 'gya',
        wiki: 'Northwest_Gbaya_language',
        names: 'Gbaya,Gbaya Nord-Ouest,Baya,Northwest Gbaya'
    });
});
//# sourceMappingURL=gya.js.map