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
        name: 'Judeo-Persian',
        nameT: 'Judeo-Persian',
        iso2: 'jpr',
        iso3: 'jpr',
        wiki: 'Judeo-Persian',
        names: 'Judeo-Persian,Djudi,Judi'
    });
});
//# sourceMappingURL=jpr.js.map