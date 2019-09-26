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
        name: 'Badui',
        nameT: 'Badui',
        iso3: 'bac',
        wiki: 'Sundanese_language',
        names: 'Baduy,Bahasa Sunda,Gajebo'
    });
});
//# sourceMappingURL=bac.js.map