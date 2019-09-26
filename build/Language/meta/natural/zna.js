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
        name: 'Zan Gula',
        nameT: 'Zan Gula',
        iso3: 'zna',
        wiki: 'Zan_Gula_language',
        names: 'Goula,Gula Guera,More,Moriil,Morre'
    });
});
//# sourceMappingURL=zna.js.map