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
        name: 'Romanian',
        nameT: 'română',
        iso1: 'ro',
        iso2: 'rum',
        iso2T: 'ron',
        iso3: 'ron',
        wiki: 'Romanian_language',
        OT: 'ROM',
        names: 'Daco-Romanian,Moldavian,Rumanian,Moldovan,Roumanian,Daco-Rumanian',
        hasDetect: true
    });
});
//# sourceMappingURL=ron.js.map