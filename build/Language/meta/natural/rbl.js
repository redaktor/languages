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
        name: 'Bikol, Miraya',
        nameT: 'Bikol, Miraya',
        iso3: 'rbl',
        wiki: 'Albay_Bikol_language',
        names: 'Bikol,Daraga'
    });
});
//# sourceMappingURL=rbl.js.map