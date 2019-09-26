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
        name: 'Ayta, Mag-Indi',
        nameT: 'Ayta, Mag-Indi',
        iso3: 'blx',
        wiki: 'Indi_language',
        names: 'Indi Ayta,Mag-Indi Sambal'
    });
});
//# sourceMappingURL=blx.js.map