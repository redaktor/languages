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
        name: 'Dong, Northern',
        nameT: 'Dong, Northern',
        iso3: 'doc',
        wiki: 'Kam_language',
        names: 'Gam,Kam,Tong,Tung,Tung-Chia'
    });
});
//# sourceMappingURL=doc.js.map