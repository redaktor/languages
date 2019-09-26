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
        name: 'Adi',
        nameT: 'Adi',
        iso3: 'adi',
        wiki: 'Adi_language',
        names: 'Abor,Adi,Adi-Bokar,Bengni-Boga’er,Boga’er,Bokar,Lhoba,Lho-Pa,Abhor,Boga’er Luoba,Luoba'
    });
});
//# sourceMappingURL=adi.js.map