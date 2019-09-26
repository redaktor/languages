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
        name: 'Sapé',
        nameT: 'Sapé',
        iso3: 'spc',
        wiki: 'Sap%C3%A9_language',
        names: 'Caliana,Chirichano,Kaliána,Kariana'
    });
});
//# sourceMappingURL=spc.js.map