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
        name: 'Papar',
        nameT: 'Papar',
        iso3: 'dpp',
        wiki: 'Papar_language',
        names: 'Bajau Bukit,Bajau Pa’par,Pa’par,Pappar ("Papar Hanyut")'
    });
});
//# sourceMappingURL=dpp.js.map