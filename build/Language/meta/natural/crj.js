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
        name: 'Cree, Southern East',
        nameT: 'Cree, Southern East',
        iso3: 'crj',
        wiki: 'East_Cree',
        OT: 'ECR',
        names: 'Eastern James Bay Cree Southern Dialect,James Bay Cree Southern Dialect'
    });
});
//# sourceMappingURL=crj.js.map