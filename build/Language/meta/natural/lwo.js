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
        name: 'Luwo',
        nameT: 'Luwo',
        iso3: 'lwo',
        wiki: 'Jur_language',
        names: 'Dhe Luwo,Dhe Lwo,Giur,Jo Lwo,Jur Luo,Jur Luwo,Jur Lwo,Lwo',
        hasDetect: true
    });
});
//# sourceMappingURL=lwo.js.map