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
        name: 'Zoque, Tabasco',
        nameT: 'Zoque, Tabasco',
        iso3: 'zoq',
        wiki: 'Ayapa_Zoque',
        names: 'Ayapanec,Zoque de Ayapanec,Zoque de Tabasco'
    });
});
//# sourceMappingURL=zoq.js.map