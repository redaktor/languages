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
        name: 'Vaghri',
        nameT: 'Vaghri',
        iso3: 'vgr',
        wiki: 'Vaghri_language',
        names: 'Bavri,Salavta,Vaghri Koli'
    });
});
//# sourceMappingURL=vgr.js.map