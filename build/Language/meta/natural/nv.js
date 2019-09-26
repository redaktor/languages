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
        name: 'Navajo',
        nameT: 'Diné bizaad',
        iso1: 'nv',
        iso2: 'nav',
        iso3: 'nav',
        wiki: 'Navajo_language',
        names: 'Diné,Navaho',
        hasDetect: true
    });
});
//# sourceMappingURL=nv.js.map