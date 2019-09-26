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
        name: 'Malay, North Moluccan',
        nameT: 'Ternate Malay',
        iso3: 'max',
        wiki: 'North_Moluccan_Malay',
        names: 'Ternate Malay'
    });
});
//# sourceMappingURL=max.js.map