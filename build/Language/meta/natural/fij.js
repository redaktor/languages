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
        name: 'Fijian',
        nameT: 'Na Vosa Vakaviti',
        iso1: 'fj',
        iso2: 'fij',
        iso3: 'fij',
        wiki: 'Fijian_language',
        OT: 'FJI',
        names: 'Boumaa Fijian,Eastern Fijian,Fiji,Nadroga,Standard Fijian',
        hasDetect: true
    });
});
//# sourceMappingURL=fij.js.map