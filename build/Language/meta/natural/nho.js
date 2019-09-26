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
        name: 'Takuu',
        nameT: 'Takuu',
        iso3: 'nho',
        wiki: 'Takuu_language',
        names: 'Mortlock,Taku,Tau,Tauu'
    });
});
//# sourceMappingURL=nho.js.map