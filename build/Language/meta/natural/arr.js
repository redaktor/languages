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
        name: 'Karo (Brazil)',
        nameT: 'Karo (Brazil)',
        iso3: 'arr',
        wiki: 'Ramarama_language',
        names: 'Arára,Arára de Rondonia,Arára do Jiparaná,Arara-Karo,Itanga,Itogapuc,Itogapúk,Ntogapid,Ntogapig,Ramarama,Uruku,Urukú'
    });
});
//# sourceMappingURL=arr.js.map