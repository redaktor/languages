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
        name: 'Comorian, Ndzwani',
        nameT: 'Comorian, Ndzwani',
        iso3: 'wni',
        wiki: 'Comorian_language',
        OT: 'CMR',
        names: 'Hinzua,Njuani,Shindzwani'
    });
});
//# sourceMappingURL=wni.js.map