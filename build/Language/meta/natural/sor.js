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
        name: 'Somrai',
        nameT: 'Somrai',
        iso3: 'sor',
        wiki: 'Somrai_language',
        names: 'Shibne,Sibine,Somray,Somre,Somrei,Soumrai,Soumray,Sounrai,Sumrai'
    });
});
//# sourceMappingURL=sor.js.map