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
        name: 'Zapotec, Yautepec',
        nameT: 'Zapotec, Yautepec',
        iso3: 'zpb',
        wiki: 'San_Bartolo_Yautepec_Zapotec',
        names: 'Northwestern Yautepec Zapotec,Zapoteco de San Bartolo Yautepec'
    });
});
//# sourceMappingURL=zpb.js.map