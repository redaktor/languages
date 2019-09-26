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
        name: 'Me’phaa, Azoyú',
        nameT: 'Me’phaa, Azoyú',
        iso3: 'tpc',
        wiki: 'Tlapanec_language',
        names: 'Azoyú Tlapanec,Me’phaa,Mè’phàà,Mè’pháà Tsìndíì,Tlapaneco de Azoyú,Tlapaneco del Sur'
    });
});
//# sourceMappingURL=tpc.js.map