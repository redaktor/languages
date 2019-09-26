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
        name: 'Longto',
        nameT: 'Longto',
        iso3: 'wok',
        wiki: 'Voko_language',
        names: 'Boko,Gobeyo,Longa,Longbo,Lonto,Voko,Woko'
    });
});
//# sourceMappingURL=wok.js.map