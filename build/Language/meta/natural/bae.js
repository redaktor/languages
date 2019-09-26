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
        name: 'Baré',
        nameT: 'Baré',
        iso3: 'bae',
        wiki: 'Barawana_language',
        names: 'Arihini,Barauana,Barauna,Barawana,Cunipusana,Ihini,Maldavaca,Mitua,Yavita'
    });
});
//# sourceMappingURL=bae.js.map