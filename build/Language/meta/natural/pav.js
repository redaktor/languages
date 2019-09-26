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
        name: 'Pakaásnovos',
        nameT: 'Pakaásnovos',
        iso3: 'pav',
        wiki: 'Wari%E2%80%99_language',
        names: 'Jaru,Oro Wari,Pacaas-Novos,Pacahanovo,Pakaanova,Pakaanovas,Uomo,Wari'
    });
});
//# sourceMappingURL=pav.js.map