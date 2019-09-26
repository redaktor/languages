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
        name: 'Popoloca, San Juan Atzingo',
        nameT: 'Popoloca, San Juan Atzingo',
        iso3: 'poe',
        wiki: 'Southern_Popoloca_language',
        names: 'Atzingo Popoloca,Eastern Popoloca,Ngiba,Ngigua,Ngiwa,Popoloca de San Juan Atzingo,Popoloca del Oriente,Southern Popoloca'
    });
});
//# sourceMappingURL=poe.js.map