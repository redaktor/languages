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
        name: 'Georgian',
        nameT: 'ქართული',
        iso1: 'ka',
        iso2: 'geo',
        iso2T: 'kat',
        iso3: 'kat',
        wiki: 'Georgian_language',
        OT: 'sKAT, KGE',
        names: 'Common Kartvelian,Gruzinski,Kartuli,Gorji,Gruzin',
        hasDetect: true
    });
});
//# sourceMappingURL=kat.js.map