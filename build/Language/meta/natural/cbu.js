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
        name: 'Candoshi-Shapra',
        nameT: 'Candoshi-Shapra',
        iso3: 'cbu',
        wiki: 'Candoshi-Shapra_language',
        names: 'Candoshi,Candoxi,Kandoshi,Murato',
        hasDetect: true
    });
});
//# sourceMappingURL=cbu.js.map