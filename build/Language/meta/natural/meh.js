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
        name: 'Mixtec, Southwestern Tlaxiaco',
        nameT: 'Mixtec, Southwestern Tlaxiaco',
        iso3: 'meh',
        wiki: 'Nuyoo_Mixtec',
        names: 'Mixteco de Santiago Nuyoo,Mixteco del Suroeste de Tlaxiaco,Nuyoo Mixtec,Southeastern Ocotepec Mixtec'
    });
});
//# sourceMappingURL=meh.js.map