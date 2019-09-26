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
        name: 'Naga, Khezha',
        nameT: 'Naga, Khezha',
        iso3: 'nkh',
        wiki: 'Kheza_language',
        names: 'Kezami,Khezha,Khezhama'
    });
});
//# sourceMappingURL=nkh.js.map