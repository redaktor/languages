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
        name: 'Mexican Sign Language',
        nameT: 'Mexican Sign Language',
        iso3: 'mfs',
        wiki: 'Mexican_Sign_Language',
        names: 'Lengua de Señas Mexicana,Lenguaje de las Manos,Lenguaje de Señas de México,Lenguaje de Señas Mexicano,Lenguaje de Signos Mexicano,Lenguaje Manual Mexicana,LSM'
    });
});
//# sourceMappingURL=mfs.js.map