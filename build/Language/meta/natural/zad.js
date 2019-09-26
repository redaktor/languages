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
        name: 'Zapotec, Yaganiza',
        nameT: 'Zapotec, Yaganiza',
        iso3: 'zad',
        wiki: 'Cajonos_Zapotec',
        names: 'Southern Villa Alta Zapotec,Yaganiza Zapotec,Zapoteco de San Pedro Cajonos',
        hasDetect: true
    });
});
//# sourceMappingURL=zad.js.map