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
        name: 'Ewe',
        nameT: 'Ɛʋɛ',
        iso1: 'ee',
        iso2: 'ewe',
        iso3: 'ewe',
        wiki: 'Ewe_language',
        OT: 'EWE',
        names: 'Ebwe,Efe,Eibe,Eue,Eve,Gbe,Krepe,Krepi,Popo,Vhe,Ehwe'
    });
});
//# sourceMappingURL=ee.js.map