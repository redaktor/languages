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
        name: 'Doromu-Koki',
        nameT: 'Doromu-Koki',
        iso3: 'kqc',
        wiki: 'Doromu_language',
        names: 'Dorom,Doromu,Koki'
    });
});
//# sourceMappingURL=kqc.js.map