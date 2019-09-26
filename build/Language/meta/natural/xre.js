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
        name: 'Kreye',
        nameT: 'Kreye',
        iso3: 'xre',
        wiki: 'Kreye_language',
        names: 'Crange,Crenge,Crenye,Creye,Krem-Ye,Tage,Taze'
    });
});
//# sourceMappingURL=xre.js.map