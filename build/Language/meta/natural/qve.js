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
        name: 'Quechua, Eastern Apurímac',
        nameT: 'Quechua, Eastern Apurímac',
        iso3: 'qve',
        wiki: 'Cusco_Quechua',
        names: 'Apurímac Quechua,Quechua del Este de Apurímac',
        hasDetect: true
    });
});
//# sourceMappingURL=qve.js.map