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
        name: 'Mazatec, Jalapa De Díaz',
        nameT: 'Mazatec, Jalapa De Díaz',
        iso3: 'maj',
        wiki: 'Jalapa_Mazatec',
        names: 'Lowland Mazatec,Mazateco de San Felipe Jalapa de Díaz,Mazateco del Este Bajo,Ntaxjo'
    });
});
//# sourceMappingURL=maj.js.map