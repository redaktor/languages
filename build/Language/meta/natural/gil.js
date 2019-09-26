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
        name: 'Kiribati',
        nameT: 'Taetae ni Kiribati',
        iso2: 'gil',
        iso3: 'gil',
        wiki: 'Gilbertese_language',
        names: 'Gilbertese,Ikiribati,I-Kiribati,Kiribatese',
        hasDetect: true
    });
});
//# sourceMappingURL=gil.js.map