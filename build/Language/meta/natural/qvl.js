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
        name: 'Quechua, Cajatambo North Lima',
        nameT: 'Quechua, Cajatambo North Lima',
        iso3: 'qvl',
        wiki: 'Alto_Pativilca%E2%80%93Alto_Mara%C3%B1%C3%B3n%E2%80%93Alto_Huallaga_Quechua'
    });
});
//# sourceMappingURL=qvl.js.map