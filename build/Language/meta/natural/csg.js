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
        name: 'Chilean Sign Language',
        nameT: 'Chilean Sign Language',
        iso3: 'csg',
        wiki: 'Chilean_Sign_Language',
        names: 'Lengua de Señas Chilena,Lenguaje Chileno de Signos,Lenguaje de Señas,LENSE,LSCh'
    });
});
//# sourceMappingURL=csg.js.map