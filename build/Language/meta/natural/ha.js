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
        name: 'Hausa (Niger)',
        nameT: 'هَوُسَ',
        iso1: 'ha',
        iso2: 'hau',
        iso3: 'hau',
        wiki: 'Hausa_language',
        OT: 'HAU',
        names: 'Haoussa,Hawsa,Hausawa,Haussa,Abakwariga,Habe,Kado,Mgbakpa',
        hasDetect: true
    });
});
//# sourceMappingURL=ha.js.map