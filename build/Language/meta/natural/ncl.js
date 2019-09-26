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
        name: 'Nahuatl, Michoacán',
        nameT: 'Nahuatl, Michoacán',
        iso3: 'ncl',
        wiki: 'Michoac%C3%A1n_Nahuatl',
        names: 'Gente natural,Mexicano,Michoacan Aztec,Nahual de Michoacán'
    });
});
//# sourceMappingURL=ncl.js.map