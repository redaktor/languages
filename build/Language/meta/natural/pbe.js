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
        name: 'Popoloca, Mezontla',
        nameT: 'Popoloca, Mezontla',
        iso3: 'pbe',
        wiki: 'Southern_Popoloca_language',
        names: 'Los Reyes Metzontla Popoloca,Ngiba,Ngigua,Ngiwa,Southern Popoloca'
    });
});
//# sourceMappingURL=pbe.js.map