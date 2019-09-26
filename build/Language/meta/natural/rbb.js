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
        name: 'Palaung, Rumai',
        nameT: 'Palaung, Rumai',
        iso3: 'rbb',
        wiki: 'Palaung_language',
        OT: 'PLG',
        names: 'Humai,Rumai,Ta’ang,Ngwe Palaung,Rumai Humai,Shan Rumai,Silver Palaung,Ta’ang Rumai,Tai Rumai'
    });
});
//# sourceMappingURL=rbb.js.map