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
        name: 'Madurese',
        nameT: 'Madurese',
        iso2: 'mad',
        iso3: 'mad',
        wiki: 'Madurese_language',
        names: 'Basa Mathura,Madhura',
        hasDetect: true
    });
});
//# sourceMappingURL=mad.js.map