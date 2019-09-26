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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, Santa María Quiegolani',
        nameT: 'Zapotec, Santa María Quiegolani',
        iso3: 'zpi',
        wiki: 'Quiegolani_Zapotec',
        names: 'Quiegolani Zapotec,Western Yautepec Zapotec,Zapoteco de Santa María Quiegolani',
        hasDetect: true
    });
});
//# sourceMappingURL=zpi.js.map