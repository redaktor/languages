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
        name: 'Omagua',
        nameT: 'Omagua',
        iso3: 'omg',
        wiki: 'Omagua_language',
        names: 'Agua,Anapia,Ariana,Cambeba,Cambela,Campeba,Canga-Peba,Compeva,Janbeba,Macanipa,Omagua-Yete,Pariana,Umaua,Yhuata,Cambeeba,Kambeba'
    });
});
//# sourceMappingURL=omg.js.map