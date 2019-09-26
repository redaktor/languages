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
        name: 'Iduna',
        nameT: 'Iduna',
        iso3: 'viv',
        wiki: 'Iduna_language',
        names: 'Vivigana,Vivigani',
        hasDetect: true
    });
});
//# sourceMappingURL=viv.js.map