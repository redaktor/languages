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
        name: 'Gbe, Maxi',
        nameT: 'Gbe, Maxi',
        iso3: 'mxl',
        wiki: 'Fon_language',
        names: 'Mahi,Maxi,Maxi-Gbe'
    });
});
//# sourceMappingURL=mxl.js.map