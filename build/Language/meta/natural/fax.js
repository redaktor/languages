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
        name: 'Fala',
        nameT: 'Fala',
        iso3: 'fax',
        wiki: 'Fala_language',
        names: 'A Fala de Xálima,A Fala do Xãlima,Galaico-Extremaduran ("Chapurreáu")'
    });
});
//# sourceMappingURL=fax.js.map