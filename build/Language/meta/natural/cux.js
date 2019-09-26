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
        name: 'Cuicatec, Tepeuxila',
        nameT: 'Cuicatec, Tepeuxila',
        iso3: 'cux',
        wiki: 'Cuicatec_language',
        names: 'Cuicateco del centro,Dbaku,Dibaku'
    });
});
//# sourceMappingURL=cux.js.map