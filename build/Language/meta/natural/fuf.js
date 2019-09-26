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
        name: 'Pular',
        nameT: 'Pular',
        iso3: 'fuf',
        wiki: 'Pular_language',
        OT: 'FTA',
        names: 'Foula Fouta,Fouta Dyalon,Fulbe,Fulfulde Jalon,Fullo Fuuta,Futa Fula,Futa Jallon,Fuuta Jalon,Jalon,Fula,Futa'
    });
});
//# sourceMappingURL=fuf.js.map