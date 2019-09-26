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
        name: 'Mixtec, Southeastern Nochixtlán',
        nameT: 'Mixtec, Southeastern Nochixtlán',
        iso3: 'mxy',
        wiki: 'Nuxa%C3%A1_Mixtec',
        names: 'Mixteco de Santo Domingo Nuxaá,Mixteco del Sureste de Nochixtlán'
    });
});
//# sourceMappingURL=mxy.js.map