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
        name: 'Tembo (Kitembo)',
        nameT: 'Tembo (Kitembo)',
        iso3: 'tbt',
        wiki: 'Tembo_(Kitembo)_language',
        names: 'Chitembo,Kitembo'
    });
});
//# sourceMappingURL=tbt.js.map