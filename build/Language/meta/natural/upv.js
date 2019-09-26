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
        name: 'Uripiv-Wala-Rano-Atchin',
        nameT: 'Uripiv-Wala-Rano-Atchin',
        iso3: 'upv',
        wiki: 'Uripiv_language',
        names: 'Northeast Malakula,Tirax'
    });
});
//# sourceMappingURL=upv.js.map