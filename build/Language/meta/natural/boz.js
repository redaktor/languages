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
        name: 'Bozo, Tiéyaxo',
        nameT: 'Bozo, Tiéyaxo',
        iso3: 'boz',
        wiki: 'Bozo_language',
        names: 'Boso,Tégué,Tie,Tiemaxo,Tiéyakho,Tieyaxo,Tigemaxo,Tiguémakho,Tyeyaxo'
    });
});
//# sourceMappingURL=boz.js.map