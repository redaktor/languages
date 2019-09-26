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
        name: 'Zapotec, Rincón',
        nameT: 'Zapotec, Rincón',
        iso3: 'zar',
        wiki: 'Rinc%C3%B3n_Zapotec',
        names: 'Northern Villa Alta Zapotec,San Juan Yaee Zapotec,Zapoteco de Yagallo,Zapoteco del Rincón',
        hasDetect: true
    });
});
//# sourceMappingURL=zar.js.map