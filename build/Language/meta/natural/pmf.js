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
        name: 'Bahasa Taa',
        nameT: 'Bahasa Taa',
        iso3: 'pmf',
        wiki: 'Pamona_language',
        names: 'Baree,Bare’e,Poso',
        hasDetect: true
    });
});
//# sourceMappingURL=pmf.js.map