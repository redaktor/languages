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
        name: 'Paku Karen',
        nameT: 'Paku Karen',
        iso3: 'kpp',
        wiki: 'S%27gaw_Karen_language',
        names: 'Mogpha,Mogwa,Monebwa,Monnepwa,Mopaga,Mopha,Mopwa,Pagu,Paku,Thalwepwe'
    });
});
//# sourceMappingURL=kpp.js.map