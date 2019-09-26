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
        name: 'Mixtec, Mixtepec',
        nameT: 'Mixtec, Mixtepec',
        iso3: 'mix',
        wiki: 'Mixtepec_Mixtec',
        names: 'Eastern Juxtlahuaca Mixtec,Mixteco de Oeste Central,Mixteco de San Juan Mixtepec'
    });
});
//# sourceMappingURL=mix.js.map