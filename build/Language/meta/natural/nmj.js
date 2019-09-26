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
        name: 'Ngombe (Central African Republic)',
        nameT: 'Ngombe (Central African Republic)',
        iso3: 'nmj',
        wiki: 'Bangandu_language',
        names: 'Bagando-Ngombe,Bangando-Ngombe,Ngombe-Kaka'
    });
});
//# sourceMappingURL=nmj.js.map