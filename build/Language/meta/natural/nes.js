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
        name: 'Kinnauri, Bhoti',
        nameT: 'Kinnauri, Bhoti',
        iso3: 'nes',
        wiki: 'Lahuli%E2%80%93Spiti_language',
        names: 'Bhotea of Upper Kinnauri,Bod-Skad,Bud-Kat,Myamkat,Myamskad,Nyamkat,Nyamskad,Puh,Sangs-Rgyas,Sangyas'
    });
});
//# sourceMappingURL=nes.js.map