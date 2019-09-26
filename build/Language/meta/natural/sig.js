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
        name: 'Paasaal',
        nameT: 'Paasaal',
        iso3: 'sig',
        wiki: 'Paasaal_language',
        names: 'Funsile,Pasaale,Pasaale Sisaala,Southern Sisaala',
        hasDetect: true
    });
});
//# sourceMappingURL=sig.js.map