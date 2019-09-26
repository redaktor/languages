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
        name: 'Nahuatl, Tenango',
        nameT: 'Nahuatl, Tenango',
        iso3: 'nhi',
        wiki: 'Sierra_Puebla_Nahuatl',
        names: 'Ahuacatlán and Tepetzintla,Ahuacatlán y Tepetzintla,Aztec of Zacatlán,Náhuatl de Zacatlán,Tenango Nahuatl',
        hasDetect: true
    });
});
//# sourceMappingURL=nhi.js.map