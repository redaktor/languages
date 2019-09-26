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
        name: 'Sama, Southern',
        nameT: 'Sama, Southern',
        iso3: 'ssb',
        wiki: 'Sama_language',
        names: 'Sinama,Southern Bajau,Tawi-Tawi Sinama,Sama Tawi-Tawi,Southern Sinama'
    });
});
//# sourceMappingURL=ssb.js.map