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
        name: 'Marti Ke',
        nameT: 'Marti Ke',
        iso3: 'zmg',
        wiki: 'Marringarr_language',
        names: 'Magadige,Magati Gair,Magati-Ge,Mati Ke'
    });
});
//# sourceMappingURL=zmg.js.map