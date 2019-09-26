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
        name: 'Romani, Sinti',
        nameT: 'Romani, Sinti',
        iso3: 'rmo',
        wiki: 'Sinte_Romani',
        names: 'Romanes,Sinte,Sinti,Tsigane,Sinto-Manush,Ziguener,Manouche,Manuche,Sasítka Romá',
        hasDetect: true
    });
});
//# sourceMappingURL=rmo.js.map