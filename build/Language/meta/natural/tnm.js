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
        name: 'Tabla',
        nameT: 'Tabla',
        iso3: 'tnm',
        wiki: 'Tabla_language',
        names: 'Jakari,Tabi,Tanah Merah,Tanahmerah 2,Tepera'
    });
});
//# sourceMappingURL=tnm.js.map