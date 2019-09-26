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
        name: 'Nago, Northern',
        nameT: 'Nago, Northern',
        iso3: 'xkb',
        wiki: 'Ede_language',
        names: 'Ana,Ede Nago,Manigri-Kambolé,Manigri,Kambolé,Southwest Ede'
    });
});
//# sourceMappingURL=xkb.js.map