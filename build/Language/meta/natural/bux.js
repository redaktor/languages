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
        name: 'Boghom',
        nameT: 'Boghom',
        iso3: 'bux',
        wiki: 'Boghom_language',
        names: 'Bogghom,Boghorom,Bohom,Bokiyim,Borrom,Burma,Burom,Burrum,Burum'
    });
});
//# sourceMappingURL=bux.js.map