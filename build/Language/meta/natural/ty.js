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
        name: 'Tahitian',
        nameT: 'Reo Mā`ohi',
        iso1: 'ty',
        iso2: 'tah',
        iso3: 'tah',
        wiki: 'Tahitian_language',
        OT: 'THT',
        names: 'Reo Tahiti',
        hasDetect: true
    });
});
//# sourceMappingURL=ty.js.map