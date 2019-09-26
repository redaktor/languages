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
        name: 'Oriya',
        nameT: 'ଓଡ଼ିଆ',
        iso1: 'or',
        iso2: 'ori',
        iso3: 'ori',
        wiki: 'Odia_language',
        OT: 'ORI',
        names: 'Odri,Odrum,Oliya,Orissa,Uriya,Utkali,Vadiya,Yudhia',
        hasDetect: true
    });
});
//# sourceMappingURL=ori.js.map