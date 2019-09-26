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
        name: 'Spanish',
        nameT: 'español',
        iso1: 'es',
        iso2: 'spa',
        iso3: 'spa',
        wiki: 'Spanish_language',
        OT: 'ESP',
        names: 'Castilian,Castellano,Español,Castillan',
        hasDetect: true
    });
});
//# sourceMappingURL=es.js.map