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
        name: 'Tiri',
        nameT: 'Tiri',
        iso3: 'cir',
        wiki: 'T%C3%AEr%C3%AE_language',
        names: 'Ciiri,Ciri,Grand Couli,Hamea,Ha-Tiri,Méa,Tinrin,Tiri-Mea'
    });
});
//# sourceMappingURL=cir.js.map