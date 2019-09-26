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
        name: 'Nhanda',
        nameT: 'Nhanda',
        iso3: 'nha',
        wiki: 'Nhanda_language',
        names: 'Nanda,Nanta,Nhanta,Nubda,Nunta'
    });
});
//# sourceMappingURL=nha.js.map