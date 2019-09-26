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
        name: 'Mixtec, Soyaltepec',
        nameT: 'Mixtec, Soyaltepec',
        iso3: 'vmq',
        wiki: 'Soyaltepec_Mixtec',
        names: 'Mixteco de San Bartolo Soyaltepec,Mixteco del Noreste Bajo,Tu’un savi'
    });
});
//# sourceMappingURL=vmq.js.map