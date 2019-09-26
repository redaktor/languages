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
        name: 'Lelepa',
        nameT: 'Havannah Harbour',
        iso3: 'lpa',
        wiki: 'Lelepa_language',
        names: 'Havannah Harbour'
    });
});
//# sourceMappingURL=lpa.js.map