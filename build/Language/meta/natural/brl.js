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
        name: 'Birwa',
        nameT: 'Birwa',
        iso3: 'brl',
        wiki: 'Northern_Sotho_language#Other_varieties_of_Northern_Sotho'
    });
});
//# sourceMappingURL=brl.js.map