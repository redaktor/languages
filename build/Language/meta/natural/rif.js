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
        name: 'Tarifit',
        nameT: 'Tarifit',
        iso3: 'rif',
        wiki: 'Riffian_language',
        names: 'Fifia,Northern Shilha,Rif,Riff,Rifi,Ruafa,Shilha,Tirifie,Arrif,Rif Berber,Rifeño,Rifia,Rifiya,Tamazight,Tamazight n Arrif,Tarifiyt,Tarifyt Berber'
    });
});
//# sourceMappingURL=rif.js.map