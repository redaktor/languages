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
        name: 'Cusco Quechua',
        nameT: 'Cusco Quechua',
        iso3: 'quz',
        wiki: 'Cusco_Quechua',
        names: 'Cuzco,Cuzco Quechua,Qheswa,Qheswasimi,Quechua Cusco,Quechua de Cusco-Collao,Quechua Qosqo-Qollaw,Runasimi,Runasimi Qusqu Qullaw',
        hasDetect: true
    });
});
//# sourceMappingURL=quz.js.map