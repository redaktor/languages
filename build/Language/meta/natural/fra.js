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
        name: 'French',
        nameT: 'français',
        iso1: 'fr',
        iso2: 'fre',
        iso2T: 'fra',
        iso3: 'fra',
        wiki: 'French_language',
        OT: 'FRA',
        names: 'Français,Francés',
        hasDetect: true
    });
});
//# sourceMappingURL=fra.js.map