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
        name: 'Mazatec, Mazatlán',
        nameT: 'Mazatec, Mazatlán',
        iso3: 'vmz',
        wiki: 'Mazatl%C3%A1n_Mazatec',
        names: 'Ienra naxinandana nnandia,Mazateco de Mazatlán Villa de Flores,Mazateco del Suroeste'
    });
});
//# sourceMappingURL=vmz.js.map