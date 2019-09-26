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
        name: 'Lozi',
        nameT: 'Lozi',
        iso2: 'loz',
        iso3: 'loz',
        wiki: 'Lozi_language',
        names: 'Kololo,Rotse,Rozi,Rutse,Silozi,Tozvi,Kolololo,Rotvi',
        hasDetect: true
    });
});
//# sourceMappingURL=loz.js.map