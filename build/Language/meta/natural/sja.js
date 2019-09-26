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
        name: 'Epera pedee',
        nameT: 'Epera pedee',
        iso3: 'sja',
        wiki: 'Eperara_language',
        names: 'Cholo,Embena,Embera,Emberá-Saija,Epéna Pedée,Epená Saija,Saija,Southern Empera,Epená,Southern Embera,Epena Saija,Southern Epena',
        hasDetect: true
    });
});
//# sourceMappingURL=sja.js.map