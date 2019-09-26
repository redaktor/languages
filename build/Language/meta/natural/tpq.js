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
        name: 'Tukpa',
        nameT: 'Tukpa',
        iso3: 'tpq',
        wiki: 'Lahuli%E2%80%93Spiti_language',
        names: 'Nesang,Nyamkad,Nyam-Kad,Nyam-kat'
    });
});
//# sourceMappingURL=tpq.js.map