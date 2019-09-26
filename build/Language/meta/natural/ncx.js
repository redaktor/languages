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
        name: 'Nahuatl, Central Puebla',
        nameT: 'Nahuatl, Central Puebla',
        iso3: 'ncx',
        wiki: 'Central_Puebla_Nahuatl',
        names: 'Central Puebla Aztec,Náhuatl del Suroeste de Puebla,Southwestern Puebla Nahuatl'
    });
});
//# sourceMappingURL=ncx.js.map