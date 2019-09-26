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
        name: 'Kambera',
        nameT: 'Kambera',
        iso3: 'xbr',
        wiki: 'Kambera_language',
        names: 'East Sumba,East Sumbanese,Hilu Humba,Humba,Oost-Sumbaas,Sumba,Sumbanese'
    });
});
//# sourceMappingURL=xbr.js.map