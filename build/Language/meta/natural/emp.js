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
        name: 'Embera, Northern',
        nameT: 'Embera, Northern',
        iso3: 'emp',
        wiki: 'Northern_Embera_language',
        names: 'Atrato,Cholo,Darién,Eberã,Eberã Bed’ea,Embena,Embera,Emperã,Epena,Eperã Pedea,Panama Embera,Sambú,Chocó,Darien,Darien Emberá,Ebera Bedea,Empera',
        hasDetect: true
    });
});
//# sourceMappingURL=emp.js.map