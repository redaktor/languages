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
        name: 'Doko-Uyanga',
        nameT: 'Doko-Uyanga',
        iso3: 'uya',
        wiki: 'Uyanga_language',
        names: 'Basanga,Dosanga,Iko,Uyanga'
    });
});
//# sourceMappingURL=uya.js.map