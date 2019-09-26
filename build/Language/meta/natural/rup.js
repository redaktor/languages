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
        name: 'Aromanian',
        nameT: 'Armăneashce',
        iso2: 'rup',
        iso3: 'rup',
        wiki: 'Aromanian_language',
        names: 'Armani,Armina,Armini,Aromunian,Arumanian,Arumanisht,Arumenian,Arumun,Macedo Romanian,Macedo-Rumanian,Vlach,Macedo,Romanian,Vlav,Macedo Romania'
    });
});
//# sourceMappingURL=rup.js.map