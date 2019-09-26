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
        name: 'Creole English, Islander',
        nameT: 'Creole English, Islander',
        iso3: 'icr',
        wiki: 'San_Andr%C3%A9s%E2%80%93Providencia_Creole',
        names: 'Bende,San Andrés Creole'
    });
});
//# sourceMappingURL=icr.js.map