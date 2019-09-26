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
        name: 'Mixtec, Sur de Puebla',
        nameT: 'Mixtec, Sur de Puebla',
        iso3: 'mit',
        wiki: 'Southern_Puebla_Mixtec',
        names: 'Acatlán Mixtec,Da’an davi,Mixteco de la Frontera Puebla-Oaxaca,Mixteco del Sur de Puebla,Xayacatlán de Bravo',
        hasDetect: true
    });
});
//# sourceMappingURL=mit.js.map