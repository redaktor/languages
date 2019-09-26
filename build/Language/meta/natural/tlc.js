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
        name: 'Totonac, Yecuatla',
        nameT: 'Totonac, Yecuatla',
        iso3: 'tlc',
        wiki: 'Misantla_Totonac'
    });
});
//# sourceMappingURL=tlc.js.map