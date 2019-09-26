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
        name: 'Balanta-Kentohe',
        nameT: 'Balanta-Kentohe',
        iso3: 'ble',
        wiki: 'Balanta_language',
        OT: 'BLN',
        names: 'Alante,Balanda,Balant,Balanta,Balante,Ballante,Belante,Brassa,Bulanda,Frase'
    });
});
//# sourceMappingURL=ble.js.map