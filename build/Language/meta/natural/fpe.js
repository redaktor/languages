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
        name: 'Creole English, Fernando Po',
        nameT: 'Creole English, Fernando Po',
        iso3: 'fpe',
        wiki: 'Pichinglis',
        names: 'Criollo,Fernandino,Fernando Po Creole English,Fernando Po Krio,Pichi,Pichinglis,Pidgin de Guinea Ecuatorial,Pidginglis'
    });
});
//# sourceMappingURL=fpe.js.map