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
        name: 'Sami, Ume',
        nameT: 'Sami, Ume',
        iso3: 'sju',
        wiki: 'Ume_Sami_language',
        names: 'Saami,Ume ("Lapp")'
    });
});
//# sourceMappingURL=sju.js.map