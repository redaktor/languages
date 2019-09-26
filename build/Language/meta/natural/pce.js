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
        name: 'Palaung, Ruching',
        nameT: 'Palaung, Ruching',
        iso3: 'pce',
        wiki: 'Palaung_language',
        OT: 'PLG',
        names: 'Bulai,Bulei,Da’ang,Dlang,Ngwe Palaung,Palay,Pale,Pale Palaung,Pulei,Silver Palaung,Southern Ta’ang,Di-Ang,Southern Palaung,Ta-Ang'
    });
});
//# sourceMappingURL=pce.js.map