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
        name: 'Romani, Kalo Finnish',
        nameT: 'Romanó Kaló',
        iso3: 'rmf',
        wiki: 'Finnish_Kalo_language',
        names: 'Fíntika Rómma,Gypsy,Kaalo,Kalé'
    });
});
//# sourceMappingURL=rmf.js.map