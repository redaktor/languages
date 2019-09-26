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
        name: 'Mixtec, Chigmecatitlán',
        nameT: 'Mixtec, Chigmecatitlán',
        iso3: 'mii',
        wiki: 'Chigmecatitl%C3%A1n_Mixtec',
        names: 'Central Puebla Mixtec,Da’an davi,Mixteco de Santa María Chigmecatitlán'
    });
});
//# sourceMappingURL=mii.js.map