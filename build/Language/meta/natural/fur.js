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
        name: 'Friulian',
        nameT: 'Furlan',
        iso2: 'fur',
        iso3: 'fur',
        wiki: 'Friulian_language',
        OT: 'FRL',
        names: 'Frioulan,Frioulian,Friulano,Priulian',
        hasDetect: true
    });
});
//# sourceMappingURL=fur.js.map