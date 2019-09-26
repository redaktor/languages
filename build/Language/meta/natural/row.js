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
        name: 'Dela-Oenale',
        nameT: 'Dela-Oenale',
        iso3: 'row',
        wiki: 'Dela-Oenale_language',
        names: 'Dela,Delha,Oe Nale,Rote,Rote Barat,Roti,Rotinese,Western Rote'
    });
});
//# sourceMappingURL=row.js.map