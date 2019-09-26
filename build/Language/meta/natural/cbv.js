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
        name: 'Cacua',
        nameT: 'Cacua',
        iso3: 'cbv',
        wiki: 'Kakwa_language',
        names: 'Báda,Cakua,Kakua,Kákwa,Macu de Cubeo,Macu de Desano,Macu de Guanano,Macú-Paraná,Wacara',
        hasDetect: true
    });
});
//# sourceMappingURL=cbv.js.map