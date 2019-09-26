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
        name: 'Sara Kaba Deme',
        nameT: 'Sara Kaba Deme',
        iso3: 'kwg',
        wiki: 'Kaba_Deme_language',
        names: 'Kaba ’Dem,Kaba Démé,Kaba Demi,Sara Kaba Dem,Tà Sàra'
    });
});
//# sourceMappingURL=kwg.js.map