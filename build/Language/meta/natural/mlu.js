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
        name: 'To’abaita',
        nameT: 'To’abaita',
        iso3: 'mlu',
        wiki: 'To%E2%80%99abaita_language',
        names: 'Malu,Malu’u,To’ambaita,Toqabaqita'
    });
});
//# sourceMappingURL=mlu.js.map