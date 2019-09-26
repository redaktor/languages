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
        name: 'Ca̱hungwa̱rya̱',
        nameT: 'Ca̱hungwa̱rya̱',
        iso3: 'nat',
        wiki: 'Hungworo_language',
        names: 'Hungworo,Ingwe,Ingwo,Ngwe,Ngwoi,Nkwoi,Ungwe'
    });
});
//# sourceMappingURL=nat.js.map