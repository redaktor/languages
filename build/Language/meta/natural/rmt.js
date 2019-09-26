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
        name: 'Domari',
        nameT: 'Domari',
        iso3: 'rmt',
        wiki: 'Domari_language',
        names: 'Dom,Ghorbati,Nawari,Near-Eastern Gypsy,Domra Magu Hiya,Middle Eastern Romani,Gypsy,Luti,Mehtar,Tsigene,Barake,Kurbat,Nawar'
    });
});
//# sourceMappingURL=rmt.js.map