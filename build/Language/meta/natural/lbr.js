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
        name: 'Lohorung',
        nameT: 'Lohorung',
        iso3: 'lbr',
        wiki: 'Lohorung_language',
        names: 'Lohorong,Lohrung,Lohrung Khanawa,Lorung,Northern Lorung,Yakkhaba Khap'
    });
});
//# sourceMappingURL=lbr.js.map