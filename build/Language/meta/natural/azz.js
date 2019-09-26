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
        name: 'Nahuatl, Highland Puebla',
        nameT: 'Nahuatl, Highland Puebla',
        iso3: 'azz',
        wiki: 'Sierra_Puebla_Nahuatl',
        names: 'Mejicano de Zacapoaxtla,Náhuat de la Sierra de Puebla,Sierra Aztec,Sierra de Zacapoaxtla Nahuatl,Sierra Puebla Náhuatl,Zacapoaxtla Náhuat',
        hasDetect: true
    });
});
//# sourceMappingURL=azz.js.map