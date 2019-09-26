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
        name: 'Bashkir',
        nameT: 'Башҡорт',
        iso1: 'ba',
        iso2: 'bak',
        iso3: 'bak',
        wiki: 'Bashkir_language',
        OT: 'BSH',
        names: 'Bashkir,Bashqort,Basquort',
        hasDetect: true
    });
});
//# sourceMappingURL=bak.js.map