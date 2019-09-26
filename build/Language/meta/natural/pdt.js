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
        name: 'Plautdietsch',
        nameT: 'Plautdietsch',
        iso3: 'pdt',
        wiki: 'Plautdietsch_language',
        names: 'German,Mennonite German,Low German,Mennoniten Platt'
    });
});
//# sourceMappingURL=pdt.js.map