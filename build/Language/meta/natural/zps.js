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
        name: 'Zapotec, Coatlán',
        nameT: 'Zapotec, Coatlán',
        iso3: 'zps',
        wiki: 'Santo_Domingo_Coatl%C3%A1n_Zapotec',
        names: 'San Miguel Zapotec,Western Miahuatlán Zapotec,Zapoteco de Santa María Coatlán'
    });
});
//# sourceMappingURL=zps.js.map