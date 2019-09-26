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
        name: 'Pomo, Central',
        nameT: 'Pomo, Central',
        iso3: 'poo',
        wiki: 'Central_Pomo_language',
        names: 'Ballo-Kai-Pomo,Cabanapo,Habenapo,H’hana,Kábinapek,Khabenapo,Khana,Kulanapan,Kulanapo,Venaambakaia,Venambakaiia,Yokaia'
    });
});
//# sourceMappingURL=poo.js.map