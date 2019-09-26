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
        name: 'Creole Portuguese, Malaccan',
        nameT: 'Creole Portuguese, Malaccan',
        iso3: 'mcm',
        wiki: 'Kristang_language',
        names: 'Bahasa Geragau,Bahasa Serani,Kristang,Luso-Malay,Malacca Creole,Malaccan,Malaqueiro,Malaquenho,Malaquense,Malaquês,Malayo-Portuguese,Malaysian Creole Portuguese,Papia Cristao,Papia Kristang,Português de Malaca,Portuguese Patois,Serani'
    });
});
//# sourceMappingURL=mcm.js.map