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
        name: 'Jula',
        nameT: 'Jula',
        iso2: 'dyu',
        iso3: 'dyu',
        wiki: 'Dyula_language',
        OT: 'JUL',
        names: 'Dioula,Dioula Véhiculaire,Diula,Djula,Dyoula,Dyula,Jula Kong,Kong Jula,Tagboussikan,Trade Jula',
        hasDetect: true
    });
});
//# sourceMappingURL=dyu.js.map