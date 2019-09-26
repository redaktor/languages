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
        name: 'Mixtec, Tututepec',
        nameT: 'Mixtec, Tututepec',
        iso3: 'mtu',
        wiki: 'Tututepec_Mixtec',
        names: 'Mixteco de San Pedro Tututepec,Mixteco de Villa de Tututepec,Tu’un savi'
    });
});
//# sourceMappingURL=mtu.js.map