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
        name: 'Landoma',
        nameT: 'Landoma',
        iso3: 'ldm',
        wiki: 'Landoma_language',
        names: 'Cocoli,Landouman,Landuma,Tiapi,Tyapi,Tyopi'
    });
});
//# sourceMappingURL=ldm.js.map