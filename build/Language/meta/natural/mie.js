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
        name: 'Mixtec, Ocotepec',
        nameT: 'Mixtec, Ocotepec',
        iso3: 'mie',
        wiki: '%C3%91um%C3%AD_Mixtec',
        names: 'Mixteco de Santo Tomás Ocotepec,Mixteco de Sierra Sur Noroeste,Ocotepec Mixtec,Santo Tomás Ocotepec Mixtec,Tu’un savi'
    });
});
//# sourceMappingURL=mie.js.map