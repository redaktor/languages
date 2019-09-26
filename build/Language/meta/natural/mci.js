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
        name: 'Mese',
        nameT: 'Mese',
        iso3: 'mci',
        wiki: 'Mesem_language',
        names: 'Mese ("Momalili","Momolili")'
    });
});
//# sourceMappingURL=mci.js.map